import './Header.css';

type SearchProps = {
    getInputValue(value: string): void
}

const Search = ({getInputValue}: SearchProps) => {
    
    const getValue = (e: any) => {
        getInputValue(e.target.value);
    }

    return (
        <div className="search">
            <input type="text" placeholder='Search...' onChange={getValue}/>
            <button>
                <div className='search_icon'></div>
            </button>
        </div>
    )
}

export default Search;