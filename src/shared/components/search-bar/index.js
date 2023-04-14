import React from "react";
import { CustomSearchBar } from "./SearchBar.Styled";
import { ReactComponent as SearchIcon } from "../../../style/icons/search-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchInput = ({ iconHave = true, size = "xl", myUserId }) => {
  const [getSearchValue, setSearchValue] = useState();
  const navigate = useNavigate();
  function getSearchResultPage() {
    navigate("/search", { state: { getSearchValue, myUserId } });
  }
  const handleKeyDown = (e) => {
    e.keyCode === 13 && getSearchResultPage();
  };

  return (
    <CustomSearchBar
      type="search"
      rightSection={iconHave && <SearchIcon onClick={getSearchResultPage} />}
      autoFocus
      rightSectionWidth={55}
      size={size}
      placeholder="Search"
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};
