# Portfólio · Flávio Henrique

Portfólio profissional com os sites que desenvolvi para clientes reais, projetos em andamento e estudos do SENAI.
Feito com **Next.js (export estático)** e **Firebase** (Hosting, Firestore e Analytics).

## Rodar localmente

```bash
npm install
npm run dev
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Projetos, links, contatos, skills, processo | `app/data.ts` |
| Layout da página | `app/page.tsx` |
| Visual (cores, animações, responsivo) | `app/globals.css` |
| Firebase (config, analytics, formulário) | `lib/firebase.ts` |
| Prints dos projetos | `public/projects/*.jpg` (1440×900) |
| Foto | `public/flavio-henrique.webp` |

Para adicionar um site novo, coloque o print em `public/projects/` e acrescente um item em `liveProjects` (ou em `labProjects`, se ainda estiver em desenvolvimento).

## Firebase

- **Formulário de contato:** grava na coleção `contatos` do Firestore. As mensagens são lidas pelo console do Firebase (Firestore → `contatos`). As regras em `firestore.rules` permitem só criar mensagens válidas; ninguém lê ou apaga pelo site.
- **Analytics:** visitas e cliques em projetos/links (`data-track`) aparecem no Google Analytics do projeto.

## Publicar no Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
npm run deploy
```

`npm run deploy` gera o build em `out/` e publica o site `portifolio-flavio-3273e-5ddc3` junto com as regras do Firestore.
Depois de publicado: https://portifolio-flavio-3273e-5ddc3.web.app
