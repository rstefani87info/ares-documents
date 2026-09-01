/** 
 * @author Roberto Stefani 
 * @module @ares/documents/markdown
 */

import TurndownService from "turndown";
import MarkdownIt from "markdown-it";

/**
 * Converte una stringa HTML in una stringa Markdown utilizzando Turndown.
 * 
 * @param {string} htmlString - La stringa in sintassi HTML da convertire
 * @param {Object} [options] - Opzioni di configurazione per Turndown (opzionale)
 * @param {string} [options.headingStyle="setext"] - Stile degli heading: "setext" o "atx"
 * @param {string} [options.hr="---"] - Caratteri usati per la linea orizzontale
 * @param {string} [options.bulletListMarker="*"] - Carattere per i punti elenco non ordinati
 * @param {string} [options.codeBlockStyle="indented"] - Stile dei blocchi di codice: "indented" o "fenced"
 * @param {string} [options.fence="```"] - Delimitatore per blocchi di codice "fenced"
 * @param {string} [options.emDelimiter="_"] - Delimitatore per enfasi (corsivo)
 * @param {string} [options.strongDelimiter="**"] - Delimitatore per enfasi forte (grassetto)
 * @param {string} [options.linkStyle="inlined"] - Stile dei link: "inlined" o "referenced"
 * @param {string} [options.linkReferenceStyle="full"] - Stile dei riferimenti link: "full", "collapsed", o "shortcut"
 * @returns {string} La stringa convertita in sintassi Markdown
 * 
 * @example
 * // Conversione base
 * const html = "<h1>Ciao</h1><p>Questo è <strong>grassetto</strong> e <em>corsivo</em>.</p>";
 * const markdown = htmlToMarkdown(html);
 * // Risultato:
 * // Ciao
 * // ====
 * //
 * // Questo è **grassetto** e _corsivo_.
 * 
 * @example
 * // Con opzioni personalizzate
 * const html = "<h1>Titolo</h1><ul><li>Elemento 1</li><li>Elemento 2</li></ul>";
 * const markdown = htmlToMarkdown(html, {
 *   headingStyle: "atx",
 *   bulletListMarker: "-"
 * });
 * // Risultato:
 * // # Titolo
 * //
 * // - Elemento 1
 * // - Elemento 2
 */
export function htmlToMarkdown(htmlString, options = {}) {
  const turndownService = new TurndownService(options);
  return turndownService.turndown(htmlString);
}

/**
 * Converte una stringa Markdown in una stringa HTML utilizzando markdown-it.
 * 
 * @param {string} markdownString - La stringa in sintassi Markdown da convertire
 * @param {Object} [options] - Opzioni di configurazione per markdown-it (opzionale)
 * @param {boolean} [options.html=false] - Abilita il rendering di tag HTML nativi nel markdown
 * @param {boolean} [options.xhtmlOut=false] - Usa slash di chiusura in stile XHTML per i tag vuoti (<br />)
 * @param {boolean} [options.breaks=false] - Converte i caratteri di newline in <br> (come GitHub)
 * @param {string} [options.langPrefix="language-"] - Prefisso per le classi CSS dei blocchi di codice con linguaggio
 * @param {boolean} [options.linkify=false] - Autoconverte URL simili a link in link cliccabili
 * @param {boolean} [options.typographer=false] - Abilita la sostituzioni tipografiche (virgolette "smart", ecc.)
 * @param {string} [options.quotes="“”‘’"] - Coppie di virgolette da usare se typographer è abilitato
 * @param {Function} [options.highlight] - Funzione highlight(code, lang) per evidenziare sintassi codice
 * @returns {string} La stringa convertita in sintassi HTML
 * 
 * @example
 * // Conversione base
 * const md = `# Ciao Mondo
 * 
 * Questo è un **test** di conversione _Markdown_ → [HTML](https://example.com).
 * 
 * * Elemento 1
 * * Elemento 2
 * * Elemento 3
 * 
 * \`\`\`js
 * const x = 42;
 * console.log(x);
 * \`\`\``;
 * const html = markdownToHtml(md);
 * // Risultato:
 * // <h1>Ciao Mondo</h1>
 * // <p>Questo è un <strong>test</strong> di conversione <em>Markdown</em> → <a href="https://example.com">HTML</a>.</p>
 * // <ul>
 * //   <li>Elemento 1</li>
 * //   <li>Elemento 2</li>
 * //   <li>Elemento 3</li>
 * // </ul>
 * // <pre><code class="language-js">const x = 42;
 * // console.log(x);</code></pre>
 * 
 * @example
 * // Con opzioni: linkify, breaks, typographer
 * const md = "Visita https://example.com\nè un sito 'interessante'.";
 * const html = markdownToHtml(md, {
 *   linkify: true,
 *   breaks: true,
 *   typographer: true
 * });
 * // Risultato:
 * // <p>Visita <a href="https://example.com">https://example.com</a><br>
 * // è un sito 'interessante'.</p>
 */
export function markdownToHtml(markdownString, options = {}) {
  const md = new MarkdownIt(options);
  return md.render(markdownString);
}

export default {
  htmlToMarkdown,
  markdownToHtml
};
