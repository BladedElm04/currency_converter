import { useContext } from "react"
import { ConverterContext } from "../../providers/ConverterContext"
import styles from "./style.module.scss"
export const ResultSection = () => {

    const { converted, setConverted, currency } = useContext(ConverterContext)

    
    return (
        <>
            <div className={styles.result__container}>
                <div className={styles.value__container}>
                    <span className="headline">{currency}$ {converted} </span>
                </div>
                <button className="btn" onClick={() => setConverted(0)}>Limpar</button>
            </div>
        </>
    )
}