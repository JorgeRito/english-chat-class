export function Horarios() {
  return (
    <section id="horarios" className="section">
      <h2 className="title">Horarios</h2>
      <p className="small">Sesiones semanales en distintos horarios.</p>

      <div className="horarios">
        <HorarioItem dia="Lunes" hora="7:00pm — 8:00pm" />
        <HorarioItem dia="Miércoles" hora="6:00pm — 7:00pm" />
        <HorarioItem dia="Sábado" hora="10:00am — 11:30am" />
      </div>
    </section>
  );
}

function HorarioItem({dia, hora}: {dia: string; hora: string}) {
  return (
    <div className="card horario-item">
      <strong>{dia}</strong>
      <div className="small">{hora}</div>
    </div>
  );
}
