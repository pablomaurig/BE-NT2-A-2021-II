

function Saludo({ persona, algo }){

    // const persona = prop.persona
    // const algo = prop.algo

    return (
        <div>
            {
                (persona && persona.edad >= 18) ? 
                    <p>Hola mundo, mi nombre es {persona.nombre}</p>
                :
                    <p>No hay saludo disponible</p>
            }
        </div>
    )
}

export default Saludo