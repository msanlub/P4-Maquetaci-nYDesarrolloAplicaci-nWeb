import imagenEvento from '../../assets/evento5.jpg'

const Evento = ({id, titulo}) => {
  return (
    <section className={`container-evento-${id}`}>
        <section className='img-evento' >
            <img src={imagenEvento} />
        </section>
        <section className='info-evento'>
            <p>{titulo}</p>
        </section>
    </section>
  )
}

export default Evento