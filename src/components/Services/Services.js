import React from "react";
import styles from "./Services.module.css"
import { FaHandHoldingMedical } from "react-icons/fa";

export const Services = () =>{
    return(
        <section className={styles.Cont}>
            <p className={styles.Text1}>Servicios del <span className={styles.StrongText}>Otorrinolaringólogo en Monterrey</span>:</p>
            <ul>
                <li><FaHandHoldingMedical className={styles.Icon}/>Consulta.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Radiofrecuencia de Cornetes.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Cirugia endoscópica para sinusitis.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Cirugia de Tabique nasal.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Endoscopia Nasal.</li>
                <li><FaHandHoldingMedical className={styles.Icon}/>Otorrinolaringología Pediátrica.</li>
            </ul>
        </section>
    )
}
