
 const Searchbar = (props)=>{
    return(
        <header className="Searchbar">
            <form name="formImage" className="SearchForm" onSubmit={props.getSearch}>
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                name="query"
                className="SearchForm-input"
                type="text"                  
                placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

export default Searchbar;