# Vamos Contar - Contador de Passos

Um projeto educacional simples que implementa um contador de dígitos com interface web interativa.

## 📋 Descrição

Aplicação web que permite ao usuário contar de um número inicial até um número final, com incrementos personalizáveis através de um "passo".

## 🎯 Funcionalidades

- **Input de Início**: Define o número inicial da contagem
- **Input de Fim**: Define o número final da contagem
- **Input de Passo**: Define o incremento entre cada número
- **Botão Contar**: Executa a contagem com validação de dados
- **Exibição Visual**: Mostra o resultado da contagem com setas separando os números

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript**: Lógica da contagem e manipulação do DOM

## 📁 Estrutura do Projeto

```
contadorDePassos/
├── modelo.html      # Arquivo HTML principal
├── script.js        # Lógica JavaScript
├── style.css        # Estilos CSS
└── README.md        # Esta documentação
```

## 🚀 Como Usar

1. Abra o arquivo `modelo.html` em um navegador web
2. Insira o número inicial no campo "Inicio"
3. Insira o número final no campo "Fim"
4. Insira o valor do passo no campo "Passo"
5. Clique no botão "Contar"
6. O resultado será exibido na área de resultado

## ⚠️ Validação

A aplicação valida os dados de entrada e verifica se:
- O número inicial é maior que 0
- O número final é maior que 0
- O passo é maior que 0

Caso algum valor seja inválido, um alerta será exibido e a contagem não será executada.

## 📚 Exemplo de Uso

- **Início**: 1
- **Fim**: 10
- **Passo**: 2

**Resultado**: 1 → 3 → 5 → 7 → 9

## 💡 Origem

Projeto educacional desenvolvido durante o curso CursoEmVideo.

## 📝 Licença

© CursoEmVideo
