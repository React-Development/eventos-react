import React, { Component } from 'react';

const EventosContext = React.createContext();

export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    state = {  }

    token = "M6IGEPJE42CNEOLX7XP2";
    ordenar = 'date';

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    }

    render() { 
        return (  );
    }
}
 
export default EventosProvider;