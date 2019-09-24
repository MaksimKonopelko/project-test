import React from 'react'
import FilterColorStyle from './styles';

const FilterColor = () => (
  <FilterColorStyle>
    <h2>Colors</h2>
    <label for="red">
      <input type="checkbox" id="red" />Red
    </label>
    <label for="yellow">
      <input type="checkbox" id="yellow" />Yellow
    </label>
    <label for="blue">
      <input type="checkbox" id="blue" />Blue
    </label>
    <label for="white">
      <input type="checkbox" id="white" />White
    </label>
    <label for="grey">
      <input type="checkbox" id="grey" />Grey
    </label>
    <label for="orange">
      <input type="checkbox" id="orange" />Orange
    </label>
    <label for="green">
      <input type="checkbox" id="green" />Green
    </label>
    <label for="purple">
      <input type="checkbox" id="purple" />Purple
    </label>
    <label for="brown">
      <input type="checkbox" id="brown" />Brown
    </label>
    <label for="pink">
      <input type="checkbox" id="pink" />Pink
    </label>
  </FilterColorStyle>
)

export default FilterColor