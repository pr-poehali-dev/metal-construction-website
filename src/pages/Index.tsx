import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">ПСК</span>
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#home" className="hover:text-primary transition-colors">Главная</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Проекты</a></li>
            <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
          </ul>

          <Button className="hidden md:flex">Связаться</Button>
          
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Металлоконструкции и быстровозводимые здания
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Проектирование, изготовление и монтаж. Производители сэндвич панелей. Более 7 лет на рынке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8">
                Наши проекты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Получить консультацию
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover-scale">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Blocks" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">7+ лет</h3>
                <p className="text-muted-foreground">На рынке строительства</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover-scale">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Factory" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Производство</h3>
                <p className="text-muted-foreground">Сэндвич панелей</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover-scale">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="CheckCircle2" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold">Полный цикл</h3>
                <p className="text-muted-foreground">От проекта до монтажа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">О компании</h2>
              <p className="text-lg text-muted-foreground">ПСК - Первая Строительная Компания</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Опыт и надёжность</h3>
                    <p className="text-muted-foreground">Более 7 лет успешной работы на рынке строительства металлоконструкций и быстровозводимых зданий</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Cog" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Собственное производство</h3>
                    <p className="text-muted-foreground">Являемся производителем сэндвич панелей с контролем качества на всех этапах</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Комплексный подход</h3>
                    <p className="text-muted-foreground">Проектирование, изготовление, монтаж металлоконструкций и благоустройство территории</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Building2" className="text-primary mx-auto mb-4" size={80} />
                  <p className="text-lg font-semibold">Технологичные решения для вашего бизнеса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-lg text-muted-foreground">Полный спектр работ по металлоконструкциям</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="HardHat" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Проектирование</h3>
                  <p className="text-muted-foreground">Разработка технической документации и 3D-моделей металлоконструкций любой сложности</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Blocks" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Металлоконструкции</h3>
                  <p className="text-muted-foreground">Изготовление и монтаж каркасов зданий, ферм, колонн и других элементов</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Home" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Быстровозводимые здания</h3>
                  <p className="text-muted-foreground">Строительство складов, ангаров, производственных помещений</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Layers" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Сэндвич панели</h3>
                  <p className="text-muted-foreground">Производство и поставка качественных сэндвич панелей для стен и кровли</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Hammer" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Монтаж</h3>
                  <p className="text-muted-foreground">Профессиональная установка конструкций с соблюдением всех норм и стандартов</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Trees" className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Благоустройство</h3>
                  <p className="text-muted-foreground">Комплексное благоустройство прилегающей территории объектов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши проекты</h2>
              <p className="text-lg text-muted-foreground">Реализованные объекты</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Производственный комплекс", area: "2500 м²", type: "Склад" },
                { title: "Ангар для техники", area: "1200 м²", type: "Ангар" },
                { title: "Торговый павильон", area: "800 м²", type: "Павильон" },
                { title: "Логистический центр", area: "3500 м²", type: "Склад" },
                { title: "Производственный цех", area: "1800 м²", type: "Цех" },
                { title: "Складской комплекс", area: "4200 м²", type: "Склад" }
              ].map((project, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center relative overflow-hidden">
                    <Icon name="Building2" className="text-primary/40 group-hover:scale-110 transition-transform" size={80} />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.type}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Maximize2" size={16} />
                      <span>Площадь: {project.area}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Обсудим ваш проект</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <Icon name="MapPin" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 1</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@psk-build.ru</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Icon name="Clock" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={28} />
              <span className="text-xl font-bold">ПСК</span>
            </div>
            <p className="text-center text-sm opacity-90">
              © 2024 Первая Строительная Компания. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
