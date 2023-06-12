import React from "react";
import styles from "./Logo.module.css"

export const Logo = ({ onClick = () => {} }) => {
    return(
        <button type="button" onClick={() => onClick()} className={styles.Cont}>
            <div className={styles.ContO}>
                <span className={styles.Text1}>O</span>
            </div>
            <div className={styles.ContText}>
                <span className={styles.Text2}>Otorrinolaringólogo</span>
                <span className={styles.Text3}>En Monterrey</span>
            </div>
        </button>
    )
}