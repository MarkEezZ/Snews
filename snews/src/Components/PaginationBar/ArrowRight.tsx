import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { pageActionsTypes } from '../../types/pageTypes';
import './PaginationBar.css';

type ArrowRightProps = {
    nextPageList(addToPage: number): void,
    addToPage: number
}

const ArrowRight = ({nextPageList, addToPage}: ArrowRightProps) => {
    
    const dispatch = useDispatch();

    return (
        <button onClick={() => {
            let newAdd = addToPage + 5;
            nextPageList(newAdd);
            dispatch({type: pageActionsTypes.SELECT_PAGE, payload: newAdd + 1});
        }}>{'>>'}</button>
    );
}

export default ArrowRight;