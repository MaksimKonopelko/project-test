import React from 'react'
import FilterSizeStyle from './styles';

const FilterSize = () => (
  <FilterSizeStyle>
    <h2>Size</h2>
    <label htmlFor="xs">
      <input type="checkbox" id="xs" />XS
    </label>
    <label htmlFor="s">
      <input type="checkbox" id="s" />S
    </label>
    <label htmlFor="m">
      <input type="checkbox" id="m" />M
    </label>
    <label htmlFor="l">
      <input type="checkbox" id="l" />L
    </label>
    <label htmlFor="xl">
      <input type="checkbox" id="xl" />XL
    </label>
  </FilterSizeStyle>
)

export default FilterSize