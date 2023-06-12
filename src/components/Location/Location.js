'use client'
import Image from "next/image";
import React from "react";
import styles from "./Location.module.css"

export const Location = () =>{
    return(
        <section id="direccion" className={styles.Cont}>
            <span className={styles.Text1}>Dirección del Consultorio</span>
            <p className={styles.Text}>
                Visitanos para que seas atendido con la atención que te mereces.
            </p>
            <div className={styles.ContLocation}>
                <div className={styles.ContText}>
                    <p className={styles.Text}>
                        Centro de Especialidades Médicas.
                    </p>
                    <p className={styles.Text}>
                        1er piso consultorio 126 Jose Benitez No 2704, Colonia obispado Monterrey NL CP 64060.
                    </p>
                    <div className={styles.ContImg}>
                        <Image src="/medics.webp" width={300} height={300} alt="otorrinolaringologo en monterrey"/>
                    </div>
                    
                </div>
               <iframe className={styles.Map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1698050693562!2d-100.35358419359447!3d25.675709015010625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629736dfc0b977%3A0xcbd0d17884095670!2sConsultorio!5e0!3m2!1ses-419!2smx!4v1686590196460!5m2!1ses-419!2smx" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
            </div>
            <div className={styles.Bg1}></div>
            <div className={styles.Bg2}></div>
        </section>
    )
}