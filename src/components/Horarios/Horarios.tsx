export function Horarios() {
  return (
    <section id="horarios" className="section">
      <h2 className="title">Horarios</h2>
      {/* <p className="small">Sesiones semanales en distintos horarios.</p> */}

      <div className="horarios">
        {/* <HorarioItem dia="Lunes" hora="7:00pm — 8:00pm" /> */}
        <HorarioItem dia="Lunes - Viernes" hora="8:00am — 11:00pm y 4:00pm - 9:00pm" />
        <HorarioItem dia="Sábado" hora="8:00am — 12:00am" />
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
