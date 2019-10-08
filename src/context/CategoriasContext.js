import React, { Component } from "react";
import axios from "axios";

// Crear el context
const CategoriasContext = React.createContext();

export const CategoriasConsumer = CategoriasContext.Consumer;

// Este  solo es el nombre de la clase no el provider en si
//  |
//  v
class CategoriasProvider extends Component {
  // Siempre copiar el private API Key
  token = "M6IGEPJE42CNEOLX7XP2";

  state = {
    categorias: []
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    let categorias = await axios.get(url);

    // console.log(categorias.data.categories);
    this.setState({
      categorias: categorias.data.categories
    });
  };

  render() {
    return (
      // Este si es nuestro provider
      <CategoriasContext.Provider
        value={{
          categorias: this.state.categorias
        }}
      >
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider;
