# Roadmap: Unity 2D Mobile Game Dev — Solo Developer
## 10h/semana | 5 meses | Foco: Puzzle & Idle Games para Play Store

---

## Mês 1 — Fundação Unity + Primeiro Publish (Semanas 1–4)

### Semana 1: Setup + Orientação (10h)
- [ ] Instalar Unity Hub + última versão LTS (não beta)
- [ ] Criar projeto 2D Mobile template
- [ ] Configurar VS Code ou Rider como editor C# (Rider tem trial 30 dias — vale testar)
- [ ] Completar o tutorial oficial "Ruby's Adventure" (2D beginner) — pular o que for irrelevante pra mobile
- [ ] Entender a hierarquia: Scene > GameObject > Component > Script
- **Meta:** Ter um personagem se movendo na tela com input touch

### Semana 2: UI + Input Mobile (10h)
- [ ] Unity UI Toolkit vs Canvas — aprender Canvas (mais maduro pra mobile)
- [ ] Criar menu simples: Start, Settings, botão de play
- [ ] Implementar touch input (não mouse — testar no device ou simulador)
- [ ] Aprender PlayerPrefs pra salvar dados simples (high score)
- [ ] Testar build Android no celular real (configurar Android SDK, keystore)
- **Meta:** App rodando no seu celular com menu + uma interação touch

### Semana 3: Jogo Lixo v1 — Core Loop (10h)
- [ ] Criar um jogo descartável (ex: tap counter com timer, ou esquiva simples)
- [ ] Não investir em arte — use formas geométricas e cores sólidas
- [ ] Implementar: game over, restart, score
- [ ] Adicionar um som (AudioSource básico)
- [ ] Testar no device
- **Meta:** Jogo funcional, feio, completo do start ao game over

### Semana 4: Build + Publish na Play Store (10h)
- [ ] Criar conta Google Play Developer ($25 one-time)
- [ ] Configurar signing, versioning, bundle (AAB não APK)
- [ ] Criar listing mínimo: ícone, screenshots, descrição
- [ ] Passar pelo review process
- [ ] Entender o console: crash reports, ANRs, stats
- **Meta:** Jogo publicado e instalável. Não importa se ninguém baixa — o pipeline está validado.

> **Checkpoint Mês 1:** Você sabe fazer um jogo rodar no celular e publicar. Isso é mais do que 80% dos iniciantes conseguem.

---

## Mês 2 — Primeiro Jogo Real: Puzzle Minimalista (Semanas 5–8)

### Semana 5: Game Design Document Mínimo (10h)
- [ ] Escolher tipo de puzzle: Nonogram, Sudoku variante, ou puzzle de lógica original
- [ ] Recomendação forte: **Nonogram** — lógica procedural, sem arte, escalável
- [ ] Definir no papel: core mechanic, how to win, how to lose, progression
- [ ] Prototipar a grid no Unity (scriptable, não hardcoded)
- [ ] Pesquisar 5 jogos similares na Play Store — anotar o que fazem bem e mal
- **Meta:** GDD de 1 página + grid funcional no Unity

### Semana 6: Core Mechanic Completo (10h)
- [ ] Implementar a lógica do puzzle completa em C#
- [ ] Input: tap em célula → toggle estado
- [ ] Validação: detectar quando o puzzle está resolvido
- [ ] Geração procedural de puzzles (nível fácil primeiro)
- [ ] Feedback visual mínimo: célula selecionada, erro, acerto
- **Meta:** Jogar e completar um puzzle gerado proceduralmente

### Semana 7: Progressão + Polimento (10h)
- [ ] Sistema de níveis: fácil (5x5) → médio (10x10) → difícil (15x15)
- [ ] Tela de seleção de níveis
- [ ] Salvar progresso (quais níveis completou)
- [ ] Adicionar timer + estrelas por performance
- [ ] Animações mínimas: transição de tela, célula preenchida, puzzle completo
- [ ] Haptic feedback no tap (vibração curta)
- **Meta:** Loop completo: menu → selecionar nível → jogar → resultado → próximo

### Semana 8: Arte Minimalista + Identidade Visual (10h)
- [ ] Definir paleta de cores (usar coolors.co — máximo 5 cores)
- [ ] Tipografia: 1 fonte clean (Google Fonts gratuita)
- [ ] Ícones simples (geométricos, feitos no Figma ou Canva)
- [ ] Ícone do app (crítico pra conversão — dedicar 2h nisso)
- [ ] Screenshots para a Store
- [ ] Testar em 3 resoluções diferentes de tela
- **Meta:** Jogo visualmente coerente, não bonito — coerente.

> **Checkpoint Mês 2:** Jogo puzzle funcional, com 30+ níveis gerados, visual limpo. Pronto pra monetizar.

---

## Mês 3 — Monetização + Publish Real (Semanas 9–13)

### Semana 9: AdMob Integration (10h)
- [ ] Criar conta AdMob + vincular ao app
- [ ] Instalar Google Mobile Ads Unity Plugin
- [ ] Implementar Banner ad (bottom of screen, fora do gameplay)
- [ ] Implementar Interstitial ad (entre níveis, não a cada nível — a cada 3-4)
- [ ] Implementar Rewarded ad (assistir ad = dica gratuita ou undo)
- [ ] Testar com test ads (NUNCA clicar em ads reais na sua conta)
- **Meta:** 3 formatos de ad funcionando com test ads

### Semana 10: IAP — Remove Ads + Hints (10h)
- [ ] Configurar Google Play Billing
- [ ] Instalar Unity IAP package
- [ ] Implementar "Remove Ads" ($1.99-2.99)
- [ ] Implementar pacote de dicas (consumível)
- [ ] Testar purchase flow completo (sandbox)
- [ ] Restore purchases pra compliance
- **Meta:** Fluxo de compra funcional em sandbox

### Semana 11: Analytics + Retention (10h)
- [ ] Integrar Unity Analytics ou Firebase Analytics
- [ ] Eventos críticos: session_start, level_complete, level_fail, ad_watched, purchase
- [ ] Funil: install → open → complete_level_1 → complete_level_5 → day_7_return
- [ ] Implementar notificação local diária ("Seu puzzle diário está pronto!")
- [ ] Daily challenge: 1 puzzle especial por dia
- **Meta:** Dashboard com dados reais de uso

### Semana 12: ASO — App Store Optimization (10h)
- [ ] Pesquisar keywords: usar AppTweak (free trial) ou Sensor Tower
- [ ] Título otimizado: "Nome — Nonogram Puzzle" (keyword no título)
- [ ] Descrição com keywords naturais
- [ ] 5-8 screenshots de alta qualidade (usar templates do Canva)
- [ ] Vídeo preview curto (30s gameplay — gravar do device)
- [ ] Definir categoria e tags corretas
- **Meta:** Listing profissional que compete visualmente com concorrentes

### Semana 13: Publish + Primeira Iteração (10h)
- [ ] Publish na Play Store (versão completa com ads + IAP)
- [ ] Postar no r/AndroidGaming, r/IndieGaming, r/playmygame
- [ ] Pedir feedback honesto (não de amigos — de estranhos)
- [ ] Monitorar crash reports nos primeiros 3 dias
- [ ] Fix bugs críticos imediatamente
- **Meta:** Jogo live com monetização real e primeiros dados

> **Checkpoint Mês 3:** Você tem um jogo monetizado, publicado, com analytics rodando. Agora começa o aprendizado real: dados.

---

## Mês 4 — Análise de Dados + Início do Idle Game (Semanas 14–17)

### Semana 14: Ler os Dados + Decidir (10h)
- [ ] Analisar métricas do puzzle game (2-3 semanas de dados)
  - Retention D1, D7, D30
  - ARPDAU (revenue per daily active user)
  - Ad eCPM por formato
  - Funil de conversão
- [ ] Comparar com benchmarks do mercado:
  - D1 retention puzzle casual: 35-45% é bom
  - eCPM rewarded: $5-15 (varia por região)
- [ ] Decidir: iterar no puzzle ou iniciar projeto 2?
- [ ] Se retention < 20% D1: o problema é onboarding ou core mechanic
- [ ] Se retention OK mas revenue baixa: o problema é monetização ou volume
- **Meta:** Documento de 1 página com análise e decisão

### Semana 15: Game Design — Idle Game (10h)
- [ ] Estudar referências: Idle Miner, Adventure Capitalist, Cookie Clicker
- [ ] Definir tema (evitar genéricos — nichar: idle fazenda, idle café, idle something específico)
- [ ] Core loop no papel:
  - Recurso principal (moedas, ouro, café...)
  - Geradores (produzem recurso passivamente)
  - Upgrades (aumentam produção)
  - Prestige/reset (multiplicador que reseta progresso)
- [ ] Definir economia básica: custo base, multiplicadores, curva de crescimento
- [ ] Ler sobre "idle game math" — crescimento exponencial vs logarítmico
- **Meta:** GDD do idle game com economia rascunhada

### Semana 16: Idle Game — Core em Unity (10h)
- [ ] Estrutura do projeto (reaproveitando template do puzzle)
- [ ] Implementar sistema de recursos (BigNumber — idle games passam de 10^300)
- [ ] Usar biblioteca pra large numbers ou implementar própria
- [ ] Primeiro gerador funcionando: produz X/segundo, upgrade aumenta
- [ ] Offline earnings: calcular ganho enquanto app fechado
- [ ] Salvar/carregar estado (JSON + PlayerPrefs ou arquivo local)
- **Meta:** Tela com um gerador produzindo, upgradeable, com save/load

### Semana 17: Idle Game — UI + Multiple Generators (10h)
- [ ] Scroll view com lista de geradores (3-5 tipos iniciais)
- [ ] Cada gerador: nível, custo de upgrade, produção/s, botão buy
- [ ] Display de moeda total com notação abreviada (1.5M, 3.2B, 1.1T)
- [ ] Barra de progresso visual por gerador
- [ ] Tab system: Generators | Upgrades | Prestige (placeholder)
- **Meta:** UI funcional com múltiplos geradores e economia rodando

> **Checkpoint Mês 4:** Puzzle game gerando dados reais. Idle game com core loop jogável.

---

## Mês 5 — Idle Game Completo + Publish #2 (Semanas 18–22)

### Semana 18: Prestige + Meta-progression (10h)
- [ ] Implementar sistema de prestige:
  - Reset todo progresso
  - Ganhar "prestige currency" baseado em progresso total
  - Prestige currency compra upgrades permanentes
- [ ] Balancear: primeiro prestige deve acontecer ~30-60 min de jogo
- [ ] Prestige upgrades: +X% produção global, unlock novo gerador, etc.
- [ ] Achievement system simples (10-15 achievements)
- **Meta:** Loop de prestige funcionando e satisfatório

### Semana 19: Monetização do Idle Game (10h)
- [ ] Rewarded ads: 2x earnings por 30 min (principal driver de receita)
- [ ] Rewarded ads: speed up production por 2h
- [ ] Interstitial: ao voltar do background (máximo 1 a cada 3 min)
- [ ] IAP: remove ads, starter pack (boost + currency), prestige currency pack
- [ ] Implementar "offer wall" — oferta especial após primeiro prestige
- [ ] Balancear: jogo deve ser 100% jogável sem pagar, mas ads devem parecer valer a pena
- **Meta:** Monetização integrada sem ser predatória

### Semana 20: Polish + Juice (10h)
- [ ] Animações: números subindo, partículas em compra, screen shake sutil em prestige
- [ ] Sound design: som satisfatório em cada compra, ambient loop
- [ ] Haptic feedback em momentos-chave
- [ ] Tutorial/onboarding: 5 passos guiados no primeiro minuto
- [ ] Performance: testar em device low-end (pooling, otimizar updates)
- **Meta:** Jogo que "sente bem" jogar — o "juice" que separa amador de publicável

### Semana 21: ASO + Pre-launch (10h)
- [ ] Aplicar tudo que aprendeu com ASO do puzzle game
- [ ] A/B test de ícones se possível (Google Play Experiments)
- [ ] Preparar listing, screenshots, vídeo
- [ ] Criar landing page simples (opcional — mas ajuda com SEO)
- [ ] Preparar posts pra Reddit, Discord de idle games, Twitter/X
- [ ] Considerar soft launch em 1-2 países menores primeiro (ex: Filipinas, Brasil)
- **Meta:** Tudo pronto pra publish

### Semana 22: Launch + Iteration Framework (10h)
- [ ] Publish na Play Store
- [ ] Monitorar D1-D3 intensamente (crashes, reviews, métricas)
- [ ] Responder TODOS os reviews negativos (Google ranqueia quem responde)
- [ ] Hotfix se necessário
- [ ] Comparar métricas: puzzle game vs idle game
- [ ] Documentar: o que funcionou, o que não funcionou, próximos passos
- **Meta:** Segundo jogo live. Agora você tem dados comparativos.

> **Checkpoint Mês 5:** Dois jogos publicados, monetizados, com dados reais. Você sabe o pipeline completo e tem base pra decidir se escala, pivota, ou desiste.

---

## Ferramentas Essenciais (instalar/criar conta desde o dia 1)

| Ferramenta | Propósito | Custo |
|---|---|---|
| Unity LTS | Engine | Grátis até $200k/ano receita |
| VS Code + C# extension | Editor de código | Grátis |
| Google Play Console | Publicação | $25 (único) |
| AdMob | Ads | Grátis |
| Firebase Analytics | Métricas | Grátis |
| Figma | UI/ícones | Grátis (tier pessoal) |
| Canva | Screenshots da Store | Grátis (básico) |
| Coolors.co | Paleta de cores | Grátis |
| Trello ou Notion | Task tracking semanal | Grátis |

---

## Regras de Ouro — 10h/semana

1. **Timebox tudo.** 10h é pouco. Se algo tá levando mais que o planejado, corte escopo, não horas de sono.
2. **Não aprenda "Unity" — aprenda o que você precisa essa semana.** Tutorial rabbit holes são o maior ladrão de tempo.
3. **Publique feio, itere bonito.** Perfeccionismo é o inimigo com 10h/semana.
4. **Teste no device real toda semana.** Emulador mente. Touch é diferente de mouse.
5. **Uma feature por sessão de trabalho.** Abrir Unity pra "ver umas coisas" = 3h perdidas.
6. **Dados > opinião.** Depois do publish, só mude o que os números mandam mudar.
