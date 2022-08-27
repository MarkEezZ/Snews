import './PaginationBar.css';

type PreviousPageProps = {
    currentPage: number,
    previousPage(page: number): void;
    refreshPageList(number: number): void,
    divFromPage: number
}

const PreviousPage = ({currentPage, previousPage, refreshPageList, divFromPage}: PreviousPageProps) => {
    if (currentPage > 1) {
        return (
            <button onClick={() => {
                previousPage(currentPage - 1);
                if ((currentPage - 1) % 5 == 0) {
                    refreshPageList(divFromPage - 5);
                }
            }}>{'<'}</button>
        )
    }
    return (
        <button disabled>{'<'}</button>
    );
}

export default PreviousPage;