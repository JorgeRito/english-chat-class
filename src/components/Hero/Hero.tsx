export function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Aprende inglés conversando con confianza</h1>
        <p className="lead">
          Clases dinámicas para todos los niveles (desde +14 años). Profesores
          con amplia experiencia y material práctico y personalizado para usar desde el primer día.
        </p>

        <div className="cta-row">
          <button className="btn-primary">Reserva tu clase gratis</button>
          <button className="btn-outline">Ver planes y precios</button>
        </div>

        <div className="features">
          <span className="feature">Clases online y presenciales</span>
          <span className="feature">Grupos reducidos</span>
          <span className="feature">Material descargable</span>
          <span className="feature">Horarios flexibles</span>
        </div>

        <div className="note">
          <strong>Modalidades:</strong> Online · Presencial
        </div>
      </div>
      {/* TODO: Agregar ubicacion en maps o algo por el estilo */}
      <aside className="hero-media">
        <img src="/ecc_logo.png" alt="English Chat Class" />
        
        <div className="media-title">📍Estamos ubicados en <a href="https://maps.app.goo.gl/49iygTGJbtfRY6Mz5" target="_blank">Calle Hernando de Martel #64</a></div>
        {/* <div className="media-sub">Duración 60 min · Cupo limitado</div> */}
      </aside>
    </section>
  );
}
