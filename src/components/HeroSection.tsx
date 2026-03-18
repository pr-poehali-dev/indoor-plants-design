interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--warm-white))]">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--sage-pale)) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 40%)`,
        }}
      />

      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-stone opacity-40" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-stone opacity-40" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center pt-24 pb-16">
        {/* Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-sage text-sm font-golos tracking-widest uppercase">
            <span className="w-8 h-px bg-sage inline-block" />
            Растения и интерьер
          </div>

          <h1 className="font-cormorant text-6xl md:text-7xl font-light leading-[1.05] text-foreground animate-fade-up">
            Пусть растения<br />
            <em className="text-sage not-italic">говорят</em><br />
            за вас
          </h1>

          <p className="font-golos text-bark-light text-lg leading-relaxed max-w-md animate-fade-up delay-200">
            Как расставить растения в интерьере, составить гармоничные композиции 
            и найти идеальный горшок — всё в одном месте.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <button
              onClick={() => onNavigate('compositions')}
              className="px-8 py-3.5 bg-sage text-primary-foreground font-golos text-sm tracking-wide hover:bg-sage-light transition-colors duration-300"
            >
              Смотреть композиции
            </button>
            <button
              onClick={() => onNavigate('catalog')}
              className="px-8 py-3.5 border border-foreground text-foreground font-golos text-sm tracking-wide hover:bg-secondary transition-colors duration-300"
            >
              Каталог растений
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-4 animate-fade-up delay-400">
            {[
              { num: '40+', label: 'растений в каталоге' },
              { num: '12', label: 'готовых композиций' },
              { num: '5', label: 'стилей интерьера' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-cormorant text-3xl font-light text-sage">{stat.num}</div>
                <div className="font-golos text-xs text-bark-light mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-in delay-300">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-stone" />
            <img
              src="https://cdn.poehali.dev/projects/6e47e170-1327-430e-8ce3-3e27dd07f30f/files/7c169cda-cb1f-47c4-b18b-7e8279555aa2.jpg"
              alt="Комнатные растения в интерьере"
              className="w-full aspect-[3/4] object-cover"
            />
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-lg max-w-[200px]">
              <div className="text-2xl mb-2">🌱</div>
              <div className="font-cormorant text-base font-medium">Монстера делициоза</div>
              <div className="font-golos text-xs text-bark-light mt-1">Южное или восточное окно</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bark-light animate-fade-in delay-500">
        <span className="font-golos text-xs tracking-widest uppercase">Листать</span>
        <div className="w-px h-10 bg-stone animate-pulse" />
      </div>
    </section>
  );
}
