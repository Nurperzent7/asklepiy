import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Коммерческое предложение — сайт офтальмологии, Алматы",
  description: "Сайт офтальмологической клиники в Алматы. 200 000 тенге, срок — один рабочий день.",
  robots: { index: false, follow: false },
};

const scope = [
  {
    n: "01",
    title: "Главная",
    text: "Клиника, четыре причины обратиться, услуги, врачи, отзывы, три шага записи и контакты Алматы.",
  },
  {
    n: "02",
    title: "Услуги",
    text: "Шесть страниц: лазерная коррекция, катаракта, витрэктомия, косоглазие, глаукома, сетчатка.",
  },
  {
    n: "03",
    title: "Врачи и отзывы",
    text: "Карточки врачей и блок отзывов. Видео открывается в Instagram клиники, ролики на сайт не копируются.",
  },
  {
    n: "04",
    title: "Запись",
    text: "Кнопка открывает WhatsApp филиала с готовым текстом. Адрес, часы и ссылка на 2GIS — на странице контактов.",
  },
  {
    n: "05",
    title: "Остальные страницы",
    text: "О клинике, новости, политика конфиденциальности. Меню на русском и казахском.",
  },
  {
    n: "06",
    title: "Телефон и компьютер",
    text: "Одна вёрстка на оба экрана, шапка, подвал и уведомление о cookie.",
  },
];

export default function ProposalPage() {
  return (
    <div className="kp-root min-h-full bg-[#f4f1ea] text-[#1c1915]">
      <div className="mx-auto flex max-w-[880px] items-center justify-between gap-4 px-4 py-4 print:hidden">
        <Link href="/" className="text-sm font-semibold text-[#0e7490]">
          Открыть пример сайта
        </Link>
        <div className="flex items-center gap-2">
          <a
            href="/KP-1029-oftalmologiya-almaty.docx"
            download="KP-1029-oftalmologiya-almaty.docx"
            className="rounded-full border border-[#1c1915] bg-white px-4 py-2 text-sm font-semibold text-[#1c1915]"
          >
            Скачать Word
          </a>
          <PrintButton />
        </div>
      </div>

      <article className="mx-auto max-w-[880px] bg-white px-6 py-8 sm:px-12 sm:py-12 print:max-w-none print:px-0 print:py-0">
        <header className="grid gap-6 border-b border-[#1c1915] pb-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#0e7490]">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</p>
            <h1 className="mt-2 text-[32px] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-[40px]">
              Сайт офтальмологической клиники
            </h1>
          </div>
          <dl className="text-sm leading-6 text-[#5c564e] sm:text-right">
            <div className="flex justify-between gap-6 sm:justify-end">
              <dt>Номер</dt>
              <dd className="font-semibold text-[#1c1915]">КП-1029</dd>
            </div>
            <div className="flex justify-between gap-6 sm:justify-end">
              <dt>Дата</dt>
              <dd className="font-semibold text-[#1c1915]">29 октября 2026</dd>
            </div>
            <div className="flex justify-between gap-6 sm:justify-end">
              <dt>Город</dt>
              <dd className="font-semibold text-[#1c1915]">Алматы</dd>
            </div>
          </dl>
        </header>

        <section className="mt-8 grid gap-px bg-[#e7e2d8] sm:grid-cols-2">
          <div className="bg-white px-1 py-5 sm:px-2">
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#8a8378]">СТОИМОСТЬ</p>
            <p className="mt-1 text-[40px] leading-none font-extrabold tracking-[-0.04em]">200&nbsp;000</p>
            <p className="mt-2 text-sm text-[#5c564e]">тенге, фиксированная сумма</p>
          </div>
          <div className="bg-white px-1 py-5 sm:px-6">
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#8a8378]">СРОК</p>
            <p className="mt-1 text-[40px] leading-none font-extrabold tracking-[-0.04em]">1 день</p>
            <p className="mt-2 text-sm text-[#5c564e]">Один рабочий день после оплаты и полного комплекта материалов.</p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-extrabold">Задача</h2>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-7 text-[#3f3a34]">
            Клинике в Алматы нужен сайт, с которого пациент сам доходит до записи: видит услуги, врачей, адрес и
            пишет в WhatsApp. Отдельной формы, личного кабинета и онлайн-оплаты в этом объёме нет.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-extrabold">Что входит</h2>
          <ol className="mt-4 divide-y divide-[#eeeae3] border-y border-[#eeeae3]">
            {scope.map((item) => (
              <li key={item.n} className="grid gap-1 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4">
                <span className="text-sm font-bold text-[#0e7490]">{item.n}</span>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-[#5c564e]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-extrabold">Как проходит день</h2>
          <table className="mt-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#1c1915] text-[11px] tracking-[0.14em] text-[#8a8378]">
                <th className="py-2 pr-4 font-bold">Время</th>
                <th className="py-2 font-bold">Работа</th>
              </tr>
            </thead>
            <tbody className="text-[#3f3a34]">
              <tr className="border-b border-[#eeeae3]">
                <td className="py-3 pr-4 align-top font-semibold whitespace-nowrap">Утро</td>
                <td className="py-3">Название, логотип, адрес Алматы, WhatsApp, часы, список услуг и врачей. Фото — если они уже есть.</td>
              </tr>
              <tr className="border-b border-[#eeeae3]">
                <td className="py-3 pr-4 align-top font-semibold">День</td>
                <td className="py-3">Сборка страниц, кнопки записи, проверка текста и контактов.</td>
              </tr>
              <tr className="border-b border-[#eeeae3]">
                <td className="py-3 pr-4 align-top font-semibold">Конец дня</td>
                <td className="py-3">Ссылка на сайт. Просмотр на телефоне и компьютере. Правки по текстам и контактам в составе работ.</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-6 text-[#5c564e]">
            Если материалы приходят после 12:00 по времени Алматы, день сдачи сдвигается на следующий рабочий день.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-extrabold">Стоимость</h2>
          <table className="mt-4 w-full text-sm">
            <tbody>
              <tr className="border-b border-[#eeeae3]">
                <td className="py-3 pr-4">Сайт офтальмологической клиники в Алматы, состав выше</td>
                <td className="py-3 text-right font-semibold whitespace-nowrap">200 000 тенге</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-extrabold">Итого к оплате</td>
                <td className="py-3 text-right text-lg font-extrabold whitespace-nowrap">200 000 тенге</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-6 text-[#5c564e]">
            Оплата в день старта. Домен, хостинг и реклама в эти 200 000 тенге не входят.
          </p>
        </section>

        <section className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-extrabold">Не входит</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#3f3a34]">
              <li>Съёмка, ретушь и медицинские протоколы.</li>
              <li>Чужие фотографии, логотип и тексты с других сайтов.</li>
              <li>Продвижение, контекстная реклама и поддержка после сдачи.</li>
              <li>Личный кабинет, расписание слотов, оплата на сайте, CRM.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-extrabold">Приёмка</h2>
            <p className="mt-3 text-sm leading-6 text-[#3f3a34]">
              Сайт принят, когда страницы из состава открываются, кнопка WhatsApp ведёт на номер клиники, а адрес и
              часы Алматы совпадают с переданными. Предложение действует 14 дней, до 12 ноября 2026.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 border-t border-[#1c1915] pt-6 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#8a8378]">ЗАКАЗЧИК</p>
            <p className="mt-8 border-b border-[#1c1915]" />
            <p className="mt-1 text-xs text-[#8a8378]">Подпись</p>
            <p className="mt-6 border-b border-[#1c1915]" />
            <p className="mt-1 text-xs text-[#8a8378]">Дата</p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[0.16em] text-[#8a8378]">ИСПОЛНИТЕЛЬ</p>
            <p className="mt-8 border-b border-[#1c1915]" />
            <p className="mt-1 text-xs text-[#8a8378]">Подпись</p>
            <p className="mt-6 border-b border-[#1c1915]" />
            <p className="mt-1 text-xs text-[#8a8378]">Дата</p>
          </div>
        </section>
      </article>
    </div>
  );
}
