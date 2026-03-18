interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[hsl(var(--bark))] text-[hsl(var(--warm-white))] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-cormorant text-xl font-medium">Зелёный дом</span>
            </div>
            <p className="font-golos text-sm opacity-60 leading-relaxed max-w-xs">
              Пространство для тех, кто любит живые растения и красивые интерьеры.
            </p>
          </div>

          <div>
            <div className="font-golos text-xs uppercase tracking-widest opacity-40 mb-4">Разделы</div>
            <nav className="space-y-3">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'compositions', label: 'Композиции' },
                { id: 'pots', label: 'Горшки и кашпо' },
                { id: 'inspiration', label: 'Вдохновение' },
                { id: 'catalog', label: 'Каталог растений' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="block font-golos text-sm opacity-60 hover:opacity-100 transition-opacity hover-line"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <div className="font-golos text-xs uppercase tracking-widest opacity-40 mb-4">Быстрый старт</div>
            <div className="space-y-3">
              <div className="font-golos text-sm opacity-60">
                🌱 Нет опыта? Начни с сансевиерии
              </div>
              <div className="font-golos text-sm opacity-60">
                🏠 Угловое пространство? — Монстера
              </div>
              <div className="font-golos text-sm opacity-60">
                💡 Мало света? — Замиокулькас
              </div>
              <div className="font-golos text-sm opacity-60">
                🛁 Ванная? — Орхидея, папоротник
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-golos text-xs opacity-30">
            © 2024 Зелёный дом. Сделано с 🌿
          </div>
          <div className="font-cormorant text-sm italic opacity-30">
            «Растение — лучший декор, который не выходит из моды»
          </div>
        </div>
      </div>
    </footer>
  );
}
