# Intro
Uma pagina que mostra as features que ainda preciso desenvolver

## Loading Screen
Uma animacao de entrada e saida.
**Entrada**: pode ser uma animacao individual para cada elementos da pagina
**Saida**: todos os elementos somem, ficando apenas a estrela, que vai ate o centro da pagina, aumenta de tamanho e o fundo se abre no meio, contornando a estrela, e indo em direcao as laterais.

Alem do mais, seria interesante mover a logica de timeout da mudanca do "isAllLoaded" para o context. Assim evito ter que usar um state "extra", so pro loading

## Componentizar os Componentes da secak de stack
Aparentemente as secoes atualmente existentes (front-end & back-end) sao extremamente parecidas. 

O componente do canvas definitivamente pode ser reutilizado. Apenas colocando um prop que define se ele renderiza as imagens do (a): front-end; back-end; ou tools.

O Componente de "Content" pode talvez tambem ser reutilizado. Testei copiar o codigo do front-end inteiro e colar como "back-end", e funcionou perfeitamente. Eu apenas tive que colocar um "margin-top: -100vh" na secao de back-end - e terei que fazer o mesmo pra secao de tools, provavelmente. 
Mas, tamvez a secao de tools seja diferente, no ScrollTrigger final. Justamente por se intgegrar a proxima secao: Projetos.
Alem do mais, cada secao dentro de stack possue um Content diferente, entao posso vou ter que fazer na mao cada componente, e passar como filho pro componente reutilizavel, provavelmente.