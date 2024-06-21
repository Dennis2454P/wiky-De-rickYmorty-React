import { useParams }  from "react-router-dom" ;

export default function Perfiles(){

 const{name}= useParams();
  return(

    <div>
        <h1>
            hola mundo {name}
        </h1>
    </div>

  )
}

