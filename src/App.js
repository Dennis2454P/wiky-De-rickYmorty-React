import imageRick from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Character from "./componentes/Character";


function App() {
  const [info, setinfo] = useState(null);
  const reqApi = async () => {
    try {
      const apiCharacter = await fetch("https://rickandmortyapi.com/api/character");

      if (!apiCharacter.ok) {
        throw new Error("No fue correcto el consumo de esta Api pero si existe")
      }
      const data = await apiCharacter.json()
      setinfo(data.results)

      console.log(info)
    } catch (errorr) {
      console.error("tiene un problema con esta operacion no se logra consunir a la API o no exist" + errorr)
    }


  }
  return (
    <div className='App'>
      <header className='App-header'>

        <h1 className='title'>Rick and Morty  </h1>
          {info?
            (<Character info={info} setinfo={setinfo} />
            ) : (<>
            <img src={imageRick} className="img-home" alt="ricky & morty"></img>
              <button onClick={reqApi} className="btn-search"> Buscar Personaje</button>
              
              </>)
          }
      </header>
    </div>
  );
}

export default App;
