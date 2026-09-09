export function Contacto() {
  return (
    <section id="contacto" className="section">
      <h2 className="title">Contacto</h2>

      <div className="contact-grid">
        <div className="card contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="small">
              <strong>Nombre</strong>
            </label>
            <input placeholder="Tu nombre" required />

            <label className="small">
              <strong>Correo</strong>
            </label>
            <input placeholder="correo@ejemplo.com" required />

            <label className="small">
              <strong>Mensaje</strong>
            </label>
            <textarea rows={4} placeholder="¿Qué curso te interesa?"></textarea>

            <button className="btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>

        <div className="card contact-info small">
          <strong>Síguenos</strong>
          <p>Instagram: <a href="https://www.instagram.com/english_chat_class/" target="_blank">@english_chat_class</a></p>
          <p>Clases impartidas por Zoom</p>
          <p>¿Quieres una clase de prueba? Reserva y paga solo si te gusta.</p>
        </div>
      </div>
    </section>
  );
}
