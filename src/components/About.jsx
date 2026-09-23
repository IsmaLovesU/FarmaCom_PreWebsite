import { HeartHandshake, Lock, SlidersHorizontal, Users } from "lucide-react";

const values = [
  {
    icon: SlidersHorizontal,
    title: "Precisión",
    text: "Calibración constante y metodologías validadas para garantizar la exactitud en cada análisis.",
    footer: "Control riguroso",
  },
  {
    icon: Lock,
    title: "Confianza",
    text: "Confidencialidad ética y entrega transparente respaldada por profesionales idóneos y colegiados.",
    footer: "Secreto profesional",
  },
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    text: "Trato cálido, orientación clara en ayuno y acompañamiento respetuoso durante toda tu visita.",
    footer: "Vocación humana",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-900/5 px-4 py-1.5 text-xs font-semibold text-brand-800">
              <Users className="h-3.5 w-3.5" />
              Nuestra identidad
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-brand-950 md:text-4xl">
              Confianza y atención profesional
            </h2>
            <p className="mt-4 text-brand-900/70">
              En Laboratorio Clínico-Biológico Ismalej Prado trabajamos para
              brindar resultados confiables y una atención cercana a nuestros
              pacientes en Rabinal y municipios vecinos de Baja Verapaz.
            </p>
            <p className="mt-3 text-brand-900/70">
              Nuestra labor combina tecnología analítica de vanguardia con un
              sentido ético inquebrantable, asegurando que cada diagnóstico sea
              un puente sólido hacia tu salud y recuperación.
            </p>

            <div className="mt-6 rounded-2xl bg-mint-100 p-5">
              <p className="text-sm font-semibold text-brand-950">
                Compromiso con las Verapaces
              </p>
              <p className="text-xs text-brand-900/60">
                Accesibilidad diagnóstica con calidez humana
              </p>
            </div>
          </div>

          <img
            src={`${import.meta.env.BASE_URL}images/about.jpg`}
            alt="Equipo del laboratorio"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, text, footer }) => (
            <div key={title} className="rounded-2xl border border-brand-900/5 bg-surface p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-900 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-brand-950">{title}</h3>
              <p className="mt-1 text-sm text-brand-900/60">{text}</p>
              <p className="mt-4 text-xs font-semibold text-mint-500">{footer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
