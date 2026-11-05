# Introducao

## Desing
### Cores
- papel: #F1E2CF
- marfim: #F7F0E6
- carvao: #161616
- texto escuro: #302C28
- dourado: #CFA45C
- dourado claro: #E8C783
- marmoree: #8A91A1

- extra_1: #B4977D
- extra_2: #987C5D
- extra_3: #A68759
- extra_4: #81735E
- extra_5: #252220

### Fontes
- Principal: Cormorant Garamond
- Secundaria: Frank Ruhl Libre

## Observacoes
### Variaveis globais
para que elas pudessem ser aplicada tive que configurar o vite.config.ts com a chave "loadPaths". Antes eu estava usando o "additionalData", mas ele so aplicava o arquivo nos estilos importados pelos tsx - entao os modulos nao importavam o arquivo das variaveis.
A consequencia de usar o "loadPaths" foi de que agora tenho que dar "@use "variables" as *;" em todos os arquivos que usem as variaveis. Pelo lado bom agora nao preciso usar caminhos relativos, e sim "absolutos". O que facilita bastante os imports