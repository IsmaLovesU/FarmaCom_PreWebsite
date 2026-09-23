import { Link } from "react-router-dom";
import { Download, QrCode, ScanLine, Search, Smartphone } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Recibe tu reporte con código QR",
    text: "Al finalizar tus exámenes, tu orden física incluye un código QR seguro y exclusivo para tu perfil.",
  },
  {
    icon: ScanLine,
    title: "Escanea el código con tu teléfono",
    text: "Abre la cámara de tu celular o tu app de escáner QR para abrir al instante tu expediente digital.",
  },
  {
    icon: Download,
    title: "Consulta o descarga tu resultado",
    text: "Visualiza tus valores con sus rangos de referencia y descarga tu documento con firma y aval biológico.",
  },
];

export default function ResultsPreview() {
  return (
    <section id="resultados" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-1.5 text-xs font-semibold text-mint-500">
            <Smartphone className="h-3.5 w-3.5" />
            Nueva experiencia para pacientes
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-brand-950 md:text-4xl">
            Tus resultados, ahora más cerca de ti
          </h2>
          <p className="mt-4 text-brand-900/70">
            Consulta tus resultados de laboratorio de forma rápida, segura y sin
            desplazamientos innecesarios, directamente desde tu teléfono o
            computadora.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="grid gap-5">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-brand-900/5 bg-surface p-5"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="flex items-center gap-2 font-semibold text-brand-950">
                    <Icon className="h-4 w-4 text-mint-500" />
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-brand-900/60">{text}</p>
                </div>
              </div>
            ))}

            <Link
              to="/resultados"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition hover:bg-brand-800"
            >
              <Search className="h-4 w-4" />
              Ingresar correlativo / Consultar
            </Link>
            <p className="text-center text-xs text-brand-900/50">
              Directo y sin filas · Disponible 24/7
            </p>
          </div>

          <div className="order-first md:order-last">
            <div className="mx-auto max-w-sm rounded-3xl border border-brand-900/5 bg-surface p-8">
              <div className="flex justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-dashed border-brand-900/20 bg-white">
                  <QrCode className="h-16 w-16 text-brand-900/60" strokeWidth={1.2} />
                </div>
              </div>
              <p className="mt-6 text-center text-sm font-semibold text-brand-950">
                Código QR único por paciente
              </p>
              <p className="mt-1 text-center text-xs text-brand-900/60">
                Seguro, confidencial e intransferible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
