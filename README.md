# Gatitobook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Itens aprendidos

Inicializamos instalando a ferramenta Angular cli, uma ferramenta de linha de comando fundamental para o nosso fluxo de trabalho com o framework.

Inicializamos o projeto com a opção —strict, onde temos maiores validações e verificações tanto do Type Script, como do próprio Angular, e melhores respostas no autocomplete do template e do componente.

Também aprendemos a organizar o nosso código em módulos, com o VS Code, e a carregá-los de forma dinâmica utilizando a técnica do lazy loading. Depois, criamos o nosso formulário de login utilizando o que a documentação chama de template driven, onde praticamente toda a montagem e validação do formulário fica no template e o Angular realiza o controle do modelo de dados.

Após o formulário de login, criamos o formulário de novo usuário. Nesse caso utilizamos a técnica dos formulários reativos, onde controlamos o modelo de dados no nosso componente. Com isso, criamos diversas validações customizadas, síncronas e assíncronas, além de validações de formulários.

Por fim, começamos a refinar a autenticação da nossa aplicação aprendendo a manipulamosr o* token jwt*. 
