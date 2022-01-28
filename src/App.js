import { useState } from "react";
import "./App.scss";
const App = () => {
  const [color, setColor] = useState("rojo")
  const [nombreBoton, setNombreBoton] = useState("cambiar a azul")
  const [valorDelInput, setValorDelInput] = useState("")
  const [valorDelCheckbox, setValorDelCheckbox] = useState("NO")
  const [valorDelSelectPais, setValorDelSelectPais] = useState("")
  const [valorDelCheckAnimal, setValorDelCheckAnimal] = useState("")
  const [mostrar, setMostrar] = useState("ocultar")

  const handleClickBotonColorAzul = () => {
    setColor("azul")
  }
  const handleClickBotonColorRojo = () => {
    setColor("rojo")
  }

  const handleClickBoton = () => {
    color === "rojo" ? setColor("azul") : setColor("rojo");
    nombreBoton === "cambiar a azul"
      ? setNombreBoton("cambiar a rojo")
      : setNombreBoton("cambiar a azul")
  }
  //  Input
  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  const handleChangeCheckbox = (e) => {
    if (e.target.checked) {
      setValorDelCheckbox("SI")
    } else {
      setValorDelCheckbox("NO")
    }
  }

  const handleChangePais = (e) => {
    if (e.target.value === "arg") {
      setValorDelSelectPais("Argentina")
    }
    else if (e.target.value === "bra") {
      setValorDelSelectPais("Brasil")
    }
    else if (e.target.value === "chi") {
      setValorDelSelectPais("Chile")
    }

  }

  const handleChangeAnimal = (e) => {
    if (e.target.value === "perro") {
      setValorDelCheckAnimal("Perro")
    } else if (e.target.value === "gato") {
      setValorDelCheckAnimal("Gato")
    }

  }

  const handleSubmit = (e) => {
   e.preventDefault()
   setMostrar("mostrar")

  }
 


  return (
    <div>

      <div className={color}>

        <button onClick={handleClickBotonColorAzul}>fondo azul</button>
        <button onClick={handleClickBotonColorRojo}>fondo rojo</button>
        <button onClick={handleClickBoton}>{nombreBoton}</button>
      </div>

      <input type="text" name="nombre" onChange={handleChange} />
      <p>Valor del input: <span>{valorDelInput}</span></p>
      <label> Términos y condiciones
        <input type="checkbox" name="terminos" onChange={handleChangeCheckbox}></input>
      </label>
      <p>Acepta terminos y condiciones: <span>{valorDelCheckbox}</span></p>

      <label>Pais
        <select onChange={handleChangePais}>
          <option value="arg">Argentina</option>
          <option value="bra">Brasil</option>
          <option value="chi">Chile</option>
        </select>
      </label>

      <p>Pais elegido: <span>{valorDelSelectPais}</span></p>

      <label>
        <input onChange={handleChangeAnimal} type="radio" name="animal" value="gato" />Gato
        <input onChange={handleChangeAnimal} type="radio" name="animal" value="perro" />Perro
      </label>

      <p>Animal elegido: <span>{valorDelCheckAnimal}</span></p>

      <form onSubmit={handleSubmit}>
        <input type="submit" name="enviar"/>
      </form>
      <div className={mostrar}>
        <p> La informacion se ha enviado</p>
        <p>sus elecciones: <span>{valorDelInput}</span></p>
        <p>Acepta terminos y condiciones: <span>{valorDelCheckbox}</span></p>
        <p>Pais elegido: <span>{valorDelSelectPais}</span></p>
        <p>Animal elegido: <span>{valorDelCheckAnimal}</span></p>

      </div>
    </div>
  )
}

export default App;
