import React from "react";
import { categoryOptions, priceOptions } from './../../commons/utils/index';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Filter(props){
  const { isOpenNow, priceFilter, categoryFilter}  = props.restaurantsProps;
  const renderCategoriesOptions = () => {
    return categoryOptions.map(category => {
      return (
        <DropdownItem header>
          <div className="option" onClick={() => props.handleCategoryChange(category.value)}>
            <input className="radio-input" checked={categoryFilter === category.value ? true : false} type="radio" id={category.value} name="categories" value={category.value}/>
            <div className="label-text" htmlFor={category.value}>{category.label}</div>
          </div>
        </DropdownItem>
      )
    })
  }

  const renderPriceOptions = () => {
    return priceOptions.map(price => {
      return (
        <DropdownItem header>
          <div className="option" onClick={() => props.handlePriceChange(price.value)}>
            <input className="radio-input" checked={priceFilter === price.value ? true : false} type="radio" id={price.value} name="price" value={price.value}/>
            <div className="label-text" htmlFor={price.value}>{price.label}</div>
          </div>
        </DropdownItem>
      )
    })
  }

  return(
    <React.Fragment>
      <div className="filter-container">
        <div className="p-r-20">Filter By:</div>
        <div className="open-now p-r-20" onClick={() => props.setIsOpen(!isOpenNow)}>
          <input className="radio-input" checked={isOpenNow} type="radio" id='isOpenNow' name="categories" value={isOpenNow}/>
          <div className="text" htmlFor='isOpenNow'>{`Open Now`}</div>
        </div>

        <UncontrolledDropdown key={0}>
          <DropdownToggle caret>
            Price:
          </DropdownToggle>
          <DropdownMenu>
            {renderPriceOptions()}
          </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown key={1}>
          <DropdownToggle caret>
            Categories:
          </DropdownToggle>
          <DropdownMenu>
            {renderCategoriesOptions()}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <div className="clear-button">
        <button onClick={() => props.clearFilter()}>CLEAR ALL</button>
      </div>
    </React.Fragment>
  )
}

export default Filter;
