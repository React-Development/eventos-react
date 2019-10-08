import React, { Component } from "react";
import {CategoriasConsumer} from '../context/CategoriasContext';

class Formulario extends Component {
  state = {
    nombre: "",
    categoria: ""
  };

  render() {
    return (
      <form>
        <fieldset className="uk-fieldset uk-margin">
          <legend className="uk-legend uk-text-center">
            Busca tu evento por nombre o categoría
          </legend>
        </fieldset>
        <div className="uk-column-1-3@m uk-margin">
          <div className="uk-margin" uk-margin="true">
              <input 
                name="nombre"
                className="uk-input"
                type="text"
                placeholder="Nombre de Evento o Ciudad"
              />
          </div>{/* .input-text */}

          <div className="uk-margin" uk-margin="true">
              <select 
                className="uk-select"
                name="categoria"
              >
                  <CategoriasConsumer>
                      {(value) => {
                          return (
                              value.categorias.map(categoria => (
                                  <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                      {categoria.name_localized}
                                  </option>
                              ))
                          )
                      }}
                  </CategoriasConsumer>

              </select>
          </div>{/* .select */}

          <div>
              <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos"/>
          </div>{/* .submit */}

        </div>{/* .uk-column-1-3@m */}
      </form>
    );
  }
}

export default Formulario;