import { MapPin, Microscope, QrCode, Smartphone, Workflow } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Paciente realiza sus exámenes",
    text: "Atención cómoda, segura y toma de muestras profesional en nuestras instalaciones en Rabinal.",
  },
  {
    icon: Microscope,
    title: "Laboratorio procesa los resultados",
    text: "Análisis biológico riguroso, control automatizado y validación médica antes de emitir cualquier dictamen.",
  },
  {
    icon: QrCode,
    title: "Paciente recibe reporte con QR",
    text: "Entrega de comprobante impreso u orden física con un código de verificación digital único.",
  },
  {
    icon: Smartphone,
    title: "Consulta desde su teléfono",
    text: "Visualización inmediata y descarga de su documento médico en formato PDF desde la comodidad de su hogar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-900/5 px-4 py-1.5 text-xs font-semibold text-brand-800">
          <Workflow className="h-3.5 w-3.5" />
          Flujo simple y claro
        </span>
        <h2 className="mt-5 text-3xl font-extrabold text-brand-950 md:text-4xl">
          Innovación al servicio de tu bienestar
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-brand-900/70">
          Combinamos la calidez de la atención presencial con la comodidad de
          herramientas digitales modernas para que obtengas tus respuestas sin
          complicaciones.
        </p>

        <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className="relative rounded-2xl bg-white p-6 shadow-sm shadow-brand-900/5">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <Icon className="h-5 w-5 text-mint-500" />
              </div>
              <h3 className="mt-4 font-bold text-brand-950">{title}</h3>
              <p className="mt-1 text-sm text-brand-900/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
