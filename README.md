# Next.js - Brasil 
Este é o repo do grupo Next.js - Brasil no Telegram. 

Este branch em especial é o `chakra`. Foi feito pra que possamos converter o site pra framework Chakra-UI e aprovar os arquivos.

## Update Log
- Foi instalado o Chakra-UI e removido o TailwindCSS, assim como o PostCSS (desnecessário)
- Criadas classes de medida similares às do Tailwind, que não estão presentes no Chakra
  - "full"
  - "screenW"
  - "screenH"
- Adição do uso do componente Chakra/Aspect Ratio, que em conjunto com next/Image, funciona legal pra manter as proporções de todas as imagens.
- Criado o componente Container para melhor controle de layout
- Ajustados os breakpoints de forma a evitar incidentes em que o usuário esbarre em mudanças de layout. 
  * _nota_: a prática, muito comum, de lidar com breakpoints como "768px", 1020px" etc. é complicada, porque ela infere que os limiares de uso pra um layout X ou Y se dá na margem do que é uma tela. O correto é abordarmos breakpoints mais abertos, que estejam entre essas resoluções populares. TL;DR: você estaciona o carro no meio da vaga ou em cima da linha?
- Reorganizados os folders de imagem
- Organizados os folders para tema

### Considerações: 
Talvez valha a pena remover o elemento "pai" do app afim de evitar problemas no caso de utilização de outras técnicas no futuro (que não Flex). Não sei o que vocês pensam disso.

Mantive o layout, não alterei basicamente nada.

== Abaixo, readme original. ==
-------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
