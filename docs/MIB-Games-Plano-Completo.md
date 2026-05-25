# MIB-Games — Plano de Negócio Completo
## Portfólio de Puzzle Games Mobile | Dev Solo | 24 Meses

---

## 1. Visão Geral do Projeto

### O que é
Estúdio indie solo focado em puzzle games e casual games para Android (Google Play Store), monetizados via ads e compras in-app, direcionados ao público adulto 30-55 anos.

### Modelo de receita
Portfólio de 8-12 jogos gerando $100-300 cada, totalizando $1.000-3.000/mês em receita recorrente. Não depende de um hit — depende de volume e cross-promotion.

### Por que esse caminho
- Custo inicial quase zero (~€90 total)
- Não exige contrato formal nem equipe
- Location independent (compatível com vida de motorhome)
- Escalável sem investimento adicional
- Skills de fullstack transferem diretamente (puzzles são 80% lógica, 20% arte)
- Motivação alta e sustentável a longo prazo

### Restrições reais
- 10h/semana dedicadas (Ummix consome ~15h, IdeorAI ~10h)
- Sem budget para user acquisition pago nos primeiros 12 meses
- Despesas básicas cobertas pelo aluguel do apartamento no Brasil
- Objetivo de breakeven: $1.500/mês

---

## 2. Análise de Mercado e Público

### Público-alvo: Adultos 30-55 anos

**Por que este público:**
- Baixa muito, tolera ads, e paga para remover ads
- Underserved comparado com público jovem
- Ticket de IAP mais alto que a média
- Jogadores de puzzle são leais e tolerantes com gráficos simples
- Keywords "relaxing puzzle" e "brain training" têm volume alto e competição gerenciável

**Onde este público está (para promoção):**
- Facebook Groups (puzzle lovers, brain training, casual gaming)
- Pinterest (surpreendentemente forte para jogos de relaxamento)
- YouTube Shorts e Instagram Reels (maior alcance 30+ que TikTok)
- TikTok (presente, mas consome conteúdo diferente do público jovem)

### O que NÃO fazer
- Jogos infantis educativos (COPPA/GDPR-Kids restringe monetização severamente, eCPM cai de $8-15 para $1-3, mercado dominado por publishers com budget e equipes de pedagogos)
- Multiplayer real-time (infraestrutura mata dev solo)
- RPGs com narrativa longa (escopo explode)
- Jogos que exigem arte AAA ou animações complexas

---

## 3. Estratégia de Portfólio — 10 Jogos

### Progressão planejada

**Jogos 1-2: Aprendizado de pipeline**
- Jogo descartável + primeiro puzzle clássico
- Objetivo: dominar build → publish → monetize → analytics
- Receita esperada: $0-50/mês

**Jogos 3-4: Puzzles clássicos bem executados**
- Nonogram, sudoku variante, word search, logic grid
- Visual minimalista, geração procedural de níveis
- Monetização completa: AdMob + IAP
- Cross-promo system ativado a partir do jogo 3
- Receita esperada: $50-150/mês cada

**Jogos 5-7: Puzzles com twist original**
- Nonogram com cores, sudoku hexagonal, word puzzle com mecânica de conexão
- Diferenciação na Store, gera curiosidade
- Receita esperada: $100-300/mês cada

**Jogos 8-10: Casual relaxante adjacente a puzzle**
- Coloring books, dot-to-dot, jigsaw com fotos
- Mesmo público, mesma monetização, amplia o portfólio
- Keywords "zen" e "relaxing" com volume alto
- Receita esperada: $150-300/mês cada

### Gate de decisão: Mês 8

Com 3 jogos publicados e dados reais:
- D1 retention > 30% + pipeline fluido + motivação alta → acelerar
- Números ruins ou motivação em queda → pivot sem culpa

### Gate de decisão: Mês 18

Com 7-8 jogos e receita real:
- Portfólio gerando $800+/mês com tendência de crescimento → transição full-time tem base em dados
- Receita estagnada → reavaliar estratégia

---

## 4. Estimativa Realista de Receita

| Período | Jogos publicados | Receita mensal estimada |
|---|---|---|
| Meses 1-6 | 1-2 | $0-50 |
| Meses 6-12 | 3-4 | $100-400 |
| Meses 12-18 | 5-7 | $400-1.200 |
| Meses 18-24 | 8-10 | $800-2.500 |
| Meses 24-30 | 10+ (com iterações) | $1.500-3.000+ |

**Cenário mediano com 10 jogos:** $800-1.500/mês
**Cenário otimista-realista:** $1.500-2.500/mês
**Cenário "deu certo" (1 jogo pega tração):** $3.000-5.000/mês

**Variáveis críticas que influenciam:**
- Qualidade de ASO (App Store Optimization)
- Retenção D1 e D7 (determina ranking orgânico)
- Eficiência do cross-promo entre jogos
- Timing e sorte (impossível controlar)

**Portfolio effect:** A receita real vem da soma de jogos medianos, não de um hit. 10 jogos a $150/mês = $1.500/mês com risco diversificado.

---

## 5. Roadmap Semanal — 5 Primeiros Meses (22 semanas)

### Mês 1 — Fundação Unity + Primeiro Publish (Semanas 1-4)

**Semana 1: Setup + Orientação (10h)**
- Instalar Unity Hub + última versão LTS
- Criar projeto 2D Mobile template
- Configurar VS Code ou Rider como editor C#
- Tutorial oficial "Ruby's Adventure" (2D beginner, pular o irrelevante pra mobile)
- Entender hierarquia: Scene > GameObject > Component > Script
- Meta: personagem se movendo na tela com input touch

**Semana 2: UI + Input Mobile (10h)**
- Unity Canvas (mais maduro que UI Toolkit pra mobile)
- Menu simples: Start, Settings, botão de play
- Touch input (não mouse — testar no device ou simulador)
- PlayerPrefs pra salvar dados simples
- Build Android no celular real (Android SDK, keystore)
- Meta: app rodando no celular com menu + interação touch

**Semana 3: Jogo Lixo v1 (10h)**
- Jogo descartável: tap counter com timer ou esquiva simples
- Formas geométricas e cores sólidas, sem arte
- Game over, restart, score
- Um som (AudioSource básico)
- Teste no device
- Meta: jogo funcional, feio, completo do start ao game over

**Semana 4: Build + Publish na Play Store (10h)**
- Conta Google Play Developer ($25)
- Signing, versioning, bundle (AAB não APK)
- Listing mínimo: ícone, screenshots, descrição
- Review process
- Console: crash reports, ANRs, stats
- Meta: jogo publicado. Pipeline validado.

> **Checkpoint:** Você sabe fazer um jogo rodar no celular e publicar. Mais do que 80% dos iniciantes.

### Mês 2 — Primeiro Puzzle Real: Nonogram (Semanas 5-8)

**Semana 5: Game Design Document Mínimo (10h)**
- Escolher tipo de puzzle (recomendação: Nonogram — lógica procedural, sem arte, escalável)
- Definir: core mechanic, win/lose conditions, progression
- Prototipar grid no Unity (scriptable, não hardcoded)
- Pesquisar 5 jogos similares na Play Store
- Meta: GDD de 1 página + grid funcional

**Semana 6: Core Mechanic Completo (10h)**
- Lógica do puzzle em C#
- Input: tap em célula → toggle estado
- Validação: detectar puzzle resolvido
- Geração procedural (nível fácil primeiro)
- Feedback visual: célula selecionada, erro, acerto
- Meta: jogar e completar um puzzle gerado proceduralmente

**Semana 7: Progressão + Polimento (10h)**
- Níveis: fácil (5x5) → médio (10x10) → difícil (15x15)
- Tela de seleção de níveis
- Salvar progresso
- Timer + estrelas por performance
- Animações mínimas, haptic feedback
- Meta: loop completo menu → nível → jogar → resultado → próximo

**Semana 8: Arte Minimalista (10h)**
- Paleta de cores (coolors.co, máximo 5 cores)
- Tipografia: 1 fonte Google Fonts
- Ícones geométricos (Figma ou Canva)
- Ícone do app (dedicar 2h — crítico pra conversão)
- Screenshots para a Store
- Teste em 3 resoluções
- Meta: jogo visualmente coerente

> **Checkpoint:** Puzzle funcional com 30+ níveis, visual limpo. Pronto pra monetizar.

### Mês 3 — Monetização + Publish Real (Semanas 9-13)

**Semana 9: AdMob Integration (10h)**
- Conta AdMob + vincular ao app
- Google Mobile Ads Unity Plugin
- Banner ad (bottom, fora do gameplay)
- Interstitial ad (entre níveis, a cada 3-4)
- Rewarded ad (assistir = dica ou undo)
- Testar com test ads (NUNCA clicar em ads reais)
- Meta: 3 formatos de ad funcionando

**Semana 10: IAP (10h)**
- Google Play Billing + Unity IAP package
- "Remove Ads" ($1.99-2.99)
- Pacote de dicas (consumível)
- Purchase flow completo em sandbox
- Restore purchases
- Meta: fluxo de compra funcional

**Semana 11: Analytics + Retention (10h)**
- Firebase Analytics
- Eventos: session_start, level_complete, level_fail, ad_watched, purchase
- Funil: install → open → level_1 → level_5 → day_7_return
- Notificação local diária ("Seu puzzle diário está pronto!")
- Daily challenge: 1 puzzle especial por dia
- Meta: dashboard com dados reais

**Semana 12: ASO (10h)**
- Keywords com AppTweak ou Sensor Tower (free trial)
- Título otimizado: "Nome — Nonogram Puzzle"
- Descrição com keywords naturais
- 5-8 screenshots de qualidade
- Vídeo preview 30s
- Meta: listing profissional

**Semana 13: Publish + Iteração (10h)**
- Publish na Play Store com ads + IAP
- Postar no r/AndroidGaming, r/IndieGaming, r/playmygame
- Pedir feedback de estranhos
- Monitorar crashes D1-D3
- Hotfix se necessário
- Meta: jogo live com monetização real

> **Checkpoint:** Jogo monetizado, publicado, com analytics. Começa o aprendizado real.

### Mês 4 — Dados + Início Idle Game (Semanas 14-17)

**Semana 14: Análise de Dados (10h)**
- Analisar métricas com 2-3 semanas de dados
- Benchmarks: D1 retention 35-45% (bom), eCPM rewarded $5-15
- Se retention < 20% D1: problema de onboarding ou core mechanic
- Se retention OK mas revenue baixa: problema de monetização ou volume
- Meta: documento de análise + decisão

**Semana 15: Game Design — Idle Game (10h)**
- Referências: Idle Miner, Adventure Capitalist, Cookie Clicker
- Tema nichado (idle café, idle fazenda, idle específico)
- Core loop: recurso → geradores → upgrades → prestige
- Economia: custo base, multiplicadores, curva de crescimento
- Meta: GDD com economia rascunhada

**Semana 16: Idle Game Core (10h)**
- Sistema de recursos (BigNumber pra 10^300+)
- Primeiro gerador: produz X/segundo, upgradeable
- Offline earnings
- Save/load (JSON + PlayerPrefs)
- Meta: gerador produzindo, upgradeable, com save/load

**Semana 17: UI + Multiple Generators (10h)**
- Scroll view com 3-5 geradores
- Nível, custo, produção/s, botão buy
- Moeda com notação abreviada (1.5M, 3.2B, 1.1T)
- Tab system: Generators | Upgrades | Prestige
- Meta: UI funcional com economia rodando

> **Checkpoint:** Puzzle game com dados reais. Idle game com core loop jogável.

### Mês 5 — Idle Game Completo + Publish #2 (Semanas 18-22)

**Semana 18: Prestige + Meta-progression (10h)**
- Sistema de prestige (reset → prestige currency → upgrades permanentes)
- Primeiro prestige ~30-60 min de jogo
- Achievement system (10-15 achievements)
- Meta: loop de prestige funcionando

**Semana 19: Monetização Idle (10h)**
- Rewarded ads: 2x earnings por 30 min, speed up 2h
- Interstitial: ao voltar do background (max 1/3 min)
- IAP: remove ads, starter pack, prestige currency
- Offer wall após primeiro prestige
- Meta: monetização integrada sem ser predatória

**Semana 20: Polish + Juice (10h)**
- Animações, partículas, sound design
- Haptic feedback em momentos-chave
- Tutorial/onboarding (5 passos, primeiro minuto)
- Performance em device low-end
- Meta: jogo que "sente bem" jogar

**Semana 21: ASO + Pre-launch (10h)**
- Aplicar aprendizados do puzzle game
- A/B test de ícones (Google Play Experiments)
- Listing, screenshots, vídeo
- Preparar posts Reddit, Discord, Twitter/X
- Soft launch em 1-2 países menores
- Meta: tudo pronto

**Semana 22: Launch + Framework (10h)**
- Publish
- Monitorar D1-D3
- Responder TODOS reviews negativos
- Comparar métricas puzzle vs idle
- Documentar aprendizados
- Meta: 2 jogos live com dados comparativos

> **Checkpoint Final Mês 5:** Pipeline completo dominado. Base para decidir direção.

---

## 6. Monetização — Detalhamento

### Modelo por tipo de jogo

**Puzzle Games:**
- Banner ad (bottom, fora do gameplay): eCPM $1-3
- Interstitial (a cada 3-4 níveis): eCPM $5-12
- Rewarded (assistir = dica/undo): eCPM $8-20
- IAP "Remove Ads": $1.99-2.99 (one-time)
- IAP pacote de dicas: $0.99-4.99 (consumível)

**Idle Games:**
- Rewarded 2x earnings (principal driver): eCPM $8-20
- Rewarded speed up: eCPM $8-20
- Interstitial ao retornar: eCPM $5-12
- IAP remove ads: $2.99-4.99
- IAP starter pack: $4.99-9.99
- IAP prestige currency: $0.99-19.99 (múltiplos tiers)

### Benchmarks de referência

| Métrica | Puzzle Casual | Idle Game |
|---|---|---|
| D1 Retention (bom) | 35-45% | 30-40% |
| D7 Retention (bom) | 12-20% | 10-15% |
| D30 Retention (bom) | 5-10% | 4-8% |
| ARPDAU (ads) | $0.03-0.08 | $0.05-0.15 |
| IAP conversion rate | 1-3% | 2-5% |
| eCPM rewarded (tier 1) | $8-15 | $10-20 |
| eCPM rewarded (Brasil) | $2-5 | $3-8 |

---

## 7. Promoção e User Acquisition

### Canais orgânicos (custo: $0, investimento: 2-3h/semana)

**Facebook Groups (prioridade 1 para público 30-55)**
- Participar de grupos de puzzle lovers, brain training, casual gaming
- Posts genuínos, não spam
- Um post em grupo de 50k = mais downloads qualificados que 100k views no TikTok

**Pinterest (prioridade 2, subestimado)**
- Público feminino 30-55 dominante
- Pins de "best puzzle games" e "relaxing phone games" com volume alto
- Screenshots bonitas linkando pra Play Store

**YouTube Shorts + Instagram Reels (prioridade 3)**
- Formato "satisfying solve": 15-30s de puzzle sendo resolvido
- Momento final é o hook
- Música calma trending, gameplay, done
- Mesmo vídeo adaptado pra Shorts, Reels e TikTok

**Formatos de conteúdo que funcionam:**

1. "Satisfying solve" — puzzle completo em 15-30s, animação de vitória
2. "Can you solve this?" — puzzle parcial, pause, gera comentários e engajamento
3. Bastidores de dev — "Making a puzzle game as solo developer" (atrai devs, gera alcance indireto)

**Reddit/Discord**
- r/AndroidGaming, r/IndieGaming, r/playmygame
- Comunidades de idle games e puzzle games no Discord
- Posts honestos pedindo feedback, não marketing disfarçado

### Outras táticas orgânicas

**Localization:** Traduzir para 5-10 idiomas aumenta downloads em 30-80%. Puzzles têm pouquíssimo texto. Priorizar: inglês, português, espanhol, francês, alemão, italiano, japonês, coreano.

**Seasonal updates:** Halloween theme, Christmas levels. Play Store favorece apps atualizados recentemente.

**Responder todos os reviews negativos:** Google ranqueia apps que respondem. Impacto direto no ranking.

### User Acquisition pago (a partir do mês 12)

- Primeiros 12 meses: $0 em ads pagos
- A partir do mês 12 (4+ jogos publicados): testar $50-100/mês em Facebook Ads
- Target: mulheres 35-55, interesse em puzzle games
- CPI referência puzzle casual: $0.50-2.00
- Só investir em jogos com métricas provadas (D7 > 15%, ARPDAU > $0.05)

---

## 8. Cross-Promo — Estratégia e Arquitetura

### Por que é a arma mais valiosa

Cada jogo novo alimenta os anteriores e vice-versa. Custo de aquisição do usuário: zero. Probabilidade de install: 5-10x maior que ad genérico.

Com 10 jogos, cada jogo promove 9 outros. Efeito exponencial.

### Pontos de inserção no jogo

1. **Tela "More Games" no menu** — botão com grid dos outros jogos. Obrigatório desde o jogo 1.
2. **Interstitial cross-promo** — alterna com AdMob (nível 3 = AdMob, nível 6 = cross-promo). Máximo 20-25% das impressões.
3. **Banner rotativo** na tela de seleção de níveis.
4. **Rewarded cross-promo** — "Instale Sudoku Hex e ganhe 50 hints grátis!" Mais elegante, melhor conversão.
5. **Post-completion screen** — após puzzle difícil ou prestige, pico emocional, alta conversão.

### Branding de portfólio

- Nome de publisher consistente em todos os jogos (MIB-Games)
- Estilo visual coerente: mesma família de fontes, mesma paleta base com variações
- Elemento visual comum nos ícones (borda, sombra, logo)
- Jogadores pesquisam nome do publisher na Store e veem todos os jogos

### Métricas de cross-promo

| Métrica | Meta |
|---|---|
| Cross-promo CTR | > 3% |
| Install rate (store opens → install) | > 15% |
| Cross-install rate (usuários com 2+ jogos) | > 10% |
| Cannibalization rate (receita perdida / valor ganho) | < 1.0 |

### Arquitetura técnica

**Backend: Firebase Hosting (grátis)**

Arquivo `catalog.json` hospedado no Firebase Hosting. Todos os jogos leem esse JSON no startup. Para adicionar jogo novo: atualizar JSON + `firebase deploy`. Todos os jogos existentes passam a promover o novo automaticamente, sem rebuild.

O JSON contém:
- Lista de jogos com metadata (id, título, package, ícones, links, prioridade)
- Pesos de promoção (controla frequência de exibição)
- Flags (ativo/inativo, novo)
- Regras globais (% máximo de cross-promo, sessões mínimas antes de mostrar, cooldown)
- Config de rewarded promo por jogo (tipo de reward, quantidade, CTA)
- Localization por idioma

**SDK Unity reutilizável:**

Estrutura em 4 serviços:
- `CatalogManager` — fetch remoto + cache local (6h TTL). Cache-first, atualiza em background.
- `PromoEngine` — decide quando mostrar (respeita limites, sessões, cooldown) e qual jogo (weighted random com boost 3x para jogos novos, penaliza repetição).
- `PromoAnalytics` — tracking de impressão, clique, dismiss por placement.
- `InstalledAppsChecker` — verifica via API Android quais jogos já estão instalados (não promover o que já tem). Requer `<queries>` no AndroidManifest a partir do Android 11.

**Integração por jogo novo: 30-45 minutos.**

Copiar SDK → criar config (ScriptableObject com ID do jogo e URL do catálogo) → adicionar GameObject persistente → chamar `TryShowCrossPromoInterstitial()` nos pontos de interstitial → chamar `ShowMoreGames()` no menu → atualizar `catalog.json` → deploy.

Documentação técnica completa com código: ver arquivo separado `cross-promo-architecture.md`.

---

## 9. Stack Técnico

### Engine e linguagem
- **Unity LTS** (última versão estável) — melhor ecossistema de monetização mobile
- **C#** — linguagem principal
- **2D only** — ignorar qualquer tentação 3D

### Ferramentas essenciais

| Ferramenta | Propósito | Custo |
|---|---|---|
| Unity LTS | Engine | Grátis (< $200k/ano) |
| VS Code + C# extension | Editor | Grátis |
| Google Play Console | Publicação | $25 (único) |
| AdMob | Ads | Grátis |
| Firebase Analytics | Métricas | Grátis |
| Firebase Hosting | Cross-promo catalog | Grátis |
| Firebase Crashlytics | Crash monitoring | Grátis |
| Figma | UI e ícones | Grátis |
| Canva | Screenshots da Store | Grátis |
| Coolors.co | Paleta de cores | Grátis |
| Trello ou Notion | Task tracking | Grátis |

### Custos

| Item | Custo | Frequência |
|---|---|---|
| Google Play Developer | $25 | Único |
| Device de teste extra | €50-80 | Único |
| Domínio (mibgames.com ou similar) | ~€12 | Anual |
| **Total primeiro ano** | **~€90** | |
| **Total anos seguintes** | **~€12/ano** | |

---

## 10. Custos de Manutenção (10 jogos publicados)

| Item | Horas/ano | Frequência |
|---|---|---|
| SDK updates obrigatórios (10 jogos) | 20-40h | Anual |
| Respostas a reviews | 50-100h | Anual (~1-2h/semana) |
| Bug fixes manutenção | 25-50h | Anual (~2-4h/mês) |
| Policy compliance Google | 10-40h | Anual (1-2 eventos) |
| **Total manutenção** | **~100-230h/ano** | **~2-4h/semana** |

Com 10h/semana total: ~30% vai pra manutenção, 70% pra jogos novos.

Com dedicação integral (após breakeven): manutenção vira trivial.

---

## 11. Regras de Ouro

1. **Timebox tudo.** 10h é pouco. Corte escopo, não horas de sono.
2. **Não aprenda "Unity" — aprenda o que precisa essa semana.** Tutorial rabbit holes matam produtividade.
3. **Publique feio, itere bonito.** Perfeccionismo é inimigo com 10h/semana.
4. **Teste no device real toda semana.** Emulador mente.
5. **Uma feature por sessão.** "Ver umas coisas" no Unity = 3h perdidas.
6. **Dados > opinião.** Após publish, só mude o que os números mandam.
7. **Bloqueie horário fixo.** Terça e quinta, horário definido. Não "quando sobrar tempo."
8. **Cross-promo desde o jogo 3.** Sistema centralizado desde o início.
9. **Mesmo público em todos os jogos.** Cross-promo funciona quando a audiência é compartilhada.
10. **Responda todos os reviews negativos.** Impacto direto no ranking.

---

## 12. Timeline Resumida

| Marco | Quando | Resultado esperado |
|---|---|---|
| Primeiro jogo publicado (lixo) | Mês 1 | Pipeline validado |
| Puzzle com monetização | Mês 3 | Dados reais, $0-30/mês |
| Idle game publicado | Mês 5 | 2 jogos, dados comparativos |
| **Gate de decisão #1** | **Mês 8** | **3 jogos, decidir se acelera** |
| Cross-promo ativo | Mês 8 | Efeito de portfólio começa |
| 5-6 jogos publicados | Mês 12 | $100-400/mês |
| **Gate de decisão #2** | **Mês 18** | **7-8 jogos, $800+/mês → full-time?** |
| Portfólio completo | Mês 24 | 10+ jogos, $1.500-2.500/mês |
| Maturidade | Mês 30 | Receita estável, flywheel rodando |

---

## 13. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Dispersão com outros projetos | Alta | Fatal | Horário fixo bloqueado, gates de decisão |
| Jogos não atingem retenção mínima | Média | Alto | Iterar com dados, pivotar mecânica |
| Google muda políticas de ads | Média | Médio | Diversificar entre AdMob, Unity Ads, IAP |
| Mercado de puzzle satura | Baixa | Médio | Twist original nos jogos 5+, nichar |
| Burnout com 10h/semana por 24 meses | Média | Alto | Gates de decisão permitem parar sem culpa |
| Unity muda pricing novamente | Baixa | Alto | Godot como fallback, jogos simples portam |

---

## Arquivos de referência associados

- `roadmap-unity-mobile-5meses.md` — Roadmap detalhado semana a semana
- `cross-promo-architecture.md` — Arquitetura técnica completa com código C#

---

*Documento criado em Maio/2026. Revisar nos gates de decisão (mês 8 e mês 18).*
