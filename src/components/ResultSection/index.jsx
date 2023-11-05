import { useContext } from "react"
import { ConverterContext } from "../../providers/ConverterContext"
import styles from "./style.module.scss"
export const ResultSection = () => {

    const { converted, setConverted } = useContext(ConverterContext)

    return (
        <>
            <div className={styles.result__container}>
                <div>
                    <span className="headline">$ {converted}</span>
                </div>
                <button className="btn" onClick={() => setConverted(0)}>Limpar</button>
            </div>
        </>
    )
}