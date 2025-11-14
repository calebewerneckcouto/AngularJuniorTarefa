# Todo App Angular

Este repositório contém uma aplicação Angular para gerenciar tarefas (todos). A aplicação permite adicionar, editar, excluir e visualizar tarefas com diferentes prioridades. Este documento fornece uma visão geral da estrutura do projeto, instruções de instalação, execução e testes, além de diretrizes para contribuição.

## Estrutura do Projeto

```
src/
│
├── app/
│   ├── components/
│   │   ├── add-todo-form/
│   │   │   ├── add-todo-form.component.ts
│   │   │   ├── add-todo-form.component.html
│   │   │   ├── add-todo-form.component.css
│   │   │   └── add-todo-form.component.spec.ts
│   │   ├── header/
│   │   │   ├── header.component.ts
│   │   │   ├── header.component.html
│   │   │   ├── header.component.css
│   │   │   └── header.component.spec.ts
│   │   ├── todo-item/
│   │   │   ├── todo-item.component.ts
│   │   │   ├── todo-item.component.html
│   │   │   ├── todo-item.component.css
│   │   │   └── todo-item.component.spec.ts
│   │   ├── todo-list/
│   │   │   ├── todo-list.component.ts
│   │   │   ├── todo-list.component.html
│   │   │   ├── todo-list.component.css
│   │   │   └── todo-list.component.spec.ts
│   │   ├── statistics/
│   │   │   ├── statistics.component.ts
│   │   │   ├── statistics.component.html
│   │   │   ├── statistics.component.css
│   │   │   └── statistics.component.spec.ts
│   │   └── educational-footer/
│   │       ├── educational-footer.component.ts
│   │       ├── educational-footer.component.html
│   │       ├── educational-footer.component.css
│   │       └── educational-footer.component.spec.ts
│   ├── models/
│   │   └── todo.ts
│   ├── services/
│   │   ├── todo.service.ts
│   │   └── todo.service.spec.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.component.spec.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── main.ts
```

## Linguagens de Programação Usadas

- **TypeScript**: Linguagem principal para desenvolvimento de componentes, serviços e lógica de negócios.
- **HTML**: Utilizado para definir a estrutura dos componentes.
- **CSS**: Usado para estilizar os componentes.

## Dependências e Instruções de Instalação

### Dependências

- **Angular**: Framework principal para desenvolvimento da aplicação.
- **Jasmine**: Framework de testes para JavaScript.
- **Karma**: Executor de testes para Angular.

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/todo-app-angular.git
   cd todo-app-angular
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## Como Rodar o Projeto e Executar Testes

### Rodar o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

A aplicação estará disponível em `http://localhost:4200`.

### Executar Testes

Para rodar os testes unitários, utilize:

```bash
ng test
```

## Explicação Detalhada dos Arquivos de Código

### Componentes

- **AddTodoFormComponent**: Gerencia o formulário de adição de tarefas. Emite eventos para adicionar novas tarefas e alterar filtros.
- **HeaderComponent**: Representa o cabeçalho da aplicação.
- **TodoItemComponent**: Exibe e gerencia um item de tarefa individual, permitindo edição, exclusão e alternância de estado.
- **TodoListComponent**: Lista todas as tarefas, permitindo interação com cada item.
- **StatisticsComponent**: Exibe estatísticas sobre as tarefas.
- **EducationalFooterComponent**: Um rodapé educacional para a aplicação.

### Serviços

- **TodoService**: Gerencia a lógica de negócios relacionada às tarefas, como adicionar, remover e atualizar tarefas.

### Modelos

- **Todo**: Interface que define a estrutura de uma tarefa, incluindo propriedades como `id`, `text`, `completed`, `priority` e `createdAt`.

### Configuração

- **app.config.ts**: Configura o roteamento da aplicação.

### Ponto de Entrada

- **main.ts**: Inicializa a aplicação Angular com o componente principal `AppComponent`.

## Exemplos de Uso

### Adicionar uma Tarefa

1. Digite o texto da tarefa no campo de entrada.
2. Selecione a prioridade.
3. Pressione "Enter" ou clique no botão de adição.

### Editar uma Tarefa

1. Clique no ícone de edição ao lado da tarefa.
2. Modifique o texto e pressione "Enter" para salvar.

### Excluir uma Tarefa

1. Clique no ícone de lixeira ao lado da tarefa.

## Boas Práticas e Dicas para Contribuir

1. **Siga o Guia de Estilo do Angular**: Mantenha o código consistente com as práticas recomendadas do Angular.
2. **Escreva Testes**: Sempre que adicionar novas funcionalidades, escreva testes para garantir que o comportamento esperado seja mantido.
3. **Documente o Código**: Adicione comentários e documentação para facilitar o entendimento do código por outros desenvolvedores.
4. **Faça Pull Requests Pequenos**: Tente manter as mudanças pequenas e focadas em uma única funcionalidade ou correção.
5. **Revise o Código**: Antes de enviar um pull request, revise o código para garantir que ele esteja limpo e eficiente.

Esperamos que este guia ajude você a entender e contribuir para o projeto. Se tiver dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato.