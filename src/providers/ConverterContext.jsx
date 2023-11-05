import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";


export const ConverterContext = createContext({})

export const ConverterProvider = ({children}) => {

    const [converted, setConverted] = useState()


    const converter = async (formData) => {
        const base1 = formData.base1
        const base2 = formData.base2
        const amount = Number(formData.amount)
       try {
            const { data } = await api.get()
            if(base1 === data.base) {
                const result = (data.rates[base2]) * amount
                setConverted(result.toFixed(3))
            } else if(base1 !== data.base){
                const result = (data.rates[base2]) / (data.rates[base1]) * amount
                setConverted(result.toFixed(3))
            }

        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        const clean = () => {
            setConverted(0)
        }
        clean()
    }, [])

    return (
        <ConverterContext.Provider value={{converter, setConverted, converted}}>
            {children}
        </ConverterContext.Provider>
    )
}