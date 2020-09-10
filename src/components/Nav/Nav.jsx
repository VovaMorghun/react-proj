import React from 'react';
import c from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={c.nav}>
        <div class={c.nav_item}><NavLink to="/profile" activeClassName={c.active} >Profile</NavLink> </div>
        <div class={c.nav_item}><NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink> </div>
        <div class={c.nav_item}><NavLink to="/news" activeClassName={c.active}>News</NavLink> </div>
        <div class={c.nav_item}><NavLink to="/music" activeClassName={c.active}>Music</NavLink> </div>
        <div class={c.nav_item}><NavLink to="/settings" activeClassName={c.active}>Settings</NavLink> </div>
      </nav>
    )
}

export default Nav