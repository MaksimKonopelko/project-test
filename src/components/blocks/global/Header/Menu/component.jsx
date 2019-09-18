import React from 'react'
import Menu from './styles'

const pages = ['HOME', 'BRANDS', 'DESIGNERS', 'ABOUT US', 'CONTACT'];
const listItems = pages.map((page, index) =>
  <li key={index}>{page}</li>
);

export default () => (
  <Menu>
    <div className="nav-inner">
      <ul>{listItems}</ul>
    </div>
  </Menu>
)