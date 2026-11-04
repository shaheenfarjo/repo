# Language standards

All copy lives in `lib/content/` (`en.ts`, `ar.ts`). English and Arabic share one
shape (`types.ts`), and the Arabic fully mirrors the English: as much Arabic as
English, written to read naturally, not translated word for word.

## English

- American spelling.
- Plain, specific words. No invented clients, results, testimonials, numbers
  or dates: only facts Shaheen has supplied or confirmed.
- One emphasized phrase per heading, marked `*like this*` in the copy
  (italic on the page).

## Arabic: which register where

| Use | Register | Examples |
| --- | --- | --- |
| Headings, body copy, fees, promises, FAQ answers, project and case pages, the sample report, privacy text | Modern Standard Arabic (MSA) | «أساعد المشاريع الصغيرة على النمو بخطة واضحة.» |
| The visitor's own pre-filled WhatsApp messages | Iraqi Arabic | «هلو شاهين، أريد أحجز مكالمة مجانية نص ساعة نحجي بيها عن شغلي.» |
| Short conversational buttons and prompts | Iraqi Arabic | «عندي مشروع»، «شوف شغلي»، «ما عندك وقت؟»، «ما تعرف من وين تبدي؟» |
| The IDEA's own brand line | Iraqi Arabic, as the brand writes it | «اعلگها» |

MSA is used where precision matters (prices, terms, commitments) and for
search. Iraqi Arabic is used where the visitor or Shaheen is speaking directly.

## Arabic: spelling and form

- **Tanween al-fath** goes on the letter before the alif: «شكرًا»، «معًا»، «شهريًا».
- **One language per page.** No Arabic on the English pages and no English on
  the Arabic pages. Exceptions: the language switch, which names the other
  language in its own script; web addresses, email, phone numbers and handles;
  module codes (M7, I1…); and The Iraqi Curator, whose name stays as written.
- **Brand and product names in Arabic:** «ايديا» for The IDEA, «الدرويد» for Droid,
  «پاس» for Pass, «ميرشانيا» for Merchania; Store «المتجر»، Plus «بلس»، Club «النادي»،
  Partners «منصة الشركاء»، Staff «لوحة الفريق»، Bulbs «نقاط بلبز»، Teachers' Lounge
  «غرفة المعلمين». Tech names are written in Arabic too (جيميناي، غوغل، فيرسل، جافاسكربت).
- **English lists:** serial (Oxford) comma before the last item.
- **Arabic punctuation:** «،» «؛» «؟».
- **Months:** Iraqi (Levantine) month names: كانون الثاني، شباط، آذار، نيسان،
  أيار، حزيران، تموز، آب، أيلول، تشرين الأول، تشرين الثاني، كانون الأول.
- **Numbers:** Western digits (1,000,000) for prices, phone numbers, years,
  dates and coordinates, with commas as thousands separators.
- **Ranges:** an en dash between numbers (2–3، 400,000–600,000). Where a range
  sits in right-to-left text, wrap it in a left-to-right isolate (U+2066 …
  U+2069) so the dash stays between the numbers.
- **Quotation marks:** «guillemets» around quoted titles and phrases.
- **Emphasis:** Arabic has no italic. The `*emphasized*` phrase is set at
  weight 600 instead.
- **Currency:** «دينار عراقي» in full for fees; «دينار» alone inside tables and
  calculators.

## Format

- Labels and numbers use IBM Plex Mono in English; Arabic labels use IBM Plex
  Sans Arabic, with no uppercase or letter spacing (letter spacing breaks
  Arabic letter joining).
- Every page works at 375 px without sideways scrolling; wide tables become
  stacked rows on phones.
- New pages go into `public/sitemap.xml` and the structured data in
  `components/page-head.tsx`.
