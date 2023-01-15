import { Mainlonlysearch, Searchbar, Searchdiv, Searchstartdiv, Title } from "./Search.Styled";
import { HiOutlineFilter } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"
import leaf from "../../style/icons/leaf.png"

function Onlysearch() {
    return (
        <Mainlonlysearch>
            <Title>Search</Title>
            <Searchdiv>
                <Searchbar
                    type="text"
                    placeholder="Bruno"
                    onChange={(e) => setSearch(e.target.value) || setSearchs(e.target.value)}
                />
                <FiSearch className="lupa" />
                <HiOutlineFilter className="filter" />
            </Searchdiv>
            <Searchstartdiv>
                <img src={leaf} alt="leaf" className="imgleaf"/>
                <p className="startsearch">Start Searching</p>
                <p className="result">Result will be appear here</p>
            </Searchstartdiv>
        </Mainlonlysearch>
    )
} 
export default Onlysearch;