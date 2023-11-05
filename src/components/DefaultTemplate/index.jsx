import styles from "./style.module.scss"
export const DefaultTemplate = ({children}) => {
    return (
        <main className={styles.main__container}>
            {children}
        </main>
    )
}