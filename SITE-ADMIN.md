# SITE-ADMIN — журнал адміністратора сайту

Сайт-портфоліо фотографині **Svitlana Kirianova** (Katowice, Polska).
Це головний файл «пам'яті» проєкту: хто його відкриє, має тут знайти, що зроблено,
де що лежить і що ще відкрите. **Після кожної зміни додавайте запис у розділ «Журнал змін».**

> Репозиторій на GitHub **публічний**. Не записуйте сюди паролі, ключі, приватні e-mail
> і платіжні дані. Усе, що тут є, може побачити будь-хто.

Версія файлу: 1.0 (2026-11-25)

---

## 1. Коротко

| Що | Значення |
|---|---|
| Живий сайт | https://photo-muse.pl |
| Технічна адреса Vercel | https://svitlana-kirianova-portfolio.vercel.app |
| Мови сайту | польська (основна, `/pl`) і англійська (`/en`) |
| Код | https://github.com/sartana1936/svitlana-kirianova-portfolio (гілка `main`) |
| Хостинг | Vercel (проєкт `svitlana-kirianova-portfolio`, команда `sartana1936`) |
| Реєстратор домену | Viperhost (TRUSTNET), домен `photo-muse.pl` |
| Фреймворк | Next.js 16 (App Router) + React 19 + Tailwind 4 + framer-motion |

**Як працює публікація:** змінили файли → `git push origin main` → Vercel сам збирає
і оновлює сайт приблизно за 1–2 хвилини. Окремо нічого заливати не треба.

---

## 2. Де що лежить

```
public/images/
  about/svitlana.JPG          Портрет у розділі «O mnie» (1667×2500)
  portfolio/
    portret-kobiecy/1…22.JPG  Жіночі портрети (22)
    portret-meski/1…15.JPG    Чоловічі портрети (15)
    pary/1…21.JPG             Пари / Love Story (21)
    rodzinne/1…13.JPG         Сімейні (13)
    slubne/1…29.JPG           Весільні (29)
src/
  app/[locale]/page.tsx       Головна сторінка
  app/[locale]/portfolio/     Сторінка повного портфоліо
  components/                 Hero, Navbar, PortfolioHeader, PortfolioGallery,
                              PortfolioTeaser, AboutSnippet, Footer, ContactProvider,
                              SocialContactLinks, InstagramNavLink, LanguageSwitcher
  components/icons/SocialIcons.tsx   Іконки Telegram, Instagram, Facebook, телефон
  i18n/dictionaries/pl.ts     ВСІ тексти польською
  i18n/dictionaries/en.ts     ВСІ тексти англійською (мають збігатися за структурою з pl.ts)
  i18n/types.ts               Тип словника: нове поле додавати і сюди, і в обидва словники
  lib/constants.ts            Контакти: Telegram, Instagram, Facebook, телефон
  lib/portfolio-data.ts       Кількість фото в категоріях, добір фото для головної
  middleware.ts               Перенаправляє `/` на `/pl`
```

### Правила для фото
- Імена файлів **суворо** `1.JPG`, `2.JPG`… підряд, розширення **великими літерами `.JPG`**
  (Vercel/Linux розрізняє регістр). Константа `IMAGE_EXT = ".JPG"` у `portfolio-data.ts`.
- Кількість фото в категорії задана в `CATEGORY_COUNTS` у `src/lib/portfolio-data.ts`.
  **Додали або видалили фото — змініть число там**, інакше з'являться «биті» картинки
  або фото не покажуться.
- Для головної (hero) беруться: `rodzinne/1`, `portret-kobiecy/16`, `pary/19`.
  Для блоку-тизера: `rodzinne/1`, `portret-meski/1`, `portret-kobiecy/1`.
  Тож не видаляйте й не міняйте місцями ці номери без правки `portfolio-data.ts`.
- Якість: фото бажано від ~2000 px по ширині. Портрет у «O mnie» колись був
  682×1024 і виглядав розмитим — замінено на оригінал від фотографині.

### Контакти (на сайті)
Кнопки в шапці (іконки Instagram, Facebook, телефон), у вікні «Napisz do mnie»
(Telegram, Instagram, Facebook, «Zadzwoń») і у футері. Усі дані беруться з
`src/lib/constants.ts`:
- Telegram: https://t.me/photokirianova
- Instagram: https://www.instagram.com/photokirianova/
- Facebook: https://www.facebook.com/share/1FdkX7MRTo/
- Телефон: +48 534 939 156

---

## 3. Домен і DNS (зроблено 2026-11-25)

- Домен `photo-muse.pl` куплено у Viperhost: перший рік 18,31 зл з VAT,
  **продовження до 25.11.2027, ~62,71 зл з VAT на рік**. Домен оформлено на
  фірму/ім'я Svitlana Kirianova; акаунт Viperhost зареєстровано на e-mail фотографині
  (дані й пароль тут не зберігаються — питати у Svitlana).
- DNS-сервери домену змінено на **Vercel DNS**: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
  (панель Viperhost → Usługi → домен → Serwery DNS → «зовнішні сервери»).
  Окремі A/CNAME-записи у Viperhost **не потрібні** — ними керує Vercel.
- У Vercel (Settings → Domains) додано `photo-muse.pl` і `www.photo-muse.pl` до Production.
  Перенаправлення `www` ↔ основний домен вимкнено, головна адреса — **без www**.
- Сертифікат HTTPS випускає Vercel сам. Якщо `www` показує «Invalid Configuration»
  кілька годин після змін — зачекати, потім натиснути «Оновити» у Vercel.
- Нагадування: за місяць до 25.11.2027 продовжити домен (Viperhost надсилає листи).

---

## 4. Як робити типові зміни

| Завдання | Що робити |
|---|---|
| Замінити текст | `src/i18n/dictionaries/pl.ts` і `en.ts` (обидва файли) |
| Змінити контакти | `src/lib/constants.ts` |
| Додати фото в категорію | покласти `N+1.JPG` у папку, збільшити число в `CATEGORY_COUNTS` |
| Замінити портрет «O mnie» | перезаписати `public/images/about/svitlana.JPG` (залишити назву) |
| Перевірити локально | `npm install`, потім `npm run dev` → http://localhost:3000/pl |
| Перевірка перед пушем | `npx tsc --noEmit` і `npx eslint src` |
| Опублікувати | `git add … && git commit && git push origin main` |

Перед змінами в коді прочитайте `AGENTS.md`: цей Next.js має відмінності від
стандартних знань, довідка лежить у `node_modules/next/dist/docs/`.

---

## 5. Журнал змін

Нові записи додавати **зверху**. Формат: дата — що зроблено — коміт.

- **2026-11-25** — Портрет «O mnie» замінено на повнорозмірне фото (1667×2500)
  з листа фотографині. Видалено невикористаний дубль `public/images/hero-main.JPG`.
  Створено цей файл. — `bfd2297`, видалення дубля і цей файл — наступний коміт
- **2026-11-25** — Домен `photo-muse.pl` куплено, підключено до Vercel (див. розділ 3).
  Код не змінювався.
- **2026-11-25** — Англійський заголовок головної: «Natural photography full of emotion»
  (без «in Silesia»). — `6bb46c8`
- **2026-11-25** — Польський заголовок головної: «Naturalna fotografia pełna emocji»
  (без «na Śląsku»). — `aaeda6c`
- **2026-11-17** — Додано кнопки Facebook і телефону (шапка, вікно контактів, футер).
  На мобільній шапці портфоліо замість «← Strona główna» лишається стрілка «←». — `1ec0832`
- **2026-11-17** — Новий опис «O mnie» (текст від фотографині), PL оригінал + англійський
  переклад, текст виводиться абзацами. — `41e030c`
- **2026-11-17** — Весільні фото: старі 10 видалено, завантажено 29 нових з галереї Vigbo
  (конвертовано з WebP у JPG), `slubne: 29`. — `e5060c2`
- **до 2026-11-17** — Запуск сайту, 81 фото портфоліо, hero-блок, мобільні виправлення,
  свайп-карусель у галереї (коміти `ad8d8c3` … `7fcfcc1`).

---

## 6. Побажання власника і відкриті питання

Побажання (вже враховані):
- Заголовок головної без згадки Śląsk: «Naturalna fotografia pełna emocji».
- Кнопки Facebook і телефону мають бути добре видні (круглі іконки в шапці).
- Усе оновлення йде через GitHub → Vercel, щоб зміни одразу були на живому домені.
- Спілкування з власником сайту — українською.

Відкрите / варто вирішити:
- [ ] Метаописи та рядок «Katowice & Śląsk, Polska» під заголовком на головній досі
      згадують Śląsk. Прибирати чи ні — власник не вказував (прибрано лише заголовок).
- [ ] У Vercel акаунт без 2FA (Vercel пропонує ввімкнути) — на розсуд власника.
- [ ] Vercel-план «Hobby»: за умовами він для некомерційного використання. Сайт
      комерційного фотографа — перевірити умови плану або перейти на Pro.
- [ ] Фото в галереях досить важкі (папка весільних ~64 МБ). Якщо сайт повільний,
      стиснути зображення.
- [ ] Старий технічний адрес `*.vercel.app` залишився робочим. Можна лишити як резервний.

---

## 7. Корисні посилання

- Репозиторій: https://github.com/sartana1936/svitlana-kirianova-portfolio
- Vercel (проєкт): https://vercel.com/sartana1936/svitlana-kirianova-portfolio
- Домени у Vercel: …/settings/domains
- Панель Viperhost: https://www.viperhost.pl/panel
