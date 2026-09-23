import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Microscope, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: HeartPulse, title: "Atención profesional", text: "Personal calificado" },
  { icon: ShieldCheck, title: "Resultados confiables", text: "Control estricto" },
  { icon: Microscope, title: "Consulta digital", text: "Vía código QR" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-brand-900/5 px-4 py-1.5 text-xs font-semibold text-brand-800">
              Rabinal · Baja Verapaz
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-brand-950 md:text-5xl">
            Resultados confiables para cuidar de tu salud
          </h1>

          <p className="mt-5 max-w-lg text-base text-brand-900/70 md:text-lg">
            Servicios de laboratorio clínico con atención profesional, precisión
            analítica y calidez humana al servicio de tu bienestar familiar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/resultados"
              className="flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition hover:bg-brand-800"
            >
              <ShieldCheck className="h-4 w-4" />
              Consultar resultados
            </Link>
            <a
              href="#servicios"
              className="flex items-center gap-2 rounded-full border border-brand-900/15 px-6 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-900/5"
            >
              Ver nuestros servicios
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-mint-100 text-mint-500">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-950">{title}</p>
                  <p className="text-xs text-brand-900/60">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={`${import.meta.env.BASE_URL}images/Hero.jpg`}
            alt="Fotografía del laboratorio"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl shadow-brand-900/10"
          />
          <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-brand-900/10 md:left-8 md:right-auto md:w-72">
            <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-900 text-white">
              <Microscope className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-950">
                Tecnología y precisión diagnóstica
              </p>
              <p className="text-xs text-brand-900/60">
                Metodología clínica automatizada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
