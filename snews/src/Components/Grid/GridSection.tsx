import './GridSection.css';
import News from '../News/News';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

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

type GridSectionProps = {
    url: string;
}

const GridSection = ({ url }: GridSectionProps) => {
    const [data, setData] = useState<INews[] | null>(null);

    useEffect(() => {
        fetch(url) 
        .then(resp => resp.json()) 
        .then(data => setData(data)) 
    }, []);

    return (
        <section className='grid_section'>
            <Grid container spacing={2}>
                {data && data.map((peace: INews) => 
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <News peaceOfNews={peace}></News> 
                </Grid>
                )}
            </Grid>
        </section>
    )
}

export default GridSection;