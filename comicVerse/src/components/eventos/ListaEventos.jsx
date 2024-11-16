import Evento from './Evento'

const ListaEventos = ({eventos}) => {
    console.log('eventos recibidos: ', eventos);
  return (
    <section className="lista-eventos-container">
        <section className="lista-eventos">
          {eventos.map((evento) => (
            <Evento 
              key={evento.id}
              titulo={evento.titulo}
            />
          ))}
        </section>
      </section>
  )
}

export default ListaEventos