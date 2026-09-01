# Stile di sviluppo applicato — `@ares/documents`

## Standard di programmazione

- **JavaScript ESM** (package non dichiara `"type": "module"` esplicito ma usa `import`/`export`).
- **Funzioni pure, stateless**: `htmlToMarkdown` e `markdownToHtml` non hanno stato; incapsulano rispettivamente `TurndownService` e `MarkdownIt`.
- **JSDoc esteso**: entrambe le funzioni documentano parametri, opzioni e forniscono `@example` con input/output attesi.
- Naming: funzioni camelCase (`htmlToMarkdown`, `markdownToHtml`), default export oggetto con le due funzioni.

## Contratto directory/file

```
documents/
├─ .ares/                # MANUALE  (contesto + docs obbligatorie; README del context)
├─ .git/                 # GENERATO (controllo versione)
├─ .gitignore            # MANUALE
├─ index.js              # MANUALE  (entrypoint, attualmente vuoto/placeholder)
├─ markdown.js           # MANUALE  (conversioni HTML<->Markdown)
├─ package.json          # MANUALE
└─ README.md             # MANUALE
```

## MACRO-SUDDIVISIONE: GENERATO vs MANUALE

| Elemento | Categoria | Note |
|---|---|---|
| `index.js`, `markdown.js`, `package.json`, `README.md`, `.gitignore` | **MANUALE** | codice sorgente, mai rigenerato |
| `.ares/context/`, `.ares/docs/`, `.ares/tasks/` | **MANUALE** | documentazione di contesto; i file `it/` creati non vanno sovrascritti |
| `.git/`, `node_modules/` | **GENERATO** | mai versionato |

**Regola pratica**: il modulo non produce artefatti generati di build; ogni file nel repo è sorgente manuale.
