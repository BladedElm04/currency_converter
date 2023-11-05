import { useContext } from "react"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { Header } from "../../components/Header"
import { ResultSection } from "../../components/ResultSection"
import { FormSection } from "../../components/form/FormSection"
import { ConverterContext } from "../../providers/ConverterContext"

export const HomePage = () => {

    const {converted} = useContext(ConverterContext)

    return (
        <>
            <Header />
            <DefaultTemplate>
                <FormSection />
                {converted ?  <ResultSection /> : null}
               
            </DefaultTemplate>
        </>
    )
}