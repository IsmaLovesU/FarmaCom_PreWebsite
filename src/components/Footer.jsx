import { Link } from "react-router-dom";
import { Clock, FlaskConical, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-900/5 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-brand-900" />
              <span className="font-bold text-brand-950">Ismalej Prado</span>
            </div>
            <p className="mt-3 text-sm text-brand-900/60">
              Laboratorio Clínico-Biológico con rigor analítico, precisión
              computarizada y vocación humana al servicio de la salud en las
              Verapaces.
            </p>
            <p className="mt-3 text-sm font-medium text-brand-900/70">
              Rabinal, Baja Verapaz
            </p>
          </div>

          <div>
            <p className="font-semibold text-brand-950">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-900/60">
              <li><Link to="/" className="hover:text-brand-900">Inicio</Link></li>
              <li><a href={`${import.meta.env.BASE_URL}#servicios`} className="hover:text-brand-900">Catálogo de servicios</a></li>
              <li><a href={`${import.meta.env.BASE_URL}#nosotros`} className="hover:text-brand-900">Sobre nuestro laboratorio</a></li>
              <li><Link to="/resultados" className="hover:text-brand-900">Portal de resultados</Link></li>
              <li><a href={`${import.meta.env.BASE_URL}#contacto`} className="hover:text-brand-900">Contacto y ubicación</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-brand-950">Atención y contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-900/60">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> (+502) 7938-0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@laboratorioismalejprado.com
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 flex-none" />
                <span>
                  Lunes a viernes: 6:30 – 18:00
                  <br />
                  Sábados: 7:00 – 13:00
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-brand-950">Validación digital</p>
            <p className="mt-3 text-sm text-brand-900/60">
              Verifica la autenticidad de tus informes clínicos mediante el
              código QR impreso en tu orden o ingresando tu correlativo de
              acceso.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-mint-100 px-3 py-1.5 text-xs font-semibold text-mint-500">
              <ShieldCheck className="h-3.5 w-3.5" />
              Certificación diagnóstica válida
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-900/5 pt-6 text-xs text-brand-900/50 sm:flex-row">
          <p>© {year} Laboratorio Clínico-Biológico Ismalej Prado. Todos los derechos reservados.</p>
          <p>Rabinal, B.V., Guatemala</p>
        </div>
      </div>
    </footer>
  );
}
