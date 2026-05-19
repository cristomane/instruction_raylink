import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const OfferPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/5 bg-white/95 dark:bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-light hover:text-lime transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-montserrat text-sm">Назад</span>
          </button>
          <h1 className="font-montserrat text-lg font-bold text-dark dark:text-white uppercase tracking-wide">Публичная оферта</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-8 lg:p-12">
          <div className="prose dark:prose-invert max-w-none font-montserrat">
            <h1 className="text-3xl font-bold text-dark dark:text-white mb-8">ПУБЛИЧНАЯ ОФЕРТА</h1>
            <p className="text-gray-600 dark:text-gray-light mb-8">March 14, 2026<br/>Версия от 14 Марта 2026 года</p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Настоящая публичная Оферта (далее — «Оферта») является официальным предложением 
              владельца сервиса RayLink (далее — «Исполнитель»), в адрес пользователей услуг 
              сервиса RayLink, именуемых в дальнейшем «Заказчик».
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              В настоящей Публичной оферте содержатся условия заключения Договора об оказании 
              услуг (далее по тексту — «Договор об оказании услуг» и/или «Договор»).
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.1. Публичная оферта</strong> — настоящее предложение Исполнителя, адресованное 
              неопределенному кругу лиц, заключить договор оказания услуг дистанционным способом 
              (далее — «Договор») на условиях, содержащихся в настоящей Оферте.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.2. Договор</strong> – текст настоящей Оферты, акцептованный Заказчиком путем совершения 
              конклюдентных действий, предусмотренных настоящей Офертой.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.3. RayLink</strong> — сервис, предоставляющий услуги, расположенный в сети «Интернет» 
              по сетевому адресу: https://t.me/raylink_service_bot (далее — «Сервис»)
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.4. Акцепт Оферты</strong> — полное и безоговорочное принятие условий настоящей Оферты путём оплаты услуг Сервиса.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">2. ОБЩИЕ ПОЛОЖЕНИЯ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">2.1.</strong> Заказчик осуществляет Заказ Услуг дистанционным способом через сеть Интернет по сетевому адресу https://t.me/raylink_service_bot. Оплачивая Заказ, Заказчик подтверждает согласие с условиями настоящей Оферты.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">2.2.</strong> Заключая Договор, Заказчик подтверждает, что ознакомлен и согласен с условиями настоящего Договора.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">2.3.</strong> Наименование, количество, порядок и иные условия оказания Услуг определяются на основании сведений Исполнителя при оформлении заявки Заказчиком, либо устанавливаются посредством сети «Интернет» по сетевому адресу: https://t.me/raylink_service_bot
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">3. СТОИМОСТЬ И ОПЛАТА УСЛУГ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.1.</strong> Стоимость Услуг и порядок их оплаты указывается в Сервисе и может варьироваться в зависимости от выбранного тарифа.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.2.</strong> Исполнитель вправе в одностороннем порядке изменять стоимость Услуг. Новые цены вступают в силу с момента их публикации по сетевому адресу https://t.me/raylink_service_bot.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.3.</strong> Обязательства Заказчика по оплате считаются исполненными с момента поступления денежных средств на счет Исполнителя.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">4. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">4.1.</strong> Исполнитель обязуется оказать Услуги в соответствии с положениями настоящего Договора, в сроки и объеме, указанные в настоящем Договоре и (или) в порядке, указанном в Сервисе.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">4.2.</strong> Исполнитель обязуется предоставлять доступ к Услугам после получения оплаты.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">4.3.</strong> Заказчик обязан указывать достоверные данные при оформлении заказа и оплате.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">4.4.</strong> Заказчик обязуется не использовать Услуги в противоправных или запрещенных законом целях.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">5. СРОК ДЕЙСТВИЯ И ПОРЯДОК РАСТОРЖЕНИЯ ДОГОВОРА</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">5.1.</strong> Настоящая Оферта заключается между Сторонами на неопределенный срок, вступает в силу с момента размещения в Сервисе и действует до момента её отзыва Исполнителем.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">5.2.</strong> Заказчик вправе в любое время отказаться от Услуг, уведомив Исполнителя через службу поддержки Сервиса.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">6. КОНФИДЕНЦИАЛЬНОСТЬ И ОБРАБОТКА ДАННЫХ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">6.1.</strong> Все данные, предоставленные Заказчиком, обрабатываются в соответствии с законодательством РФ.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">6.2.</strong> Обработка данных регулируется Политикой конфиденциальности RayLink.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">7. ФОРС-МАЖОР</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">7.1.</strong> Стороны освобождаются от ответственности за неисполнение или ненадлежащее исполнение обязательств по Договору, если надлежащее исполнение оказалось невозможным вследствие непреодолимой силы.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">8. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">8.1.</strong> Договор, его заключение и исполнение регулируется действующим законодательством Российской Федерации.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">8.2.</strong> Все споры, возникающие в связи с исполнением настоящего Договора, решаются путем переговоров. В случае невозможности урегулирования разногласий спор передается на рассмотрение в суд по месту регистрации Исполнителя.
            </p>

            <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
              <p className="text-gray-600 dark:text-gray-light text-sm">
                📍 Контакты поддержки: <a href="https://t.me/raylink_service_bot" className="text-lime hover:underline">https://t.me/raylink_service_bot</a>
              </p>
              <p className="text-gray-600 dark:text-gray-light text-sm mt-4">
                Начиная использование Сервиса, Пользователь подтверждает, что ознакомлен с настоящей Офертой и безусловно принимает её условия.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OfferPage;
