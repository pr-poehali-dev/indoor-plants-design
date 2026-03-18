const rooms = [
  {
    id: 1,
    name: 'Гостиная в стиле бохо',
    plants: ['Монстера', 'Фикус лировидный', 'Пальма арека'],
    key: 'Крупные листья + плетёные горшки + деревянные акценты',
    emoji: '🛋️',
    tags: ['Бохо', 'Просторно', 'Тропики'],
    bg: 'hsl(38 30% 88%)',
  },
  {
    id: 2,
    name: 'Кабинет с акцентом на рабочее место',
    plants: ['Сансевиерия', 'Замиокулькас', 'Суккуленты'],
    key: 'Неприхотливые + улучшают воздух + не отвлекают',
    emoji: '💻',
    tags: ['Минимализм', 'Рабочее место', 'Просто'],
    bg: 'hsl(var(--sage-pale))',
  },
  {
    id: 3,
    name: 'Спальня-оазис',
    plants: ['Лаванда', 'Сциндапсус', 'Хлорофитум'],
    key: 'Очищают воздух + мягкие формы + без цветов с резким запахом',
    emoji: '🛏️',
    tags: ['Спальня', 'Спокойствие', 'Уют'],
    bg: 'hsl(260 15% 90%)',
  },
  {
    id: 4,
    name: 'Кухня-прованс',
    plants: ['Розмарин', 'Базилик', 'Мята', 'Лавр'],
    key: 'Травы на подоконнике в одинаковых горшках — декор и польза',
    emoji: '🍳',
    tags: ['Кухня', 'Прованс', 'Полезно'],
    bg: 'hsl(80 20% 88%)',
  },
  {
    id: 5,
    name: 'Ванная комната-спа',
    plants: ['Орхидея', 'Папоротник', 'Тропические мхи'],
    key: 'Влажность + тепло = идеальные условия. Белые горшки, натуральный камень.',
    emoji: '🛁',
    tags: ['Ванная', 'СПА', 'Влажность'],
    bg: 'hsl(var(--accent))',
  },
  {
    id: 6,
    name: 'Скандинавская студия',
    plants: ['Юкка', 'Кактус', 'Потос'],
    key: 'Белые стены + деревянный пол + минимум растений, максимум эффекта',
    emoji: '🏠',
    tags: ['Скандинавский', 'Студия', 'Минимализм'],
    bg: 'hsl(200 10% 90%)',
  },
];

const styles = [
  { name: 'Скандинавский', desc: 'Белое, светлое дерево, немного зелени', plants: 'Юкка, сансевиерия, кактусы' },
  { name: 'Бохо', desc: 'Плетёные кашпо, много зелени, разные уровни', plants: 'Монстера, пальмы, потос, фикус' },
  { name: 'Японский', desc: 'Минимум, баланс, 1–3 растения', plants: 'Бонсай, бамбук, сциндапсус' },
  { name: 'Лофт', desc: 'Кирпич, металл, крупные растения', plants: 'Фикус, замиокулькас, кактусы' },
  { name: 'Тропический', desc: 'Максимум зелени, крупные листья', plants: 'Монстера, бананы, орхидеи' },
];

export default function InspirationSection() {
  return (
    <section className="py-24 bg-[hsl(var(--warm-white))]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-sage text-sm font-golos tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sage inline-block" />
              Реальные интерьеры
            </div>
            <h2 className="font-cormorant text-5xl font-light leading-tight">
              Вдохновение<br />
              <em className="text-sage not-italic">по комнатам</em>
            </h2>
          </div>
          <p className="font-golos text-bark-light leading-relaxed md:max-w-sm">
            Как растения преображают разные пространства. 
            Выберите свою комнату — найдите идею.
          </p>
        </div>

        {/* Rooms mosaic */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="plant-card bg-white border border-stone overflow-hidden cursor-pointer group"
            >
              <div
                className="h-40 flex items-center justify-center text-6xl relative"
                style={{ background: room.bg }}
              >
                {room.emoji}
                <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end">
                  {room.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-golos px-2 py-0.5 bg-white/70 backdrop-blur-sm text-bark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-cormorant text-xl font-medium mb-2">{room.name}</h3>
                <p className="font-golos text-xs text-bark-light leading-relaxed mb-3 italic">
                  «{room.key}»
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {room.plants.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-golos px-2 py-0.5 bg-sage-pale text-sage"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Style guide */}
        <div className="bg-[hsl(var(--bark))] text-[hsl(var(--warm-white))] p-10">
          <h3 className="font-cormorant text-3xl font-light mb-2">
            Стиль интерьера → выбор растений
          </h3>
          <p className="font-golos text-sm opacity-60 mb-8">
            Растения — часть дизайна. Выберите те, что резонируют с вашим стилем.
          </p>
          <div className="space-y-4">
            {styles.map((s, i) => (
              <div
                key={s.name}
                className="flex items-start gap-6 py-4 border-b border-white/10 last:border-0"
              >
                <div className="font-cormorant text-4xl opacity-20 font-light w-8 flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-cormorant text-xl font-medium mb-1">{s.name}</div>
                  <div className="font-golos text-sm opacity-60 mb-1">{s.desc}</div>
                  <div className="font-golos text-xs opacity-50">🌿 {s.plants}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
