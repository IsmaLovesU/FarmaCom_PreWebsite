import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-1.5 text-xs font-semibold text-mint-500">
            <MapPin className="h-3.5 w-3.5" />
            Canales de atención
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-brand-950 md:text-4xl">
            Estamos para atenderte
          </h2>
          <p className="mt-4 text-brand-900/70">
            Visítanos o comunícate con nosotros para cotizaciones, requisitos de
            ayuno y preparación para tus exámenes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-brand-900/5 bg-surface p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-mint-500">
              Laboratorio Clínico-Biológico
            </p>
            <h3 className="mt-1 text-2xl font-extrabold text-brand-950">
              Ismalej Prado
            </h3>
            <p className="text-sm text-brand-900/60">
              Rabinal, Baja Verapaz, Guatemala
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-none text-brand-900/50" />
                <div>
                  <p className="text-xs text-brand-900/50">Teléfono directo</p>
                  <p className="text-sm font-semibold text-brand-950">
                    (+502) 7938-0000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-none text-brand-900/50" />
                <div>
                  <p className="text-xs text-brand-900/50">WhatsApp de atención</p>
                  <p className="text-sm font-semibold text-brand-950">
                    +502 0000-0000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-brand-900/50" />
                <div>
                  <p className="text-xs text-brand-900/50">Dirección física</p>
                  <p className="text-sm font-semibold text-brand-950">
                    Rabinal, Baja Verapaz (ubicación céntrica)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-none text-brand-900/50" />
                <div>
                  <p className="text-xs text-brand-900/50">Horario de atención</p>
                  <p className="text-sm font-semibold text-brand-950">
                    Lunes a viernes: 6:30 AM – 6:00 PM
                  </p>
                  <p className="text-sm font-semibold text-brand-950">
                    Sábados: 7:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/50200000000"
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                <MessageCircle className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
              <a
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-900/15 px-5 py-3 text-sm font-semibold text-brand-900 transition hover:bg-brand-900/5"
              >
                <Navigation className="h-4 w-4" />
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-brand-900/5 bg-mint-100">
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-3 p-8 text-center">
              <MapPin className="h-10 w-10 text-brand-900/40" strokeWidth={1.5} />
              <p className="text-sm font-semibold text-brand-900/70">
                Mapa de ubicación
              </p>
              <p className="max-w-xs text-xs text-brand-900/50">
                Rabinal, Baja Verapaz · Fácil acceso peatonal y vehicular
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
