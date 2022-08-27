import './PaginationBar.css';

type ArrowRightProps = {
    nextPageList(addToPage: number): void,
    addToPage: number
    refreshCurrentPage(number: number): void,
}

const ArrowRight = ({nextPageList, addToPage, refreshCurrentPage}: ArrowRightProps) => {
    return (
        <button onClick={() => {
            let newAdd = addToPage + 5;
            nextPageList(newAdd);
            refreshCurrentPage(newAdd + 1)
        }}>{'>>'}</button>
    );
}

export default ArrowRight;