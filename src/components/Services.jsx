import {
  Activity,
  Beaker,
  Bug,
  Droplet,
  FlaskConical,
  Shield,
  Sprout,
  Waves,
} from "lucide-react";

const services = [
  {
    icon: Droplet,
    title: "Hematología",
    text: "Evaluación celular completa del sistema sanguíneo.",
    items: ["Hemograma completo", "Plaquetas y coagulación", "Velocidad de sedimentación", "Frotis de sangre periférica"],
  },
  {
    icon: Beaker,
    title: "Química Sanguínea",
    text: "Monitoreo metabólico, renal, hepático y de lípidos.",
    items: ["Glucosa en ayunas y post", "Colesterol total y triglicéridos", "Perfil lipídico completo", "Ácido úrico, urea y creatinina"],
  },
  {
    icon: Waves,
    title: "Exámenes de Orina",
    text: "Detección de patologías renales y del tracto urinario.",
    items: ["Orina completa y química", "Sedimento urinario microscópico", "Microalbuminuria cuantitativa", "Urocultivo microbiológico"],
  },
  {
    icon: Sprout,
    title: "Exámenes de Heces",
    text: "Salud gastrointestinal y detección de parásitos.",
    items: ["Coproparasitológico seriado", "Sangre oculta en heces", "pH fecal y azúcares reductores", "Antígenos específicos"],
  },
  {
    icon: Shield,
    title: "Inmunología",
    text: "Respuesta inmunológica y marcadores serológicos.",
    items: ["Pruebas serológicas completas", "Prueba confirmatoria de VIH", "Helicobacter pylori", "Antígenos febriles"],
  },
  {
    icon: Activity,
    title: "Pruebas Hormonales",
    text: "Balance endocrino, tiroideo y reproductivo.",
    items: ["Perfil tiroideo: T3, T4, TSH", "Perfil ginecológico y fertilidad", "Prolactina y progesterona", "Cortisol y testosterona"],
  },
  {
    icon: Bug,
    title: "Microbiología",
    text: "Aislamiento bacteriano y susceptibilidad antibiótica.",
    items: ["Cultivos y antibiogramas", "Exudados faríngeos", "Baciloscopías seriadas", "Cultivos de secreciones"],
  },
  {
    icon: FlaskConical,
    title: "Pruebas Especiales",
    text: "Perfiles quirúrgicos y biomarcadores específicos.",
    items: ["Perfiles preoperatorios", "Control prenatal trimestral", "Antígeno prostático (PSA)", "Hemoglobina glicosilada (HbA1c)"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-900/5 px-4 py-1.5 text-xs font-semibold text-brand-800">
            <FlaskConical className="h-3.5 w-3.5" />
            Análisis clínicos integrales
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-brand-950 md:text-4xl">
            Servicios de laboratorio
          </h2>
          <p className="mt-4 text-brand-900/70">
            Contamos con una amplia gama de análisis clínicos realizados con
            altos estándares de calidad, calibración periódica y control
            biológico.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, items }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-brand-900/5 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-mint-500">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-brand-950">{title}</h3>
              <p className="mt-1 text-sm text-brand-900/60">{text}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-brand-900/70">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-mint-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-900 p-6 text-white sm:flex-row">
          <p className="text-sm text-white/80">
            Contamos con diferentes pruebas y perfiles adaptados a tus
            indicaciones médicas. Consulta disponibilidad y requisitos
            directamente con nuestro personal.
          </p>
          <a
            href="#contacto"
            className="flex-none rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:bg-mint-100"
          >
            Consultar por un examen específico
          </a>
        </div>
      </div>
    </section>
  );
}
