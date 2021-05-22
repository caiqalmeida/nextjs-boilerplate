This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Editor Config
Padroniza a configuração do editor

# ESLint
(regras de código, utilização de hooks etc)
Verifica erros de código e encontra problemas

Plugins adicionados:
- eslint-plugin-react-hooks

Rules adicionadas:
- prop-types: como vamos usar typescript, não é necessário esta regra
- react-in-jsx-scope: no nextjs o react já é importado globalmente, então não precisamos ficar importando em todos arquivos que usam react
- explicit-module-boundary-types: ele nos força a sempre tipar o retorno da função, mesmo que seja implicito o tipo do retorno

# Prettier
(formatação visual do código)
