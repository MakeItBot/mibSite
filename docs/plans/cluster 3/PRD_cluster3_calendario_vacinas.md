# PRD — Cluster 3: Calendário de Vacinas & Preventivos | makeit.bot

**Versão:** 1.1 (revista — conteúdo clínico genericizado)
**Data:** Março 2026
**Cluster:** Calendário de Vacinas & Preventivos
**Hub URL:** `/solucoes/veterinarias/calendario-vacinas/`

---

## 1. Visão Geral

Sistema automatizado de gestão de vacinação e medicina preventiva. O makeit.bot gere o calendário vacinal de cada animal, envia lembretes aos tutores, e agenda consultas preventivas automaticamente.

### Porque é estratégico
- Motor de receita recorrente (vacinas e preventivos são core financeiro da maioria das clínicas)
- Volume de busca alto por tutores ("calendário vacinas cão", "quando vacinar gato")
- Diferencial de retenção: quem lembra, ganha a consulta
- Obrigação legal: antirrábica é obrigatória para cães em Portugal
- Conexão com Cluster 1: cada lembrete gera marcação automática

### Contexto Regulatório
- A vacina antirrábica é obrigatória para cães em Portugal
- O Passaporte Europeu exige antirrábica em dia para viagens intra-UE
- **Antes de publicar qualquer referência legal, confirmar no site da DGAV (dgav.pt)**

### Funcionalidades
| Funcionalidade | Descrição |
|---------------|-----------|
| Calendário vacinal automático | Timeline por animal com próximas datas |
| Lembretes de vacinação | Notificações automáticas antes da data |
| Lembretes de desparasitação | Ciclos configuráveis |
| Agendamento automático | Lembrete inclui link para marcação |
| Painel de cobertura vacinal | Vista de animais em dia vs atraso |

[PERSONALIZAR: Confirma quais funcionalidades existem.]

---

## 2. Arquitectura — 7 Páginas

| # | Página | Template | Keyword PT-PT |
|---|--------|----------|--------------|
| 0 | HUB: Calendário de Vacinas | hub | calendário vacinas cão gato |
| 1 | Vacinas para Filhotes | lifecycle-stage | vacinas cachorro filhote quando |
| 2 | Vacinas Anuais Adultos | lifecycle-stage | vacina anual cão gato |
| 3 | Lembretes Automáticos Vacinação | feature-focus | lembrete vacina animal automático |
| 4 | Desparasitação | preventive-type | desparasitação cão gato |
| 5 | Antiparasitários por Região | preventive-type | antiparasitários quando aplicar |
| 6 | Antirrábica Obrigatória | compliance | vacina antirrábica obrigatória portugal |

Blog posts: 3 | Ferramenta: Calendário Interactivo

---

## 3. Regras Editoriais — IMPORTANTE

### Conteúdo clínico
- **NÃO incluir protocolos vacinais específicos** (vacinas exactas, idades, frequências)
- Descrever de forma genérica: "o veterinário define o protocolo adequado"
- Focar no valor do sistema de lembretes, não na informação clínica
- Sempre incluir: "Os protocolos devem ser definidos pelo veterinário"

### Conteúdo legal
- **NÃO incluir valores de coimas** — podem mudar
- **NÃO citar artigos de lei** sem verificação recente
- Dizer: "obrigatória por lei — consulte DGAV para detalhes actualizados"

### Dados estatísticos
- **NÃO usar percentagens** sem fonte verificável
- Usar linguagem genérica: "muitos tutores esquecem-se", "uma parte significativa"

---

## 4. Roadmap

Semana 1: HUB + filhotes + antirrábica
Semana 2: Restantes spokes + 1 blog post
Semana 3: Publicar + indexação + links entre clusters
