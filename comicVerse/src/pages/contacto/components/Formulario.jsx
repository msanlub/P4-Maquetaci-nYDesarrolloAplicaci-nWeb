

const Formulario = () => {
  return (
    <section className = 'contenedorFormulario'>
        <h2>¿Cómo podemos ayudarte?</h2>
        <div class="form-email">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
        </div>
    </section>
  )
}

export default Formulario