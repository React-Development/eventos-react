import React from 'react';
import { EventosConsumer } from "../context/EventosContext";
import Evento from './Evento';


const ListaEventos = () => {
    return ( 
        <div className="uk-child-width-1-3@" uk-grid="true">
            <h1>Resultados</h1>
            <EventosConsumer>
                {(value) => {
                    return value.eventos.map(evento =>(
                        <Evento />
                    ));
                }}
            </EventosConsumer>
        </div>
    );
}
 
export default ListaEventos;