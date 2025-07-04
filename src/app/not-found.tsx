import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Сторінку не знайдено | V DUMTSI',
  description: 'Сторінка, яку ви шукаєте, не існує. Поверніться на головну сторінку V DUMTSI.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Decorative flowers */}
        <div className="text-8xl mb-8 space-x-4">
          <span className="inline-block animate-float">🌸</span>
          <span className="inline-block animate-float-delay-1">🌿</span>
          <span className="inline-block animate-float-delay-2">🌺</span>
        </div>

        {/* Error message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm">
          <h1 className="font-serif text-6xl text-dark-green mb-4">404</h1>
          <h2 className="font-serif text-2xl text-dark-green mb-6">
            Сторінку не знайдено
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Здається, ця сторінка зів'яла... 🥀<br />
            Але не хвилюйтеся, поверніться на головну, 
            щоб знайти те, що шукаєте.
          </p>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-green text-white font-medium rounded-lg hover:bg-forest transition-all duration-300 shadow-md hover:shadow-lg"
            >
              🏠 Повернутися на головну
            </Link>
            
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary text-dark-green font-medium rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              📞 Зв'язатися з нами
            </Link>
          </div>

          {/* Additional help */}
          <div className="mt-12 pt-8 border-t border-secondary/20">
            <p className="text-sm text-text-muted mb-4">
              Можливо, ви шукали щось із цього?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#masterclasses"
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors"
              >
                Майстер-класи
              </Link>
              <Link
                href="/#services"
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors"
              >
                Послуги
              </Link>
              <Link
                href="/#gallery"
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors"
              >
                Галерея
              </Link>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-sm text-text-muted italic">
          З любов'ю до квітів у Львові 🌸
        </p>
      </div>
    </div>
  );
} 