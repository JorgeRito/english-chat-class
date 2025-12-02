const mod = {
    "O": "💻",
    "P": "🧑‍🏫"
}

const colorPerLevel = {
    'BEG': "#DAF2D0",
    'INT': "#CAEDFB",
    'AVD': "#FFEB78",
}

export function StudentHolder(
    {studentName, modality, level}: {studentName: string, modality: string, level:string}
) {
  return (
    <div className="student-holder" style={{backgroundColor: colorPerLevel[level as keyof typeof colorPerLevel]}}>
      <div className="student-name">
        {studentName}
      </div>
      <div className="modality">
        {mod[modality as keyof typeof mod]}
      </div>
      <select className="teacher-name">
        <option value="Eve">
            Eve
        </option>
        <option value="Juan">
            Juan
        </option>
      </select>
    </div>
  );
}