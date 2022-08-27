import './PaginationBar.css';

type ArrowLeftProps = {
    lastPageList(addToPage: number): void;
    addToPage: number,
    refreshCurrentPage(number: number): void,
    currentPage: number
}

const ArrowLeft = ({lastPageList, addToPage, refreshCurrentPage, currentPage}: ArrowLeftProps) => {
    if (addToPage > 0 || currentPage > 5) {
        return (
            <button onClick={() => {
                let newAdd = addToPage - 5;
                lastPageList(newAdd);
                refreshCurrentPage(addToPage)
            }}>{'<<'}</button>
        );
    }
    return (
        <button disabled>{'<<'}</button>
    );
}

export default ArrowLeft;