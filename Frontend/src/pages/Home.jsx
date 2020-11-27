import React, { Component } from "react";
import Card from "../components/Card";

import data from "../../data/data.json";

export default class Home extends Component {
  //El constructor es el primer método que ocurre
  //este método recibe nuestros PROPS, los cuales debemos
  //utilizar para inicializar la super clase
  //Lugar ideal para inicializar estado
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: []
    };
  }

  //El componente DidMount Excelente lugar para
  //cargar nuestra data que llega externa de un API
  //Es el tercer método que se ejecuta
  componentDidMount() {
    console.log("3. componentDidMount()");
    fetch("https://GaliaMakeup.danielacarmona1.repl.co");
    //simular peticion asincrona, decimos que en 3000 milisegundos
    //se actualice el estado con los datos que deseo mostrar
    //en pantalla

    this.timeoutId = setTimeout(() => {
      this.setState({ data });
    }, 3000);
  }

  //recibe dos argumentos los props que se tenian antes y el segundo
  //el state que tenía antes
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componenteDidUpdate()");
    //imprimiendo los valores que tenia antes
    //y los nuevos valores
    console.log({
      prevProps: prevProps,
      prevState: prevState
    });
    //comparando con los nuevos valores
    console.log({
      props: this.props,
      state: this.state
    });
  }

  //Ultimo componente, es el que ocurre ANTES de que se vaya
  //nuestro componente de pantalla (DEL DOM),
  //Detalle importante! debo garantizar si me muevo a otro lugar
  //parar la llamada ASINCRONA!, ya que el componente se fue es un ERROR COMUN

  componentWillUnmount() {
    console.log("6. componentWillUnMount()");
    //el timeoutID nos sirve para llamar otra funcion
    //llamada clearTimeout()
    //si el id existe y el trabajo esta pendiente lo CANCELA
    clearTimeout(this.timeoutId);
  }

  //El segundo método que ocurre es el render!
  //También es 4 ya que ocurre una actualización al llamar
  //los datos de componentDidMount y junto a esa actualización
  //se llama a componentDidUpdate

  render() {
    console.log("2/4. render()");
    return (
      <>
        <div className="container">
          <div className="row">
            <Card data={this.state.data} />
           
                
          </div>
        </div>
      </>
    );
  }
}
