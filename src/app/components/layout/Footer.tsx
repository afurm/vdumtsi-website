import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-dark-green mb-4">V DUMTSI</h3>
            <p className="text-text-secondary">
              Флористична студія у Львові<br />
              З любовʼю до квітів 🌸
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-green mb-4">Швидкі посилання</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#masterclasses" className="text-text-secondary hover:text-secondary transition-colors">
                  Майстер-класи
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-text-secondary hover:text-secondary transition-colors">
                  Послуги висадки
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-text-secondary hover:text-secondary transition-colors">
                  Галерея робіт
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-dark-green mb-4">Контакти</h4>
            <div className="space-y-2">
              <p className="text-text-secondary">
                <a href="tel:+380734304649" className="hover:text-secondary transition-colors">
                  +38 (073) 430-46-49
                </a>
              </p>
              <p className="text-text-secondary">
                <a 
                  href="https://instagram.com/vdumtsi.studio.floristry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  @vdumtsi.studio.floristry
                </a>
              </p>
              <p className="text-text-secondary">
                Марʼяна Фурманець<br />
                Львів, Україна
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
            <p>© 2024 V DUMTSI. Всі права захищені.</p>
            <p className="mt-2 md:mt-0">З любовʼю до квітів у Львові 🌸</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 