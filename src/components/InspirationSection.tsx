const rooms = [
  {
    id: 1,
    name: 'Гостиная в стиле бохо',
    plants: ['Монстера', 'Фикус лировидный', 'Пальма арека'],
    key: 'Крупные листья + плетёные горшки + деревянные акценты',
    tags: ['Бохо', 'Просторно', 'Тропики'],
    image: 'https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/9947afde-3ac5-4fd1-bef6-d3d9b5ac2bc7.jpg',
  },
  {
    id: 2,
    name: 'Кабинет с акцентом на рабочее место',
    plants: ['Сансевиерия', 'Замиокулькас', 'Суккуленты'],
    key: 'Неприхотливые + улучшают воздух + не отвлекают',
    tags: ['Минимализм', 'Рабочее место', 'Просто'],
    image: 'https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/e3f72d0a-b6e4-4adf-a2ce-c3de40b78d7e.jpg',
  },
  {
    id: 3,
    name: 'Спальня-оазис',
    plants: ['Лаванда', 'Сциндапсус', 'Хлорофитум'],
    key: 'Очищают воздух + мягкие формы + без цветов с резким запахом',
    tags: ['Спальня', 'Спокойствие', 'Уют'],
    image: 'https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/9a10bf16-ed78-4578-ae7d-0089d9a29956.jpg',
  },
  {
    id: 4,
    name: 'Кухня-прованс',
    plants: ['Розмарин', 'Базилик', 'Мята', 'Лавр'],
    key: 'Травы на подоконнике в одинаковых горшках — декор и польза',
    tags: ['Кухня', 'Прованс', 'Полезно'],
    image: 'https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/d5447bed-8907-4fc1-821c-10ccde109d3f.jpg',
  },
  {
    id: 5,
    name: 'Ванная комната-спа',
    plants: ['Орхидея', 'Папоротник', 'Тропические мхи'],
    key: 'Влажность + тепло = идеальные условия. Белые горшки, натуральный камень.',
    tags: ['Ванная', 'СПА', 'Влажность'],
    image: 'https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/71f8a06f-70b1-4463-a2ec-bf14e044e08f.jpg',
  },
  {
    id: 6,
    name: 'Скандинавская студия',
    plants: ['Юкка', 'Кактус', 'Потос'],
    key: 'Белые стены + деревянный пол + минимум растений, максимум эффекта',
    tags: ['Скандинавский', 'Студия', 'Минимализм'],
    image: 'https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/079812f3-5cbc-48c5-9884-4e5ec6a0a41d.jpg',
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
              <div className="h-48 relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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