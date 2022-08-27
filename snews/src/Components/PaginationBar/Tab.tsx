import './PaginationBar.css';

type TabProps = {
    pageNumber: number,
    changeCurrentPage(number: number): void,
    currentPage: number
}

const Tab = ({pageNumber, changeCurrentPage, currentPage}: TabProps) => {
    if (pageNumber == currentPage) {
        return (
            <button style={{backgroundColor: 'rgb(0, 216, 151)', color: 'white'}} onClick={() => {
                changeCurrentPage(pageNumber);
            }}>{pageNumber}</button>
        )
    }
    return (
        <button onClick={() => {
            changeCurrentPage(pageNumber);
        }}>{pageNumber}</button>
    )
}

export default Tab;