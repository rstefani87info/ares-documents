# Obiettivi del modulo `@ares/documents`

## Introduzione

`@ares/documents` è il motore documentale di aReS. Attualmente è un modulo **minimale** il cui scopo dichiarato ("Ares Documents engine") si concretizza in conversioni **Markdown ↔ HTML**: un helper `markdown.js` con due funzioni pure.

## Obiettivi principali

- Convertire HTML in Markdown (via `turndown`).
- Convertire Markdown in HTML (via `markdown-it`).
- Fornire utilities di elaborazione documentale riusabili dagli altri moduli aReS.

## Responsabilità

- `markdown.js`:
  - `htmlToMarkdown(htmlString, options)` → usa `TurndownService` per trasformare HTML in Markdown (con opzioni: `headingStyle`, `bulletListMarker`, `codeBlockStyle`, `emDelimiter`, `strongDelimiter`, `linkStyle`, ecc.).
  - `markdownToHtml(markdownString, options)` → usa `MarkdownIt` per rendere Markdown in HTML (opzioni: `html`, `xhtmlOut`, `breaks`, `linkify`, `typographer`, `quotes`, `highlight`).
  - `export default { htmlToMarkdown, markdownToHtml }`.
- `index.js`: punto di ingresso principale attualmente **vuoto** (solo header di author).

## Cosa il modulo NON fa

- **Non** fornisce CLI: nessun `bin`, nessun comando.
- **Non** gestisce documenti sul filesystem (salvataggio/indicizzazione): è solo il motore di conversione.
- **Non** ha dipendenze da altri moduli aReS (solo npm: `markdown-it`, `turndown`).
- **Non** implementa ancora alcuna pipeline documentale completa: il grosso della funzionalità è in `markdown.js`.
