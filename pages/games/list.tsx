import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import style from "./list.module.scss";

// @ts-ignore
export default function List({games}) {
    return (
        <div className={style.main}>
            <h1>Our projects</h1>
            <ul className={style.main__list}>
                {
                    games.map((game: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; desc: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
                       <li key={game.id} className={style.list__item}>
                           <Link href={`/games/game/${game.id}`}>{game.name}</Link>
                           <p>{game.desc}</p>
                       </li>
                   ))
                }
            </ul>
        </div>
    );
};

export async function getStaticProps() {
    // const games = await (await fetch('http://vds2350121.my-ihor.ru/next'))?.json()
    const games = [
        {
        id: '1',
        name: 'name',
        desc: 'test',
        }
    ]

    return {
        props: {
            games
        }
    }
}