import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FlaskConical, Menu, ShieldCheck, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/#servicios", label: "Servicios" },
  { to: "/#nosotros", label: "Nosotros" },
  { to: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/5 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900 text-white">
            <FlaskConical className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-brand-950">
              Laboratorio Ismalej Prado
            </span>
            <span className="block text-xs font-medium tracking-wide text-mint-500">
              RABINAL · BAJA VERAPAZ
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className="text-sm font-medium text-brand-900/70 transition hover:text-brand-950"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/resultados"
            className="flex items-center gap-2 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-900/20 transition hover:bg-brand-800"
          >
            <ShieldCheck className="h-4 w-4" />
            Consultar resultados
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-900/5 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-brand-900/80"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/resultados"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <ShieldCheck className="h-4 w-4" />
              Consultar resultados
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
