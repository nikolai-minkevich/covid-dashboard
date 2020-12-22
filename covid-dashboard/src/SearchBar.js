class SearchBar {
    constructor() {

    }
    generateLayout() {
        let searchBar = document.createElement("input")
        searchBar.className = 'search-bar'
        searchBar.placeholder = 'Type for search'
        searchBar.addEventListener('input', (e) => {
            console.log('input', e);
            let searchPhrase = document.querySelector('.search-bar').value
            console.log("searchPhrase", searchPhrase);
            Array.from(document.querySelectorAll('.countryStatistic_demo_item')).map((item) => {
                item.classList.remove('hidden-by-search');
            });
            Array.from(document.querySelectorAll('.countryStatistic_demo_item')).map((item) => {
                if (!item.lastChild.textContent.toLowerCase().includes(searchPhrase.toLowerCase())) {
                    item.classList.add('hidden-by-search');
                }
            })
        })
        document.querySelector('.countryStatistic_container__prime > .statistic_container > .statistic_header').after(searchBar)
    }

}
export default SearchBar;