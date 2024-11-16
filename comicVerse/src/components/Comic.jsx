import '../styles/Comic.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import imagen from '../assets/comic3.jpg'; 

const Comic = ({ id, nombre, volumen, año }) => {
  return (
    <section className={`contenedor-comic-${id}`}>
        <section className='imagenComic'>
            <img src={imagen} alt={`Portada de ${nombre}`} />
        </section>
        <section className='infoComic'>
            <h1>{nombre}</h1>
            <h3>#{volumen}</h3>
            <h3>{año}</h3>
            <IoIosArrowDroprightCircle />
        </section>
    </section>
  )
}

export default Comic;