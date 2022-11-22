import styles from "../css/container/app.module.css"

export function TopContainer(){
    return(
        <div className={styles.topContainer}>
            <div className={styles.topIcon}/>
            <div className={styles.topTitle}>Conference</div>
        </div>
    );
}