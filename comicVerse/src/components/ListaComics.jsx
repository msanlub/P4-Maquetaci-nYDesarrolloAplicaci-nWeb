
import Comic from './Comic'; 
import '../styles/ListaComics.css'

const ListaComics = ({ comics }) => {
    console.log('Comics recibidos:', comics);
    return (
      <section className="lista-comics-container">
        <section className="lista-comics">
          {comics.map((comic) => (
            <Comic 
              key={comic.id}
              nombre={comic.nombre}
              volumen={comic.volumen}
              año={comic.año}
            />
          ))}
        </section>
      </section>
    );
  };

export default ListaComics;