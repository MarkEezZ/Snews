import './PaginationBar.css';

type NextPageProps = {
    currentPage: number,
    nextPage(page: number): void,
    refreshPageList(number: number): void,
    addToPage: number
}

const NextPage = ({currentPage, nextPage, refreshPageList, addToPage}: NextPageProps) => {
    return (
        <button onClick={() => {
            nextPage(currentPage + 1);
            if (currentPage % 5 == 0) {
                refreshPageList(addToPage + 5);
            }
        }}>{'>'}</button>
    )
}

export default NextPage;