# Inicialização Angular

Eu utilizei a versão 12 do node nesse pequeno projeto, uma dica importante é quando for trabalhar com node, baixar o [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)

~~~
npm install -g @angular/cli@9
~~~

~~~
npm install -g nodemon
~~~

~~~
npm install
~~~

~~~
npm start
~~~


**OBS**: Esse projeto só tem front-end e espera ter acesso aos endpoints de uma api local, todas as requisições serão feitas através do arquivo artigoService.ts configurando sua api local e integrando com o banco de dados você vai poder utilizar esse projeto sem problemas.

Experimente baixar a extensão do VS Code: Rest Client que irá lhe dar a opção de testar a sua api sem precisar usar programas como o postman. Coloquei um arquivo routes na pasta backend que você usará para testar a api utilizando a extensão só basta clicar em Send Request e separar os endpoints com " ### ".

Em caso de algum problema com o comando npm install, considere desinstalar a pasta node_modules do projeto verificar a versão do node que está utilizando, no caso do NVM é só rodar o comando nvm use v12 e depois nvm list para verificar a versão do node. Depois disso basta rodar npm install novamente.
