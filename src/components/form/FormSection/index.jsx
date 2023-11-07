import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { useContext } from "react"
import { ConverterContext } from "../../../providers/ConverterContext"
import styles from "./style.module.scss"
import { US } from 'country-flag-icons/react/3x2'

export const FormSection = () => {


    const { converter, currencyType } = useContext(ConverterContext)

    const { register, handleSubmit } = useForm()

    const submit = async (formData) => {
        currencyType(formData)
        converter(formData)
    }

    return (
        <section>
            <div className={styles.container}>
                <form className={styles.form__container} onSubmit={handleSubmit(submit)}>
                    <Input  required placeholder="Coloque o valor aqui..." type="number" {...register("amount")} />
                    <div className={styles.select__container}>
                        <label className="headline" htmlFor="from">De:</label>
                        <select id="from" {...register("base1")}>
                            <option value="USD">Dólar</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">Libra</option>
                            <option value="JPY">Iene</option>
                            <option value="BRL">Real</option>
                        </select>
                    </div>
                    <div className={styles.select__container}>
                        <label className="headline" htmlFor="for">Para:</label>
                        <select id="for" {...register("base2")}>
                            <option value="BRL">Real</option>
                            <option value="JPY">Iene</option>
                            <option value="GBP">Libra</option>
                            <option value="EUR">Euro</option>
                            <option value="USD">Dólar</option>
                        </select>
                    </div>
                    <button className="btn" type="submit">Converter</button>
                </form>
            </div>
        </section>
    )
}