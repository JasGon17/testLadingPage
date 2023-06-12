'use client'
import React from "react";
import styles from "./Presentation.module.css"

export const Presentation = () =>{
    return(
        <section id="inicio" className={styles.Cont}>
            <h1 className={styles.Text1}>Otorrinolaringólogo en Monterrey </h1>
            <p className={styles.Text2}>
                El <span className={styles.StrongText}>Dr. Jorge Treviño Garza</span> es un <span className={styles.StrongText}>Otorrinolaringólogo en Monterrey</span> que cuenta con especialidad en Cirugía Plástica Facial, es un médico que constantemente se actualiza con el  fin de mejorar sus servicios a los pacientes.
            </p>            
            <div className={styles.ContDiv}>
            </div>
        </section>
    )
}