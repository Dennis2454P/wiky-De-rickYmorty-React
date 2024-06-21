export default function Character(props) {
    const { info ,setinfo} = props

    const volverAcasa=()=>{
        setinfo(null)
    }


    return (
        <div className="characters">
            <span className="back-home" onClick={volverAcasa}> volver al inicio</span>
            <div className="container-characters">
                {info.map((elemento, index) => (
                    <div className="character-container" key={index}>

                        <div>
                            <img src={elemento.image} alt={elemento.image} />

                        </div>
                        <div className="containerPeque">
                            <h3>{elemento.name}</h3>
                            <h6>
                                {elemento.status === "Alive" ? (
                                    <><span className="alive">
                                    </span>Vivo
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"></span>Muerto
                                    </>)}
                            </h6>
                           <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{elemento.episode.length}</span>
                          </p>
                        <p>
                                <span className="text-grey">Especie: </span>
                                <span>{elemento.species}</span>
                          </p>
                        </div>
                        <div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
