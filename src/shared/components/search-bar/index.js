import React from 'react'
import { CustomSearchBar } from './SearchBar.Styled'
import { ReactComponent as SearchIcon } from '../../../style/icons/search-icon.svg'

export const SearchInput = ({ iconHave = true, size = 'xl' }) => {
  return (
    <CustomSearchBar
      type='search'
      rightSection={iconHave ? <SearchIcon /> : <></>}
      rightSectionWidth={55}
      size={size}
      placeholder="Search"
    />
  )
}
