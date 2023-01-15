import React from "react";
import { HiOutlineFilter, HiBadgeCheck} from 'react-icons/hi';
import '../Wish-pages.styled'
import { Checkbox } from '@mantine/core';
import { ArrowSectionOne, ArrowSectionOneText, ArrowSectionThree, ArrowSectionThreeText, ArrowSectionTwo, ArrowSectionTwoText, BodyFilter, Gifted, Show, ShowCheckBox, Sort } from "./Filter.styled";
import { BiUpArrowCircle } from "react-icons/bi";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";

const filterstyle = {
    fontSize: '24px',
    color: '#3800B0',
    float: 'right',
}

class FilterColumns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      filterItems: this.props.filterItems,
      selectedItems: this.props.filterItems
        .filter(item => item.selected === true)
        .map(item => item.name)
    };
  }

  showFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  changeHandler = index => {
    console.log("inside columnfilter method");
    const filterItems = [];

    filterItems.push(...this.state.filterItems);
    filterItems[index].selected = !filterItems[index].selected;
    console.log(filterItems);
    const selectedItems = filterItems
      .filter(item => item.selected === true)
      .map(item => item.name);
    console.log(selectedItems);
    this.setState({
      selectedItems: selectedItems
    });
  };

  render() {
    return (
      <div style={filterstyle} className="columnFilter">
          <HiOutlineFilter  onClick={this.showFilter}/>
        {this.state.showFilter && (
          <BodyFilter className="filterContent">
            <Sort>Sort</Sort>
            <ArrowSectionOne>
              <FiArrowUpCircle />
              <ArrowSectionOneText href="#">By alphabet</ArrowSectionOneText>
            </ArrowSectionOne>

            <ArrowSectionTwo>
              <FiArrowDownCircle />
              <ArrowSectionTwoText   href="#">By chronology</ArrowSectionTwoText>
            </ArrowSectionTwo>

            <ArrowSectionThree>
              <FiArrowDownCircle />
              <ArrowSectionThreeText   href="#">By likes</ArrowSectionThreeText>
            </ArrowSectionThree>

            <Show>Show</Show>

            <ShowCheckBox>
              <Checkbox checked className="showcheckbox"
              label="I agree to sell my privacy"
              />
            </ShowCheckBox>
            <ShowCheckBox>
              <Checkbox checked className="showcheckbox"
              label="Gifts from my contacts"
              />
            </ShowCheckBox>
            <ShowCheckBox>
              <Checkbox checked className="showcheckbox"
              label="Gifts from strangers"
              />
            </ShowCheckBox>

            <Gifted>Gifted by</Gifted>
            <ShowCheckBox>
              <Checkbox checked className="showcheckbox"
              label="By me"
              />
            </ShowCheckBox>
            <ShowCheckBox>
              <Checkbox checked className="showcheckbox"
              label="By others"
              />
            </ShowCheckBox>


          </BodyFilter>
        )}
      </div>
    );
  }
}

export default FilterColumns;
