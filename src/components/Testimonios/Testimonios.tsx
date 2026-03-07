export function Testimonios() {
  return (
    <section id="testimonios" className="section">
      <h2 className="title">Testimonios</h2>

      <div className="testi-list">
        <Testimonio
          nombre="María L."
          texto="Me siento más segura hablando en reuniones. Profesores muy pacientes."
        />
        <Testimonio
          nombre="Jorge R."
          texto="Material práctico y clases muy dinámicas. Recomendado 100%."
        />
      </div>
    </section>
  );
}

function Testimonio({nombre, texto}: {nombre: string; texto: string}) {
  return (
    <div className="card testi">
      <div className="avatar">{nombre[0]}</div>
      <div>
        <div className="testi-nombre">{nombre}</div>
        <div className="small testi-text">"{texto}"</div>
      </div>
    </div>
  );
}
