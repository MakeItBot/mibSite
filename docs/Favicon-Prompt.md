# Favicon — Text-to-Image Prompt

Prompts prontos para gerar o favicon e o `apple-touch-icon` da makeit.bot seguindo o [Brand Book §4](MIB-Games-Brand-Book.md).

> ⚠️ **Aviso honesto:** ferramentas text-to-image (Midjourney, DALL-E, Flux, Imagen, Ideogram) **erram texto pequeno com altíssima frequência**. Para um favicon com as letras ".MIB" legíveis em 32×32, **Ideogram 2.0** e **Flux 1.1 Pro** são os únicos com hit rate aceitável (>50%). Para Midjourney/DALL-E, espere 10–20 gerações até conseguir uma boa. Se não der, ver seção "Plano B" no fim.

---

## 🎯 Prompt principal (Midjourney v6 / Flux / Ideogram)

```
A square app icon in 1989 Nintendo Game Boy DMG aesthetic. Solid flat dark olive green background (#0f1f0e). Centered: a chunky pixel-art block in mustard yellow (#f5d76e) containing a black play-triangle glyph (▶) followed by the bold pixel text ".MIB" in dark olive green letters. The yellow block has a 4-pixel cascade shadow drop offset down-right in muted moss green (#5d8159), creating a layered retro depth effect. Style: 8-bit pixel art, sharp pixel edges, no anti-aliasing, no gradients, no glow, no rounded corners, no drop shadow beyond the cascade. Silkscreen pixel font. Game Boy palette only: dark green, mustard yellow, moss green. Square 1:1 ratio. Crisp, iconic, readable at 32x32 pixels. --ar 1:1 --style raw
```

### Negative prompt (Stable Diffusion / Flux)
```
photorealistic, 3D, gradient, glow, neon, bokeh, blurry, anti-aliasing, smooth edges, rounded corners, drop shadow, glassmorphism, transparent background, lens flare, watermark, signature, multiple icons, text outside the yellow block, decorative borders, frame, illustration of a person, mascot, character
```

---

## 🎯 Prompt alternativo (DALL-E 3 / GPT-4o image)

DALL-E entende prosa melhor que parameters. Use exatamente este texto:

```
Create a square mobile app icon in the visual style of a 1989 Nintendo Game Boy game. The background is solid flat dark olive green, hex code #0f1f0e — no gradient, no texture, no shadow on the background. Centered in the icon, place a chunky horizontal rectangle filled with mustard yellow, hex code #f5d76e. Inside this yellow rectangle, draw a small black filled triangle pointing right (▶), followed immediately by the pixel-art bold text ".MIB" rendered in dark olive green letters that match the background color. The text should look like the Silkscreen pixel font: blocky, monospace, retro, no smoothing.

Behind the yellow rectangle, add a cascade shadow effect: an identical yellow rectangle silhouette in muted moss green (hex #5d8159), offset 4 pixels down and 4 pixels to the right, creating a layered 8-bit depth illusion.

Style requirements: strict pixel art, sharp pixel edges, no anti-aliasing, no gradients anywhere, no glow, no outer glow, no rounded corners, no drop shadows beyond the moss-green cascade. The icon must read cleanly at 32x32 pixels. Game Boy DMG palette only — three colors total: dark olive green, mustard yellow, moss green. Square 1:1 ratio. No frame, no border, no text outside the yellow rectangle.
```

---

## 🎯 Prompt enxuto (Ideogram — melhor texto)

Ideogram é a melhor escolha porque renderiza letras corretamente. Prompt mais direto:

```
App icon, pixel art, Game Boy DMG aesthetic. Background: solid #0f1f0e (dark olive green). Center: yellow #f5d76e block containing black play triangle ▶ and pixel text ".MIB" in #0f1f0e. Yellow block has a cascade shadow offset 4px down-right in #5d8159 (moss green). Silkscreen font, 8-bit, no gradients, no rounded corners, no glow. Square 1:1.
```

Settings: `Style: Anime/3D = OFF`, `Magic Prompt = OFF`, `Aspect: 1:1`.

---

## 🎯 Variante 2 — Sem texto (mais seguro, recomendado)

Se "MIB" não sair legível em qualquer ferramenta, use uma versão **só com o play-triangle** — funciona melhor em 16×16/32×32 mesmo:

```
A square pixel-art app icon, 1989 Game Boy aesthetic. Solid dark olive green background (#0f1f0e). Centered: a large chunky mustard yellow square block (#f5d76e) with a single bold black play-triangle ▶ centered inside. Behind it, a cascade shadow in moss green (#5d8159), offset 4 pixels down-right. 8-bit pixel art, sharp edges, no gradients, no glow, no rounded corners. Three-color Game Boy palette only. Crisp at 32x32 pixels. Square 1:1.
```

**Por que isso pode ser preferível:** o glifo ▶ sozinho é mais memorável e legível que ".MIB" em escala de favicon. O wordmark completo "makeit.bot" já fica no topbar do site — o favicon não precisa repetir.

---

## 📐 Especificações de exportação (independentemente da ferramenta)

Depois de gerar, criar 5 arquivos:

| Arquivo | Tamanho | Localização | Formato |
|---|---|---|---|
| `favicon.svg` | vetor | `/assets/favicon.svg` | SVG (refazer no Figma se a IA der raster) |
| `favicon.ico` | 32×32 + 16×16 | `/favicon.ico` (raiz) | ICO multi-res via [favicon.io/favicon-converter](https://favicon.io) |
| `apple-touch-icon.png` | 180×180 | `/assets/apple-touch-icon.png` | PNG-24 |
| `og-image.png` | 1200×630 | `/assets/og-image.png` | PNG, com lockup completo + tagline |
| `logo.png` | 512×512 | `/assets/logo.png` | PNG-32 transparente para Schema.org |

---

## 🆘 Plano B — se a IA não conseguir entregar

Text-to-image **não** é a melhor ferramenta para isto. Alternativas mais confiáveis em ordem de qualidade:

1. **Eu (Claude) escrevo o SVG diretamente** — vetor exato com os tokens da paleta, garantido pixel-perfect. Custo: 5 minutos. *(Recomendado.)*
2. **[favicon.io/favicon-text](https://favicon.io/favicon-text/)** — gera favicon a partir de texto + cor de fundo + cor de texto + fonte. Resultado limpo, gratuito, instantâneo.
3. **Figma**: criar manualmente um quadrado 512×512, aplicar o lockup `▶.MIB` em Silkscreen 280pt amarelo `#f5d76e`, sombra cascata em `#5d8159`, fundo `#0f1f0e`. Export como SVG e PNG.
4. **[realfavicongenerator.net](https://realfavicongenerator.net)** — após ter a imagem-mãe (de qualquer fonte), gera todos os tamanhos automaticamente (incluindo Android, iOS, Safari pinned tab).

---

## 🧪 Checklist de aprovação antes de subir

Antes de declarar o favicon pronto, validar:

- [ ] Visível e reconhecível em 16×16 (testar no zoom 100% da aba do browser)
- [ ] Cor dominante é o amarelo `--pop` (não o verde escuro do fundo) — o favicon precisa "saltar" na aba
- [ ] Sem cantos arredondados na exportação PNG (iOS/Android aplicam máscara automática)
- [ ] Sem sombras externas — só a cascata interna em moss green
- [ ] Paleta restrita: 3 cores (dark olive `#0f1f0e`, mustard `#f5d76e`, moss `#5d8159`) — nenhuma outra
- [ ] Testar em **dark mode** e **light mode** do browser (Safari, Chrome, Firefox)
- [ ] Testar como apple-touch-icon: salvar a página na tela inicial do iOS — o ícone aparece corretamente?

---

*Última atualização: 26-mai-2026*
