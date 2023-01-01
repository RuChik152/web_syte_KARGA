import React, {useEffect} from 'react';
import videojs, {VideoJsPlayerOptions} from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPLayerProps {
    onReady: (arg: any) => void,
    options: VideoJsPlayerOptions;
}
//TODO Удалить компонент в будущем, если не будет использоваться
export const VideoPlayer = (props: VideoPLayerProps) => {
    const videoRef: any = React.useRef(null);
    const playerRef: any = React.useRef(null);
    const {options, onReady} = props;

    useEffect(() => {

        if (!playerRef.current) {

            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });


        } else {
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, [options, videoRef]);


    useEffect(() => {
        const player = playerRef.current;
        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    );
}

export default VideoPlayer;