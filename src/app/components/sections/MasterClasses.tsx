"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

type MasterClass = {
  title: string;
  description: string;
  duration: string;
  includes: string[];
  price?: string;
  priceBadge?: string;
};

const masterClasses: MasterClass[] = [
  {
    title: "Букет для себе чи на подарунок",
    description: "Для початківців і тих, хто хоче створювати букети самостійно.",
    duration: "2–3 години",
    includes: [
      "Види букетів",
      "Основи колористики: як поєднувати кольори, щоб було гармонійно",
      "Підбір квітів за сезонністю, фактурою, формою",
      "Підготовка матеріалу (відпоювання, зачистка стебел)",
      "Техніка складання \"спіраль\", точка збору, баланс, ритм",
      "Фініш: пакування і догляд після МК",
    ],
    price: "Вартість: від 1800 грн/особа",
    priceBadge: "від 1800₴",
  },
  {
    title: "Сезонна висадка композицій",
    description:
      "Практичний і функціональний. Створюємо живу композицію з сезонних рослин.",
    duration: "1,5–2 години",
    includes: [
      "Які рослини поєднувати між собою (з урахуванням умов та росту)",
      "Підбір горщиків, дренажу і ґрунту",
      "Як садити, доглядати і пересаджувати",
      "Декорування мохом, камінням, натуральними елементами",
    ],
    price: "Вартість: від 1500 грн/особа",
    priceBadge: "від 1500₴",
  },
  {
    title: "Композиція в гарбузі (осінь)",
    description:
      "Для сімейних зустрічей, вечірок, осінніх корпоративів. Робимо повноцінну композицію у справжньому гарбузі.",
    duration: "2–3 години",
    includes: [
      "Підготовка гарбуза: як зробити, щоб довго не псувався",
      "Підбір осінніх квітів і фактур: айстри, фізаліс, хризантеми, екзотичні сорти, листя, гілки",
      "Композиція без оази або з нею - залежно від формату",
      "Секрети стабільності та догляду",
    ],
    price: "Вартість: від 1800 грн/особа",
    priceBadge: "від 1800₴",
  },
  {
    title: "Зимовий віночок / композиція на стіл",
    description: "Для святкових подій, корпоративів.",
    duration: "2–3 години",
    includes: [
      "Основи побудови: круговий рух, симетрія/асиметрія",
      "Робота з хвойними: нобіліс, сосна, ялівець, кипарис та ін.",
      "Декор: свічки, сушені фрукти, шишки, текстиль",
      "Як продовжити життя композиції/віночка",
      "Безпечне використання свічок у флористиці, кріплення",
    ],
    price: "Вартість віночка: від 2000 грн/особа | Вартість композиції: від 2400 грн/особа",
    priceBadge: "від 2000₴ / 2400₴",
  },
  {
    title: "Композиція на кензані",
    description:
      "Для поціновувачів глибини, естетики, мінімалізму. Працюємо з кензаном - спеціальним інструментом, який утримує квіти у воді без оази.",
    duration: "1,5–2 години",
    includes: [
      "Акцент на асиметрію, повітря і природність форм",
      "Правила побудови в просторі (висота, нахили, діагоналі)",
      "Працюємо з квітами, гілками, травами",
      "Як зробити композицію довговічною і стильною",
    ],
    price: "Вартість: від 2200 грн/особа (*Кензан, піала, квіти забираєте з собою)",
    priceBadge: "від 2200₴",
  },
];

export default function MasterClasses() {
  return (
    <section id="masterclasses" className="py-20 bg-light-gray/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">
            Майстер-класи з флористики
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Зануртесь у творчість: ми навчаємо як новачків, так і тих, хто хоче поглибити свої знання. 
            На наших майстер-класах ви створюєте справжні композиції, дізнаєтесь про сезонність квітів 
            і отримуєте натхнення.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {masterClasses.map((masterClass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl text-dark-green mb-2">
                  {masterClass.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {masterClass.description}
                </p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-secondary text-sm rounded-full">
                    {masterClass.duration}
                  </span>
                  {masterClass.priceBadge && (
                    <span className="inline-block px-3 py-1 glass text-dark-green text-sm rounded-full">
                      {masterClass.priceBadge}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <h4 className="font-semibold text-dark-green text-sm uppercase tracking-wide">
                  Вивчаємо
                </h4>
                <ul className="space-y-2 list-disc pl-6">
                  {masterClass.includes.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="text-sm text-text-secondary leading-relaxed"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {masterClass.price && (
                <div className="text-sm text-dark-green/80 pt-4 mt-4 border-t border-secondary/20">
                  {masterClass.price}
                </div>
              )}

              <div className="mt-auto pt-6">
                <Button 
                  href="#contact" 
                  variant="secondary" 
                  className="w-full"
                  aria-label={`Записатися — ${masterClass.title}`}
                >
                  Записатися
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="font-serif text-2xl text-dark-green mb-4">
              Готові створювати красу?
            </h3>
            <p className="text-text-secondary mb-6">
              Приєднуйтесь до нашої творчої спільноти та відкрийте для себе 
              мистецтво флористики під керівництвом досвідченого майстра.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="tel:+380734304649" size="lg">
                Зателефонувати
              </Button>
              <Button 
                href="https://instagram.com/vdumtsi.studio.floristry" 
                variant="secondary" 
                size="lg"
                external
              >
                Написати в Instagram
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 