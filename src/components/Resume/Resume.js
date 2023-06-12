'use client'
import React from "react";
import styles from "./Resume.module.css"
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const Resume =()=>{
    const router = useRouter()
    const handleContact=()=>{
        router.push("https://wa.me/528183475220")
    }
    return(
        <section className={styles.Cont}>
            <div className={styles.ContText}>
                <h3>El <span className={styles.Strong}>otorrinolaringólogo en Monterrey Jorge Treviño</span> es ahora uno de los médicos más importantes en su campo gracias a su contribución a la investigación y la prevención.</h3>
                <p>
                    Da clic en el botón de WhatsApp para contactarnos para saber más sobre el <span className={styles.Strong2}>otorrinolaringólogo en Monterrey</span>.
                </p>
                <button 
                className={styles.ButtonWhats}
                type="button" 
                onClick={()=>{handleContact()}}>
                    Contactanos 
                    <FaWhatsapp className={styles.Icon}/>
                </button>
            </div>
        </section>
    )
}