import React from 'react'
import { CustomSearchBar } from './SearchBar.Styled'
import { ReactComponent as SearchIcon } from '../../../style/icons/search-icon.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchInput = ({ iconHave = true, size = 'xl' }) => {

  const [getSearchValue, setSearchValue] = useState()
  const navigate = useNavigate()

  function getSearchResultPage() {
    navigate("/search", {state: getSearchValue})
  }

  return (
    <CustomSearchBar
      type='search'
      rightSection={iconHave ? <SearchIcon onClick={getSearchResultPage} /> : <></>}
      rightSectionWidth={55}
      size={size}
      placeholder="Search"
      onChange={(e)=>setSearchValue(e.target.value)}
    />
  )
}
