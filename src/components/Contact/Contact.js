import React from "react";
import styles from "./Contact.module.css"
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneIncoming, FiMail, FiClock } from "react-icons/fi";
import Link from "next/link";

export const Contact = () =>{
    return(
        <section id="contacto" className={styles.Cont}>
            <p className={styles.Text1}>Contactanos</p>
            <h2 className={styles.Text}>Te mereces un alto nivel de atención por parte de un <span className={styles.StrongText}>Otorrinolaringólogo</span> de vanguardia, por lo que el <span className={styles.StrongText}>Dr. Jorge Treviño Garza</span> especialista en padecimiento de los oídos.</h2>
            
            <div className={styles.ContainerContact}>
                <p className={styles.Text2}>Agenda tu consulta:</p>
                    <div className={styles.ContactCont}>
                        <Link href="https://wa.me/528183475220">
                            <div className={styles.CardContact}>
                                <FaWhatsapp className={styles.IconContact}/>
                                <div className={styles.ContTextCard}>
                                    <p>Whatsapp</p>
                                    <p>811-54-48-285 </p> 
                                </div>
                            </div>
                        </Link>
                        <Link href="tel:528183475220">
                            <div className={styles.CardContact}>
                                <FiPhoneIncoming className={styles.IconContact}/>
                                <div className={styles.ContTextCard}>
                                    <p>Teléfono</p>
                                    <p>818-34-75-220</p>  
                                </div>
                            </div>   
                        </Link>
                        <Link href="mailto:jorgetrega@gmail.com">
                            <div className={styles.CardContact}>
                                <FiMail className={styles.IconContact}/>
                                <div className={styles.ContTextCard}>
                                    <p>Correo electronico</p>
                                    <p>jorgetrega@gmail.com</p> 
                                </div>
                            </div>  
                        </Link>
                    </div> 
                <div className={styles.CardContact0}>
                    <FiClock className={styles.IconContact}/>
                    <div className={styles.ContTextCard2}>
                       <p>Horario de consulta:</p> 
                       <p>Lunes a Sábado 9:00 a 19:00 hrs</p> 
                    </div>
                </div>  
            </div>
            
        </section>
    )
}