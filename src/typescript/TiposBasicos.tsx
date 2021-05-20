export const TiposBasicos = () => {

    const nombre:string = "Enrique";
    const edad:number = 25;
    const activo:boolean = true;

    const poderes:string[] = []; //Especifico que es un arreglo de strings

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(activo ? 'Activo' : 'Inactivo')}
            <br />
            {poderes.join(', ')}
        </> 
    )
}