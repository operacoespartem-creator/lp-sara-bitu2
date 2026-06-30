# Dra. Sara Bitu — Landing Page (estrutura rica em mídia)

Vite + React 18 + TypeScript + Tailwind 3 + framer-motion + lucide-react.
Identidade: creme + dourado + petróleo. Mídia distribuída de cima a baixo.

## Rodar
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # /dist
npm run preview
```

## Estrutura (ordem das seções)
Header (logo oficial) · **Hero com VÍDEO do consultório** · **Faixa de prova social (fotos reais)** ·
A Dra. Sara · **Depoimento em VÍDEO (meio da página)** · Diferenciais · Tratamentos (interativo) ·
Destaques · **Antes & Depois** · Especialidades · Jornada · Galeria (fotos reais) · Depoimentos · FAQ · Contato · CTA · Footer

## Assets (em /public)
- `hero.mp4` (+ `hero-poster.webp`) — vídeo do consultório no hero (loop, mudo)
- `depoimento.mp4` (+ `depo-poster.webp`) — depoimento do paciente (marca do CapCut removida)
- `ad-1.webp`, `ad-2.webp` — antes & depois reais (marca d'água removida)
- `espaco-1.webp` — still do consultório
- `sara-atendimento.webp` — foto tratada da Dra. Sara
- `logo-horizontal.png`, `logo-circular.png`, `favicon.png` — logos oficiais

## Trocar antes de publicar
- **Vídeos**: posso reprocessar com mais qualidade/duração quando quiser; o hero está curto (loop de ~4s).
- **Depoimentos em texto** (`src/data.ts`): usar textos reais e autorizados.
- **Antes & Depois**: já são reais — confirmar autorização dos pacientes (LGPD/CFO).
- **Mapa**: trocar o `q=` do iframe (em `Contato`) pelo endereço completo.
- Mais fotos do espaço deixam a Galeria ainda melhor.
