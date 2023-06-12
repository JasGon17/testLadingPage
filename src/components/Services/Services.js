import React from "react";
import styles from "./Services.module.css"
import { FaHandHoldingMedical } from "react-icons/fa";

export const Services = () =>{
    return(
        <section id="servicios" className={styles.Cont}>
            <div className={styles.ContText}>
                <p className={styles.StrongText}>Otorrinolaringólogo en Monterrey</p>
                <p className={styles.Text1}>Te ofrece:</p>
            </div>
            <ul>
                <li><FaHandHoldingMedical className={styles.Icon}/>Consulta.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Radiofrecuencia de Cornetes.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Cirugia endoscópica para sinusitis.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Cirugia de Tabique nasal.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Endoscopia Nasal.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Otorrinolaringología Pediátrica.</li>
            </ul>
            <div className={styles.ContDiv}></div>
            <div className={styles.ContDiv2}></div>
        </section>
    )
}
