import { useState } from "react"

export const useContador = (inicial:number = 10) => {

    const [valor, setValor] = useState<number>(inicial);
    const acumular = (numero:number) => {
        setValor (valor + numero);
    }

    return {
        valor,
        acumular
    }
}
