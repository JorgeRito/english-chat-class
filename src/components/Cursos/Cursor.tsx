export function Cursos() {
  return (
    <section id="cursos" className="section">
      <h2 className="title">Nuestros cursos</h2>
      <p className="small">
        Programas diseñados para que hables de forma natural: trabajo, viajes,
        entrevistas y más.
      </p>

      <div className="grid">
        <CursoCard
          tipo="Conversacional"
          precio="Desde $290 MXN / clase"
          desc="Práctica enfocada en fluidez, vocabulario y pronunciación."
        />
        <CursoCard
          tipo="Inglés para trabajo"
          precio="Desde $350 MXN / clase"
          desc="Presentaciones, reuniones y correos profesionales."
        />
        <CursoCard
          tipo="Kids & Teens"
          precio="Desde $250 MXN / clase"
          desc="Clases interactivas para +8 años con juegos y actividades."
        />
      </div>
    </section>
  );
}

function CursoCard({
  tipo,
  precio,
  desc
}: {
  tipo: string;
  precio: string;
  desc: string;
}) {
  return (
    <div className="card">
      <div className="small">{tipo}</div>
      <div className="price">{precio}</div>
      <p className="card-desc">{desc}</p>
    </div>
  );
}
