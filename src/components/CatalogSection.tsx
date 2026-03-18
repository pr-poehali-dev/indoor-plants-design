import { useState } from 'react';
import Icon from '@/components/ui/icon';

const plants = [
  {
    id: 1, name: 'Монстера делициоза', latin: 'Monstera deliciosa',
    light: 'Яркий рассеянный', water: 'Редкий', difficulty: 'Легко',
    size: 'Крупное', placement: 'Угол, у окна', humidity: 'Высокая',
    description: 'Королева тропических интерьеров. Крупные резные листья делают её архитектурным акцентом любой комнаты.',
    tags: ['Тропики', 'Бохо', 'Лофт'], emoji: '🌿', color: 'hsl(100 20% 85%)',
    care: { watering: 'Раз в 7–10 дней', fertilize: 'Раз в 2 недели летом', repot: 'Раз в 2 года' },
  },
  {
    id: 2, name: 'Сансевиерия', latin: 'Sansevieria trifasciata',
    light: 'Любое', water: 'Очень редкий', difficulty: 'Очень легко',
    size: 'Среднее', placement: 'Везде', humidity: 'Низкая',
    description: 'Самое неприхотливое растение. Очищает воздух, переносит тень. Идеально для начинающих.',
    tags: ['Минимализм', 'Офис', 'Спальня'], emoji: '🗡️', color: 'hsl(80 15% 85%)',
    care: { watering: 'Раз в 2–3 недели', fertilize: 'Раз в месяц летом', repot: 'Раз в 3 года' },
  },
  {
    id: 3, name: 'Фикус лировидный', latin: 'Ficus lyrata',
    light: 'Яркий', water: 'Умеренный', difficulty: 'Средне',
    size: 'Крупное', placement: 'Центр комнаты, у окна', humidity: 'Средняя',
    description: 'Дизайнерский фаворит. Большие тёмно-зелёные листья в форме скрипки — живая скульптура.',
    tags: ['Скандинавский', 'Лофт', 'Минимализм'], emoji: '🎸', color: 'hsl(100 15% 82%)',
    care: { watering: 'Раз в 7 дней', fertilize: 'Раз в 2 недели', repot: 'Раз в 2 года' },
  },
  {
    id: 4, name: 'Потос золотистый', latin: 'Epipremnum aureum',
    light: 'Любое', water: 'Редкий', difficulty: 'Очень легко',
    size: 'Ампельное', placement: 'Полки, подвесные', humidity: 'Любая',
    description: 'Идеальный ампель для начинающих. Быстро растёт, красиво свисает с полок и макраме.',
    tags: ['Бохо', 'Офис', 'Спальня'], emoji: '🌱', color: 'hsl(90 20% 87%)',
    care: { watering: 'Раз в 10 дней', fertilize: 'Раз в месяц', repot: 'Раз в 2 года' },
  },
  {
    id: 5, name: 'Калатея', latin: 'Calathea',
    light: 'Рассеянный, тень', water: 'Частый', difficulty: 'Сложно',
    size: 'Среднее', placement: 'Вдали от окна', humidity: 'Очень высокая',
    description: 'Художница природы — её листья расписаны уникальными узорами. Требует внимания, но восхищает.',
    tags: ['Ботанический', 'Тропики'], emoji: '🎨', color: 'hsl(130 15% 85%)',
    care: { watering: 'Раз в 5 дней', fertilize: 'Раз в 2 недели', repot: 'Раз в год' },
  },
  {
    id: 6, name: 'Орхидея фаленопсис', latin: 'Phalaenopsis',
    light: 'Рассеянный', water: 'Редкий', difficulty: 'Средне',
    size: 'Небольшое', placement: 'Подоконник (без прямого солнца)', humidity: 'Средняя',
    description: 'Элегантные цветы на 2–4 месяца. В белых горшках — классика минимализма.',
    tags: ['Минимализм', 'Спальня', 'Японский'], emoji: '🌸', color: 'hsl(320 15% 90%)',
    care: { watering: 'Раз в 10 дней', fertilize: 'Раз в 2 недели при цветении', repot: 'После цветения' },
  },
  {
    id: 7, name: 'Замиокулькас', latin: 'Zamioculcas zamiifolia',
    light: 'Любое', water: 'Очень редкий', difficulty: 'Очень легко',
    size: 'Среднее', placement: 'Тёмный угол, офис', humidity: 'Любая',
    description: 'Блестящие тёмно-зелёные листья. Один из самых стойких жителей — переносит забывчивость.',
    tags: ['Офис', 'Лофт', 'Минимализм'], emoji: '💎', color: 'hsl(120 10% 82%)',
    care: { watering: 'Раз в 3 недели', fertilize: 'Раз в месяц летом', repot: 'Раз в 3 года' },
  },
  {
    id: 8, name: 'Пальма арека', latin: 'Dypsis lutescens',
    light: 'Яркий', water: 'Умеренный', difficulty: 'Средне',
    size: 'Крупное', placement: 'Угол с ярким светом', humidity: 'Высокая',
    description: 'Тропический акцент в полный рост. Увлажняет воздух, создаёт атмосферу курорта.',
    tags: ['Тропики', 'Бохо'], emoji: '🌴', color: 'hsl(80 20% 87%)',
    care: { watering: 'Раз в 5–7 дней', fertilize: 'Раз в 2 недели летом', repot: 'Раз в 2 года' },
  },
  {
    id: 9, name: 'Хлорофитум', latin: 'Chlorophytum comosum',
    light: 'Любое', water: 'Умеренный', difficulty: 'Очень легко',
    size: 'Ампельное', placement: 'Полки, подвесные', humidity: 'Любая',
    description: 'Классика советских квартир — снова в моде. Очищает воздух лучше многих. Дарит «детки».',
    tags: ['Ретро', 'Офис', 'Кухня'], emoji: '🌾', color: 'hsl(75 20% 87%)',
    care: { watering: 'Раз в 7 дней', fertilize: 'Раз в 2 недели', repot: 'Раз в 1–2 года' },
  },
  {
    id: 10, name: 'Суккуленты', latin: 'Succulentae',
    light: 'Прямое солнце', water: 'Редкий', difficulty: 'Очень легко',
    size: 'Маленькое', placement: 'Южный подоконник', humidity: 'Низкая',
    description: 'Идеально для стола и полки. Сотни форм и цветов. Не требуют внимания неделями.',
    tags: ['Минимализм', 'Офис', 'Скандинавский'], emoji: '🌵', color: 'hsl(60 20% 88%)',
    care: { watering: 'Раз в 2–3 недели', fertilize: 'Раз в месяц летом', repot: 'Раз в 2–3 года' },
  },
  {
    id: 11, name: 'Папоротник нефролепис', latin: 'Nephrolepis exaltata',
    light: 'Рассеянный', water: 'Частый', difficulty: 'Средне',
    size: 'Среднее', placement: 'Ванная, тень', humidity: 'Очень высокая',
    description: 'Пышный и воздушный. Создаёт ощущение леса. Обожает влажные ванные комнаты.',
    tags: ['Ботанический', 'Ванная', 'Тропики'], emoji: '🌾', color: 'hsl(110 15% 85%)',
    care: { watering: 'Раз в 4–5 дней', fertilize: 'Раз в 2 недели', repot: 'Раз в год' },
  },
  {
    id: 12, name: 'Хойя', latin: 'Hoya carnosa',
    light: 'Яркий рассеянный', water: 'Редкий', difficulty: 'Легко',
    size: 'Ампельное', placement: 'Подвесные, полки', humidity: 'Средняя',
    description: 'Восковые листья и ароматные цветы. Ленивая лиана — поливаешь редко, получаешь много.',
    tags: ['Бохо', 'Ампель'], emoji: '🍯', color: 'hsl(40 25% 88%)',
    care: { watering: 'Раз в 10–14 дней', fertilize: 'Раз в месяц летом', repot: 'Раз в 2–3 года' },
  },
];

const filterOptions = {
  light: ['Любое', 'Яркий', 'Яркий рассеянный', 'Рассеянный', 'Рассеянный, тень', 'Прямое солнце'],
  difficulty: ['Очень легко', 'Легко', 'Средне', 'Сложно'],
  size: ['Маленькое', 'Небольшое', 'Среднее', 'Крупное', 'Ампельное'],
};

export default function CatalogSection() {
  const [search, setSearch] = useState('');
  const [activeLight, setActiveLight] = useState('');
  const [activeDiff, setActiveDiff] = useState('');
  const [activeSize, setActiveSize] = useState('');
  const [selectedPlant, setSelectedPlant] = useState<typeof plants[0] | null>(null);

  const filtered = plants.filter((p) => {
    const matchSearch = !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchLight = !activeLight || p.light === activeLight;
    const matchDiff = !activeDiff || p.difficulty === activeDiff;
    const matchSize = !activeSize || p.size === activeSize;
    return matchSearch && matchLight && matchDiff && matchSize;
  });

  return (
    <section className="py-24 bg-[hsl(var(--cream))]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-sage text-sm font-golos tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-sage inline-block" />
            Интерактивный каталог
          </div>
          <h2 className="font-cormorant text-5xl font-light leading-tight mb-4">
            Найди своё<br />
            <em className="text-sage not-italic">растение</em>
          </h2>
          <p className="font-golos text-bark-light">
            Фильтруй по условиям — подберём то, что приживётся именно у тебя.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="bg-white border border-stone p-6 mb-8 space-y-4">
          <div className="relative">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-bark-light" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Найти растение по названию или тегу..."
              className="w-full pl-9 pr-4 py-2.5 border border-stone font-golos text-sm focus:outline-none focus:border-sage transition-colors"
            />
          </div>

          <div className="space-y-3">
            <div>
              <div className="font-golos text-xs text-bark-light mb-2 uppercase tracking-wide">Свет</div>
              <div className="flex flex-wrap gap-2">
                {filterOptions.light.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setActiveLight(activeLight === opt ? '' : opt)}
                    className={`px-3 py-1 text-xs font-golos border transition-colors ${
                      activeLight === opt
                        ? 'bg-sage text-primary-foreground border-sage'
                        : 'border-stone text-bark-light hover:border-sage hover:text-sage'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <div className="font-golos text-xs text-bark-light mb-2 uppercase tracking-wide">Сложность</div>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.difficulty.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setActiveDiff(activeDiff === opt ? '' : opt)}
                      className={`px-3 py-1 text-xs font-golos border transition-colors ${
                        activeDiff === opt
                          ? 'bg-sage text-primary-foreground border-sage'
                          : 'border-stone text-bark-light hover:border-sage hover:text-sage'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-golos text-xs text-bark-light mb-2 uppercase tracking-wide">Размер</div>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.size.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setActiveSize(activeSize === opt ? '' : opt)}
                      className={`px-3 py-1 text-xs font-golos border transition-colors ${
                        activeSize === opt
                          ? 'bg-sage text-primary-foreground border-sage'
                          : 'border-stone text-bark-light hover:border-sage hover:text-sage'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {(search || activeLight || activeDiff || activeSize) && (
            <button
              onClick={() => { setSearch(''); setActiveLight(''); setActiveDiff(''); setActiveSize(''); }}
              className="font-golos text-xs text-bark-light hover:text-foreground underline transition-colors"
            >
              Сбросить фильтры · {filtered.length} из {plants.length}
            </button>
          )}
        </div>

        {/* Plant grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((plant) => (
            <div
              key={plant.id}
              className="plant-card bg-white border border-stone overflow-hidden cursor-pointer"
              onClick={() => setSelectedPlant(plant)}
            >
              <div
                className="h-28 flex items-center justify-center text-5xl"
                style={{ background: plant.color }}
              >
                {plant.emoji}
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <div className="font-cormorant text-lg font-medium leading-tight">{plant.name}</div>
                  <div className="font-golos text-xs text-bark-light italic">{plant.latin}</div>
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-3">
                  {[
                    { icon: '☀️', val: plant.light },
                    { icon: '💧', val: plant.water },
                    { icon: '📏', val: plant.size },
                    { icon: '⭐', val: plant.difficulty },
                  ].map((item) => (
                    <div key={item.icon} className="flex items-center gap-1">
                      <span className="text-xs">{item.icon}</span>
                      <span className="font-golos text-xs text-bark-light truncate">{item.val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1">
                  {plant.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-xs font-golos px-1.5 py-0.5 bg-sage-pale text-sage">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <div className="font-cormorant text-2xl font-light text-bark-light">Ничего не найдено</div>
            <p className="font-golos text-sm text-bark-light mt-2">Попробуйте изменить фильтры</p>
          </div>
        )}

        {/* Plant modal */}
        {selectedPlant && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPlant(null)}
          >
            <div
              className="bg-white max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="h-40 flex items-center justify-center text-7xl relative"
                style={{ background: selectedPlant.color }}
              >
                {selectedPlant.emoji}
                <button
                  onClick={() => setSelectedPlant(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-cormorant text-2xl font-medium">{selectedPlant.name}</h3>
                  <p className="font-golos text-sm italic text-bark-light">{selectedPlant.latin}</p>
                </div>

                <p className="font-golos text-sm text-bark leading-relaxed mb-5">
                  {selectedPlant.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Освещение', value: selectedPlant.light, icon: '☀️' },
                    { label: 'Полив', value: selectedPlant.water, icon: '💧' },
                    { label: 'Сложность', value: selectedPlant.difficulty, icon: '⭐' },
                    { label: 'Размер', value: selectedPlant.size, icon: '📏' },
                    { label: 'Влажность', value: selectedPlant.humidity, icon: '🌫️' },
                    { label: 'Размещение', value: selectedPlant.placement, icon: '📍' },
                  ].map((item) => (
                    <div key={item.label} className="bg-secondary p-3">
                      <div className="font-golos text-xs text-bark-light mb-0.5">{item.icon} {item.label}</div>
                      <div className="font-golos text-sm font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-stone pt-4">
                  <div className="font-cormorant text-lg font-medium mb-3">Уход</div>
                  <div className="space-y-2">
                    {Object.entries(selectedPlant.care).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-sm font-golos">
                        <span className="text-bark-light capitalize">
                          {key === 'watering' ? 'Полив' : key === 'fertilize' ? 'Подкормка' : 'Пересадка'}
                        </span>
                        <span className="text-foreground">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {selectedPlant.tags.map((t) => (
                    <span key={t} className="text-xs font-golos px-2 py-1 bg-sage-pale text-sage">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
