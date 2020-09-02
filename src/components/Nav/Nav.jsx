import React from 'react';
import c from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={c.nav}>
        <div class={c.nav_item}>Profile</div>
        <div class={c.nav_item}>Messages</div>
        <div class={c.nav_item}>News</div>
        <div class={c.nav_item}>Music</div>
        <div class={c.nav_item}>Settings</div>
      </nav>
    )
}

export default Nav