# Carvero - Site Multi-página (Next.js)

## Estrutura de Rotas

- **/** – Home: resumo visual impactante, destaques da frota e proposta de valor
- **/frota** – Frota completa com filtros (Carros SUV, Motos Urbanas, Motos Premium)
- **/investir** – Página para investidores com modelo de negócio detalhado
- **/contato** – Formulário e links diretos de WhatsApp

## Como executar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar em produção
npm start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Componentes

- **Navbar** – Menu fixo no topo (todas as páginas)
- **Footer** – Rodapé padrão (todas as páginas)
- **ScrollProgress** – Barra de progresso de rolagem

## Imagens

Coloque as imagens dos veículos em `public/images/`:

- vw-nivus-2025.webp
- vw-tcross-2025.jpg
- nissan-kicks-2025.jpg
- citroen-c4-2025.jpg
- honda-titan-160.jpg
- honda-bros-160.jpg
- triumph-tiger-900.jpg

## Design

- Paleta Verde e Amarelo mantida
- Transições instantâneas entre páginas (App Router)
- Layout responsivo
