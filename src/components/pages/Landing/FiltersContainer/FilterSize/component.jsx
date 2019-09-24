import React from 'react'
import FilterSizeStyle from './styles';

const FilterSize = () => (
  <FilterSizeStyle>
    <h2>Size</h2>
    <label for="xs">
      <input type="checkbox" id="xs" />XS
    </label>
    <label for="s">
      <input type="checkbox" id="s" />S
    </label>
    <label for="m">
      <input type="checkbox" id="m" />M
    </label>
    <label for="l">
      <input type="checkbox" id="l" />L
    </label>
    <label for="xl">
      <input type="checkbox" id="xl" />XL
    </label>
  </FilterSizeStyle>
)

export default FilterSize