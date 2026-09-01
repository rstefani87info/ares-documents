# Dipendenze aReS — `@ares/documents`

## Dipendenze (da `package.json`)

| Dipendenza | Tipo | Perché (uso reale) |
|---|---|---|
| `markdown-it` (npm ^15) | runtime | Rendering Markdown → HTML in `markdownToHtml` (`new MarkdownIt(options).render(...)`) |
| `turndown` (npm ^7) | runtime | Conversione HTML → Markdown in `htmlToMarkdown` (`new TurndownService(options).turndown(...)`) |
| `@ares/scd` | dev | tooling di sviluppo del workspace |

## Dipendenze `@ares/*` runtime

- **Nessuna**: il modulo non dichiara né importa alcun modulo `@ares/*` nel suo runtime. Non ci sono dipendenze aReS.

## Chi dipende da questo modulo

- **Nessun modulo** del monorepo dichiara `@ares/documents` come dipendenza diretta nei `package.json` esaminati.

## Note

- Pur essendo un "motore documentale", oggi il modulo è autocontenuto (solo librerie npm di conversione). È un candidato ad essere riusato da moduli che elaborano contenuti (docs, crawler, ecc.), ma al momento non è collegato a nessun altro modulo aReS.
