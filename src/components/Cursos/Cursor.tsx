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
          tipo="1 Clase"
          precio="$150 MXN"
          desc="Vigencia 7 dias."
        />
        <CursoCard
          tipo="4 Clases"
          precio="$550 MXN"
          desc="Vigencia 15 dias."
        />
        <CursoCard
          tipo="6 Clases"
          precio="$800 MXN"
          desc="Vigencia 15 dias"
        />
        <CursoCard
          tipo="12 Clases"
          precio="$1500 MXN"
          desc="Vigencia 30 dias"
        />
        <CursoCard
          tipo="20 Clases"
          precio="$2500 MXN"
          desc="Vigencia 30 dias"
        />
        <CursoCard
          tipo="Clase muestra"
          precio="$100 MXN"
          desc="Vigencia 7 dias"
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
