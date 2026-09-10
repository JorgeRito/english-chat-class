export function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img
          className="logo"
          src="/ecc_logo.png"
          alt="English Chat Class"
        />
        {/* <div className="logo">EC</div> */}
        <div>
          <div className="brand-title">English Chat Class</div>
          <div className="brand-sub">
            Clases de inglés · Online · Presencial · Conversacional
          </div>
        </div>
      </div>

      <nav className="nav">
        <a href="#cursos">Cursos</a>
        <a href="#horarios">Horarios</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#contacto">Contacto</a>
        <a href="/exercises">Exercises</a>
      </nav>
    </header>
  );
}
