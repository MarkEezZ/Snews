import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

type PreviousPageProps = {
    refreshPageList(number: number): void,
    divFromPage: number
}

const PreviousPage = ({refreshPageList, divFromPage}: PreviousPageProps) => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);
    
    const setPreviousPage = () => {
        dispatch({type: pageActionsTypes.PREVIOUS_PAGE, payload: 0});
        if ((currentPage_ - 1) % 5 == 0) {
            refreshPageList(divFromPage - 5);
        }
    }

    if (currentPage_ > 1) {
        return (
            <button onClick={setPreviousPage}>{'<'}</button>
        );    
    }
    return (
        <button disabled>{'<'}</button>
    );
}

export default PreviousPage;