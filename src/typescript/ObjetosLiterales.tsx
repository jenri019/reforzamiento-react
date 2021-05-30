interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
    /*
    direccion: {
        calle: string;
        casaNo: number;
    }
    */
}

interface Direccion {
    calle: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {
    const persona:Persona = {
        nombreCompleto: "Enrique",
        edad: 25,
        direccion: {
            calle: "Pozos",
            casaNo: 712
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <pre>
                {JSON.stringify(persona, null, 2)    /*Imprime el texto en JSON dando formato*/}
            </pre>
        </>
    )
}
