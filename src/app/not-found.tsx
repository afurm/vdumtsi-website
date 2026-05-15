import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сторінку не знайдено | V DUMTSI",
  description: "Сторінка, яку ви шукаєте, не існує. Поверніться на головну сторінку V DUMTSI.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-primary px-6 py-20">
      <div className="mx-auto max-w-2xl rounded-lg border border-dark-green/20 bg-white p-8 text-center">
        <p className="font-display text-7xl font-semibold leading-none text-secondary">
          404
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-none text-dark-green">
          Сторінку не знайдено
        </h1>
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          Поверніться на головну або перейдіть до форматів майстер‑класів.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-md bg-dark-green px-6 py-3 font-medium text-primary hover:bg-forest"
          >
            На головну
          </Link>
          <Link
            href="/#formats"
            className="rounded-md border border-secondary px-6 py-3 font-medium text-dark-green hover:bg-secondary/10"
          >
            Формати майстер‑класів
          </Link>
          <Link
            href="/#contact"
            className="rounded-md border border-secondary px-6 py-3 font-medium text-dark-green hover:bg-secondary/10"
          >
            Контакти
          </Link>
        </div>
      </div>
    </div>
  );
}
