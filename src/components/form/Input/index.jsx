import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({...rest}, ref) => {
    return (
        <label className={styles.container}>
            <span className="headline">Valor:</span>
            <input {...rest} ref={ref}/>
        </label>
    )
})