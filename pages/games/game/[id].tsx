

interface Game {
    id: string
    desc: string
}


// @ts-ignore
export default function Game ({game}) : JSX.Element {

    return (
        <>
            <h2>{ game.name }</h2>
            <p>{ game.desc }</p>
        </>
    )
}
interface getSTatickProps {
    paths: {
        params: {
            id: string }
    },
    fallback: boolean
}

export async function getStaticPaths(): Promise<getSTatickProps> {
    const games = await (await fetch('http://vds2350121.my-ihor.ru/next/'))?.json()

    const paths = games.map((game: { id: any }) => ({
        params: { id: String(game.id) }
    }))

    return {
        paths,
        fallback: false
    }
}

interface getProps {
    props: {
        game: Game
    }
}

// @ts-ignore
export async function getStaticProps({ params }) : Promise<getProps> {
    const game = await (await fetch(`http://vds2350121.my-ihor.ru/next/${params.id}`)).json()

    return {
        props: {
            game
        }
    }
}

