import { useEffect, useRef, useState } from "react";

export default function Apis() {
  const [cuenta, setCuenta] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [info, setInfo] = useState([]);

  const refInput = useRef()

  const consultarApi = async () => {
    const url = "https://api.gameofthronesquotes.xyz/v1/random";
    const response = await fetch(url);
    const data = await response.json();
    setInfo(`${data.sentence} - ${data.character.name} - ${data.character.house.name !== null ? data.character.house.name : ``}`);
  };


  useEffect(() => {
    consultarApi();
    refInput.current.focus()
  }, [cuenta]);

  return (
    <div>
        <div className="card">
            <h2>Frases de GOT</h2>
            <h3>{info}</h3>
        </div>


      <button onClick={() => setCuenta(cuenta + 1)}>Cambiar color del titulo</button>

      <br />

      <h4>Titulo de la pagina</h4>
      <input
        ref={refInput}
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
    </div>
  );
}
