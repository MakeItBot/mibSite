# MIB-Games — Estratégia de Divulgação
## Todolist Completo | Puzzle Games Mobile | Público 30-55 anos
> Versão 2.0 — 26/Maio/2026
> Reconciliada com [MIB-Games-Brand-Book.md](MIB-Games-Brand-Book.md) e ancorada em modelos de psicologia de marketing.

---

## 🧭 Princípio unificador

> **Cada peça de marketing passa por um filtro único: "Soa como Candy Crush ou como MIB?"**
>
> Se a resposta é Candy Crush (urgência fake, emojis, "DOWNLOAD NOW", FOMO, exclamações, engagement bait do tipo "comment 👇"), descartar — mesmo que converta mais a curto prazo. A vantagem competitiva do estúdio **é o contraste com o resto do mercado mobile**. Diluir a voz pela conversão é matar a única vantagem estrutural que um indie solo tem contra publishers de US$ 10M.

Tudo neste documento existe a serviço desse princípio.

---

## 🪜 Alavancas psicológicas que usamos (e quais NÃO usamos)

| Alavanca | Uso | Como |
|---|---|---|
| ✅ **Reciprocity** | Pesado | Dar valor antes de pedir nada. Web demo gratuita, manifesto público, devlog técnico aberto. |
| ✅ **Foot-in-the-door** | Pesado | Comunidade aquecida 2-3 semanas antes de qualquer pedido de download. |
| ✅ **Mere Exposure** | Pesado | Consistência cross-portfólio + posts 3x/semana — algoritmo + reconhecimento. |
| ✅ **Compounding** | Estrutural | Conteúdo + SEO + cross-promo viram um flywheel que se sustenta a partir do mês 6. |
| ✅ **Zeigarnik (loops abertos)** | Médio | Daily challenge streak — quem está no dia 23 não quer perder. |
| ✅ **Peak-End rule** | Médio | Vídeos mostram o **momento "ah-ha"** + a solução, não só a solução. |
| ✅ **Pratfall Effect** | Médio | Mostrar a realidade da motorhome, mesa minúscula, internet ruim — vulnerabilidade real constrói confiança. |
| ✅ **Mimetic Desire** | Médio | Republicar terceiros jogando. Pessoas querem o que outros já querem. |
| ✅ **Endowment Effect** | Estrutural | Demo web playable: quem resolve 1 puzzle online já se sente "dono" antes de baixar. |
| ✅ **Authority Bias** | Médio | 30 anos de fullstack viram credencial via devlog técnico (não escondidos). |
| ❌ **Loss Aversion** | **Banido** | "Seu daily expira em 4h" funciona, mas viola voice anti-dark-pattern. Não usamos. |
| ❌ **Scarcity / Urgência fake** | **Banido** | "Limited time! Only today!" — não. |
| ❌ **Engagement bait direto** | **Banido** | "Comment 👇", "Tag a friend!" — não. |

---

## Fase 0: Fundação (antes de publicar o primeiro jogo)
### Tempo estimado: 1 semana, 5-8 horas

### Identidade do Estúdio
- [X] **Domínio: `makeit.bot`** (já adquirido — NÃO usar mibgames.com, fonte única é makeit.bot)
- [ ] Logo MIB-Games em SVG e PNG (já existe — ver [Brand Book §4](MIB-Games-Brand-Book.md))
- [ ] Email profissional: `hello@makeit.bot` e `press@makeit.bot`
- [ ] **Bio padrão canônica** (não inventar variações — usar `translations.js` como fonte):
  - EN: *"Logic puzzles that respect your time. Free on Google Play."*
  - PT: *"Puzzles de lógica que respeitam o seu tempo. Grátis na Google Play."*
  - ES, DE, FR, IT: ver `translations.js`

### Perfis — criar TODOS agora, postar depois
Handle único: **@makeitbot** (preferido) ou **@mibgames** (fallback se ocupado).

- [X] **TikTok** — bio canônica EN, link in bio = makeit.bot
- [X] **Instagram** — mesmo handle
- [ ] **YouTube** — canal "makeit.bot" (Shorts + devlogs futuros)
- [x] **Twitter/X** — comunidade indie dev é ativa aqui
- [x] **Mastodon (gamedev.lgbt ou indieapps.space)** — *(novo — alternativa a X com indie dev real)*
- [X] **Reddit** — conta dedicada `u/makeitbot`
- [ ] **Bluesky** — *(novo — crescendo entre devs)*
- [ ] **Discord** — server makeit.bot (mesmo com 0 membros)
- [X] **Pinterest Business**

> **Decisão estratégica:** Estar em 6+ plataformas no dia 1 é OK desde que **só TikTok + Reddit + Pinterest recebam conteúdo ativo**. As demais ficam reservadas (squat) para não perder handle.

### Pinterest — setup correto
- [ ] Conta Business (não pessoal)
- [ ] Boards temáticos com descrição rica em keywords:
  - "Brain Training Games"
  - "Relaxing Puzzle Games"
  - "Best Mobile Games for Adults 30-55"
  - "Logic Puzzles & Nonograms"
  - "Daily Brain Exercises"
- [ ] Formato dos pins: 1000×1500 px (vertical), texto grande legível no mobile
- [ ] **Pin canônico:** screenshot do jogo + headline "Logic puzzles that respect your time"
- [ ] Cadência: 5-10 pins por semana (agendados via Tailwind free tier)

### 🆕 Manifesto público
- [X] Criar página `makeit.bot/manifesto` expandindo as 4 house rules do site:
  1. Logic over luck
  2. Offline first
  3. No dark patterns
  4. Made for grown-ups
- [X] Tom: declarativo, primeira pessoa do plural, sem hedge. ~400 palavras.
- [X] **Por quê:** manifestos viram link bait orgânico. Pessoas com convicção forte sobre dark patterns linkam, e cada link é backlink + posicionamento.

### 🆕 Web demo playable
- [ ] Construir `makeit.bot/play` — 1 nonogram do dia, jogável no browser, sem login
- [ ] Mesmo puzzle que o "daily challenge" do app
- [ ] No fim do puzzle: card discreto "Like this? Play more on Google Play."
- [ ] **Por quê (Endowment Effect):** quem resolve 1 puzzle já se sente investido. Quem só lê não. A conversão browser → install é vista em puzzle games entre 8-15%.

---

## Fase 1: Pré-lançamento (2-3 semanas antes de publicar cada jogo)

### Conteúdo de antecipação
- [ ] 3-5 teasers curtos (10-15s) de gameplay
  - Formato: vertical 9:16, sem narração, música trending **calma** (lo-fi, piano)
  - Mostrar a mecânica core, não o jogo inteiro
  - **NÃO usar** "Coming soon!" com exclamação. Usar "Coming to Google Play. Soon." (ponto final, voice dry)
- [ ] 2-3 screenshots "estilo Store" adaptados para redes sociais
- [ ] Post no Twitter/X: "Working on a new one." (curto, sem ênfase) + screenshot parcial
- [ ] Post no Reddit r/indiegaming: "Devlog: gerando nonograms únicos sem dificuldade falsa" (ângulo técnico atrai mais que "olha meu jogo")

### Comunidades — aquecer (NÃO spammar)
- [ ] Facebook Groups: participar de discussões 1-2× por semana
- [ ] Reddit: responder perguntas em r/AndroidGaming, r/puzzles, r/casualgames, r/gamedev
- [ ] Discord: entrar em servers de indie devs (Indie Game Devs, Game Dev Network, Solo Devs)
- [ ] **Ratio 9:1** — para cada 1 self-promo, 9 interações genuínas. Reddit e Discord são especialmente sensíveis a isto.

### Materiais prontos para o dia do lançamento
- [ ] Press kit em `makeit.bot/press.html` (já existe — manter atualizado)
- [ ] Asset bundle em `/assets/games/<game-id>/`:
  - Logo do jogo (PNG + SVG, transparente)
  - 5 screenshots em alta resolução (9:16 portrait)
  - GIF animado de gameplay (15s, loop)
  - Descrição curta (50 palavras) e longa (150 palavras) — em 6 idiomas
  - Link da Play Store
  - Email de contato (press@makeit.bot)
- [ ] Template de post reutilizável por plataforma (texto + imagem/vídeo)
- [ ] Lista verificada de onde postar no dia D

---

## Fase 2: Dia do Lançamento (checklist de 24 horas)

### Hora 0 — Jogo publicado na Play Store
- [ ] Verificar listing correto e que o jogo baixa sem erro
- [ ] Atualizar link bio com URL do novo jogo
- [ ] Atualizar `/assets/og-image.png` se for o jogo destaque

### Primeiras 2 horas — Posts principais
- [ ] **Reddit** (mais importante para tráfego dia 1):
  - r/AndroidGaming — gameplay GIF + "Just shipped my logic puzzle game. Solo dev. Offline-first."
  - r/IndieGaming — devlog mais detalhado (o lado humano + técnico)
  - r/playmygame — pedindo feedback honesto
  - r/puzzles — se a mecânica for relevante para o sub
  - r/mobiledev — ângulo técnico solo
- [ ] **Twitter/X:**
  - Tweet com vídeo curto de gameplay + link
  - Hashtags: `#indiedev #gamedev #puzzlegame #androidgames #solodev #madewithunity`
  - Marcar @IndieGameDev, @IndieDevHour (participar do hashtag event)
- [ ] **Facebook Groups:**
  - Postar SÓ nos grupos onde já é membro ativo
  - Tom: "Finalmente saiu. Feedback honesto é bem-vindo." (sem hype)
- [ ] **TikTok:**
  - Vídeo **com o "ah-ha"**: 3s mostrando puzzle parcial, 5s mostrando a solução vindo, 5s do grid completo + animação de vitória
  - Texto overlay: "Logic puzzles that respect your time. Free on Google Play."
  - **SEM "comment 👇"**. Música trending calma.
- [ ] **Instagram Reels:** mesmo vídeo do TikTok
- [ ] **YouTube Shorts:** mesmo vídeo + título SEO em inglês

### 🆕 Lançamentos paralelos (mesma janela de 2h)
- [ ] **Hacker News** — "Show HN: I built a nonogram engine that generates 100% unique puzzles" (ângulo técnico, NÃO marketing)
- [ ] **Mastodon (gamedev.lgbt)** — post curto com link e GIF
- [ ] **Bluesky** — idem
- [ ] **IndieDB** — submeter o jogo + 1 devlog inicial

### Próximas 24 horas
- [ ] Responder TODOS os comentários em todos os posts
- [ ] Se algum post ganhar tração no Reddit, **não editar com link** — responder nos comentários
- [ ] Monitorar Play Store: primeiro review, crash reports
- [ ] Agradecer quem baixou e deu feedback
- [ ] Repostar/compartilhar qualquer menção orgânica

---

## Fase 3: Rotina Semanal de Conteúdo (pós-lançamento, contínuo)

### Distribuição de tempo: 3-4 horas/semana total

### TikTok + Reels + Shorts (1.5h/semana — prioridade máxima)
3 vídeos/semana. Mesmo vídeo, postado nas 3 plataformas.

**Formatos canônicos:**

- [ ] **"The ah-ha moment"** (1×/semana) — *evolução do antigo "satisfying solve"*
  - 3s: puzzle 70% resolvido
  - 5s: zoom na célula-chave que destrava o resto
  - 5s: cascade de células sendo preenchidas → grid completo
  - **Peak + End** ambos cobertos
  - Música trending calma. 13-15 segundos total.

- [ ] **"Can you solve this?"** (1×/semana)
  - Mostrar puzzle parcialmente resolvido, 5s
  - Cortar pra solução
  - **SEM CTA "comment your answer"** — deixar o algoritmo trabalhar pela curiosidade natural. As pessoas comentam quando o conteúdo provoca, não quando se pede.

- [ ] **"Dev life REAL"** (1×/semana) — *evolução do antigo "behind the scenes"*
  - **Pratfall ativo:** mostrar a mesa minúscula da motorhome, a internet caindo, o erro de build às 2 da manhã, o gato passando na frente da câmera
  - "Day 47 building a puzzle game from a motorhome"
  - Humaniza a marca. Atrai outros devs (que viram público + amplificadores)
  - Música: lo-fi quieto, sem música trending agressiva

**Dicas técnicas:**
- [ ] Screen recorder do celular para gameplay
- [ ] CapCut (grátis) para edição
- [ ] **Batch:** 1 sessão de 2-3h por mês = conteúdo para 4-6 semanas
- [ ] Postar TikTok primeiro (testar), se funcionar → Reels e Shorts
- [ ] Horários alvo público 30-55: 12h-14h e 20h-22h (hora local do target)

### Pinterest (30 min/semana)
- [ ] 3-5 pins novos por semana
- [ ] Formatos:
  - Screenshot do jogo + headline "Logic puzzles that respect your time"
  - Infográfico: "5 reasons puzzle games work for stressed adults"
  - Pin "Today's daily challenge" linkando para `/play`
- [ ] Repinar conteúdo relevante (curadoria de boards)
- [ ] Tailwind para agendamento (free tier)

### Reddit (30 min/semana)
- [ ] 2-3 discussões participadas por semana (sem promover)
- [ ] 1 post próprio a cada 2 semanas (devlog, update, pedido de feedback)
- [ ] Subs prioritários:
  - r/AndroidGaming (370k+)
  - r/IndieGaming (350k+)
  - r/gamedev (1.4M+ — mais técnico)
  - r/solodev
  - r/playmygame
  - r/puzzles
- [ ] **Ratio 9:1** sempre

### Twitter/X + Mastodon + Bluesky (30 min/semana)
- [ ] 2-3 posts/semana, mesma cópia adaptada
- [ ] #IndieDevHour (X — evento semanal da comunidade)
- [ ] #ScreenshotSaturday (tradição gamedev)
- [ ] Networking genuíno com outros indie devs
- [ ] **Threads técnicos viralizam aqui** — quando tiver insight, escrever ("Como gero nonograms únicos sem dificuldade falsa")

### Facebook Groups (30 min/semana)
- [ ] Participar de discussões nos grupos cadastrados
- [ ] Compartilhar updates de desenvolvimento (não só "baixe meu jogo")
- [ ] Responder perguntas de outros membros
- [ ] Grupos:
  - Puzzle Game Lovers
  - Brain Games & Puzzles
  - Android Gaming Community
  - Indie Game Developers
  - Solo Game Devs

### YouTube (quando tiver conteúdo, não prioridade inicial)
- [ ] Shorts automáticos (mesmo conteúdo TikTok/Reels)
- [ ] Devlog mensal (5-10 min): "Month X — what I shipped and what broke"
  - Formato: tela do Unity + narração + gameplay
  - SEO YouTube performa a longo prazo
  - Priorizar a partir de **3 jogos publicados**

### 🆕 Bot diário de Twitter/Bluesky (setup 1×, custo contínuo zero)
- [ ] Configurar bot que posta o **puzzle do dia** como imagem em `@makeitbot_daily` (X) e `@makeitbot.bsky.social` (Bluesky)
- [ ] Imagem: grid + clues, sem solução
- [ ] Caption: "Daily #38. Try it free at makeit.bot/play"
- [ ] **Mecânica viral própria** sem esforço contínuo

---

## Fase 4: Táticas Avançadas (a partir do jogo 3+)

### Cross-promo interno
- [ ] Implementar sistema de cross-promo ([ver arquitetura](MIB-Games-Plano-Completo.md))
- [ ] Tela "More Games" em todos os jogos — **default = jogo com maior retention** (não o mais novo)
- [ ] Interstitial cross-promo alternando com AdMob
- [ ] Rewarded cross-promo ("Install X, get 50 hints")

### Email list (simples, não complexo)
- [ ] Landing em `makeit.bot/subscribe`:
  - Lista dos jogos
  - Formulário: nome + email
  - Mailchimp free tier (até 500) ou Brevo
- [ ] Coletar via: bio das redes, fim de devlogs YouTube, opcional tela in-game
- [ ] **Cadência base:** só lançamento (1× a cada 2-3 meses)
- [ ] 🆕 **Opcional: "Puzzle of the Week"** — 1 puzzle interativo via HTML no email, semanal. Quebra a regra "só launch", mas é **conteúdo, não promo** — funciona se o conteúdo for genuinamente bom.

### 🆕 Blog / SEO (prioridade média — alto retorno a longo prazo)
- [ ] Criar `/blog` em makeit.bot (HTML estático respeitando o Brand Book)
- [ ] 1-2 artigos por mês:
  - "Why nonograms beat brain training apps for stress"
  - "How I generate unique puzzles procedurally" (técnico)
  - "Designing a puzzle game without dark patterns — a manifesto in code"
  - "Solo dev devlog: month X from the road"
- [ ] SEO básico (já no follow-up SEO doc): title, meta description, H1/H2, alt text
- [ ] Cada artigo menciona naturalmente os jogos com link Play Store
- [ ] **Por que importa (Authority Bias):** artigos técnicos posicionam você como expert. Atraem outros devs (rede). Geram backlinks (SEO).

### Submissão a sites e curadoria
- [ ] Submeter jogos a:
  - AppAdvice.com
  - Droid Gamers
  - Android Police (seção de jogos)
  - TouchArcade
  - IndieDB.com
  - Itch.io (criar página mesmo para mobile)
  - Pocket Gamer
- [ ] Conta no IndieDB com devlogs regulares
- [ ] Product Hunt quando tiver jogo polido (jogo 4+)
- [ ] 🆕 **Submeter à IGF (Independent Games Festival)** — taxa baixa. Mesmo não ganhando, "Submitted to IGF 2027" vira credencial para press kit.
- [ ] 🆕 **Mobile Game Awards** — mesmo raciocínio.

### Parcerias com micro-influencers (custo zero)
- [ ] Identificar YouTubers/TikTokers de puzzle games com 5k-50k seguidores
- [ ] Email/DM curto:
  > "Oi [nome], sou solo dev e fiz um puzzle game offline-first sem dark patterns. Achei que seu público ia curtir. Grátis, link aqui: [link]. Sem obrigação — se gostar e quiser mencionar, fico grato."
- [ ] **Não pagar.** Menção orgânica é comum em 5k-50k quando o jogo é bom.
- [ ] A partir do jogo 3+

### 🆕 Mostrar terceiros jogando (Mimetic Desire)
- [ ] Quando um YouTuber/TikToker pequeno (até 50k) postar gameplay orgânico, **pedir permissão e recortar 15-30s** para postar nas próprias contas com crédito
- [ ] "X plays Nonogram Zen" > "I made Nonogram Zen"
- [ ] Cria efeito de "muita gente está jogando" mesmo no início

### 🆕 Talk em meetup remoto de gamedev (4h de prep, retorno permanente)
- [ ] Submeter talk em meetups de gamedev (Meetup.com, Reddit r/gamedev, Discord servers)
- [ ] Tópicos:
  - "Cross-promo architecture for indie portfolios on $0 budget"
  - "Procedural nonogram generation without fake difficulty"
- [ ] Talk gravada vira: YouTube content + tweet thread + blog post + autoridade

### 🆕 Bundle Play Store quando tiver 4+ jogos
- [ ] Criar página de coleção "MIB Logic Pack" listando todos os jogos
- [ ] Algoritmo da Play favorece bundles do mesmo dev
- [ ] Cross-promo turbinado pela plataforma

### 🆕 Time-lapse anual da motorhome
- [ ] Ao fim de cada ano, montar vídeo de 3-5 min: "1 year building from a motorhome"
- [ ] Misturar: clipes de viagem + tela do Unity + screenshots de jogos lançados + receita acumulada (se confortável compartilhar)
- [ ] **Story-driven content** — o tipo que vira menção em Polygon, Kotaku, Game Developer

---

## Fase 5: Estratégia TikTok Detalhada

### Por que TikTok funciona para 30-55
- O algoritmo não liga para seguidores — liga para engajamento do conteúdo.
- Público 30-55 é o que mais cresce na plataforma.
- Conteúdo de puzzle/brain teaser é transgeracional.
- 1 vídeo viral = mais downloads em 24h que meses de ASO.

### Setup da conta
- [ ] Conta Business (analytics + link na bio)
- [ ] **Bio canônica:**
  > Logic puzzles that respect your time.
  > Free on Google Play.
  > makeit.bot
- [ ] **NÃO usar:** emojis na bio, "👇", "DOWNLOAD NOW", exclamações
- [ ] Link na bio: `makeit.bot` (não Linktree — uma página > múltiplas)
- [ ] Foto de perfil: logo MIB-Games ([Brand Book §4](MIB-Games-Brand-Book.md))

### Calendário
| Dia | Formato |
|---|---|
| Segunda | "The ah-ha moment" |
| Quarta | "Can you solve this?" (sem CTA de comment) |
| Sexta | "Dev life REAL" (com Pratfall — mesa pequena, motorhome, erro real) |

### Hashtags (5-8 por vídeo, não mais)
```
#puzzlegame #brainteaser #satisfying #nonogram
#mobilegame #indiedev #relaxinggames
#logicpuzzle #braingames #solodev #gamedev #madewithunity
```

### O que NÃO fazer no TikTok
- ❌ "Hey guys" ou intro longa (hook em 0.5s)
- ❌ Música de nicho — usar trending sounds **calmos** (lo-fi, piano, ambient)
- ❌ Gameplay horizontal — SEMPRE vertical 9:16
- ❌ "Download my game" no vídeo
- ❌ "Comment 👇" (engagement bait — violação de brand voice)
- ❌ Postar menos que 3×/semana (algoritmo penaliza)
- ❌ Emojis em texto-overlay funcional

### Métricas
| Métrica | O que indica |
|---|---|
| Views | Baseline de alcance |
| Completion rate | Hook funciona ou não |
| Comments | Engajamento real (mesmo sem pedir) |
| Profile visits | Intenção de saber mais |
| Link clicks | Conversão real |

---

## Calendário Semanal Consolidado

### Modelo de semana (3-4 horas total)

| Dia | Ação | Tempo | Plataforma |
|---|---|---|---|
| Segunda | Gravar/editar "ah-ha moment" | 30 min | TikTok + Reels + Shorts |
| Terça | 2 pins + 1 thread X/Bluesky + Reddit (interação) | 30 min | Pinterest + X/Bluesky + Reddit |
| Quarta | Postar "can you solve this?" + responder comentários | 30 min | TikTok + Reels + Shorts |
| Quinta | #IndieDevHour ou #ScreenshotSaturday + Facebook Groups | 30 min | X + Facebook |
| Sexta | "Dev life REAL" + responder pendentes | 30 min | TikTok + Reels + Shorts |
| Sábado | Batch: pins da semana seguinte + screenshots + 1 blog/devlog (se for mês de blog) | 30-60 min | Pinterest + Blog |
| Domingo | Descanso |  |  |

### Regra de batch content
- [ ] 1× por mês: sessão de 2-3h gravando 10-15 vídeos
- [ ] Editar tudo no mesmo dia (CapCut com templates salvos)
- [ ] Agendar TikTok (nativo)
- [ ] Libera o resto do mês para só interagir e responder

---

## Métricas — O Que Medir

### Semanalmente (5 min)
- [ ] Downloads totais por jogo (Play Console)
- [ ] Fonte dos downloads se identificável (UTM links)
- [ ] Engagement nas redes (views, comments, shares)

### Mensalmente (30 min)
- [ ] Crescimento de seguidores por plataforma
- [ ] Top 3 posts que mais performaram — entender por quê
- [ ] Funil: views → profile visits → link clicks → downloads
- [ ] Receita por jogo vs esforço de promoção
- [ ] **Decidir: dobrar no que funciona, cortar o que não funciona** (Pareto + Theory of Constraints)
- [ ] 🆕 **Métrica de Endowment:** sessões em `/play` → downloads (target: 8-15%)
- [ ] 🆕 **Métrica de Mimetic:** menções orgânicas externas / mês

### A cada lançamento
- [ ] Comparar downloads D1-D7 com lançamento anterior
- [ ] Qual plataforma gerou mais tráfego
- [ ] Qual formato de conteúdo converteu melhor
- [ ] Documentar e iterar

---

## Erros Fatais a Evitar

1. **Spammar comunidades.** Um post de autopromoção em grupo onde nunca interagiu = ban + reputação destruída. Participe primeiro, promova depois.

2. **Postar em todas as plataformas com a mesma intensidade desde o dia 1.** TikTok + Reddit + Pinterest recebem conteúdo ativo. Demais ficam squat e crescem a partir do mês 3.

3. **Esperar o jogo estar "perfeito" para promover.** Conteúdo de desenvolvimento atrai tanto quanto o produto.

4. **Ignorar comentários e reviews.** Responder = algoritmo favorece + comunidade cresce + ranking na Store melhora.

5. **Conteúdo de marketing genérico.** "Download my game!" não funciona. "The moment I realized this puzzle has only one valid path" funciona.

6. **Desistir após 2 semanas.** Marketing orgânico é cumulativo. Os primeiros 30 dias são estatisticamente irrelevantes. O flywheel começa no mês 3+.

7. 🆕 **Diluir a voice por hype.** Toda vez que considerar "vou só dessa vez usar emoji / urgência / CTA agressivo": NÃO. Esse é o único diferencial estrutural contra publishers de US$ 10M.

8. 🆕 **Confundir engagement-bait com engagement.** "Comment 👇" pega engajamento de baixa qualidade que o algoritmo aprende a desvalorizar. Conteúdo provocador gera comentário orgânico, que pesa mais.

9. 🆕 **Esquecer da Web demo `/play`.** Se ela não está atualizada com o puzzle do dia, é só um link morto. Atualizar ou matar — não deixar zumbi.

---

## Investimento Total em Marketing

| Item | Custo | Quando |
|---|---|---|
| CapCut (edição de vídeo) | Grátis | Desde o dia 1 |
| Canva (screenshots, pins) | Grátis | Desde o dia 1 |
| Tailwind (agendamento Pinterest) | Grátis (free tier) | Desde o dia 1 |
| Mailchimp / Brevo (email list) | Grátis (até 500 contatos) | A partir do jogo 3 |
| Domínio `makeit.bot` | ~€12/ano | ✅ já adquirido |
| Hospedagem (Vercel) | Grátis (Hobby tier) | ✅ já configurado |
| 🆕 Web demo `/play` | 1 sprint dev (custo de oportunidade) | Mês 2 |
| 🆕 Bot diário Twitter/Bluesky | 1 dia de setup, $0 contínuo | Mês 3 |
| Facebook/Instagram Ads | $50-100/mês | **Apenas a partir do mês 12+** |
| **Total primeiros 12 meses** | **~€12** | (só domínio) |

---

## Checklist de validação por peça de marketing

Antes de publicar qualquer post / vídeo / asset, validar:

- [ ] Soa como MIB ou como Candy Crush? (princípio unificador no topo)
- [ ] Usa a bio / tagline canônica?
- [ ] Está alinhado com Brand Book §1.5/§1.6 (do's e don'ts de copy)?
- [ ] Tem emoji em UI funcional? → REMOVER
- [ ] Tem CTA agressivo ("DOWNLOAD NOW", "👇", "!!!")? → REMOVER
- [ ] Está em vertical 9:16 (se for vídeo)?
- [ ] Tem credit/link para `makeit.bot`?

---

## Arquivos de referência associados

- [MIB-Games-Plano-Completo.md](MIB-Games-Plano-Completo.md) — Plano de negócio e portfólio
- [MIB-Games-Brand-Book.md](MIB-Games-Brand-Book.md) — Identidade visual e verbal
- [SEO-Followup-Plan.md](SEO-Followup-Plan.md) — Plano técnico SEO
- [CONTEXT_Nonogramzen.md](CONTEXT_Nonogramzen.md) — Glossário do domínio

---

*Última atualização: 26-mai-2026 — Versão 2.0*
