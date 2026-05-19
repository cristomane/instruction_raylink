import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = () => {
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
          <h1 className="font-montserrat text-lg font-bold text-dark dark:text-white uppercase tracking-wide">Политика конфиденциальности</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-8 lg:p-12">
          <div className="prose dark:prose-invert max-w-none font-montserrat">
            <h1 className="text-3xl font-bold text-dark dark:text-white mb-8">ПОЛИТИКА ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
            <p className="text-gray-600 dark:text-gray-light mb-8">March 14, 2026<br/>Версия от 14 Марта 2026 года</p>
            
            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.1.</strong> Настоящая Политика обработки персональных данных (далее – Политика) разработана 
              в соответствии с Федеральным законом №152-ФЗ «О персональных данных» и определяет 
              порядок обработки персональных данных и меры по обеспечению безопасности 
              персональных данных сервиса RayLink (далее – Сервис).
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.2.</strong> Настоящая Политика обработки персональных данных регулирует правоотношения 
              по обработке персональных данных между пользователем сети «Интернет» (далее — 
              Клиент) и Сервисом.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.3.</strong> Клиент обязан полностью ознакомиться с настоящей Политикой до момента использования сервисов, предложений и услуг сайта https://t.me/raylink_service_bot (далее — Сайт).
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">1.4.</strong> Использование Сервиса означает согласие пользователя с настоящей Политикой.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">2. ОПРЕДЕЛЕНИЯ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">2.1. Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определённому или определяемому физическому лицу (субъекту персональных данных).
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">2.2. Обработка персональных данных</strong> — любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">2.3. Пользователь</strong> — физическое лицо, использующее функционал Сервиса.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">3. ПРИНЦИПЫ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.1.</strong> Сервис не собирает и не обрабатывает персональные данные в смысле, определённом Федеральным законом №152-ФЗ «О персональных данных».
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.2.</strong> Единственная техническая информация, доступная Сервису — это Telegram ID, получаемый в рамках взаимодействия с Telegram-ботом. Telegram ID не позволяет установить личность пользователя без дополнительной информации и не является персональными данными.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.3.</strong> Информация о платежах и платёжных данных пользователей не передается в Сервис. Все операции обрабатываются через платёжные агрегаторы (ЮKassa и др.). Сервис не имеет доступа к платёжным реквизитам.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">3.4.</strong> Сервис не требует от Пользователя предоставления паспортных данных, документов, фотографий или другой личной информации, кроме минимально необходимой для работы.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">4. ЦЕЛИ ОБРАБОТКИ ДАННЫХ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">4.1.</strong> Telegram ID используется исключительно для:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 ml-4">
              <li>автоматического предоставления доступа к Сервису;</li>
              <li>уведомления пользователя о статусе подписки;</li>
              <li>идентификации пользователя для использования услуг сервиса;</li>
              <li>улучшения качества обслуживания и разработки новых услуг;</li>
              <li>информирования пользователей о новых продуктах и услугах.</li>
            </ul>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">4.2.</strong> Сервис не использует данные для передачи третьим лицам в коммерческих целях.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">5. УСЛОВИЯ ОБРАБОТКИ И ХРАНЕНИЯ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">5.1.</strong> Telegram ID может храниться в базах данных сервиса исключительно в технических целях — для обеспечения авторизации и автоматической активации/деактивации доступа.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">5.2.</strong> Сервис не передает и не раскрывает Telegram ID третьим лицам, за исключением случаев, предусмотренных законодательством РФ.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">5.3.</strong> Данные пользователей обрабатываются и хранятся в течение срока, необходимого для достижения целей их обработки, либо в течение срока, предусмотренного законодательством.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">6. ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">6.1.</strong> Сервис принимает необходимые правовые, организационные и технические меры для защиты информации от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">6.2.</strong> Доступ к данным имеют только уполномоченные лица, ответственные за обработку и безопасность данных.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">6.3.</strong> Сервис использует современные методы шифрования и защиты данных при передаче и хранении информации.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">7. ПРАВА СУБЪЕКТА ДАННЫХ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">7.1.</strong> Субъект персональных данных имеет право на получение информации, касающейся обработки его персональных данных.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">7.2.</strong> Субъект персональных данных имеет право требовать от оператора уточнения его персональных данных, их блокирования или уничтожения.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">7.3.</strong> Для реализации прав обращайтесь в поддержку: https://t.me/raylink_service_bot
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">8. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">8.1.</strong> Сервис не продаёт и не передаёт данные в коммерческих целях без согласия Пользователя.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">8.2.</strong> Передача данных третьим лицам возможна только в случаях, предусмотренных законодательством РФ.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">9. ИЗМЕНЕНИЯ В ПОЛИТИКЕ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">9.1.</strong> Сервис оставляет за собой право вносить изменения в настоящую Политику. При внесении изменений в актуальной редакции указывается дата последнего обновления.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">9.2.</strong> Новая редакция Политики вступает в силу с момента её размещения.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">9.3.</strong> Продолжение использования Сервиса после внесения изменений означает согласие Пользователя с новой редакцией Политики.
            </p>

            <h2 className="text-xl font-bold text-dark dark:text-white mt-10 mb-4">10. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">10.1.</strong> Политика разработана в соответствии с законодательством Российской Федерации.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-dark dark:text-white">10.2.</strong> Все вопросы, не урегулированные настоящей Политикой, регулируются в соответствии с действующим законодательством РФ.
            </p>

            <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
              <p className="text-gray-600 dark:text-gray-light text-sm">
                📍 Контакты поддержки: <a href="https://t.me/raylink_service_bot" className="text-lime hover:underline">https://t.me/raylink_service_bot</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
