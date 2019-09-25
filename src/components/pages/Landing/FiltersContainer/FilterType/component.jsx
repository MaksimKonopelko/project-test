import React from 'react'
import FilterTypeStyle from './styles';

const FilterType = () => (
  <FilterTypeStyle>
    <h2>Filter by type</h2>
    <label htmlFor="shirts">
      <input type="checkbox" id="shirts" />Shirts
    </label>
    <label htmlFor="pants">
      <input type="checkbox" id="pants" />Pants
    </label>
    <label htmlFor="jackets">
      <input type="checkbox" id="jackets" />Jackets
    </label>
    <label htmlFor="polos">
      <input type="checkbox" id="polos" />Polos
    </label>
    <label htmlFor="dresses">
      <input type="checkbox" id="dresses" />Dresses
    </label>
    <label htmlFor="cardigans">
      <input type="checkbox" id="cardigans" />Cardigans
    </label>
    <label htmlFor="trench_coats">
      <input type="checkbox" id="trench_coats" />Trench Coats
    </label>
  </FilterTypeStyle>
)

export default FilterType