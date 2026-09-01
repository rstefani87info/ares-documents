# Panoramica CLI — `@ares/documents`

**Il modulo non ha CLI.**

- Non è presente alcun campo `bin` in `package.json`.
- Non esiste alcuno script CLI né subcomando.

## Script npm

| Script | Comando |
|---|---|
| `test` | `echo "Error: no test specified" && exit 1` (placeholder, non esegue test reali) |

## Note

L'unico consumatore è programmatico: i moduli aReS che necessitano di conversioni Markdown/HTML importano `htmlToMarkdown` / `markdownToHtml` da `@ares/documents` (o da `@ares/documents/markdown`).
