# MIB-Games — Brand Book

> Documento de referência única para identidade visual e verbal do publisher MIB-Games e de todos os jogos do portfólio.
> Versão 1.0 — 26/Maio/2026

---

## 0. Princípio fundamental

> **Se o jogador não consegue dizer que é MIB-Games em 2 segundos olhando o ícone na Play Store, refaça o ícone.**

Reconhecimento é o motor do cross-promo. Cross-promo é o motor do portfólio. Portfólio é o modelo de negócio. Brand não é decoração — é infraestrutura de receita.

---

## 1. Identidade verbal

### 1.1 Missão
Construir puzzles de lógica que respeitam o tempo do jogador.

### 1.2 Tagline oficial
**"Logic puzzles that respect your time."**

Variações localizadas (já no `translations.js`):
- PT: *Puzzles que respeitam o seu tempo.*
- ES: *Puzzles que respetan tu tiempo.*
- DE: *Puzzles, die deine Zeit respektieren.*
- FR: *Des puzzles qui respectent votre temps.*
- IT: *Puzzle che rispettano il tuo tempo.*

### 1.3 Voice — 3 adjetivos
1. **Dry** — sem exclamações, sem "amazing!", sem "have fun!". Frases curtas.
2. **Calm** — não vendemos urgência. Não dizemos "AGORA", "ÚLTIMA CHANCE", "GRÁTIS POR TEMPO LIMITADO".
3. **Anti-dark-pattern** — falamos abertamente sobre o que NÃO fazemos (sem timers, sem nags, sem fake-IAP "ofertas").

### 1.4 Tone — modulação
| Contexto | Tom |
|---|---|
| Marketing (Play Store, site) | Sereno, declarativo. Vende dizendo "não vende". |
| In-game UI | Mínimo. Verbos no imperativo curto: "Solve", "Continue", "Skip". |
| Tutorial | Conciso, sem mascotes. Ensina por exemplo, não por texto. |
| Mensagens de erro | Honestas, sem culpar o usuário. "Cell can't be marked" não "Invalid input!". |
| Política de privacidade | Plain language, primeira pessoa do plural ("we"). |
| Resposta a review negativa | Curta, agradece, sem defensividade, sem "infelizmente nosso time...". |

### 1.5 Do's de copy

- ✅ "No timers. No nags. Just logic, made well."
- ✅ "Solve at your own pace."
- ✅ "Made by hand."
- ✅ "Free with optional in-app purchases" (nunca "Free!" sozinho)
- ✅ Pontuação inglesa: ponto final em frases declarativas. Em PT, mesmo padrão.

### 1.6 Don'ts de copy

- ❌ "Amazing puzzles!" / "Mind-blowing!" / "The BEST nonogram game!"
- ❌ "Click here", "Tap now", "Don't miss out"
- ❌ "Brain training" (cliché saturado — usar "logic puzzles")
- ❌ Emojis em UI (apenas em marketing leve quando justificado)
- ❌ All-caps em parágrafos (caps OK em labels de UI: "MENU", "SOLVE")
- ❌ Termos de marketing vazios: "revolutionary", "next-gen", "ultimate"

### 1.7 Pronome
- EN: **we / us** (sempre plural, mesmo sendo solo dev — soa profissional sem desonestidade)
- PT: **nós** (idem)
- Nunca "I", "eu", "my", "meu" em texto público — exceto em devlog/blog assinados pessoalmente

---

## 2. Sistema de cor — Game Boy DMG palette

### 2.1 Paleta canônica (DARK theme — default)

| Token | HEX | Uso |
|---|---|---|
| `--bg` | `#0f1f0e` | Fundo principal |
| `--bg-2` | `#1a3018` | Fundo de seções, topbar, footer |
| `--panel` | `#234221` | Cards, painéis, botões secundários |
| `--ink-dim` | `#5d8159` | Texto secundário, labels, separadores |
| `--ink` | `#9ec188` | Texto de corpo principal |
| `--ink-bright` | `#d5e4a8` | Texto headline, ênfase máxima |
| `--pop` | `#f5d76e` | **Accent primário** — CTAs, highlights, logo mark |
| `--pop-2` | `#e85d4d` | **Accent secundário** — alertas, hearts, erros |
| `--rule` | `#305030` | Linhas, bordas sutis |

### 2.2 Paleta LIGHT theme (espelho)

| Token | HEX |
|---|---|
| `--bg` | `#e8e9c4` |
| `--bg-2` | `#d9da9c` |
| `--panel` | `#f4f5d8` |
| `--ink-dim` | `#6b7a4a` |
| `--ink` | `#3a4828` |
| `--ink-bright` | `#1a2010` |
| `--pop` | `#c97c1a` |
| `--pop-2` | `#9a3a28` |
| `--rule` | `#b8b878` |

### 2.3 Regras de uso

1. **Sempre derivar variantes por jogo a partir desta paleta-base.** Cada jogo pode trocar `--pop` por outra cor (ex.: Nonogram Color usa `--pop: #d97757`), mas `--bg`, `--ink`, `--ink-bright` permanecem.
2. **Nunca usar gradiente em texto.** Cores são sólidas.
3. **Contraste mínimo:** texto sobre fundo ≥ 4.5:1 (WCAG AA). `--ink-bright` sobre `--bg` = 8.2:1 ✓.
4. **`--pop` é caro.** Usar com parcimônia — 1 elemento por viewport idealmente. Excesso vira ruído.

### 2.4 Variações permitidas por jogo

| Jogo | `--pop` permitido |
|---|---|
| Nonogram Zen | `#f5d76e` (canônico) |
| Nonogram Color | `#d97757` (laranja) |
| Sudoku Hex | `#6a9bcc` (azul) |
| Word Link | `#788c5d` (verde) |
| Idle Café | `#c97c1a` (âmbar) |

Restante da paleta = idêntica. Isso preserva reconhecimento do publisher mesmo trocando o highlight.

---

## 3. Tipografia

### 3.1 Famílias

| Família | Uso | Carregamento |
|---|---|---|
| **Silkscreen** (400, 700) | Display, headlines, labels de UI, botões | Google Fonts |
| **Pixelify Sans** (400-700) | Body, parágrafos, conteúdo longo | Google Fonts |

**Fallback obrigatório:** `monospace` (para que o estilo pixelado degrade de forma coerente caso a fonte não carregue).

### 3.2 Escala canônica

| Nível | Família | Tamanho | Peso | Letter-spacing | Uso |
|---|---|---|---|---|---|
| H1 (hero) | Silkscreen | `clamp(40px, 8vw, 88px)` | 700 | 0 | Título de página |
| H2 (section) | Silkscreen | `22-32px` | 700 | 0.02em | Seções |
| H3 | Silkscreen | `11px` | 700 | 0.06em UPPERCASE | Eyebrows / categorias |
| Eyebrow | Silkscreen | `9-10px` | 400/700 | 0.10em UPPERCASE | Labels acima de blocos |
| Body | Pixelify Sans | `16-18px` | 400-500 | 0 | Parágrafos |
| Caption | Pixelify Sans | `13-14px` | 400 | 0 | Notas, metadata |
| Button | Silkscreen | `11px` | 700 | 0.06em UPPERCASE | CTAs |
| Code | Silkscreen | `10px` | 400 | 0.04em | Snippets inline |

### 3.3 Regras
- **Headlines (Silkscreen) sempre em caixa natural** — não forçar uppercase via CSS exceto em labels/buttons/eyebrows.
- **Body (Pixelify Sans) com line-height 1.5-1.6** — pixel fonts precisam de respiro vertical.
- **`image-rendering: pixelated; -webkit-font-smoothing: none;`** em `body` global para preservar o look retro.
- **Nunca italicizar** Silkscreen — vira ilegível.
- **Nunca usar 3+ pesos** numa mesma tela.

---

## 4. Logo system

### 4.1 Lockup completo (oficial)

```
[▶.MIB]  makeit.bot
         indie puzzle studio
```

Composto por:
1. **Logo mark** — `▶.MIB` em caixa amarela (`--pop`) com sombra cascata em `--ink-dim`
2. **Wordmark** — `makeit` em `--ink-bright` + `.bot` em `--pop`
3. **Tag** — `indie puzzle studio` em `--ink-dim` (opcional, dropável em espaços pequenos)

### 4.2 Variantes

| Variante | Quando usar |
|---|---|
| Lockup completo | Topbar do site, cabeçalho de press kit |
| Logo mark sozinho (`▶.MIB`) | Favicons, ícones de app secundários, badge no canto de ícones de jogo |
| Wordmark sozinho | Footer compacto, citações in-line |
| Monocromático (1 cor) | Sobre fundos coloridos, watermarks, impressão B&W |

### 4.3 Clear-space
Mínimo de **1× altura do logo mark** em todos os lados. Nada (texto, imagem, borda) entra nesse espaço.

### 4.4 Tamanho mínimo
- Digital: 80 px de largura para o lockup completo, 32 px para o mark sozinho
- Físico: 20 mm largura para o lockup completo

### 4.5 Don'ts

- ❌ Não rotacionar
- ❌ Não aplicar gradiente, sombra extra, glow ou outline além do oficial
- ❌ Não trocar a cor do `.bot` accent (sempre `--pop`)
- ❌ Não substituir o `▶` por outro caractere
- ❌ Não esticar / distorcer

---

## 5. Ícone de jogo (Play Store) — sistema obrigatório

> **O ícone na Store é a única coisa que 80% dos potenciais jogadores verão.** Disciplina aqui não é estética — é receita.

### 5.1 Especificação técnica

| Atributo | Valor |
|---|---|
| Dimensões | 512 × 512 px |
| Formato | PNG-32 (com transparência) e PNG-24 (sem) |
| Color profile | sRGB |
| Peso máximo | 1 MB |

### 5.2 Estrutura de camadas

```
┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │ ← Safe zone: 64px de respiro de cada lado
│  │                           │  │
│  │   MECÂNICA CENTRAL        │  │ ← 384×384 central
│  │   (puzzle / símbolo       │  │
│  │    do jogo)               │  │
│  │                           │  │
│  │                           │  │
│  │                  ┌──────┐ │  │
│  │                  │ ▶.MIB│ │  │ ← Badge MIB obrigatório
│  │                  └──────┘ │  │   72×72 px, canto inferior direito
│  └───────────────────────────┘  │   16px do edge
└─────────────────────────────────┘
```

### 5.3 Regras
1. **Mecânica central ocupa o coração do ícone** — não decoração genérica. Nonogram = grid com células preenchidas. Sudoku = mini-grid 3×3 com números. Word Link = letras conectadas.
2. **Badge `▶.MIB` em `--pop` sobre `--bg`** no canto inferior direito. **Sempre.** Sem exceção.
3. **Paleta:** apenas tokens da paleta-base + variação `--pop` permitida para esse jogo (ver §2.4).
4. **Sem cantos arredondados** no PNG — Android e iOS aplicam máscara automática.
5. **Sem texto além do badge MIB.** Nome do jogo já aparece embaixo do ícone na Store.
6. **Sem sombras drop-shadow externas** (ficam horríveis quando a Store aplica seu próprio shadow).
7. **Teste obrigatório:** abrir o ícone no Google Play Console em "feature graphic preview" antes de publicar. Se você não distingue de outro jogo do portfólio em 1 segundo, o ícone falhou.

### 5.4 Feature graphic (1024 × 500)

Banner que aparece no topo da página da Store.

- Mecânica central à esquerda (512 px), wordmark + tagline localizada à direita (512 px)
- Fundo: `--bg`
- Wordmark do jogo em Silkscreen 64px
- Tagline em Pixelify Sans 24px abaixo
- Badge MIB pequeno no canto inferior direito

---

## 6. Splash / loading screen (consistência cross-portfólio)

Toda app do portfólio abre com a mesma splash screen por **1.5 segundos** antes do menu principal:

```
                                        
            ┌────────┐                  
            │ ▶.MIB  │                  
            └────────┘                  
                                        
            makeit.bot                  
            indie puzzle studio         
                                        
```

- Fundo `--bg` (Game Boy verde escuro)
- Lockup centralizado vertical e horizontalmente
- Fade-in 200ms, hold 1100ms, fade-out 200ms
- Áudio opcional: um "beep" Game Boy curto (mesma sample em todos os jogos)

Esse momento é o que faz o jogador conectar inconscientemente cada jogo ao publisher.

---

## 7. Naming convention dos jogos

### 7.1 Estrutura padrão
```
[Mecânica clássica]  [Modificador opcional]
```

### 7.2 Exemplos válidos
- ✅ **Nonogram Zen** (mecânica + modificador de mood)
- ✅ **Nonogram Color** (mecânica + modificador de variação)
- ✅ **Sudoku Hex** (mecânica + modificador estrutural)
- ✅ **Word Link** (composto de 2 substantivos curtos)
- ✅ **Idle Café** (gênero + tema)

### 7.3 Banidos
- ❌ "Super", "Ultra", "Pro", "Master" (vazio + spammy)
- ❌ Números no nome ("Sudoku 2", "Nonogram 3000")
- ❌ Marcas de exclamação no nome
- ❌ Verbos imperativos ("Play Sudoku Now")
- ❌ Mais de 2 palavras (exceto se a 3ª for número de versão interna oculta)

### 7.4 ID técnico no AndroidManifest
```
bot.makeit.<game-id>
```
ex.: `bot.makeit.nonogramzen`, `bot.makeit.sudokuhex`

---

## 8. Banimentos visuais (válidos para site, jogos e materiais de marketing)

Estes não são preferências — são proibições.

- ❌ Gradient em texto
- ❌ Glassmorphism / backdrop-blur em painéis
- ❌ Border-left side-stripe (4-6px de cor na lateral de cards/alertas) — visual datado
- ❌ Sombras "neumórficas" (inset+outset combinados)
- ❌ Cantos super arredondados (`border-radius > 8px`) — quebram o feel pixel
- ❌ Animações que dependem de propriedades de layout (`top`, `left`, `width`)
- ❌ Mockups Figma com cards idênticos em grid 3-col (genérico SaaS)
- ❌ Stock photography (esse é um estúdio pixel/retro — nada de fotos)
- ❌ Emojis dentro de UI funcional
- ❌ "Lorem ipsum" — em qualquer momento. Sempre copy real.

---

## 9. Asset library — onde vivem os arquivos

```
c:\Users\aryha\Documents\MIB\site\assets\
├── logos/
│   ├── mib-lockup-full.svg
│   ├── mib-lockup-full-light.svg
│   ├── mib-mark-only.svg
│   ├── mib-wordmark-only.svg
│   └── mib-mono.svg
├── games/
│   ├── nonogram-zen/
│   │   ├── icon-512.png
│   │   ├── icon-monochrome.svg
│   │   ├── feature-graphic-1024x500.png
│   │   └── screenshots/
│   └── (próximos jogos seguem mesma estrutura)
├── press/
│   ├── press-kit.zip
│   └── factsheet.pdf
└── og-image.png
```

**Regra:** todo asset publicado precisa morar nesse diretório. Nada fica solto no Desktop, no Drive ou em Figma como única fonte da verdade.

---

## 10. Checklist de lançamento de jogo novo (brand-side)

Antes de publicar qualquer jogo na Play Store, validar:

- [ ] Ícone 512×512 segue spec da §5
- [ ] Badge `▶.MIB` presente no canto inferior direito do ícone
- [ ] Splash screen idêntica ao template (§6)
- [ ] Menu principal usa Silkscreen para títulos, Pixelify Sans para body
- [ ] Paleta usa exatamente os tokens permitidos (ver §2.4)
- [ ] Nome segue convention da §7
- [ ] Package ID segue `bot.makeit.<game-id>`
- [ ] Tela "More Games" com lockup MIB + grid dos outros jogos do portfólio
- [ ] Política de privacidade publicada em `makeit.bot/privacy/<game-id>.html`
- [ ] Localização em mínimo EN/PT/ES/DE/FR/IT (mesmo que mecânica seja universal)
- [ ] Feature graphic 1024×500 criado e segue spec da §5.4
- [ ] Screenshots seguem aspect ratio Play Store (9:16 portrait) e contém wordmark do jogo no canto

---

*Última atualização: 26-mai-2026 — Versão 1.0*
