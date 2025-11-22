export function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Aprende inglés conversando con confianza</h1>
        <p className="lead">
          Clases dinámicas para todos los niveles (desde +8 años). Profesores
          nativos y material práctico para usar desde el primer día.
        </p>

        <div className="cta-row">
          <button className="btn-primary">Reserva tu clase gratis</button>
          <button className="btn-outline">Ver planes y precios</button>
        </div>

        <div className="features">
          <span className="feature">Clases 100% online</span>
          <span className="feature">Grupos reducidos</span>
          <span className="feature">Material descargable</span>
          <span className="feature">Evaluación de nivel</span>
        </div>

        <div className="note">
          <strong>Modalidades:</strong> Individual · Grupal · Talleres temáticos
        </div>
      </div>

      <aside className="hero-media">
        <img src="/english-chat-class/ecc_logo.png" alt="English Chat Class" />
        <div className="media-title">Próxima clase gratuita: Mié 7:00pm</div>
        <div className="media-sub">Duración 60 min · Cupo limitado</div>
      </aside>
    </section>
  );
}
