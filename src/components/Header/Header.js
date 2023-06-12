'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css"
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () =>{
    const [menuOn, setMenuOn] = useState(false)
    const [menuOff, setMenuOff] =useState(false)
    useEffect(()=>{
        if(menuOff){
            document.body.style.overflow = 'hidden'
            document.body.style.height = '100vh'
        }else{
            document.body.style.overflow = 'scroll'
            document.body.style.height = 'auto'
        }
    },[menuOff])
    const handleMenu= ()=>{
        if(menuOn){
            setMenuOn(false)
            setTimeout(() => {
                setMenuOff(false)
              }, 300)
        }else{
            setMenuOn(true)
            setMenuOff(true)
        }
    }
    const closeMenu = ()=>{
        setMenuOn(false)
        setTimeout(() => {
            setMenuOff(false)
          }, 300)
    }
    return(
        <header className={styles.Container}>
            <Logo/>
            <nav className={styles.ContNav}>
                <Link href="/" className={styles.TextLink}>Inicio</Link>
                <Link href="/" className={styles.TextLink}>Servicios</Link>
                <Link href="/" className={styles.TextLink}>Contacto</Link>
                <Link href="/" className={styles.TextLink}>Dirección</Link>
            </nav>
            <button 
            onClick={()=>{handleMenu()}}
            type="button" 
            className={styles.ButtonMenu}>
                <FiMenu/>
            </button>
            {menuOff &&
            <div className={menuOn ? styles.ContMenuOn : styles.ContMenuOff}>
                <div className={styles.ContMenu}>
                    <Logo/>
                    <nav className={styles.ContNavMob}>
                        <Link href="/" className={styles.TextLinkMob}>Inicio</Link>
                        <Link href="/" className={styles.TextLinkMob}>Servicios</Link>
                        <Link href="/" className={styles.TextLinkMob}>Contacto</Link>
                        <Link href="/" className={styles.TextLinkMob}>Dirección</Link>
                    </nav>
                    <div className={styles.ContCopy}>
                        <span className={styles.Copy}>© All rights reserved by Otorrinolaringólogo en Monterrey.</span>
                    </div>
                    <button 
                    onClick={()=>{closeMenu()}}
                    className={styles.CloseMenu}
                    type="button">
                        <FiX/>
                    </button>
                </div>
            </div>
            }
        </header>
    )
}