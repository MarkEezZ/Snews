import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

type ArrowLeftProps = {
    lastPageList(addToPage: number): void;
    addToPage: number,
}

const ArrowLeft = ({lastPageList, addToPage}: ArrowLeftProps) => {

    const dispatch = useDispatch();
    const currentPage_ = useTypedSelector(state => state.page);

    if (addToPage > 0 || currentPage_ > 5) {
        return (
            <button onClick={() => {
                let newAdd = addToPage - 5;
                lastPageList(newAdd);
                dispatch({type: pageActionsTypes.SELECT_PAGE, payload: addToPage});
            }}>{'<<'}</button>
        );
    }
    return (
        <button disabled>{'<<'}</button>
    );
}

export default ArrowLeft;