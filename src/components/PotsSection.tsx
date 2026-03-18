const materials = [
  {
    name: 'Терракота',
    emoji: '🏺',
    pros: ['Дышащий материал', 'Натуральный вид', 'Отлично для суккулентов'],
    cons: ['Тяжёлый', 'Быстро сохнет'],
    style: 'Средиземноморский, рустик, бохо',
    best: 'Кактусы, суккуленты, олива, пеларгония',
    color: 'hsl(22 60% 85%)',
  },
  {
    name: 'Белая керамика',
    emoji: '⬜',
    pros: ['Универсальна', 'Подчёркивает растение', 'Легко сочетается'],
    cons: ['Непрозрачная', 'Может выглядеть стерильно'],
    style: 'Минимализм, скандинавский, японский',
    best: 'Всё что угодно',
    color: 'hsl(0 0% 94%)',
  },
  {
    name: 'Плетёные кашпо',
    emoji: '🧺',
    pros: ['Лёгкие', 'Тёплая текстура', 'Скрывают пластик'],
    cons: ['Не водонепроницаемы', 'Быстро снашиваются'],
    style: 'Бохо, натуральный, тропический',
    best: 'Пальмы, монстеры, фикусы',
    color: 'hsl(38 40% 85%)',
  },
  {
    name: 'Цемент и бетон',
    emoji: '🪨',
    pros: ['Лаконично', 'Современно', 'Долговечно'],
    cons: ['Очень тяжёлые', 'Щелочная среда'],
    style: 'Лофт, индустриальный, минимализм',
    best: 'Суккуленты, сансевиерия, кактусы',
    color: 'hsl(210 5% 88%)',
  },
  {
    name: 'Стекло',
    emoji: '🫙',
    pros: ['Видно корни', 'Для суккулентов и луковиц', 'Эффектно'],
    cons: ['Хрупкое', 'Перегрев на солнце'],
    style: 'Ботанический, лаборатория, эко',
    best: 'Суккуленты, воздушные тилландсии, луковицы',
    color: 'hsl(180 20% 88%)',
  },
  {
    name: 'Металл',
    emoji: '🥫',
    pros: ['Стильно', 'Долговечно', 'Лёгкий вес'],
    cons: ['Нагревается', 'Не дышит', 'Ржавеет'],
    style: 'Лофт, индустриальный, ретро',
    best: 'Кактусы, суккуленты',
    color: 'hsl(200 10% 82%)',
  },
];

const rules = [
  {
    title: 'Один стиль горшков',
    text: 'Выберите 2–3 материала и придерживайтесь их в интерьере. Хаотичный набор горшков рассеивает внимание.',
    emoji: '🎯',
  },
  {
    title: 'Размер по корням',
    text: 'Горшок должен быть на 2–3 см шире корневого кома. Слишком большой — риск перелива.',
    emoji: '📏',
  },
  {
    title: 'Цвет дополняет',
    text: 'Тёплые горшки (терракота, охра) усиливают зелёный. Холодные (серый, синий) создают свежесть.',
    emoji: '🎨',
  },
  {
    title: 'Текстура = интерес',
    text: 'Гладкое растение + фактурный горшок. Пушистое растение + простая форма.',
    emoji: '✨',
  },
];

export default function PotsSection() {
  return (
    <section className="py-24 bg-[hsl(var(--cream))]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sage text-sm font-golos tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-sage inline-block" />
            Форма и материал
            <span className="w-8 h-px bg-sage inline-block" />
          </div>
          <h2 className="font-cormorant text-5xl font-light leading-tight mb-4">
            Горшки и кашпо:<br />
            <em className="text-sage not-italic">гайд по выбору</em>
          </h2>
          <p className="font-golos text-bark-light leading-relaxed">
            Правильный горшок — это не просто ёмкость, а часть образа вашего интерьера.
          </p>
        </div>

        {/* Materials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className="plant-card bg-white border border-stone overflow-hidden"
            >
              <div
                className="h-24 flex items-center justify-center text-4xl"
                style={{ background: mat.color }}
              >
                {mat.emoji}
              </div>
              <div className="p-5">
                <h3 className="font-cormorant text-xl font-medium mb-3">{mat.name}</h3>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="font-golos text-xs text-sage font-medium uppercase tracking-wide mb-1">Плюсы</div>
                    <ul className="space-y-0.5">
                      {mat.pros.map((p) => (
                        <li key={p} className="font-golos text-xs text-bark-light flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-sage inline-block flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-golos text-xs text-bark-light font-medium uppercase tracking-wide mb-1">Минусы</div>
                    <ul className="space-y-0.5">
                      {mat.cons.map((c) => (
                        <li key={c} className="font-golos text-xs text-bark-light flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-stone inline-block flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-stone pt-3 space-y-1.5">
                  <div className="font-golos text-xs text-bark-light">
                    <span className="font-medium text-foreground">Стиль: </span>{mat.style}
                  </div>
                  <div className="font-golos text-xs text-bark-light">
                    <span className="font-medium text-foreground">Для: </span>{mat.best}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div className="bg-white border border-stone p-10">
          <h3 className="font-cormorant text-3xl font-light mb-8 text-center">
            Правила сочетания
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rules.map((rule) => (
              <div key={rule.title} className="space-y-3">
                <div className="text-3xl">{rule.emoji}</div>
                <div className="font-cormorant text-lg font-medium">{rule.title}</div>
                <p className="font-golos text-sm text-bark-light leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color pairing table */}
        <div className="mt-10 p-8 border border-stone bg-white">
          <h3 className="font-cormorant text-2xl font-light mb-6">
            Цвет горшка → настроение интерьера
          </h3>
          <div className="space-y-3">
            {[
              { color: '#8B6E4E', name: 'Терракота / коричневый', mood: 'Тепло, земля, органика', plants: 'Монстера, пальма, фикус' },
              { color: '#C8C4B0', name: 'Белый / слоновая кость', mood: 'Чистота, лёгкость, скандинавизм', plants: 'Любые' },
              { color: '#748C74', name: 'Тёмно-зелёный', mood: 'Ботанический сад, глубина', plants: 'Папоротники, калатея' },
              { color: '#9B9B9B', name: 'Серый / бетон', mood: 'Урбан, лофт, современность', plants: 'Суккуленты, сансевиерия' },
              { color: '#E8D5B0', name: 'Песочный / бежевый', mood: 'Натуральность, мягкость, бохо', plants: 'Кактусы, юкка' },
            ].map((row) => (
              <div key={row.name} className="flex items-center gap-4 py-2 border-b border-stone last:border-0">
                <div
                  className="w-8 h-8 flex-shrink-0 rounded-full border border-stone"
                  style={{ background: row.color }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-golos text-sm font-medium">{row.name}</div>
                  <div className="font-golos text-xs text-bark-light">{row.mood}</div>
                </div>
                <div className="font-golos text-xs text-sage hidden md:block text-right max-w-[200px]">
                  {row.plants}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
