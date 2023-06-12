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
    const handleNavMenu = (id) =>{
        console.log(id)
        const element = document.getElementById(`${id}`);
        const offsetTop = element.offsetTop - 100;
        setTimeout(() => {
            if(id === "inicio"){
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }else{
               window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
          }, 300)
        closeMenu()
    }
    return(
        <header className={styles.ContHeader}>
            <div className={styles.Container}>
                <Logo onClick={()=>{handleNavMenu("inicio")}}/>
                <nav className={styles.ContNav}>
                    <button onClick={()=>{handleNavMenu("inicio")}} className={styles.TextLink}>Inicio</button>
                    <button onClick={()=>{handleNavMenu("servicios")}} href="/#servicios" className={styles.TextLink}>Servicios</button>
                    <button onClick={()=>{handleNavMenu("contacto")}} href="/#contacto"  className={styles.TextLink}>Contacto</button>
                    <button onClick={()=>{handleNavMenu("direccion")}} href="/#direccion" className={styles.TextLink}>Dirección</button>
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
                        <Logo onClick={()=>{handleNavMenu("inicio")}}/>
                        <nav className={styles.ContNavMob}>
                            <button onClick={()=>{handleNavMenu("inicio")}} className={styles.TextLinkMob}>Inicio</button>
                            <button onClick={()=>{handleNavMenu("servicios")}} className={styles.TextLinkMob}>Servicios</button>
                            <button onClick={()=>{handleNavMenu("contacto")}} className={styles.TextLinkMob}>Contacto</button>
                            <button onClick={()=>{handleNavMenu("direccion")}} className={styles.TextLinkMob}>Dirección</button>
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
            </div> 
        </header>
            
        
    )
}