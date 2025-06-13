import { useState } from "react";

function App() {
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");
  const [log, setLog] = useState([]);

  const handleSave = () => {
    if (emotion && note) {
      setLog([...log, { emotion, note, date: new Date().toLocaleString() }]);
      setEmotion("");
      setNote("");
    }
  };

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Bienvenido a Mi Espacio Seguro
        </h1>
        <div className="bg-white rounded-2xl shadow p-4 space-y-4 mb-6">
          <div>
            <label className="block mb-1 font-semibold">¿Cómo te sientes hoy?</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Ej. Ansioso, Triste, Motivado..."
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">¿Quieres escribir algo sobre ello?</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows="4"
              placeholder="Escribe aquí tus pensamientos..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Guardar Registro
          </button>
        </div>
        <div className="space-y-4">
          {log.map((entry, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-4">
              <p className="font-semibold">{entry.emotion}</p>
              <p className="text-sm text-gray-600">{entry.date}</p>
              <p className="mt-2">{entry.note}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;