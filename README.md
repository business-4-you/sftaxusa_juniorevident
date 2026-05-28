# SF Tax USA — Site Institucional

Site institucional para escritório de contabilidade na Flórida (EUA).

## Stack

- React 19 + TypeScript
- Vite 6
- TanStack Router (client-side SPA)
- Tailwind CSS v4
- Radix UI + Shadcn/UI
- Zod + React Hook Form

## Estrutura de pastas

```
src/
├── assets/          # Imagens locais
├── components/      # Componentes globais (Header, Footer, WhatsApp)
├── lib/
│   ├── site.ts      # ← DADOS DO CLIENTE (nome, telefone, e-mail, redes)
│   └── serviceContent.ts  # Conteúdo de cada página de serviço
├── routes/          # Páginas (TanStack Router file-based routing)
│   ├── __root.tsx        # Layout raiz
│   ├── index.tsx         # Home /
│   ├── sobre.tsx         # /sobre
│   ├── servicos.tsx      # Layout pai de /servicos/*
│   ├── servicos.index.tsx # /servicos
│   ├── servicos.$slug.tsx # /servicos/[slug]
│   ├── blog.tsx          # /blog
│   └── contato.tsx       # /contato
├── main.tsx         # Entry point React
├── styles.css       # CSS global + Tailwind
└── routeTree.gen.ts # GERADO AUTOMATICAMENTE — não editar
```

## Instalação e desenvolvimento

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Deploy no cPanel/WHM (Apache)

Após o build, copiar **todo o conteúdo** da pasta `dist/` para `public_html/`:

```
public_html/
├── .htaccess        ← obrigatório para SPA routing
├── index.html
├── favicon.svg
├── robots.txt
└── assets/
```

**Importante:** O arquivo `.htaccess` começa com ponto — ativar "Show Hidden Files"
no Gerenciador de Arquivos do cPanel para visualizá-lo.

## Dados do cliente

Editar o arquivo `src/lib/site.ts` para atualizar:
- Nome da empresa
- Telefone USA e Brasil
- WhatsApp
- E-mail
- Endereço
- Redes sociais (Instagram, LinkedIn, Facebook)
