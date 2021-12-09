import React from "react";
import styles from './mobile.module.scss'
import { slide as Menu} from 'react-burger-menu'


export const NavbarMobile = () => {
    return(
        <>
        <div className={styles.menu}>
            <Menu>
            <a href="">Home</a>
            <a href="">About</a>
            </Menu>
        </div>
        </>
    )
}