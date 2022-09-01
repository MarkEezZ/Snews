import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

type NextPageProps = {
    refreshPageList(number: number): void,
    addToPage: number
}

const NextPage = ({refreshPageList, addToPage}: NextPageProps) => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);

    const setNextPage = () => {
        dispatch({type: pageActionsTypes.NEXT_PAGE, payload: 0});
        if (currentPage_ % 5 == 0) {
            refreshPageList(addToPage + 5);
        }
    }

    return (
        <button onClick={setNextPage}>{'>'}</button>
    );
}

export default NextPage;