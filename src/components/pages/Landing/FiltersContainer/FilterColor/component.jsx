import React from 'react'
import FilterColorStyle from './styles';

const FilterColor = () => (
  <FilterColorStyle>
    <h2>Colors</h2>
    <label htmlFor="red">
      <input type="checkbox" id="red" />Red
    </label>
    <label htmlFor="yellow">
      <input type="checkbox" id="yellow" />Yellow
    </label>
    <label htmlFor="blue">
      <input type="checkbox" id="blue" />Blue
    </label>
    <label htmlFor="white">
      <input type="checkbox" id="white" />White
    </label>
    <label htmlFor="grey">
      <input type="checkbox" id="grey" />Grey
    </label>
    <label htmlFor="orange">
      <input type="checkbox" id="orange" />Orange
    </label>
    <label htmlFor="green">
      <input type="checkbox" id="green" />Green
    </label>
    <label htmlFor="purple">
      <input type="checkbox" id="purple" />Purple
    </label>
    <label htmlFor="brown">
      <input type="checkbox" id="brown" />Brown
    </label>
    <label htmlFor="pink">
      <input type="checkbox" id="pink" />Pink
    </label>
  </FilterColorStyle>
)

export default FilterColor