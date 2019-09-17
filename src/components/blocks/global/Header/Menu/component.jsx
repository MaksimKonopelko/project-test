import React from 'react'
import Menu from './styles'

const pages = ['Home', 'Service', 'About us', 'Contact'];
const listItems = pages.map((page, index) =>
    <li key={index}>{page}</li>
);

export default () => (
  <Menu>
    <nav className="nav">
      <div className="nav-inner">
        <ul className="menu">{listItems}</ul>
      </div>
   </nav>
  </Menu>
)