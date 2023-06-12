import React from "react";
import styles from "./Logo.module.css"

export const Logo = () =>{
    return(
        <div className={styles.Cont}>
            <div className={styles.ContO}>
                <span className={styles.Text1}>O</span>
            </div>
            <div className={styles.ContText}>
                <span className={styles.Text2}>Otorrinolaringólogo</span>
                <span className={styles.Text3}>En Monterrey</span>
            </div>
        </div>
    )
}