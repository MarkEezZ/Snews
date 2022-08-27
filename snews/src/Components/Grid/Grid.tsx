import './Grid.css';
import News from '../News/News';
import { useState, useEffect } from 'react';

interface INews {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: [
        {
        id: string,
        provider: string
        }
    ],
    events: [
        {
        id: string,
        provider: string
        }
    ]
}

type GridProps = {
    url: string;
}

const Grid = ({ url }: GridProps) => {
    const [data, setData] = useState<INews[] | null>(null);

    useEffect(() => {
        fetch(url) 
        .then(resp => resp.json()) 
        .then(data => setData(data)) 
    }, []);

    return (
        <section>
            {data && data.map((peace: INews) => <News peaceOfNews={peace}></News> )}
        </section>
    )
}

export default Grid;