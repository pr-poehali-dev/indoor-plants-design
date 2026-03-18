const compositions = [
  {
    id: 1,
    title: 'Тропический угол',
    style: 'Бохо',
    plants: ['Монстера', 'Пальма арека', 'Фикус лировидный'],
    description: 'Крупные листья создают тропическую атмосферу. Разные высоты — фокус на архитектуре листьев.',
    placement: 'Угол у окна',
    light: 'Яркий рассеянный',
    emoji: '🌴',
    bg: 'hsl(var(--sage-pale))',
  },
  {
    id: 2,
    title: 'Минимализм на столе',
    style: 'Японский',
    plants: ['Сансевиерия', 'Кактус опунция', 'Суккулент хавортия'],
    description: 'Три разных текстуры, один монохромный горшок. Меньше — значит больше.',
    placement: 'Рабочий стол, полка',
    light: 'Любое',
    emoji: '🪴',
    bg: 'hsl(var(--accent))',
  },
  {
    id: 3,
    title: 'Зелёная стена',
    style: 'Скандинавский',
    plants: ['Потос золотистый', 'Традесканция', 'Хлорофитум'],
    description: 'Ампельные растения на разных уровнях создают живой зелёный фон. Легко в уходе.',
    placement: 'Стена, полки',
    light: 'Умеренный',
    emoji: '🌿',
    bg: 'hsl(42 25% 91%)',
  },
  {
    id: 4,
    title: 'Ванная оранжерея',
    style: 'Ботанический',
    plants: ['Орхидея фаленопсис', 'Папоротник нефролепис', 'Калатея'],
    description: 'Влаголюбивые растения процветают в ванной. Создают спа-атмосферу.',
    placement: 'Ванная комната',
    light: 'Рассеянный, тень',
    emoji: '🌸',
    bg: 'hsl(var(--sage-pale))',
  },
  {
    id: 5,
    title: 'Кухонная зелень',
    style: 'Провансальский',
    plants: ['Базилик', 'Розмарин', 'Мята', 'Тимьян'],
    description: 'Пряные травы в одинаковых белых горшочках — красиво и практично.',
    placement: 'Подоконник кухни',
    light: 'Яркое прямое',
    emoji: '🌱',
    bg: 'hsl(var(--accent))',
  },
  {
    id: 6,
    title: 'Вертикальный сад',
    style: 'Лофт',
    plants: ['Хойя', 'Цероперджия', 'Сциндапсус'],
    description: 'Ниспадающие лианы с макраме-подвесками. Игра с текстурами и уровнями.',
    placement: 'Подвесные горшки',
    light: 'Умеренный',
    emoji: '🪢',
    bg: 'hsl(42 25% 91%)',
  },
];

const tips = [
  {
    icon: '📐',
    title: 'Правило трёх высот',
    text: 'В каждой группе должно быть высокое, среднее и низкое растение — это создаёт визуальный ритм.',
  },
  {
    icon: '🎨',
    title: 'Контраст листьев',
    text: 'Сочетайте крупные и мелкие листья, гладкие и текстурированные, тёмные и светлые.',
  },
  {
    icon: '🔄',
    title: 'Нечётные числа',
    text: 'Группы из 3 или 5 растений выглядят естественнее, чем чётные. Природа не симметрична.',
  },
  {
    icon: '🌫️',
    title: 'Негативное пространство',
    text: 'Оставляйте место вокруг растений — они должны «дышать» и не конкурировать с мебелью.',
  },
];

export default function CompositionsSection() {
  return (
    <section className="py-24 bg-[hsl(var(--warm-white))]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-sage text-sm font-golos tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sage inline-block" />
              Идеи для интерьера
            </div>
            <h2 className="font-cormorant text-5xl font-light leading-tight">
              Готовые<br />
              <em className="text-sage not-italic">композиции</em>
            </h2>
          </div>
          <p className="font-golos text-bark-light leading-relaxed md:max-w-sm">
            Подборки растений, которые выглядят отлично вместе. 
            Каждая — для конкретного места и освещения.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {compositions.map((comp) => (
            <div
              key={comp.id}
              className="plant-card bg-white border border-stone overflow-hidden group cursor-pointer"
            >
              {/* Color top */}
              <div
                className="h-32 flex items-center justify-center text-5xl"
                style={{ background: comp.bg }}
              >
                {comp.emoji}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-cormorant text-xl font-medium">{comp.title}</h3>
                    <span className="font-golos text-xs text-bark-light">{comp.style}</span>
                  </div>
                  <span className="text-xs font-golos px-2 py-1 bg-sage-pale text-sage">
                    {comp.plants.length} растения
                  </span>
                </div>

                <p className="font-golos text-sm text-bark-light leading-relaxed mb-4">
                  {comp.description}
                </p>

                <div className="border-t border-stone pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-golos text-bark-light">
                    <span>📍</span>
                    <span>{comp.placement}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-golos text-bark-light">
                    <span>☀️</span>
                    <span>{comp.light}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {comp.plants.map((p) => (
                    <span
                      key={p}
                      className="text-xs font-golos px-2 py-0.5 bg-secondary text-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="bg-[hsl(var(--sage-pale))] p-10">
          <h3 className="font-cormorant text-3xl font-light mb-8 text-center">
            Принципы красивой расстановки
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="text-center">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <div className="font-cormorant text-lg font-medium mb-2">{tip.title}</div>
                <p className="font-golos text-sm text-bark-light leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
