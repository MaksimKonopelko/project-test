import React from 'react'
import Menu from './styles'
import { NavLink } from 'react-router-dom';
import { arrMenu } from '../../../../../constants/paths';

//const pages = ['HOME', 'BRANDS', 'DESIGNERS', 'ABOUT US', 'CONTACT'];

const listItems = arrMenu.map((page) =>
  <li key={page.title}>
    <NavLink to={page.route}>
      {page.title}
    </NavLink>
    
  </li>
);

export default () => (
  <Menu>
    <div className="nav-inner">
      <ul>{listItems}</ul>
    </div>
  </Menu>
)