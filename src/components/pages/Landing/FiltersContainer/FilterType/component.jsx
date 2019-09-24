import React from 'react'
import FilterTypeStyle from './styles';

const FilterType = () => (
  <FilterTypeStyle>
    <h2>Filter by type</h2>
    <label for="shirts">
      <input type="checkbox" id="shirts" />Shirts
    </label>
    <label for="pants">
      <input type="checkbox" id="pants" />Pants
    </label>
    <label for="jackets">
      <input type="checkbox" id="jackets" />Jackets
    </label>
    <label for="polos">
      <input type="checkbox" id="polos" />Polos
    </label>
    <label for="dresses">
      <input type="checkbox" id="dresses" />Dresses
    </label>
    <label for="cardigans">
      <input type="checkbox" id="cardigans" />Cardigans
    </label>
    <label for="trench_coats">
      <input type="checkbox" id="trench_coats" />Trench Coats
    </label>
  </FilterTypeStyle>
)

export default FilterType