import './News.css';

type INews = {
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

type NewsProps = {
    peaceOfNews: INews
}

const News = ({ peaceOfNews }: NewsProps) => {
    return(
        <div className='peace_of_news'>
            <img src={peaceOfNews.imageUrl} alt={`peace_of_news_${peaceOfNews.id}`}/>
            <h2>{peaceOfNews.title}</h2>
            <p>{peaceOfNews.summary}</p>
            <p>{peaceOfNews.publishedAt}</p>
        </div>
    );
}

export default News;