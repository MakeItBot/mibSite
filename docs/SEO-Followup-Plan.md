# Plano de Follow-up SEO — makeit.bot

> Status: críticos técnicos implementados em 26-mai-2026. Este documento lista o que **VOCÊ** precisa fazer para fechar 100% do audit.

---

## ✅ Já implementado nesta sessão

- `robots.txt` na raiz com referência ao sitemap
- `sitemap.xml` na raiz (4 URLs principais)
- `<link rel="canonical">` em todas as 4 páginas
- Open Graph completo (title, description, type, url, image, locale) nas 4 páginas
- Twitter Card (`summary_large_image` no index/press, `summary` nas privacy) nas 4 páginas
- JSON-LD: `Organization` + `WebSite` + `VideoGame` (Nonogram Zen) no index
- JSON-LD: `WebPage` na press.html
- References a `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` em todas as páginas
- `<meta name="author" content="MIB-Games">` em todas as páginas

---

## 🟥 PENDENTE — Você precisa fazer

### 1. ~~Criar os assets de imagem~~ ✅ FEITO (26-mai-2026)

Adicionados em `/assets/`:
- ✅ `favicon.ico`
- ✅ `favicon-16x16.png` / `favicon-32x32.png`
- ✅ `apple-touch-icon.png`
- ✅ `android-chrome-192x192.png` / `android-chrome-512x512.png`
- ✅ `site.webmanifest` (atualizado com paths, theme color e nome corretos)
- ✅ `logo_minimal.png` 1024×1024 → usado como OG image temporário
- ✅ `logo_full.png` → usado no Schema.org Organization logo

### 1b. 🟧 PENDENTE: og-image dedicado 1200×630

`logo_minimal.png` (1024×1024) é a melhor opção atual mas é quadrado — em Twitter/LinkedIn que esperam 2:1, vai cortar. Para preview ideal:

| Arquivo | Tamanho | Uso |
|---|---|---|
| `og-image.png` | **1200×630 px** (2:1 ratio) | Preview otimizado para WhatsApp/Twitter/LinkedIn/Discord |

Quando criar: substituir referências de `logo_minimal.png` por `og-image.png` em `index.html`, `press.html`, `manifesto.html`, `privacy/index.html`, `privacy/nonogram-zen.html` e voltar `twitter:card` para `"summary_large_image"` (atualmente `"summary"`).

Conteúdo sugerido para o OG: fundo `#0f1f0e`, lockup MIB-Games à esquerda, tagline "Logic puzzles that respect your time." à direita em Silkscreen amarelo.

### 2. Submeter no Google Search Console

1. Acesse https://search.google.com/search-console
2. Adicione propriedade `makeit.bot` (Domain property, requer DNS TXT)
3. Submeta `https://makeit.bot/sitemap.xml`
4. Use **URL Inspection** para `https://makeit.bot/` → "Request indexing"
5. Repita para `/press.html` e `/privacy/nonogram-zen.html`

### 3. Bing Webmaster Tools

Mesma operação em https://www.bing.com/webmasters — Bing ainda gera ~7% do tráfego de busca em PT/EN.

### 4. Validar structured data

- Cole `https://makeit.bot/` em https://search.google.com/test/rich-results
- Verifique que `Organization`, `WebSite` e `VideoGame` são detectados sem warnings
- Especialmente importante: o `VideoGame` é o que ativa **rich results** no Google quando alguém pesquisa "Nonogram Zen"

### 5. Adicionar headers de cache e segurança no Vercel

Editar `vercel.json` (atualmente quase vazio). Sugestão:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

---

## 🟧 IMPORTANTE — Quando tiver o link da Play Store

Atualizar nestes locais:

1. `index.html` — CTA do hero `href="#games"` → URL real da Play Store
2. `index.html` — "View on Google Play" no card da roster
3. `index.html` — `<meta property="og:url">` da seção games
4. **NOVO:** Adicionar ao JSON-LD `VideoGame` os campos:
   ```json
   "downloadUrl": "https://play.google.com/store/apps/details?id=bot.makeit.nonogramzen",
   "aggregateRating": { "@type": "AggregateRating", "ratingValue": "X.X", "ratingCount": "N" }
   ```
   (depois de ter avaliações reais — antes disso omitir)

---

## 🟨 MÉDIO PRAZO — Próximos 30 dias

### 6. Otimizar imagens quando vierem screenshots do jogo

- Servir em WebP com fallback PNG (`<picture>` element)
- Dimensões corretas via `srcset` para 1x / 2x / 3x
- `loading="lazy"` em tudo abaixo da dobra

### 7. Considerar páginas individuais por jogo

Quando lançar o segundo jogo (Nonogram Color), criar:
- `/games/nonogram-zen.html` (página dedicada com screenshots, features, schema VideoGame completo)
- `/games/nonogram-color.html`

Isso permite ranquear para queries específicas como "nonogram zen android download".

### 8. Criar /blog ou /devlog

Conteúdo é o motor n.º 1 de SEO orgânico. Mesmo 1 post por mês cobrindo:
- Por que escolhemos picross procedural
- Como decidimos sobre ads em jogos de relaxamento
- Devlog de produção numa motorhome

Cada post é uma porta de entrada nova no Google.

### 9. Hreflang / multilingual (decisão estratégica)

O site suporta 6 idiomas via JS, mas as URLs são idênticas → Google só indexa EN.

**Recomendação:** **NÃO** implementar URLs por idioma agora. O custo (rebuild de roteamento + sitemap multi-locale + hreflang tags) **não** se justifica enquanto o tráfego orgânico for baixo. Reavaliar quando >5k sessões/mês orgânicas.

Se reavaliar: estrutura `/pt/`, `/es/`, `/de/`, `/fr/`, `/it/` com `<link rel="alternate" hreflang="...">` em todas e `x-default` apontando para `/`.

---

## 🟦 BAIXO PRAZO — Quando o estúdio crescer

- Backlinks: enviar press release para [TouchArcade](https://toucharcade.com), [Droid Gamers](https://www.droidgamers.com), [Pocket Gamer](https://www.pocketgamer.com)
- Listar em diretórios indie: [itch.io](https://itch.io), [IndieDB](https://www.indiedb.com), [Reddit r/AndroidGaming]
- Schema `Review` quando ganhar reviews de imprensa
- Google Business Profile (se quiser indexar local — opcional para indie digital)

---

## Métricas para acompanhar

Configurar antes de qualquer outra otimização:
- **Google Search Console** — impressões / cliques / CTR / posição média
- **PageSpeed Insights** — LCP < 2.5s, INP < 200ms, CLS < 0.1 (já deve estar verde, dado o site ser estático)
- **Vercel Analytics** — sessões, geografia, dispositivos (ativar no painel Vercel, plano gratuito)

Revisar essas métricas a cada 30 dias.

---

*Última atualização: 26-mai-2026*
