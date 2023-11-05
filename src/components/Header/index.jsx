import styles from "./style.module.scss"
export const Header = () => {
    return (
        <header className={styles.header__container}>
            <h1 className="title">Currency converter</h1>
        </header>
    )
}