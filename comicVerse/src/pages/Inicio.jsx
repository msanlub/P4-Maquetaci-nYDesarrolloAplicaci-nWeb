import ListaComics from "../components/ListaComics"



const Inicio = () => {
  // ejemplo visual
  const comicsData = [
    { id: 1, nombre: "Cómic 1", volumen: "1", año: "2023" },
    { id: 2, nombre: "Cómic 2", volumen: "2", año: "2023" },
    { id: 3, nombre: "Cómic 3", volumen: "3", año: "2023" },
    { id: 4, nombre: "Cómic 4", volumen: "4", año: "2023" },
    { id: 5, nombre: "Cómic 5", volumen: "5", año: "2023" },
    { id: 6, nombre: "Cómic 6", volumen: "6", año: "2023" },
    { id: 7, nombre: "Cómic 7", volumen: "7", año: "2023" },
    { id: 8, nombre: "Cómic 8", volumen: "8", año: "2023" },
    { id: 9, nombre: "Cómic 9", volumen: "9", año: "2023" },
  ];

  return (
    <div>
      <div>Inicio</div>
      <p>Imagenes</p>
      <div>formulario de busqueda</div>
      <div>
        <h1>Cómics</h1>
        <ListaComics comics={comicsData} />
        
      </div>
    </div>
  );
}

export default Inicio