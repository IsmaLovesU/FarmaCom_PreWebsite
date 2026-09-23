import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  KeyRound,
  QrCode,
  ScanLine,
  Search,
  ShieldCheck,
} from "lucide-react";

const mockResult = {
  paciente: "Nombre del paciente",
  correlativo: "LAB-2026-00123",
  fecha: "24/01/2026",
  estado: "Verificado",
  examenes: [
    { nombre: "Hemoglobina", valor: "13.8 g/dL", rango: "12.0 - 16.0", normal: true },
    { nombre: "Glóbulos blancos", valor: "6.5 x10³/µL", rango: "4.0 - 11.0", normal: true },
    { nombre: "Plaquetas", valor: "215 x10³/µL", rango: "150 - 450", normal: true },
    { nombre: "Glucosa", valor: "108 mg/dL", rango: "70 - 100", normal: false },
  ],
};

export default function ResultsPortal() {
  const [tab, setTab] = useState("codigo");
  const [correlativo, setCorrelativo] = useState("");
  const [pin, setPin] = useState("");
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!correlativo || !pin) return;
    setResult(mockResult);
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-900/60 hover:text-brand-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>

      <div className="mt-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-1.5 text-xs font-semibold text-mint-500">
          <ShieldCheck className="h-3.5 w-3.5" />
          Portal de resultados
        </span>
        <h1 className="mt-5 text-3xl font-extrabold text-brand-950 md:text-4xl">
          Consulta tus resultados
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-brand-900/70">
          Elige cómo quieres acceder a tu informe: ingresando el código
          correlativo y PIN de tu orden, o escaneando el código QR impreso en
          tu comprobante.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-md rounded-full bg-brand-900/5 p-1">
        <button
          type="button"
          onClick={() => setTab("codigo")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition ${
            tab === "codigo" ? "bg-white text-brand-950 shadow-sm" : "text-brand-900/60"
          }`}
        >
          <KeyRound className="h-4 w-4" />
          Correlativo y PIN
        </button>
        <button
          type="button"
          onClick={() => setTab("qr")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition ${
            tab === "qr" ? "bg-white text-brand-950 shadow-sm" : "text-brand-900/60"
          }`}
        >
          <QrCode className="h-4 w-4" />
          Escanear QR
        </button>
      </div>

      {tab === "codigo" ? (
        <div className="mx-auto mt-8 max-w-md">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-brand-900/5 bg-white p-8 shadow-sm shadow-brand-900/5"
          >
            <div>
              <label className="text-sm font-medium text-brand-950" htmlFor="correlativo">
                Código correlativo
              </label>
              <input
                id="correlativo"
                type="text"
                placeholder="Ej. LAB-2026-00123"
                value={correlativo}
                onChange={(event) => setCorrelativo(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-brand-900/15 px-4 py-3 text-sm outline-none focus:border-mint-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-950" htmlFor="pin">
                PIN de seguridad
              </label>
              <input
                id="pin"
                type="password"
                placeholder="****"
                value={pin}
                onChange={(event) => setPin(event.target.value)}
                className="mt-1.5 w-full rounded-xl border border-brand-900/15 px-4 py-3 text-sm outline-none focus:border-mint-500"
              />
              <p className="mt-1.5 text-xs text-brand-900/50">
                El correlativo y el PIN aparecen impresos en tu orden de
                laboratorio.
              </p>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              <Search className="h-4 w-4" />
              Consultar resultado
            </button>
          </form>
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-md">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-brand-900/5 bg-white p-8 text-center shadow-sm shadow-brand-900/5">
            <div className="flex h-44 w-44 items-center justify-center rounded-2xl border-2 border-dashed border-brand-900/20 bg-surface">
              <ScanLine className="h-16 w-16 text-brand-900/50" strokeWidth={1.2} />
            </div>
            <div>
              <p className="font-semibold text-brand-950">
                Escanea el código QR de tu orden
              </p>
              <p className="mt-1 text-sm text-brand-900/60">
                Abre la cámara de tu teléfono o tu app de escáner QR y apunta al
                código impreso en tu comprobante físico. Se abrirá tu resultado
                al instante, sin necesidad de ingresar ningún dato.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-1.5 text-xs font-semibold text-mint-500">
              <ShieldCheck className="h-3.5 w-3.5" />
              Acceso seguro y confidencial
            </span>
          </div>
        </div>
      )}

      {result && (
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-brand-900/5 bg-white p-8 shadow-sm shadow-brand-900/5">
          <div className="flex items-center justify-between border-b border-brand-900/5 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                Ejemplo de vista de resultado
              </p>
              <p className="mt-1 font-bold text-brand-950">{result.correlativo}</p>
              <p className="text-sm text-brand-900/60">Fecha: {result.fecha}</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-mint-100 px-3 py-1.5 text-xs font-semibold text-mint-500">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {result.estado}
            </span>
          </div>

          <div className="mt-5 space-y-2">
            {result.examenes.map((examen) => (
              <div
                key={examen.nombre}
                className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-brand-950">{examen.nombre}</p>
                  <p className="text-xs text-brand-900/50">Rango: {examen.rango}</p>
                </div>
                <span
                  className={`text-sm font-bold ${examen.normal ? "text-mint-500" : "text-amber-600"}`}
                >
                  {examen.valor}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-brand-900/15 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-900/5"
          >
            <Download className="h-4 w-4" />
            Descargar PDF
          </button>

          <p className="mt-4 text-center text-xs text-brand-900/40">
            * Este es un ejemplo visual con datos ficticios. La conexión con el
            sistema real del laboratorio se integrará próximamente.
          </p>
        </div>
      )}
    </main>
  );
}
