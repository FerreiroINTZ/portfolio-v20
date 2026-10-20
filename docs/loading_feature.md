**Desconsiderar essa documentacao, por enquanto!**

# Intro
Como o site possivelmente vai ser pesado, preciso de uma tela de loading. Isso tambem corrobora pra imersividade da pagina.

## Funcionamento
A pasta _"@funcs/loading/loading"_ contem a funcao responsavel pela logica de loading. Ela basicamente e um contador.
A funcao default ja espera que quem a chamar ira, em algum momento, dizer que seu conteudo foi carregado. Entao qualquer componente que a chame ja incrementa o contador de itens a serem carregados.