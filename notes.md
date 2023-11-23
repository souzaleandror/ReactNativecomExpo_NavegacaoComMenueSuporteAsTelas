##### 20/11/2023

```
npx expo init gatito
npx expo start
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config
```

@01-Iniciando o projeto 

@@01
Apresentação

[00:00] Olá, me chamo Natalia Kelim Thiel e esse curso é para você que vem do React e quer aprender os conceitos iniciais do React Native ou então você que já conhece o React Native e quer se aprofundar mais sobre navegação, function components ou então sobre como atualizar o seu layout para que ele fique compatível com os dispositivos mais atuais.
[00:23] Vamos criar um projeto utilizando o Expo do zero, que é uma forma de simplificar a nossa configuração de ambiente e para programarmos e rodarmos as aplicações de uma forma mais fácil. Também vamos aprender quais são as principais diferenças entre utilizar o Expo e utilizar a forma React Native normal de criar o projeto.

[00:46] E no nosso projeto, que é o Gatito Pet Shop, vamos ter duas telas estáticas. A primeira tela é a tela de serviços, que vai conter uma lista dos serviços do Pet Shop, e a outra tela é a tela do carrinho, que vai conter os serviços adicionados no carrinho. Vamos utilizar para essas telas function components e também alguns hooks básicos, como o UseState e o UseEffect.

[01:12] Vamos ter, na nossa aplicação, uma navegação inferior no formato de abas e vamos aprender a estilizar essa navegação. E para fazer a navegação como um todo, vamos utilizar o React Navigation na versão 5.

[01:24] Vamos aprender como preparar as telas para os dispositivos com o Notch, que é esse recorte da parte superior da tela que geralmente contém câmera. Como fazemos para que a barra inferior do Iphone não sobreponha o conteúdo da nossa aplicação e vamos também estilizar Status Bar. Aqui, por exemplo, colocamos uma cor roxa. Isso tudo tanto no Android quanto no IOS porque temos diferenças para configurar cada uma dessas coisas.

[01:57] O que não vamos aprender nesse curso? Não vamos aprender a estilizar componentes, não vamos aprender também o React básico, que são os estados e os ciclos de vida. Isso porque já temos na Alura cursos sobre o React, que você pode dar uma olhada, ou esperamos que você possivelmente já tenha algum contato com o React ou o React Native anteriormente. Na nossa aplicação, lembrando também, que ela vai ser totalmente estática, não vamos fazer nenhuma chamada a API ou banco de dados. Dito isso, vamos começar?

@@02
Configurando o ambiente

Antes de criar o projeto, precisamos preparar o ambiente de desenvolvimento que se resume em dois itens: o Node.js, que é um interpretador JavaScript, e o Expo, uma biblioteca Node.js.
Para instalar o node Node.js, basta acessar o site oficial e efetuar o download na sua plataforma;
Verifique se o Node.js está instalado corretamente digitando node --version e o gerenciador de pacotes npm com o comando npm --version. Os comandos devem exibir a versão dos mesmos, caso contrário, verifique sua instalação.
Para instalar o Expo CLI, digite o comando npm install -g expo-cli no terminal. Este comando irá utilizar o gerenciador de pacotes npm para instalar globalmente (-g) o pacote expo-cli, ou seja, esse pacote ficará disponível para ser utilizado a partir de qualquer pasta no seu terminal.
E com isso já temos o Expo disponível para utilização no nosso projeto.

Ah! A pasta com os assets utilizados no curso devem ser baixadas (daqui) antes do início dessa primeira aula. Bons estudos!

https://github.com/alura-cursos/alura-gatito-static/tree/Aula1/assets

https://nodejs.org/en/download/

@@03
Expo vs CLI

[00:00] Originalmente para desenvolver aplicações mobile, precisávamos entender das tecnologias de cada sistema operacional e desenvolver uma aplicação para IOS e outra para Android. Por exemplo, nesse caso teríamos que aprender Java e utilizar o Android Studio para desenvolver uma aplicação para Android e aprender Swift, e utilizar o Excode para desenvolver uma aplicação diferente para IOS. Além de uma possível outra linguagem diferente para o back-end.
[00:26] Visando unificar o desenvolvimento mobile, foram criadas várias bibliotecas em HTML, JavaScript e CSS que nos permitiam desenvolvermos e rodarmos as aplicações como se fossem navegadores dentro do celular, desenvolvidas de forma mais simples para várias plataformas diferentes.

[00:45] O problema é que em questão de desempenho não era tão bom e não tinha tantos recursos nativos quanto desenvolver uma aplicação nativa de verdade. Surgiram outras bibliotecas, outras formas de nos desenvolvermos nativamente e hibridamente também. Essas formas nos permitem desenvolver em JavaScript, HTML e CSS, só que elas convertem o código para código nativo em vez de simplesmente rodar um navegador.

[01:14] Uma delas é o React Native, que é o que vamos utilizar nesta aula, que é uma biblioteca baseada no React que nos permite desenvolver aplicações nativas e híbridas ao mesmo tempo. Vindo aqui nas "Docs" dentro do site "reactnative.dev", podemos vir do setup do ambiente e vamos ter algumas informações, por exemplo, de que forma vamos instalar o nosso React Native?

[01:46] A forma tradicional é com o React Native CLI, com ela vamos precisar configurar o nosso ambiente, precisar configurar IDE, configurar os emuladores. Tudo isso pode demorar um tempo para cada sistema operacional, se você vai ter uma versão diferente para Android e para IOS demora o dobro do tempo, basicamente. Nem todo mundo tem a melhor máquina para desenvolver aplicativos, rodar os emuladores e ainda assistir às aulas da Alura, tudo isso ao mesmo tempo.

[02:14] Por isso, existe o Expo CLI, que é uma biblioteca Open Source que está aqui, que permite que rodam aplicações de uma forma muito mais simplificada sem precisar configurar um ambiente muito complexo. Basicamente também temos algumas limitações no Expo. Podemos vir em "docs.expo.io" e ir nas limitações para entendermos um pouco mais o que essa biblioteca não vai fazer para nós.

[02:42] Em alguns casos, algumas APIs não estão disponíveis ainda via Expo, por exemplo, você não pode usar Bluetooth, o webRTVe é utilizado para chamadas e chamadas de vídeo, também não é permitido in-App Purchase na loja da Apple. Compras direto da loja da Apple ou direto da loja do Google não são permitidas utilizando o Expo ainda.

[03:13] Também não podemos fazer algumas coisas em background, por exemplo, rodar alguns áudios e também enviar notificações e background. Outro ponto é que se você precisa de um aplicativo muito pequeno, o Expo pelo menos gera uma base de 20 mega, que são todas as bibliotecas do Expo juntas, ele sempre vai gerar aplicações com elas já disponíveis.

[03:39] Isso porque ele permite uma funcionalidade legal já nativa que podemos atualizar as aplicações sem de fato precisar enviar uma nova versão para a loja. Para isso, ele precisa ter todas as funcionalidades do Expo já embutidas nessa aplicação base.

[03:55] Além de outras limitações que você pode dar uma olhada na documentação da Expo também. Agora que já entendemos um pouco mais sobre o Expo, sobre o React Native, vamos começar criando o nosso projeto React Native. Para isso, precisamos, obrigatoriamente, fazer a atividade que foi deixada na aula, a atividade de ambiente para podermos instalar o node e também instalar o Expo CLI.

[04:17] Tendo isso instalado, podemos abrir o nosso terminal na pasta que queremos criar o projeto e podemos colocar expo init e o nome do projeto. Como já vimos na introdução, vai ser o projeto Gatito, o Pet Shop. expo init gatito. Agora ele vai pedir para escolhermos um template, inicialmente podemos escolher o blank, que vai criar um projeto em branco, não precisamos de nada mais complexo que isso.

[04:42] Esse processo de criar o projeto pode demorar um pouco dependendo da sua conexão porque ele vai baixar todos os pacotes, vai instalar e também dependendo do seu computador.

[04:54] Vou clicar aqui "Enter" no blank mesmo e ele vai começar a gerar o projeto. Pronto. Agora já temos o nosso projeto criado e aqui embaixo já podemos ver alguns comandos que podemos executar dentro do projeto. Primeiro, é claro, precisamos entrar dentro da pasta do projeto, vou colocar aqui cd gatito e podemos rodar o npm start. gatito git:(master) npm start.

[05:20] Com o npm start, podemos rodar os comandos abaixo que vão nos permitir rodar no Android, no IOS ou App, mas no caso não vamos precisar rodar o App. Ele vai abrir uma página em nosso navegador, caso não abra você pode olhar no terminal e ele vai dizer qual que é a url ou você pode escanear diretamente o QR Code do terminal, localhost:19002.

[05:45] Geralmente é essa url que ele gera para nós. Nessa URL é o banco rodando do React Native, com base nele é que vamos poder rodar as nossas aplicações sem precisar instalar o ambiente mais complexo do React Native.

[06:02] No menu lateral esquerdo temos algumas opções, por exemplo rodar no IOS simulador, que no meu caso vou rodar. Se você quiser rodar no seu celular sem precisar instalar nenhum simulador é muito simples, você só precisa ter a aplicação do Expo no seu celular, você procura na loja Expo e você escaneia esse QR Code no canto inferior esquerdo.

[06:25] Se você estiver no IOS, você pode abrir a câmera do celular e escanear e se você estiver no Android você abre o aplicativo do Expo e lá vai ter uma opção para você escanear o QR Code. Você escaneia e a aplicação vai abrir no seu celular.

[06:39] Lembrando, se o seu computador estiver em uma rede diferente do seu celular não vai funcionar porque na opção Connection, lado esquerdo, no tipo de conexão estamos utilizando o LAN, caso você queira utilizar uma rede diferente você muda para “Túnel”, isso aqui vai gerar uma url, vai fazer um túnel pela internet. Ele gerou certo aqui, você pode escanear o QR Code e ele vai fazer um túnel pela internet.

[07:04] Lembrando que vai depender da velocidade da sua internet do computador e da velocidade de internet do seu celular também. Pode ser que esse processo de rodar a aplicação fique mais lento se você mudar para o túnel. Caso você esteja na mesma rede, deixa em LAN que será mais rápido.

[07:24] No meu caso vou rodar no IOS Simulator e ele vai começar a instalar a aplicação no meu simulador. Esse processo inicialmente demora um pouco também, mas é só na primeira vez, nas outras vezes vai mais rápido. Vamos rodar no simulador.

[07:40] Agora já temos a nossa aplicação rodando no simulador ou no seu celular, por exemplo, se você instalou o Expo. Temos a tela inicial, está dizendo para abrirmos o "app.js", o arquivo "app.js", e começar a trabalhar no nosso aplicativo. Nas próximas aulas, vamos aprender mais sobre o que é esse arquivo "app.js" e outros arquivos do nosso projeto.

@@04
Criação do projeto

[00:00] Nessa aula, vamos entender mais sobre as pastas e os arquivos que o Expo criou para nós, vamos alterar o nome da aplicação, alterar a splash screen e também alterar o ícone da aplicação. Para isso, precisamos primeiro abrir o projeto no nosso editor de texto favorito ou se você não conhecer nenhum, neste caso vou abrir no VS Code, Visual Studio Code. Vou clicar ou em "Open Folder" ou em "File > Open", vou escolher a pasta do projeto e clicar em "Open".
[00:36] Vamos ter na lateral esquerda os arquivos do nosso projeto. Podemos fechar essa aba de welcome e vamos entender um pouco mais. Além dos arquivos do Node, que no caso é esta pasta de "node_modules", que vai conter todos os pacotes da nossa aplicação e também o "package.json" que contém as versões desses pacotes, temos aqui o "app.js".

[01:00] É o arquivo que está dizendo aqui no simulador ou na aplicação que você estiver rodando no celular que é para começarmos editando ele para mexer em nossa aplicação. Vamos abrir.

[01:09] Vamos tentar entender. Aqui temos um componente, o App, nele vamos ter o texto que está escrito lá. Vamos pegar e alterar o texto, vamos colocar Alura ou alguma coisa que você queira colocar. Vou salvar. Ele já atualiza automaticamente para nós sem precisarmos recarregar o projeto.

[01:34] Podemos digitar alguma coisa no VS Code , se chama Live Load, ele automaticamente vai enviar essas informações para a aplicação e atualizar. Lembrando que só dá para fazer isso se editarmos o componente, um texto, uma imagem, alguma coisa assim. Se tivermos que adicionar a bibliotecas ou coisas mais profundas que não sejam dentro dos componentes vamos precisar rodar a aplicação de novo de qualquer forma.

[02:01] Agora vamos ver o outro arquivo que o Expo criou, que é um arquivo exclusivo do Expo, não vai existir na versão React Native normal, que é esse "app.json". Nele podemos alterar o nome da aplicação, por exemplo, vamos colocar Gatito com o g maiúsculo. O slug, que é como a aplicação vai ser vista por baixo dos panos, geralmente temos um nome minúsculo, não tem espaço, caracteres especiais dependendo do caso. Podemos deixar só gatito mesmo, não tem nenhum problema.

[02:37] Também já podemos alterar de cara o ícone e a splash screen que no React Native teríamos que fazer um processo um pouco diferente. Vamos pegar a pasta que está disponível nesta aula, vou abri-la. Temos na pasta assets o ícone e a splash screen.

[02:56] A pasta de assets já está aqui e já temos o ícone e a splash screen antigas, podemos arrastar o ícone para dentro da pasta, dar um replace e também vamos arrastar a splash screen, replace. Se clicarmos já estão o ícone e a splash screen. O "favicon.png", que é uma coisa mais para web, podemos remover e esse "adaptive-icon.png" por enquanto podemos remover também.

[03:37] Vamos vir aqui no "app.json", podemos remover o web e essa parte de Android que está dizendo sobre o "adaptive-icon", vamos remover porque não está utilizando ainda. E o background da splash screen também vamos colocar uma cor um pouco mais escondida com o nosso projeto. Digitamos o hexadecimal: "backgroundColor": "A050BE". Vou salvar e nada vai acontecer ainda, precisamos dar um Refresh na aplicação. Pronto.

[04:21] Eu apertei em "Command R", no caso do IOS. Se você estiver usando o seu celular você chacoalha o seu celular que vai abrir um menu semelhante a este aqui e você pode apertar em "Reload". Neste caso, para abrir o menu no simulador da IOS, eu apertei "Command D".

[04:45] Agora já vimos a nossa splash screen, vamos tentar entender se mudamos também o ícone e o nome da aplicação. Vou fechar o Expo e vou abrir de novo a aplicação porque no caso do Expo não temos a aplicação instalada dentro do celular mesmo, vamos tê-la só dentro do Expo por enquanto.

[05:06] Depois podemos gerar uma aplicação que vai ser instalada no celular, mas neste caso de desenvolvimento ainda vamos tê-la listada aqui dentro do Expo apenas. Podemos ver aqui que já mudamos o ícone da aplicação e o nome também está com G maiúsculo. Nas próximas aulas, vamos editar mais coisas em nossa aplicação.

@@05
Alterando nome, ícone e splash screen da aplicação

Para alterarmos o nome de exibição da aplicação, a splash screen e o ícone da aplicação, precisamos apenas:

Alterar o name, o slug e o backgroundColor da splash dentro de app.json e substituir as imagens icon.png e splash.png dentro de assets. Reiniciar a aplicação para ver as alterações.
 
Correto! O Expo dispõe o arquivo app.json para que possamos configurar o nome, splash e ícone de maneira mais simples.
Alternativa correta
Não é possível alterar o nome da aplicação e imagens após serem criadas via código, para isso precisamos alterar nas lojas a publicação (Play Store e App Store).
 
Alternativa correta
Alteramos os parâmetros do componente dentro de App.js passando name e slug. Para as imagens, precisamos alterar o source do componente Image do react native incluindo as novas imagens.

@@06
Alterando a frase inicial

Para alterarmos a frase inicial que aparece na primeira página da aplicação, sendo que o aplicativo já está rodando, precisamos apenas:

Alterar o arquivo app.json, fechar e abrir a aplicação novamente.
 
Alternativa correta
Apenas alterar o arquivo app.json. Assim, o texto será atualizado na tela.
 
O arquivo app.json contém algumas configurações do app, mas o texto inicial não é uma delas, os elementos que compõem a tela geralmente estão dentro de componentes JavaScript.
Alternativa correta
Alterar o arquivo App.js, fechar e abrir a aplicação novamente.
 
Alternativa correta
Apenas alterar o arquivo App.js. Assim, o texto será atualizado na tela.
 
Correto! Alterando o App.js, modificamos o nosso único componente da aplicação até agora e não precisamos fechar e abrir a aplicação pois o live reload do react native atualiza automaticamente as alterações feitas em componentes JavaScript.

@@07
Faça como eu fiz: Criação do projeto

Lembre-se de fazer as atividades de configuração de ambiente, então podemos prosseguir com a criação do nosso projeto. Para isso, basta rodar o comando abaixo:
expo init gatitoCOPIAR CÓDIGO
Depois de selecionar o template blank e aguardar a instalação, execute o comando abaixo para rodar o projeto:

npm startCOPIAR CÓDIGO
Então na aba que abriu no navegador, você pode rodar o aplicativo no simulador ou escanear o QR code com o aplicativo do Expo diretamente no seu celular.

Como primeira alteração no projeto, podemos mudar o nome, splash screen e ícone utilizando o arquivo app.json do projeto e reiniciar a aplicação caso necessário.

Com isso temos nossa aplicação React Native rodando, além de nome, splash screen e ícone customizados!

@@08
O que aprendemos?

Nesta aula começamos o curso, criando a partir do zero um projeto react native, rodando em um dispositivo ou simulador e alterando alguns elementos da aplicação como nome, splash screen e ícone. Os conceitos aprendidos nesta aula foram:
As diferenças entre um projeto react native utilizando o Expo CLI e outro utilizando o React Native CLI;
A criar um projeto e entendemos a estrutura básica dos arquivos gerados, para alterar o componente inicial e vermos as alterações em tempo real;
A alterar o nome da aplicação, configurando uma splash screen e mudando o ícone do aplicativo.

#### 20/11/2023

@02-Primeira tela

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.
Para acompanhar os vídeos desta aula, você poderá baixar os estilos (daqui) também ;)

https://github.com/alura-cursos/alura-gatito-static/tree/Aula1

https://github.com/alura-cursos/alura-gatito-static/tree/Estilos/estilos

@@02
Tela de serviços

[00:00] Agora que já entendemos um pouco mais sobre o nosso projeto, vamos começar finalmente a colocar a mão na massa e criar a nossa primeira tela, a tela de serviços. Antes disso, vamos organizar as pastas do projeto.
[00:11] Vamos criar uma pasta chamada “src”, que vai conter todo o código fonte do nosso projeto e, também, podemos adicionar uma pasta chamada “telas” para armazenar as nossas telas. Dentro das telas, vamos criar nossa tela de serviços que será nosso primeiro componente.

[00:32] Um componente pode ser estruturado da seguinte forma: podemos ter uma pasta com o nome dele, “Servicos”, sem o cedilha, barra index ponto js. Servicos/index.js. É uma pasta de serviços com o arquivo “index.js” dentro. Dessa forma o React sabe que esse “index.js” é o nosso arquivo principal do nosso componente.

[00:55] A primeira coisa que precisamos fazer é importar o React from react. import React from 'react';. Esse import não vai ser utilizado diretamente, não vamos utilizar essa variável react, pelo menos não nesse projeto. Só precisamos importar esse react porque precisamos dizer para o JavaScript, no caso do React, para ele entender que vamos utilizar tags dentro do arquivo JavaScript. Para podermos utilizar as tags precisamos importar o React.

[01:29] Vamos começar a exportar o nosso componente. Esse export default só pode ser utilizado uma vez por arquivo. Já o export podemos exportar várias coisas, mas o export default é uma vez só. Vamos criar uma função, a função é uma forma de representar o componente. Existem outras, mas inicialmente vamos focar só na função.

[01:53] Vamos colocar o nome da nossa tela, que é “Servicos”, abre e fecha parênteses e abre e fecha chaves. Precisamos retornar alguma coisa aqui dentro, inicialmente vamos colocar só um texto. export default function Servicos() { return <Text</Text> }.

[02:10] Para podermos utilizar alguma coisa no React Native, podemos utilizar tags HTML, entre outras coisas. Já no React precisamos importar todas as tags que vamos utilizar porque ele não sabe de onde vem esse text. Para utilizarmos o text, o importamos usando as chaves, importamos de React Native. Agora já podemos usar as tags text sem nenhum problema. Vou colocar aqui tela de serviços porque na Alura já temos no “React.js”. return <Text>Servicos</Text>.

[02:57] Agora aqui já conseguimos ver algumas coisas que já falei antes que só podemos utilizar tags que importamos, não dá para utilizarmos tags que não são importadas. Não podemos retornar mais de uma coisa, por exemplo, não podemos colocar aqui um text ao lado do outro.

[03:14] Aqui está até dando porque isso é uma função, é como se fosse um componente, uma coisa dentro. Ele só pode retornar uma coisa de cada vez, para fazermos isso daqui teremos que circundam esses dois texts com alguma outra tag. Neste caso, vamos deixar só o text.

[03:35] Outra coisa também é que sempre que precisamos digitar alguma coisa, mostrar um texto, precisamos obrigatoriamente usar a tag text. Porque o React Native não sabe que pode mostrar qualquer coisa como você faria no HTML, colocaria um text em qualquer lugar e ele exibe na tela. No React Native sempre precisamos utilizar esse text.

[03:57] Agora vamos abrir a nossa aplicação que já está rodando. Ainda está Alura, não está aparecendo o nosso componente. O que podemos fazer? Temos que vir no App onde está essa Alura e podemos remover essas coisas que não estamos usando. Por exemplo, esses estilos embaixo e vamos deixar só o return. Podemos apagar também todos os imports e deixar apenas o import do react. `import React from 'react'; export default function App() { return; }´.

[04:35] Temos aqui a base de um componente que vai ser o nosso componente de App e precisamos retornar alguma coisa. Para retornar podemos utilizar o nosso “Serviços”, que é o componente que acabamos de criar. Só que como eu disse antes, precisamos importá-lo de algum lugar. `return ;´.

[04:52] Vamos colocar aqui import Servicos from, usar o ponto barra para dizer que queremos partir da pasta que estamos agora, usamos o ponto barra e vamos entrando nas pastas. src/telas/Servicos. Não precisamos colocar o barra index, simplesmente a pasta serviços já é o suficiente para dizermos que o nosso componente está ali dentro. ´import Servicos from './src/telas/Servicos';´.

[05:18] Vou salvar. Pronto. A princípio parece que tem algum problema, mas agora conseguimos ver que em cima no canto esquerdo está escrito serviços. Se você estiver utilizando o IOS também ou o Android com o note, é possível que esse problema aconteça com você também. A nossa tela vai estar por baixo da StatusBar. No caso dos Androids, que não tem no note, geralmente não vai acontecer isso.

[05:47] Para resolver isso podemos englobar uma tag e colocar uma margem superior e também às vezes uma margem inferior para não cobrir essa barra do IOS. O React Native já nos disponibiliza uma tag que faz isso, que é o SafeAreaView.

[06:06] Vamos começar importando SafeAreaView e colocar o Text dentro do SafeAreaView, e fechamos o SafeAreaView depois do Text. import { SafeAreaView, Text } from 'react-native'; return <SafeAreaView> <Text>Serviços!</Text> </SafeAreaView>;

[06:31] Vou salvar. Pronto. Agora o nosso texto já está abaixo da StatusBar, só que esse SafeAreaView só serve para o IOS. Se você olhar a documentação dentro do React Native só existe ele para o IOS. No Android também podemos resolver isso de uma forma bem simples, vamos precisar importar outra coisa, que é a StatusBar.

[06:51] Importando StatusBar e colocando ela no começo, pronto. Aqui no IOS não vai mudar nada, mas no Android você vai ver, se você tiver esse problema, que o seu texto já vai estar abaixo da StatusBar. import { SafeAreaView, StatusBar, Text } from 'react-native'; return <StatusBar>.

[07:08] Agora vamos começar criando a nossa lista de serviços. Como não vamos conectar no banco inicialmente, vamos começar colocando a lista como uma variável, uma array de serviços.

[07:20] Criamos uma variável no nosso index de serviços e começamos a colocar os nossos serviços como se eles estivessem vindo do banco. Vamos tem um id, vou colocar id 1, o nome do serviço que pode ser Banho, um preço que vamos colocar 79.90.

[07:53] Lembrando que é pra utilizar um ponto porque é um decimal, na linguagem de programação utilizamos ponto ao invés de vírgula. Descrição que pode ser "não dê banho no seu gato, mas se precisar nós damos." const servicos = [ { id: 1, nome: "Banho", preco: 79.9, descricao: "NÃO DE BANHO NO SEU GATO. MAS SE PRECISAR NÓS DAMOS." }.

[08:24] Já temos um serviço, vamos criar o segundo serviço. Id 2, o nome pode ser vacina V4, o preço pode ser 89.90 e a descrição "uma dose da vacina V4. Seu gato precisa de duas." id: 2, nome: "Banho", preco: 79.9, descricao: "Uma dose da vacina V4. Seu gato precisa de duas.".

[09:05] O último serviço vou colocar o id 3, e o nome Vacina Antirrábica, o preço pode ser de 99.90 e a descrição uma dose da vacina antirrábica. Seu gato precisa de uma por ano. id: 3, nome: "Vacina Antirrábica", preço: 99.9, descrição: "Uma dose da vacina Antirrábica. O seu gato precisa de uma por ano. Temos agora três serviços, já podemos utilizá-los para listar na nossa tela de serviços.

@@03
Listagem de serviços

[00:00] De que forma vamos fazer isso? Poderíamos percorrer essa lista e exibir cada item, fazer um for aqui e exibir cada item. O React Native já tem um componente que permite que façamos listas de uma forma mais otimizada. Por exemplo, se for uma lista muito grande ele vai carregar em partes, vai otimizar mais a lista do que simplesmente fazermos um for aqui dentro.
[00:24] Vamos pegar e importar aqui em cima o nosso componente FlatList. Esse é o componente que vamos utilizar para fazer a nossa lista. Usamos ele embaixo e já vai aceitar uma variável, um parâmetro chamado data. Esse data já é a nossa lista, podemos simplesmente colocar aqui servicos, que é a nossa lista de serviços que acabamos de criar. Vou fechar o componente para parar de cometer o erro. <FlatList data={servicos}/>.

[01:02] Além da data nós também precisamos dizer o que vai ser renderizado em cada item do componente porque ele não sabe o que é nome, preço, serviço. Na descrição precisamos dizer exatamente o que queremos que seja exibido e de que forma queremos que seja exibido. Para cada item ele passar por esse método renderItem, que é do FlatList também, e vamos ter uma função que vai renderizar esse item.

[01:32] Como parâmetro desse renderItem vem um item e dentro do item vamos ter uma variável item e podemos acessar o nosso item, de fato. Vou colocar aqui nome. renderItem={(item) -> {item.item.nome}.

[01:53] Vou salvar e vamos ver o que acontece. Aqui estou colocando uma variável, mas não estou dizendo o que essa string vai fazer. Por isso existe aquele esquema de sempre precisar colocar o Text. Se eu colocar um Text ao redor desse item e também precisamos colocar os colchetes para exibir essa variável. Para exibirmos uma variável dentro das tags utilizamos colchetes a variável aqui dentro. renderItem={(item) => {<Text>{ item.item.nome }</Text>}.

[02:43] Ainda não está aparecendo. Vamos tentar fazer de uma forma um pouco diferente. Extraímos o item aqui de dentro do parâmetro. Estamos fazendo uma função aqui, estamos criando uma função só que ela não sabe que esse Text precisa retornar, ou precisamos dizer o return no Text, vai exibir, ou podemos remover esse segundo colchete que ele já vai saber que o retorno é esse Text.

[03:21] Já temos o retorno em forma de Text. Essa desconstrução é para pegar diretamente essa variável de item de dentro do parâmetro, podemos usar os colchetes para pegar diretamente o item e podemos também pegar diretamente o nome se quisermos.

[03:40] Por exemplo, colocando aqui dois pontos nome, item: {nome};. Entramos dentro do item e selecionamos essa variável nome, exporta essa variável nome para podermos utilizar. Podemos só colocar o nome e pronto, já exibimos a lista de serviços. Outro item que também podemos colocar aqui é o keyExtractor.

[04:05] Em algumas versões ele pode pedir para que tenhamos em cada item uma key. Aqui temos a nossa key única por item que é o nosso id, podemos colocar aqui também id, neste caso não tem o item é o nosso objeto direto. Podemos colocar id e o key sempre precisa ser uma string, utilizamos string id. keyExtractor={(id) => String(id)}.

[04:39] Agora que já temos a nossa lista vamos organizá-la um pouco e separar isso em outro componente, senão vamos ter um monte de componentes e tags aqui dentro exibindo as coisas que queremos exibir e não vai ficar legal assim. Vamos criar dentro da pasta de serviços uma pasta chamada Item que vai ser esse item renderizado, o item de cada lista. Vamos colocar o “index.js” dentro dele também.

[05:09] Importamos o React como sempre: import React from 'react' e exportamos o componente: export default function Item() { }. Aqui em item precisamos receber os parâmetros, precisamos saber o que vamos precisar exibir, que é o nome, o preço e a descrição. Vamos colocar entre chaves o nome, o preço e a descrição. export default function Item ({nome, preco, descricao)}. Esses são nossos parâmetros que vamos passar no outro arquivo pelo componente quando chamarmos ele.

[05:49] Neste caso, precisamos retornar todas essas variáveis em texto. Para circundá-las, para colocarmos alguma coisa ao redor podemos utilizar fragmentos. O fragmento é como se fosse uma tag só que não tem nada dentro e ele não precisa ser importado. Ele não vai alterar a estrutura do nosso componente, só vai permitir que agrupemos as coisas sem alterar a estrutura.

[06:07] No fim das contas ele não vai estar na nossa árvore de componentes ele só agrupa as coisas mesmo. Vamos colocar aqui um Text, temos que importá-lo em cima: import { Text } from 'react-native';. Usando os colchetes para poder colocar as coisas na tela colocamos o nome e vamos colar o preço e a descrição. <Text>{ nome }</Text> <Text>{ preco }</Text> <Text>{ descricao }</Text>

[06:59] Esses componentes não estão sendo utilizados, ainda precisamos vir na tela de serviços e alterar o renderItem para utilizar o nosso componente. Vamos remover o nome porque vamos ter que colocar todas as variáveis. Por enquanto, vamos colocar o item que é o componente que acabamos de criar e precisamos importá-lo.

[07:26] Vamos no topo, fazer import Item from ‘./Item’, que é a partir do ponto atual, e entramos dentro do item que está dentro de serviços. Agora podemos passar aqui, por exemplo, nome igual a nome. renderItem=[({item: {nome} }) => <Item nome={nome}.

[07:53] Temos alguns espaços em branco aqui porque as outras variáveis estão faltando. Poderíamos colocar aqui preço igual a preço e descrição igual à descrição, só que fica muito extenso. Tem uma forma de fazer melhor, assim como a desconstrução podemos apagar esse nome e com base no item utilizamos as chaves e colocamos três pontos item. <Item {...item} />.

[08:19] Dessa forma, o JavaScript vai extrair tudo o que tem de dentro do item e passar para esse componente como parâmetro. Vou salvar. Agora já temos todas as nossas informações dos serviços listados. Na próxima aula, vamos aprender a estilizar, vamos estilizar nossa página de serviço e também criar algumas outras funcionalidades.

@@04
Estilos

[00:00] Nessa aula vamos estilizar a nossa tela de serviços e também criar o botão de adicionar o carrinho. Antes vamos olhar o que deixamos para trás na última aula. Você pode ter percebido que ficou um erro de dois filhos encontrarem a mesma key.
[00:20] Isso é porque colocamos Extractor e utilizamos o id sem fazer a desconstrução, estamos pegando o ‘id’ como se fosse a variável principal. Ele nada mais é do que o objeto inteiro. Precisamos apenas passar os colchetes ao redor do {id} e esse erro não vai mais aparecer. keyExtractor={([id]) => String(id)}.

[00:44] Para começar a estilizar, vamos pegar a pasta que está disponível aqui nesse projeto que você vai ter acesso e vamos começar pegando os estilos global e os estilos do item. Estilos “global”, vamos arrastar e colocar dentro da pasta "src".

[01:08] Vou renomeá-lo para “estilos.js”. Ele contém um estilo de preencher que é bastante utilizado em vários componentes e também as cores do nosso projeto. Agora também temos outro estilo que é o estilo Item. O estilo.Item vou arrastar para dentro do Item, também vou tirar esse item que tem no final e deixar só “estilos.js”. Aqui tem várias estilizações do nome, preço, todas essas coisas que vamos utilizar em nossa tela de serviços.

[01:42] Vamos começar vindo aqui no Item e importando esses estilos. Import estilos from, você pode usar ponto barra estilos, porque está dentro da mesma pasta. import estilos from './estilos';.

[01:58] Agora podemos aplicar os estilos em cada um dos nossos ‘Texts’. Vou colocar aqui <Text style={estilos.nome}>{ nome }</Text>, <Text style={estilos.preco}>{ preco }</Text>, <Text style={estilos.descricao}>{ descricao }</Text>.

[02:23] No nosso layout a descrição vem antes do preço, vou alterar aqui e colocar a descrição no meio e o preço no final. <Text style={estilos.nome}>{ nome }</Text>, <Text style={estilos.descricao}>{ descricao }</Text>, <Text style={estilos.preco}>{ preco }</Text>. Aqui também precisamos fazer um componente que fique ao redor desses caras. Não só o fragmento porque também queremos estilizar e o fragmento não conseguimos estilizar.

[02:41] Esse componente podemos utilizar a View para ser como se fosse uma div do html. Também precisamos importá-la aqui e vamos colocar os estilos aqui que preparamos, estilos ponto informação. return <View style={estilos.informacao}>.

[03:03] Salvamos aqui e agora está bonita a nossa lista de serviços. Eu vou recarregar porque ele está duplicando. Pronto. Agora temos só a lista mesmo de serviços novos, temos o título, a descrição e o preço estilizado de uma forma legal.

[03:25] Vamos criar a sessão de adicionar o carrinho. Essa sessão, como já vimos no layout, vai ter um valor de quantidade que vamos poder alterar a quantidade e ela vai mostrar também o total enquanto estamos alterando a quantidade e tem um botão de adicionar.

[03:44] Vamos fazer essa sessão ser como se fosse uma irmã dessa View, mas para isso precisamos circundar também com alguma outra coisa, vamos usar um fragmento já que não precisamos estilizar ainda. Coloquei um fragmento ao redor da View e vou criar uma outra View aqui embaixo.

[04:05] Essa View vai ter um estilo carrinho e dentro dela temos uma View que por enquanto não tem nada com mais uma View estilo valor. </View> <View style={estilos.carrinho}> <View> <View style={estilos.valor}>.

[04:37] Esse valor vamos ter duas vezes, é o agrupador da label e da informação. Vai ser quantidade e o input de quantidade e total e o Text da quantidade de total o valor mesmo. Vamos colocar aqui dentro um Text que vai ter a quantidade e ele vai ter um estilo também, o estilo dele vai ser quantidade, <Text style={estilos.quantidade}>Quantidade:</Text>.

[05:14] Temos também o nosso TextInput. Para fazer o Input podemos utilizar este que é o Input do React Native, temos que importá-lo em cima também. Como eu dei um "Enter" ele já importou automaticamente, mas lembra de importar também. <TextInput />.

[05:31] Vamos copiar e colar a segunda. Também temos a descrição. Na verdade, em cima também é descrição não é quantidade não, é descrição. <Text style={estilos.descricao}>Quantidade:</Text>. O texto está embaixo do preço.

[06:01] Vamos colocar preço ao invés de quantidade. <Text style={estilos.descricao}>Preço:</Text>. Inicialmente deixamos aqui 0 sem alterar esse valor. Text style={estilos.preco}>0</Text>.

[06:10] Agora temos quantidade e preço. Vamos colocar aqui um value dentro do Input só para vermos porque o Input está aparecendo aqui e se habilitarmos o Keyboard de Software podemos ver que tem esse Input. Já podemos digitar alguma coisa aqui só que ainda não está funcionando. TextInput value='0' />.

[06:39] Além disso também temos o botão de adicionar. Vou adicioná-lo aqui dentro da View do carrinho, mas fora dessa View que criamos vazia. Vou chamar de Button e vamos importar automaticamente do React Native esse botão, vou colocar o title e vou escrever aqui adicionar. <Button title="Adicionar" />.

[07:15] Vamos salvar. Agora temos o botão de adicionar do lado e seria legal também termos uma divisória aqui porque está tudo meio grudado.

[07:23] Vamos adicionar embaixo dessa View como última coisa mais uma View style={estilos.divisor} />. Agora já temos nossa lista de coisas e ela já tem umas divisões legais. Vamos precisar estilizar o campo, esse campo de quantidade e também o botão.

[07:54] Vamos estilizar o campo inteiro criando uma pasta dentro de “src”, chamada “componentes”. Porque nesse campo vamos poder utilizá-lo em vários outros componentes também, em várias outras telas e componentes mesmo. Podemos criar aqui uma pasta chamada CampoInteiro com um "index.js" dentro.

[08:22] Como esse é um novo componente importamos import React from 'react', e exporta o componente export default function CampoInteiro () {. Aqui vamos retornar o TextInput que estamos utilizando lá e mais algumas coisas que vamos colocar. return <TextInput />.

[08:56] Precisamos importar esse TextInput, import { TextInput } from 'reac-native'; E também vamos habilitar algumas funcionalidades nele antes de estilizar. Por exemplo, queremos que a quantidade não abra um teclado de texto, queremos só números.

[09:22] Vamos mudar para KeyboardType = ‘number pad’. Também queremos que quando selecionarmos o campo já deixe selecionado o número dessa forma assim para que possamos sobrescrever o que estiver ali. Podemos colocar aqui selectTextOnFocus.

[09:56] Vamos testar para ver se isso está funcionando. Salvamos, abrimos aqui. Precisamos utilizar esse campo, ainda não estamos utilizando estamos utilizando o campo antigo. Precisamos passar o valor onde exportamos export default function CampoInteiro (valor).

[10:21] Porque estamos utilizando um valor lá, vou colocar em baixo value = {valor}, o qual estamos passando e vamos sobrescrevê-lo no “index.js” no “Item”. Vamos utilizar <CampoInteiro valor ='0' />.

[10:42] E podemos apagar o import do TextInput e importar o nosso TextInput mesmo que é o ‘CampoInteiro’. Nosso TextInput customizado, temos que voltar algumas pastas até chegar na pasta de componentes que está dentro de “src”. Voltamos três pastas, entramos em componentes e ‘CampoInteiro’, import CampoInteiro from ' ../ ../ ../componentes/CampoInteiro';.

[11:09] Vamos salvar e vou recarregar para ver o que acontece. Pronto. Agora clicando no campo já selecionamos o número e também abre um teclado apenas numérico.

[11:23] O que mais podemos fazer aqui. Vamos fazer com que, quando digitamos alguma coisa, digita mesmo porque pode ver que ele sempre deixa zero pois passamos zero mesmo aqui, estamos passando zero e ele está dizendo que é zero e nunca vai mudar de zero.

[11:37] Para isso primeiro vamos passar nesse valor, vamos passar um número. Inicialmente sempre vai ser 1, a quantidade 1. Passamos em formato de número e precisamos converter para texto, porque pode ver que até apagou aqui, o TextInput só aceita texto.

[11:59] Vamos criar uma constante: const numeroString =. E podemos convertê-lo para uma string passando ele dessa forma: String(valor);. Ou número em texto que fica mais legível. const numeroEmTexto = String(valor);. value=[numeroEmTexto}. Agora temos pelo menos o valor de novo, sempre se esse em texto.

[12:29] Agora vamos criar o método que vai atualizar esse valor. Precisamos salvá-lo em algum lugar. Como quem vai utilizá-lo vai ser o item podemos salvá-lo direto no Item. Vamos vir aqui e criar um valor da quantidade, const [quantidade, setQuantidade] no formato de um estado. const [quantidade, setQuantidade] = useState(1);

[13:11] Esse useState temos que importá-lo de react. import React, { useState } from 'react';. Isso significa que vou criar em estado chamado quantidade e para eu alterar essa quantidade eu posso usar o método ‘setQuantidade’ e inicialmente essa quantidade é 1.

[13:31] Vamos pegar a variável de quantidade e colocamos aqui no valor. Também podemos passar aqui o método de ação e ela vai receber o ‘setQuantidade’. CampoInteiro valor={quantidade} acao={setQuantidade} />. Cada vez que eu executar alguma ação ele vai atualizar essa quantidade que está aqui por fora.

[14:10] Precisamos implementar essa ação aqui também dentro do ‘CampoInteiro’. Vou colocar aqui ação e aí podemos colocar OnChangeText, quando o texto for alterado passamos uma função aqui com a variável novo valor, ele já manda com esse método OnChangeText, e podemos dizer que ação, chama como método porque é um método, e passar um novo valor que é para atualizar esse valor.

[14:50] onChangeText={(novoValor) => {acao(novoValor)}, value={numeroEmTexto} Vamos ver se está funcionando.

[14:52] Se eu colocar 2 aqui, 3, 4, pronto. Agora nosso Input está pelo menos funcionando, armazenando o valor e esse valor está acessível pelo item nessa variável quantidade.

@@05
Correção do Teclado

Observação:
Se você perceber que, ao clicar na quantidade do último item e o teclado aparecer e sumir, é possível adicionar a propriedade removeClippedSubviews={false} na FlatList, que está dentro do seu index principal, na pasta "Carrinho", para resolver esse problema, o código ficará assim:

<FlatList
      data={servicos}
      removeClippedSubviews={false}
      renderItem={({item}) => <Item {...item}  />}
      keyExtractor={({id}) => String(id)}
/>
COPIAR CÓDIGO
Provavelmente, isso resolve esse pequeno problema. Para entender como essa e outras propriedades da FlatList funcionam, você pode dar uma conferida na documentação oficial do React Native.

https://reactnative.dev/docs/optimizing-flatlist-configuration#removeclippedsubviews

@@06
Add carrinho

[00:00] Ainda não podemos deixar que o usuário digite qualquer coisa, por exemplo, se eu digitar aqui no meu teclado eu ainda vou conseguir digitar letras, o que não é o ideal. Vamos fazer um filtro para essa quantidade.
[00:23] Para isso vamos criar em cima uma função chamada atualiza, const atualiza = () => {}. Essa função podemos passar esse novo valor e a ação que queremos executar. Neste caso vou colocar como se fosse um callback, vou colocar ação retorno. (novoValor, acaoRetorno).

[00:56] Vamos colocar mais uma variável const verificaInteiro =, verificando primeiro se é um número inteiro se não tem outras coisas como vírgula, letras. Colocamos novoValor.match(). Podemos usar essa expressão regular bem simples usando uma barra e verificando se não está no grupo de 0 a 9. Desta forma aqui: const atualiza = (novoValor. acaoRetorno) => { const varificaInteiro = novoValor.match(/^[0-9]*$/); }.

[01:42] Se não for um número de 0 a 9 ele não vai deixar alterar vai manter o valor que tinha antes. Por exemplo, lá se eu coloquei um a depois desse 1, ele tem que tirar o a e deixar só o 1. Vamos verificar aqui: if (!verificaInteiro) return;

[02:09] Senão for um inteiro retornamos e não salva o valor, não vamos jogar essa ação aqui. Lembrando que essa atualiza temos que trocar no lugar da ação, colocamos o atualiza e a ação passamos como segundo parâmetro. onChangeText=[(atualiza(novoValor, acao)];.

[02:28] A ação retorno vem embaixo com um valor que formos escolher alterar. Ainda precisamos remover os zeros à esquerda que estiverem aparecendo. acaoRetorno(); Vamos fazer uma nova variável const removeZeroEsquerda, porque não precisa aparecer o zero que tiver na esquerda.

[02:51] Vou colocar = novoValor.replace, vou colocar também uma expressão regular, quando começar com zero e tiver alguma outra coisa depois, podemos sobrescrever isso só pela segunda coisa. Se tiver algum zero na frente e alguma coisa tiramos o zero e deixa só a segunda coisa. const removezeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');.

[03:34] Vou salvar e vou colocar o retorno da ação como esse remove zero à esquerda. acaoRetorno(removeZeroEsquerda). Vamos testar. Ainda está funcionando. Se tiver um zero remove o zero, eu apago, coloco 0, 2 e ele remove o zero e deixa só o dois.

[03:51] Se eu colocar zero no final, nada acontece. Agora já fizemos o filtro. Vamos estilizar nesse campo e deixá-lo mais visível porque quase não dá para ver. Vamos pegar na pasta que temos acesso os estilos do campo. Podemos arrastar para dentro do nosso componente de campo e deixá-lo só como “estilos.js”, remover o campo do final.

[04:21] Só temos o campo, algumas informações sobre ele. Vamos aplicar no Keyboard. Vamos importar em cima: impor estilo from './estilos'; style-{[estilos.campo]};. Agora já temos um pouco mais estilizado aqui, só que ainda precisamos deixar permitir que passemos estilos por aqui para podermos declarar a largura dentre outras coisas.

[05:04] Vamos passar outra variável estilos e renomear essa variável estilos para estilos padrão, que são os estilos que sempre serão iguais, e também permitimos ter acesso a esses estilos aqui. Se fizermos nesse formato nesse aqui de arrey ele vai aceitar os dois estilos. import estilosPadrao from './estilos';.

[05:26] Com isso podemos vir no Item e passar os estilos como parâmetro, estilos igual, e o estilo dele que já temos pronto é a quantidade. CampoInteiro estilos-{estilos.quantidade} valor={quantidade}; Salvamos e pronto. Agora ele já está um pouco maior do que era antes, está mais bonito e conseguimos digitar alguma coisa aqui.

[05:51] Vamos estilizar melhor esse botão. Criamos um componente de botão também, vou criar uma nova pasta dentro de componentes chamada "Botao". Não está querendo entrar dentro do campo.

[06:20] Vou deletar essa pasta e clicar em "Componentes > New Folder > Botao". Precisa ser fora da pasta de Campo Inteiro. Vou criar um “Index.js” dentro também e vamos importar: import React from 'react';. Exportar o componente de botão: export default function Botao().

[07:16] Esse botão vai ter alguns parâmetros. Inicialmente temos que ter um valor, o que vai está escrito nele e também temos a ação, o que vai acontecer quando clicarmos no botão. Botao([valor, acao]);. Vamos alterar aqui, estávamos utilizando o bottom, antes vamos alterar para o Touch able opacity, porque poderemos configurar mais coisas de layout dele e colocar mais coisas dentro se precisarmos.

[07:55] Vou importar import [ TouchableOpacity ] from 'react-native';. E utilizamos ele aqui: return <TouchaleOpacity>;. Basicamente ele é um componente tocável e que vai ter uma opacidade quando clicarmos nele.

[08:25] Podemos colocar aqui também um Text, lembrando que sempre precisamos colocar o Text para exibir o texto. Text importando de React Native, com o valor que recebemos ali. <Text>[valor]</text>;. O TouchableOpacity vai ter também um onPress recebendo a ação que passamos como parâmetro. return <TouchaleOpacity onPress=[acao]>;.

[08:54] Vamos trocar esse método e colocar no Item para começarmos a ver as alterações. Aqui vou chamar de botão, vou colocar valor no lugar de adicionar. Botao valor="Adicionar' />;. Podemos remover o botão que importamos antes de react native e importar o botão que acabamos de criar. import Botao from '../../../componentes/Botao';. Também precisamos ter uma ação, por enquanto vou deixar como uma ação vazia. acao =[() => {};.

[09:42] Já temos o texto que tem uma opacidade quando clicamos, mas ainda não está estilizado como um botão. Vamos pegar os estilos que temos na nossa pasta de estilos, estilos botão, arrastamos para dentro de botão e podemos renomear tirando o botão do final.

[10:11] Agora temos algumas coisas. Vamos aplicar dentro do botão os nossos style, lembrando que temos que importá-los. import estilos from './estilos'; E podemos colocar aqui no Touchable o próprio botão, style=[estilos.botao];. Vamos ver se ele muda alguma coisa. Ainda não. No texto colocamos o <Text styke =[estilos.valor]>[valor]</Text>;. Estamos pegando os estilos e ainda não está alterando. Vamos tentar entender porque.

[11:24] Aqui o nosso estilo é um pouco diferente, ele recebe alguns parâmetros. Por exemplo, o botão se é pequeno ou se é invertido. Dessa forma os estilos são uma função ao invés de serem direto estilos, para podermos usá-los temos que chamar uma função.

[11:44] Vamos vir dentro do nosso botão e vamos const estilosPadrao =, depois vamos ter outros estilos aqui também. Também renomeamos esse aqui para função estilos padrão, já que ela é uma função e não mais os estilos mesmo. import funcaoEstilosPadrao from './estilos';.

[12:08] Aqui se ele é pequeno e invertido também, precisamos recebê-lo como parâmetro do componente. Podemos colocar pequeno e definir um default para ele. Inicialmente pode ser false, se não passarmos nada ele vai ser false e não vai ser pequeno e invertido que é para inverter as cores. E invertido também vai ser falso inicialmente. Botao([pequeno = false, invertido = false]);. Passamos aqui: funcaoEstiloPadrao(pequeno, invertido";.

[12:46] Aqui utilizamos os estilos padrão ao invés dos estilos normais. Pronto. Agora já temos um botão estilizado mais bonito. Também podemos permitir que passemos mais estilos aqui. Vou colocar estilos, que são os estilos que podemos passar para dentro do componente, e colocamos esses estilos apenas no componente de fora. Que geralmente vai ser margem ou alguma coisa assim. Dentro não vamos permitir estilizar. style=[estilosPadrao.botao, estilos];.

[13:28] Já temos o nosso botão de adicionar o Carrinho. Nas próximas aulas vamos estilizar um pouco melhor o valor em formato de real e também vamos atualizar esse preço e fazer com que não apareça esse adicionar ao carrinho para todas as vezes, podemos clicar no item e ele expande essa sessão de adicionar ao carrinho.

@@07
Moeda, Total e expandir

[00:00] Agora que já esterilizamos a nossa lista de serviços vamos focar em alguns detalhes para melhorar a nossa lista. Como, por exemplo, temos o preço que não está formatado só temos o valor double, com ponto ainda. Queremos trocar esse ponto por uma vírgula, colocar um 0 aqui no final para mostrar os centavos e colocar o R$ na frente.
[00:22] Poderíamos fazer isso à mão, concatenar o “R$”, fazer uma função que vai sobrescrever o ponto pela vírgula e também adicionar 0, se precisar no final. Já temos no JavaScript uma biblioteca que nos permite fazer esse tipo de coisa em relação a monetários. Vamos usá-la para ficar mais simples.

[00:48] Para isso precisamos vir aqui no terminal dentro da pasta do projeto e instalar com o npm install a biblioteca chamada intl. Esse processo pode demorar um pouco, dependendo da sua internet.

[01:10] Pronto. Já instalou a biblioteca, vamos para o nosso código porque precisamos fazer uma importação dele e uma configuração inicial. No “App.js” precisamos importar o ‘intl’ e importar também a linguagem que vamos utilizar.

[01:27] Vamos colocar o import 'intl'; e também vamos importar import 'intl/Local-data/jsonp/pt=BR' importamos a nossa linguagem que é pt-BR, com BR maiúsculo. Pronto. Basta isso e ele já vai conseguir deixar utilizarmos o formato pt-BR ou Real na nossa aplicação.

[02:06] Vamos vir dentro do “Index.js” do Item da nossa lista e no lugar do preço vamos começar a formatá-lo. Chamamos aqui o ‘intl’, lembrando que é uma biblioteca do JavaScript por isso não precisamos importá-la como as outras coisas que utilizamos geralmente. Intl NumberFormat () e dizemos qual é a linguagem que estamos utilizando, que é (pt-BR), e abrimos chaves e vamos colocar um pouco dos estilos, porque ela faz várias coisas, mas uma delas é style: ‘currency’.

[02:50] Que é para formatação de moeda e vamos dizer, que currency: ‘BRL’, é o Real. Intl.NumberFormat('pt-BR Intl.NumberFormat style: 'currency', currency: 'BRL' }; Agora usamos no final, depois do parênteses .format() e a variável que estávamos usando antes que era o preço. .format(preco). Para que isso funcione vamos precisar restaurar o nosso bundler, porque se eu salvar dessa forma ele vai dar um erro. Já deu um erro.

[03:25] Precisamos vir aqui no terminal, cancelamos o bundler que está rodando do Expo e roda de novo. Vamos usar npm start, como já vimos nas aulas anteriores. Pronto. Já temos o Expo rodando novamente aqui, vou abrir o simulador de novo e vou recarregar com “Command + R” ou no seu celular pode ser chacoalhar.

[03:53] Neste caso ele não está aceitando o “Command + R”. Às vezes pode acontecer no seu simulador também. Eu venho na barra de ferramentas na parte superior, em "IO > Input" e eu habilito enviar input de teclado para o device. Pronto. Agora já consigo executar o comando.

[04:11] Já temos aqui o nosso preço formatado em real com zero, vírgula tudo certo. Vamos partir para o próximo detalhe que vamos arrumar nessa tela de serviços. Vamos remover esse indicativo de serviços aqui de cima que não precisamos mais. Vamos no “index.js” dentro de serviços e podemos tirar esse Text de serviços que tem em cima e também tirar a importação do Text que não está sendo mais usado.

[04:42] Está recarregando. Agora está carregando e agora vamos fazer também a atualização do total. Aqui já saiu a parte de serviços e aqui na quantidade podemos mudar aqui que o preço total não está atualizando. Vamos fazer com que isso funcione, de fato. Vamos entrar no “Index.js” do Item novamente e criar um estado para o total, vou colocar const [total, setTotal] = useState(0) e inicialmente o total podemos colocar zero mesmo.

[05:24] Agora vamos criar o método que vai atualizar esse total quando passarmos alguma quantidade. Vou colocar cont calculaTotal =, igual a uma função e vamos passar a quantidade (quantidade) => e vamos utilizar esse setTotal para “setar” o estado total da quantidade vezes o preço do produto que estamos recebendo pelo Item, { setTotal(quantidade * preco); }.

[06:09] Agora quem vai chamar esse cálculo total. Vamos criar um método para que ele atualize a quantidade também. Porque já estamos utilizando no campo inteiro a ação de SetQuantidade diretamente, estamos “setando” direto pelo state, mas precisamos de um método que faça esse set e também calcule o total e atualize o total.

[06:35] Vamos criar um segundo método. Pode ser: const atualizaQuantidadeTotal =. É um método e ele vai fazer recebendo essa nova quantidade. Na verdade, podemos “setar” essa nova quantidade e também podemos usar o método que acabamos de criar que é o calcula total com a nova quantidade. const atualizaQuantidadeTotal = (novaQuantidade) => setQuantidade(novaQuantidade); calculaTotal(novaQuantidade) }.

[07:18] No lugar de quantidade podemos também chamar de nova quantidade para ficar mais explícito que é uma variável nova, não é a mesma quantidade que estamos utilizando aqui. Embora como é um contexto de um método não vai fazer muita diferença, ele vai pegar sempre a quantidade que está dentro do método. Já se quisermos utilizar essa quantidade neste método de baixo não poderíamos porque ficaria com o mesmo nome, mas assim não tem problema.

[07:42] Agora pega esse método que acabamos de criar e substitui ali embaixo na ação do campo, colocamos ação igual a atualiza quantidade total. acao={atualizaQuantidadeTotal};.

[07:55] Vou salvar e ainda nada vai acontecer porque não estamos utilizando esse total. Vamos pegar o total e colocá-lo aqui embaixo onde temos o preço. Text style={estilos.descricao}>Total</Text>;. Aqui utilizamos a variável total entre chaves. Text style={estilos.preco}>{total}</Text>;.

[08:25] Vamos salvar. Vou recarregar e ver o que acontece. Está zerado. Colocamos 1 aqui, 89, está multiplicando por 2 ainda estão ficando os números bem doidos aqui, mas ele está multiplicando, pelo menos.

[08:47] Vamos formatar esse total aqui da mesma forma que formatamos o preço. Vou copiar essa parte do intl NumberFormat e vou colar no lugar do total. Vou substituir o preço pelo total e agora já devemos ter o nosso total carregado em formato de real.

[09:10] Só que aqui também temos um outro problema que está sempre zerado no começo. Podemos colocar aqui o useState inicialmente como sendo o preço. Pronto. Agora temos uma vez o preço e já está atualizado inicialmente com o preço, se colocamos 2 vai atualizando de acordo com o número que colocamos aqui.

[09:39] Às vezes acontece no JavaScript de termos algum problema decimal de perdemos uma casa decimal, perder a precisão porque o decimal não é tão parecido aí acontece de ficar lá 0001 ou algum ponto bem pequeno de diferença. Fazendo isso também podemos otimizar, melhorar um pouco na nossa aplicação é esconder essa adicionar aqui de todos os itens, podemos fazer com que só clicando no item que vai aparecer essa parte inferior.

[10:12] Vamos criar mais um estado que vai ser o estado de expandir, setExpandir. Inicialmente vamos querer que não esteja expandido vou colocar o valor default dele como falso. const [expandir, setExpandir] = useState(false).

[10:35] Vamos criar um método aqui embaixo de inverter const inverteExpandir = () => {}, ele vai inverter essa variável que acabamos de criar esse estado. Quando clicarmos e tiver expandido trocamos para esconder, quando não estiver mostrando e clicarmos vai mostrar.

[11:04] Vai ser igual a um método, uma arrow function, e podemos colocar aqui o setExpandir com a negação do expandir(!expandir). Pegamos o valor atual e negamos ele e também podemos “setar” a quantidade total para não termos um histórico. Quando escondermos e mostrarmos de novo vai voltar a ser 1 aqui independentemente do número que eu tinha colocado antes.

[11:33] Podemos voltar a colocar a quantidade como 1, utilizando o atualizaQuantidadeTotal(1). Vamos fazer com que esse View vire um touchable ou opacity, aquele mesmo elemento de botão que utilizamos para fazermos o nosso botão customizado, mas que ele não fique um botão fique só uma View que é clicável.

[12:02] Primeiro precisamos importar do React Native o TouchableOpacity. Lembrando que sempre precisamos importar as coisas de React Native, não é como no html que podemos simplesmente utilizar.

[12:18] Agora utilizamos esse TouchableOpacity no lugar da View e fechando TouchableOpacity também. Precisamos passar um onPress para que ele saiba o que fazer quando clicarmos, quando pressionarmos esse botão.

[12:40] Vamos chamar o método que acabamos de criar, o InverteExpandir. Agora precisamos utilizar esse expandir em algum lugar, mais especificamente em baixo para esconder ou mostrar essa parte da View debaixo. Vamos fazer o seguinte, vamos abrir com chaves aqui, utilizar o expandir e utilizar o operador de erro e fechamos as chaves antes do divisor.

[13:14] Vamos organizar a nossa indentação. O que é isso, o que fizemos aqui? Estamos fazendo como se fosse uma condição quando usamos, por exemplo, um if, temos aqui expandir e alguma coisa.

[13:30] O JavaScript já otimiza as condições para nós, ele vai ver que expandir é a primeira variável da condição, quando ela estiver true sempre precisamos verificar se a outra condição também é true para que essa condição inteira seja um valor verdadeiro.

[13:50] Já se essa expandir for false como é um and, um “&”, se a primeira for false já negou toda a condição, ele não vai passar por aqui. Isso faz com que se o expandir for true, for verdadeiro, mostramos essa view e se for falso ela não vai ser mostrada.

[14:11] Vamos salvar e ver o que acontece. Pronto. Já não temos mais todas as informações de adicionar o carrinho e se clicarmos já temos. Clicando de novo esconde, e assim para todas elas. Te vejo na próxima aula.

@@08
Criando um componente

Qual seria a melhor forma de declarar um componente React Native?

import React, { Text, View } from 'react-native';

export default const Componente = () => {
    return <View>
        <Text>Alura</Text>
        <Text>React Native</Text>
</View>
}
 
Alternativa correta
import React from 'react';
import { View } from 'react-native';

export default function Componente() {
    return <>
        <View>Alura</View>
        <View>React Native</View>
    </>
}
 
Alternativa correta
import React from 'react';
import { Text } from 'react-native';

export default function Componente() {
    return <Text>Alura</Text>
        <Text>React Native</Text>
}
 
Alternativa correta
import React from 'react';
import { Text } from 'react-native';

export default function Componente() {
    return <>
        <Text>Alura</Text>
        <Text>React Native</Text>
    </>
}
 
Utilizamos o componente em forma de função ou classe para prevenir problemas de ciclo de aplicação. Precisamos retornar sempre uma única tag principal, que nesse caso é um fragmento, uma tag que apenas agrupa as coisas dentro sem causar nenhum efeito estrutural no componente. Além disso, também precisamos sempre utilizar a tag Text para exibir o texto.

@@09
Faça como eu fiz: Tela de serviços

Começamos organizando as pastas do projeto, criando uma pasta src para armazenar nosso código e outra chamada telas dentro para colocarmos nossas telas. Então criamos a pasta Servicos com um index.js dentro que será a nossa tela de serviços.
Sem esquecer de envolver todo conteúdo em um SafeAreaView e adicionar a StatusBar, vamos retornar nossa lista de serviços estática com uma FlatList. A renderização de cada item pode ser realizada por meio de um novo componente chamado Item que fica dentro da pasta de Servicos, contendo o nome, preço e descrição do serviço.

Então estilizamos nosso Item com os estilos disponíveis no vídeo, adicionando também a sessão de adicionar ao carrinho com um campo de quantidade, o total e um botão de "Adicionar". Nosso campo e botão se tornam os componentes CampoInteiro e Botao dentro de src/componentes, contendo os estilos disponíveis no vídeo.

Finalizamos com alguns detalhes como formatar as moedas, calcular o total dependendo da quantidade e um toggle para expandir ou retrair a sessão de adicionar ao carrinho quando clicamos na linha de serviço.

Ao fim dessa aula temos a tela de serviços estática estilizada e também configuramos nossa aplicação para ajustar o layout em diversos dispositivos!

@@10
Para saber mais: Class X Function Component

O componente em formato de classe era a forma mais comum de criar componentes do React até pouco tempo e ainda funciona. Basicamente consiste em criar uma classe que estende um Component, e dentro dela implementamos métodos para os ciclos de vida do React e para renderizar os componentes na tela.
import React from 'react'
import { Text } from 'react-native'
export default class MeuComponente extends React.Component {
  constructor(props) {
        super(props)
        this.state = { texto: 'Alura' }
    }
  componentDidMount() {
    console.log('componente carregado');
  }
  render() {
    return <Text>{this.state.texto}</Text>
  }
}COPIAR CÓDIGO
A forma de função era menos utilizada pois as funcionalidades de ciclo e estado não podiam ser utilizadas, então era apenas para criar componentes simples que não precisavam delas. Mas com o nascimento dos hooks é possível realizar essas tarefas agora com function components também, mas com uma sintaxe bem diferente. O exemplo anterior utilizando function component ficaria como import de react, dos componentes, exportar uma função e retornar o que quiser que seja renderizado. Para os states usamos o hook useState, e para as funções de ciclo usamos o useEffect.

import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'
export default function MeuComponente (props) {
  const [texto, atualizaTexto] = useState('Alura');
  useEffect(() => {
    console.log('componente carregado');  
  }, []);
  return  <Text>{texto}</Text>
}COPIAR CÓDIGO
Podemos ver que em formato de função temos as mesmas funcionalidades com uma escrita mais simplificada. Então quando utilizar uma forma ou outra? Basicamente as duas têm a mesma equivalência no fim das contas e, como para poder utilizar a estrutura de hooks precisamos de function components, provavelmente você vai chegar a conclusão de que usar function components é a melhor opção no momento.

@@11
O que aprendemos?

Nesta aula construímos a primeira tela, a tela de serviços, com uma lista de serviços fixa e o botão de adicionar ao carrinho estilizados. Também isolamos os componentes de botão e campo numérico para que possamos reutilizar depois. Os conceitos aprendidos nesta aula foram:
Como criar um componente e utilizá-lo em outro componente;
Utilizar SafeAreaView e StatusBar para que nossas telas não sejam sobrepostas aos elementos do dispositivo como a barra de status e barra inferior de gestos do iPhone;
Formatar moedas com intl.

#### 22/11/2023

@03-Carrinho

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

@@02
KeyboardAvoidingView

[00:00] Antes de começarmos a criar a nossa tela de carrinho, vamos olhar o que já fizemos até agora. Fizemos a nossa tela de serviços com o nome, a descrição do serviço e o preço, podemos clicar no serviço e expandi-lo para que possamos adicionar o carrinho. Podemos melhorar esse botão de adicionar e descrever que vamos adicionar ao carrinho.
[00:21] Vamos ver dentro de telas serviços no "index" do item, lá no final temos o botão. Vamos alterar o valor do botão para ao invés de adicionar vou colocar Adicionar ao Carrinho. Pronto. Agora já estamos especificando melhor onde estamos adicionando.

[00:44] Essa lista já permite que façamos um scroll. Só que se fazemos um scroll para baixo você pode ver que aqui está cortando. Isso porque a nossa lista não está ocupando a tela inteira, está ocupando só o tanto que ela precisa mesmo, o tanto que ela precisa na tela. Vamos alterar para que ela ocupe a tela inteira.

[01:10] Dentro de serviços, no "index", temos a nossa SafeAreaView, que é a nossa tela completa. Vamos fazer com que ela se expanda até o fim da nossa tela do celular. Para isso, já temos um estilo pronto que está aqui dentro de "src/estilos", que importamos na outra aula, que é esse preencher. Vamos aplicar esse preencher na nossa lista.

[01:38] Ele está sendo criado com o StyleSheet.create do React Native, porque, dessa forma, o React Native consegue tratar melhor os estilos e também consegue aplicar melhor as regras dos estilos mesmo. Se tiver algum erro ele vai nos dizer melhor onde está o erro.

[02:01] Agora precisamos importar esses estilos dentro dos nossos serviços. Vamos lá em cima, chamamos o Import, vamos chamar de estilosGlobal from e precisamos voltar algumas pastas, duas especificamente, para chegarmos de volta dentro da pasta “src”.

[02:23] E pegamos os estilos que estão lá dentro. import estilosGlobal from '../ ../estilos';. Agora para aplicarmos é bem simples, é só chamarmos o style dentro o SafeAreaView, abre e fecha colchetes, estilosGlobal.preencher. <SafeAreaView style={estilosGlobal.preencher}>. Vamos salvar e vamos testar. Agora já podemos arrastar para baixo e não vai cortar mais.

[02:50] Além disso, se expandirmos aqui todos eles e clicar nesse último input de quantidade, podemos ver que o teclado fica por cima do input e não conseguimos ver o que estamos digitando. Até digitamos só que não conseguimos ver. Precisamos fazer com que a nossa tela diminua quando o teclado aumente e que o teclado seja como se fizesse parte mesmo da nossa tela.

[03:17] Por sorte também temos um componente do React Native que permite com que possamos controlar isso de uma forma mais fácil. Esse componente precisamos importá-lo aqui em cima de React Native e se chama KeyBoardAvoidingView. Além disso, também precisamos importar o componente Platform, ele vai nos dizer qual é a plataforma que está rodando a nossa aplicação, se está rodando no IOS ou se está rodando Android.

[03:48] Precisamos disso porque precisamos aplicar diferentes estilos nesse KeyBoardAvoidingView para cada sistema operacional. Importando os dois podemos vir embaixo da StatusBar, chamamos o KeyBoardAvoidingView e deixa dentro dele a FlatList, temos que fechá-lo embaixo da FlatList.

[04:15] Agora também precisamos fazer aquele estilo que na verdade se chama behavior={}, vou dar um "Enter" aqui para ficar mais fácil vermos.

[04:30] Precisamos verificar qual é o sistema operacional utilizando o {Platform.OS}, de Operacional System, Platform.OS == “ios”, fazemos um if line na verdade. Se Platform.OS == “ios” ?, vamos aplicar o ”padding”, senão aplicamos ”height”. No caso do IOS, o behavior vai ser padding e no caso do Android o behavior vai ser heigth. behavior={Platform.OS == "ios" ? "padding" : "heigth"}>.

[05:12] Também precisamos fazer com que esse KeyBoardAvoidingView esteja na tela inteira, assim como fizemos com a SafeAreaView. Vamos copiar este estilo e colar aqui dentro do KeyboardAvoidingView salvando.

[05:28] Vamos testar para ver se já funcionou. Expandimos todos e clicamos na última quantidade.

[05:36] Pronto. Agora a nossa tela sobe para que o nosso input fique visível sempre que abrimos o teclado. Se eu digitar, já vamos ter visível o que estamos digitando. Na próxima aula, vamos começar a trabalhar na nossa tela de carrinho.

@@03
Tela do Carrinho

[00:00] Vamos começar criando a estrutura da nossa página de carrinho. A tela de carrinho é muito parecida com a tela de serviços. Podemos inicialmente duplicar a tela de serviços e colar outra dentro de serviços também renomeando para “Carrinho”.
[00:22] Eu fiz uma cópia da tela de serviços e renomeei a pasta para “Carrinho”. Dentro do “Carrinho”, do “index”, também precisamos renomear o nome da função do componente que está aqui como “Serviços”, vamos renomear para “Carrinho”. export default function Carrinho () {.

[00:42] Feito isso, vou salvar e nada mudou ainda porque, ainda não mudamos nada, estamos usando a tela de serviços. Vamos lá no “App.js” e trocar de serviços para carrinho. Import Carrinho ao invés de serviços, from ‘./src/telas/Carrinho’.

[01:07] Embaixo precisamos retornar o carrinho também, return <Carrinho />. Mais para frente vamos ver como fazer um menu para fazer essa troca mais fácil, inicialmente vamos criar assim.

[01:21] Agora a nossa tela de carrinho está sendo carregada aqui. Vou fechar o “App.js”. Precisamos, aqui dentro, de serviços para informar a quantidade do serviço que está dentro do carrinho porque como ela já está dentro do carrinho já selecionamos a quantidade antes. Caso aconteça esse erro que ele não está conseguindo encontrar o item é porque existem dois itens em duas pastas diferentes, pode ser que o React Native se perca ao carregar o projeto.

[01:56] Caso isso aconteça e você recarregue e ainda assim aconteça esse erro, você pode vir no terminal que está rodando e parar o serviço.

[02:10] Vou parar o serviço e dar start de novo, npm start. Aguardamos um pouco e pronto, já “startou” e vou recarregar a aplicação. Está baixando a aplicação novamente. Enquanto isso, vamos no nosso código e começar a inserir a quantidade.

[02:44] Colocar a vírgula no final da descrição e quantidade em cada um dos elementos da nossa lista de serviços. Vou colocar a quantidade: 1 no banho, quantidade: 2 na vacina V4 e quantidade: 1 de novo na vacina Antirrábica.

[] Salvando aqui, não temos nenhuma alteração porque não mexemos em nada, só adicionamos um elemento. Vamos fazer com que esse valor seja atualizado na nossa quantidade. E também podemos expandir essa informação de quantidade já que ela sempre vai ter que ficar visível, já que precisamos ver quanto temos dentro do nosso carrinho.

[03:31] Vamos vir no item, já alterar esse botão de adicionar ao carrinho para remover do carrinho. Aqui embaixo no botão, onde está “Adicionar ao Carrinho”, vamos colocar “Remover do Carrinho”. Botao valor="Remover do Carrinho" acao=() =>.

[03:51] Pronto. Já temos a alteração do botão do “remover do carrinho”, tiramos essa opção de expandir onde tem abre chaves expandir e dois “e” comerciais, “&&”, podemos remover e removemos também o fim das chaves. Ajustamos a indentação.

[04:13] Agora sempre vamos ter essa parte visível.

[04:19] Vamos também alterar para que consigamos ver a quantidade que acabamos de passar. Aqui temos esse InverteExpandir que podemos remover, já que não estamos mais utilizando e também podemos transformar essa parte do clique do item em uma view novamente, uma view com os estilos de informação porque não precisamos mais clicar.

[04:46] Vou tirar o Onpacity, vou colocar view em vez de TouchableOpacity e vou tirar aqui embaixo o fechamento e vou colocar uma view fechando.

[05:02] Vamos ver aqui, remover a importação dele, já que não estamos mais utilizando. Agora já temos a nossa tela expandida, os itens expandidos dentro da nossa tela. Vamos procurar onde está a quantidade.

[05:17] A quantidade vem como parâmetro, pegamos a quantidade, mas como já estamos utilizando uma vez a variável quantidade precisamos renomeá-la, pode ser quantidadeInicial. Coloco aqui dois pontos e quantidade inicial. :quantidadeInicial.

[05:39] Vamos alterar esse 1, do UseState(1), para quantidadeInicial.

[05:54] Atualizando, já vemos que o número 2 foi atualizado na quantidade como passamos pelo parâmetro a quantidade inicial. Vamos remover esse expandir, esse useState e também precisamos fazer com que ele atualize o total certo aqui, ele está mostrando o total do valor inicial apenas.

[06:17] Então no total em vez do preço, podemos ter o preço vezes a quantidade inicial. Total] = useState(preco * quantidadeInicial); Pronto. Já temos o total, se alterarmos volta a ser o valor anterior. Está funcionando tudo certo.

[06:40] Podemos ver aqui, por exemplo, já no Carrinho tem um código um pouco repetido, que é esse código de área SafeAreaView, do KeyboardAvoidingView e da StatusBar também. Vamos criar um componente que unifica todos esses componentes para podermos utilizá-lo tanto no Carrinho quanto em serviços.

[07:04] Para isso, eu vou vir na pasta Componentes e vou criar dentro de uma pasta “TelaPadrao”, um “index.js”. Nesse “index”, eu vou começar importando import React from 'react';.

[07:33] E exportamos o componente como default e ele se chama tela padrão. export default function TelaPadrao( ) {}. A tela padrão precisamos colocá-la ao redor de alguma coisa, vamos precisar ter o children. O children é uma propriedade que é passada em todos os componentes, o que está dentro da instância do componente. export default function TelaPadrao({children}) {}.

[08:12] Quando chamamos aqui, por exemplo, o KeyBoardAvoidingView e temos dentro dele o FlatList, no caso do componente do KeyBoardAvoidingView, onde está a implementação lá no código do React Native, o children dele será essa FlatList.

[08:30] Temos o children aqui. Podemos retornar toda essa parte do KeyboardAvoidingView, vamos no Carrinho e copiamos desde o KeyBoardAvoidingView até o SafeAreaView, retornamos isso dentro, vai ter o children que acabamos de pegar de propriedades e temos que fechar todas as propriedades.

[08:56] Fechamos o Keyboardavoidingview e fecha o Safeareaview também. {children} </KeyboardAvoidView> </SafeAreaView>.

[09:04] Precisamos de algumas que ainda não estão aqui. Precisamos importar o estilo, precisamos importar o Platform e também precisamos importar todos os componentes que estamos usando.

[09:15] Podemos pegar da tela do Carrinho o SafeAreaView, o StatusBar e o Keyboardavoidingview. Vamos importar manualmente. import {SafeAreaView} from 'react-native';, porque acho que ele já vai importar algumas coisas para nós. Precisamos da StatusBar, também precisamos do Keyboardavoidingview e Platform. import {SafeAreaView, StatusBar, KeyboardAvoidingView, Platform} from 'react-native'.

[09:56] Ainda precisamos dos estilos global. import estilosGlobal from, precisamos voltar aquelas pastas, voltamos duas pastas e pegamos os estilos do “src”. import estilosGlobal from '.. / .. /estilos'.

[10:15] Acho que são esses os imports que estavam faltando. Feito isso, vamos utilizar essa tela padrão no carrinho para ver se está funcionando. Vamos importar, na verdade podemos remover do <SafeAreaView até o style do Carrinho.

[10:32] E dentro de SafeAreaView colocamos só a tela padrão, só fechando com tela padrão.

[10:42] Temos tela padrão com o FlatList dentro. return <TelaPadrao> <FlatList. Precisamos importar a tela padrão, já vai dar um erro aqui. Como não estamos usando os estilos globais podemos apagar, vamos apagar os outros imports que não estamos utilizando, como o SafeAreaView, o StatusBar, o KeyboardAvoidingView e o Platform, vai ficar só a FlarList. import { FlatList } from 'react-native';.

[11:07] Importamos a tela padrão que acabamos de criar dentro do carrinho. import TelaPadrao from, voltamos duas pastas, entra dentro dos componentes e selecionamos a Tela padrão. import TelaPadrao from '.. / .. /componentes/TelaPadrao.

[11:25] Pronto. Agora já temos a nossa tela padrão, nossos estilos de organização de tela no lugar separado. Podemos aplicar também lá dentro dos serviços. Vamos vir aqui no “Index” de serviços, vamos remover todos esses imports, deixar apenas a FlatList.

[11:50] Importamos a tela padrão, import TelaPadrão from, volta duas pastas dentro de componentes, TelaPadrão. import TelaPadrao from '.. / .. /componentes/TelaPadrao'.

[12:07] Podemos remover os estilos globais já que já vamos removê-los lá debaixo e tiramos a SafeAreaview, a StatusBar e o KeyboardAvoidingView e deixamos só a tela padrão. return <TelaPadrao>. A mesma coisa para fecharmos só a tela padrão e remove KeyboarAvoidingView. Identamos a FlatList, podemos salvar e não vai acontecer nada porque ainda estamos no “App.js” utilizando o carrinho.

[12:43] Podemos trocar para ver se está tudo certo. Vou trocar no “App.js” de carrinho para serviços novamente. import Servicos from './src/telas/Servicos'; export default function App() { return <Servicos />.

[11:57] Vou salvar. Pronto. Temos os serviços funcionando normalmente ainda e vou voltar para o carrinho. import Carrinho from './src/telas/Carrinho'; export default function App() { return <Carrinho />.

[13:08] Todas as ocorrências de serviços eu troquei para carrinho. Salvamos. Já temos aqui a nossa tela de carrinho de novo, dá para ver pelo remover do carrinho, o botão que mudamos o nome. Na próxima aula, vamos criar o status do carrinho também.

@@04
Status do Carrinho

[00:00] Nessa aula, vamos criar o status do Carrinho, que é aquela parte superior que fica mostrando o total e o botão de adicionar, de continuar com o pedido. Vamos vir em “Componentes” e criar esse novo componente de “StatusCarrinho”.
[00:19] Esse StatusCarrinho vai ter um “Index.js” e também tem um estilo, esse estilo vai está disponível nesta aula para você pegar. Você pega esse arquivo, que vai ser estilosStatusCarrinho e colocamos dentro do statusCarrinho. Vamos renomear esse estilo para deixar só estilos.js. Agora temos a pasta dentro de componentes, StatusCarrinho com o index e o “estilo.js” dentro.

[00:54] Vamos vir no “index.js” e vamos começar importando o React from react. import React from 'react'. Também precisamos exportar default a nossa função StatusCarrinho, que é o nosso componente e vamos retornar algumas coisas. Vamos ter principalmente views e text. export default function StatusCarrinho() { return }.

[01:24] Já vamos importar, abrindo chaves. view e text de from React Native. import { View, text } from 'react-native'. Vamos começar a nossa primeira view e precisamos aplicar os estilos nela também, precisamos ainda importar os estilos from ./estilos, que são os estilos que acabamos de colocar na pasta. import estilos from ' ./estilos'.

[02:01] Vamos colocar dentro da View o style que já deixamos pronto, que é estilos.conteúdo. return <View style=[estilos.conteudo]>. Dentro dessa view de conteúdo, vamos ter duas views, a view de valor do total e a view do botão de concluir o pedido. Vamos criar a view style.total. <View style={estilos.total}>.

[02:35] Dentro dela vamos ter o text style estilos.descricao, que vai ser aquele total do carrinho, <Text style={estilos.descricao}>Total do Carrinho:</Text>.

[02:58] E temos o text de total mesmo do valor que ele tem o estilos.valor. <Text style={estilos.valor}></Text>;. Dentro desse estilo do total do valor vamos aplicar aquele Intl.NumberFormat, abre e fecha parênteses, colocamos qual é o local e que é pt-BR.

[03:33] E o segundo parâmetro é um objeto passando o style: currency e a currency, que vai ser o nosso BRL, o nosso real brasileiro. Intl.NumberFormat('pt-BR' , { style: 'currency', currency: 'BRL' }).

[03:50] Por fim, depois do parênteses .format, e temos que colocar o valor, o valor é o total. Não temos nenhuma informação do total, precisamos pegá-la por parâmetro.

[04:02] Então na declaração do StatusCarrinho, eu vou adicionar as chaves e vou pedir uma variável total, essa variável vai ser passada lá quando eu chamar o componente. export dafault function StatusCarrinho( { total } ) {. Vamos colocar format (total). style: 'currency', currency: 'BRL' }).format(total)}.

[04:20] Vamos utilizar esse componente para vermos o andamento de como estão ficando as coisas. Vamos abrir o “Index.js” do carrinho dentro de telas e aqui em cima, antes da FlatList, vamos adicionar StatusCarrinho com o total zerado já que ainda não temos o total, já vamos fazer. StatusCarrinho total ={0}.

[04:51] Precisamos importar StatusCarrinho from, vamos ter que voltar também duas pastas, componentes/StatusCarrinho. import StatusCarrinho from '.. / .. / componentes/StatusCarrinho';. Vamos salvar. Pronto.

[05:03] Já temos aqui em cima o status do nosso carrinho. Ainda falta adicionarmos o botão. Vamos voltar para o “index.js” do “StatusCarrinho” e depois dessa view total tendo apenas uma view de fechamento adicionamos a View style={estilos.botao};. Dentro dela vai ter o botão.

[05:33] Lembra que temos que importar também, eu vou importar esse botão. Import Botao from, lá nos componentes que no caso já estamos na pasta de componentes, é só voltar na pasta e chamar o botão. import Botao from '../Botao'.

[05:50] Vou continuar. O botão tem o valor que pode ser ‘Concluir Pedido’. Também precisa passar a propriedade invertido para ele inverter as cores do botão porque se ele tiver a cor roxa, vai ficar roxo no roxo e não vai dar para ver. Botao valor='Concluir Pedido' invertido />; Pronto. Temos o “Concluir Pedido”.

[06:22] Agora precisamos fazer com que o total do carrinho seja o total real quando adicionamos o carrinho. Vamos vir aqui no “index.js” do carrinho e vamos criar uma constante que vai ser esse total.

[06:38] Em cima vou criar uma const total =. Vamos percorrer os serviços do carrinho multiplicando a quantidade pelo preço e somando tudo isso. Para fazermos isso o JavaScript já tem uma função, que se chama reduce, podemos chamar os serviços do carrinho ponto reduce.

[07:04] Podemos fazer isso em qualquer array do JavaScript e esse reduce vai ter dois parâmetros, o primeiro deles é uma função que vai ser o que vai acontecer em cada laço dessa repetição e o segundo valor é o valor inicial, vou colocar aqui como 0. const total = servicos.reduce() => {}, 0).

[07:24] Vai começar com 0 e vamos ter a soma, que é o valor que vai ser agregado e temos do lado, como segundo parâmetro, o nosso objeto. Como já vimos, podemos fazer uma desconstrução e pegar apenas o preço e a quantidade.

[07:45] Em cada laço desse for podemos apagar o abre e fecha chaves e acrescentar na soma o preço abrindo e fechando parênteses vezes a quantidade. const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade);.

[08:09] Abrimos e fechamos para ficar mais claro, mas a multiplicação vai ter prioridade. Basicamente o que está acontecendo é que estamos percorrendo cada um deles e retornando sempre a soma, que é o valor anterior desse laço somando pela multiplicação do preço vezes a quantidade.

[08:31] Vamos alterar o total no lugar do zero e pronto, já temos o nosso Carrinho atualizado. StatusCarrinho total={total} />. Lembrando que este valor total é só relacionado aos serviços que estão aqui, é o valor fixo, não vai atualizar quando eu for atualizar a quantidade aqui inicialmente.

[08:53] Na próxima aula, vamos ver um pouco mais sobre os estilos da nossa aplicação e também sobre a navegação que vamos fazer na nossa aplicação. Te vejo em breve.

@@05
Tratando o teclado virtual

Que problema pode acontecer ao solicitarmos que o usuário digite algo em um campo dentro da aplicação, e qual a solução para este problema?

Por padrão, quando o usuário clica no campo, o teclado não aparece, portanto precisamos invocá-lo manualmente.
 
Alternativa correta
O usuário pode não conseguir fechar o teclado, diante disso precisamos implementar um botão para que ele possa realizar esta ação.
 
Alternativa correta
O campo não fica visível quando está muito abaixo na tela pois o teclado acaba cobrindo-o. Podemos, nestes casos, ajustar a tela para que ele só ocupe o espaço acima do teclado, não deixando áreas inacessíveis.
 
Utilizando o componente KeyboardAvoidingView ao redor da nossa tela podemos criar esse ajuste automático para que o teclado não cubra nenhuma parte. O código ainda tem uma diferenciação para android e ios, que está descrita abaixo:
<KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={{ flex: 1 }}
    >
        // Conteúdo da tela
</KeyboardAvoidingView>COPIAR CÓDIGO
Alternativa correta
O campo não fica visível quando está muito abaixo na tela pois o teclado acaba cobrindo-o. Podemos, nestes casos, ajustar o teclado para que ele fique em outra posição da tela, como por exemplo no topo.

@@06
Faça como eu fiz: Tela do carrinho

Revisando nosso projeto, conseguimos identificar que quando tentamos editar uma quantidade que está na parte inferior da tela, o teclado sobrepõe o campo e não conseguimos ver o que estamos digitando. Corrigimos esse problema utilizando o KeyboardAvoidingView como container da nossa tela dentro ainda do SafeAreaView.
Então copiamos nossa tela Servicos e colamos como Carrinho, mudando o item para sempre estar expandido, alteramos o texto do botão para "Remover do Carrinho", além de passar uma quantidade inicial. Também precisamos alterar no App.js para renderizar nossa nova tela em vez da tela de Servicos.

Isolamos a SafeAreaView, a StatusBar e o KeyboardAvoidingView em na pasta src/componentes como TelaPadrao, sobrescrevendo os respectivos nas duas telas.

Após finalizar a lista do Carrinho, vamos adicionar o status com um valor total do pedido e botão de "Concluir Pedido".

Com isso criamos a tela de carrinho e resolvemos o bug onde teclado sobrescrevia o campo de quantidade das duas telas.

@@07
O que aprendemos?

Nesta aula criamos a tela do carrinho reutilizando os componentes da aula anterior e criando a parte superior de status do carrinho. Os conceitos aprendidos nesta aula foram:
Ajustar a tela utilizando KeyboardAvoidingView para que o teclado não sobreponha os campos;
Como utilizar o reduce nativo do javascript para agregar valores;
Criar um componente padrão para reutilizar sempre que quisermos prevenir os principais problemas de tela em Android e iOS.

#### 23/11/2023

@04-Navegação

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/alura-gatito-static/tree/Aula3

@@02
Versões utilizadas

Para evitar incompatibilidades com versões mais recentes, siga as instruções de instalação do próximo vídeo, porém especificando a versão das bibliotecas:
npm install @react-navigation/native@5.9.2
npm install @react-navigation/bottom-tabs@5.11.7

@@03
Navegação básica

[00:00] Nós já temos as nossas telas, mas ainda não conseguimos navegar de uma tela para outra sem ter que alterar no "app.js" qual é a tela que queremos mostrar. Podíamos implementar um componente que ficasse aqui embaixo e passasse algumas informações por estado, por exemplo, e mudássemos de tela de acordo com esse componente.
[00:21] Mas, para simplificar as coisas, já temos uma biblioteca no React Native que nos permite fazermos essa navegação de uma forma bem mais simplificada e também permite fazer vários outros tipos de navegação se você tiver interesse.

[00:34] Bom, essa biblioteca se chama React Navigation, vou entrar aqui na documentação dela, aqui em “docs” no “reactnative.org” e no "Getting Started" já temos algumas informações de como que fazemos para instalar essa biblioteca.

[00:52] Precisamos rodar esse comando: npm install @react-navegation/native. Vou vir aqui no terminal, estou rodando aqui o projeto, vamos cancelar porque vamos precisar rodar de novo já que vamos instalar nossas dependências.

[01:08] Vou rodar aqui o “react native install" que pode demorar um pouco. Pronto, já está instalado o "react-navigation/native" versão 5.9.2, mas podemos rolar aqui para baixo na instalação e temos ainda que instalar algumas dependências que podem ser utilizadas dependendo do tipo de navegação que escolhermos.

[01:30] No caso, estamos utilizando o expo, vamos usar esse comando: expo install react-native-gesture-handler react-native-reanimated react-native-screens, se você tivesse utilizando o projeto react-native sem o expo seria provavelmente esse comando aqui embaixo, npm install. Podemos ver neste link.

[01:43] Vamos copiar o comando do expo, rodamos aqui também, então ele vai estar react-native-gesture-handler, react-native-reanimated, react-native-screens, react-native-safe-area-context e @react-native-community/masked-view.

[02:04] Vou dar um "Enter", também pode demorar um pouco como vai baixar essas dependências da internet. Pronto, já temos as nossas dependentes instaladas. Agora, temos que instalar também, quando queremos utilizar o react-navigation, qual é o tipo de navegação que vamos utilizar.

[02:24] No nosso caso, vamos usar esse Tab navigation, então eu estou nos "Docs" ainda, em "Guides > Tab navigation", e para instalarmos basta rodar npm install @react-navigation/bottom-tabs.

[02:40] Pronto, instalou também. Agora já temos tudo que precisamos para podermos começar a configurar a nossa navegação. Vamos rodar o nosso projeto de novo, npm start, e como eu estou aqui no simulador, vou recarregar também a página do simulador, que ela está desconectada aqui, vou recarregar para ele pegar as atualizações certas. Pronto.

[03:06] Já estamos aqui na nossa tela do carrinho novamente e vamos começar, então, fazendo a nossa tab bar aqui embaixo. Vou vir no nosso editor de texto, deixar o simulador do lado, e podemos começar criando um arquivo para configurar essas rotas.

[03:29] Dentro de "src" vou criar aqui um arquivo chamado "rotas.js". Começar importando o React, porque vamos precisar utilizar tags, então import React from 'react'. Vamos importar o nosso componente de navegação, então utilizamos as chaves, import {NavigationContainer}.

[04:06] Esse componente vai ser igual para qualquer tipo de navegação que formos criar. Ele vai ser import {NavigationContainer} from '@react-navigation/native'. Agora vamos importar o método que vai fazer a criação do nosso Tab Navigation. Para isso, importamos o import {createBottomTabNavigator} from '@react-navigation/ bottom-tabs', que foi a última coisa que tínhamos importado no nosso projeto. OK.

[04:51] Agora, precisamos importar quais são as telas que queremos utilizar na nossa navegação. As nossas telas são a tela de carrinho e a tela de serviços que fizemos antes, então vamos importar as duas. Vou colocar import Servicos from, aí navegamos até a tela de serviços, './telas/Servicos', a mesma coisa com a do carrinho, import Carrinho from './telas/Carrinho'.

[05:32] Nós já temos as telas importadas, então agora vamos começar a criar a nossa tab bar mesmo. Vou fazer uma constante aqui chamada Tab, que vai ser igual ao = createBottomTabNavigator que acabamos de adicionar. A nossa Tab que vamos utilizar, precisamos exportar default, como se estivéssemos criando um componente mesmo, no caso vai ser um componente. export default function Rotas() {}.

[08:08] Aqui retornamos o nosso return <NavigationContainer> como um componente mesmo. Dentro dele vamos ter a nossa Tab.Navigator e dentro vamos ter as nossas screens, que vão ser Tab.Screem. return <NavigatorContainer> <Tab.Navigator> < Tab.Screen>.

[06:43] Vamos ter alguns parâmetros aqui, que vai ser o name, que é o nome de exibição, podemos colocar "Serviços", por exemplo, e o componente que é o componente da nossa tela, que é isso que acabamos de importar ali em cima chamado o "Servicos". <Tab.Screen name="Serviços" componente={Servicos} />.

[07:07] Vou copiar aqui e fazer a mesma coisa para o carrinho, criando uma Tab.Screen para o carrinho. <Tab.Screem name="Carrinho" componente={Carrinho} />. Ok. Vou salvar aqui, mas nada vai acontecer porque não estamos utilizando esse componente em nenhum lugar.

[07:24] Vamos vir no "app.js" e trocar esse carrinho que está manual pelas nossas telas. Vou colocar aqui, então. import Rotas from './src/Rotas, e aqui no lugar do return Carrinho vou colocar return Rotas. Vou salvar.

[07:51] Pronto, recarregou aqui e já podemos ver que estamos na tela de serviços do novo, mas se olharmos aqui embaixo temos um menu e podemos clicar no carrinho e somos navegados para a tela do carrinho.

[08:04] Nós já temos aqui a nossa navegação. Na próxima aula, vamos começar a estilizar essa navegação para ela ficar mais a cara do nosso aplicativo.

https://reactnavigation.org/docs/getting-started

@@04
Estilização Tab Bar

[00:00] Mesmo o ‘react-navigation’ sendo uma biblioteca de navegação, conseguimos estilizar várias coisas e configurar várias customizações para ela. Por exemplo, podíamos alterar qualquer coisa de cores aqui, tirar o texto e colocar apenas ícones, mas, no nosso caso, o que vamos fazer?
[00:18] Vamos aumentar um pouco a fonte, deixar mais centralizado e fazer com que tenhamos um background laranja com uma barra em cima roxa na aba que estiver ativa. Por exemplo, aqui a aba que está ativa só tem aqui um 'Serviços" com a cor azul, a cor ficar azul. Vamos fazer com que fique roxa a cor e em cima tenha uma barra roxa também.

[00:47] Para isso, precisamos vir aqui em "Rotas.js", e vamos importar primeiro as cores que já temos dos estilos para ficar mais fácil para utilizarmos. Vou colocar aqui import { cores } from './estilos'.

[01:02] Já que já estamos na pasta raiz dos códigos, temos os nossos estilos que adicionamos nas últimas aulas. Ok. Adicionando as cores, podemos vir aqui na Tab.Navigator, e adicionamos uma propriedade chamada tabBarOptions e ela vai ser igual a um objeto, então precisamos adicionar duas chaves aqui. <Tab.Navigator tabBarOptions={ {.

[01:32] Vamos começar alterando a cor ativa, aqui estar azul, vamos colocar roxo, então vamos aqui em activeTintColor e podemos colocar aqui cores.roxo. Vamos alterar também o inactiveTintColor para cores.claro.

[01:57] Como estamos com o fundo branco, quase não vai dar para ver o inativo aqui, mas ele está aqui. Já vamos alterar depois o fundo e vamos conseguir ver melhor. Está funcionando ainda, estamos o ativo roxo e o inativo está bem claro, quase que não vemos.

[02:15] Vamos começar a alterar o texto, a label no caso aqui, é labelStyle, e o labelStyle recebe um objeto, então podemos alterar aqui no labelStyle começando com fontWeigth para deixarmos ele em negrito, bold, também podemos alterar fontSize, vamos colocar uma fonte maior, 16.

[02:45] lineHeigth, que depois vamos utilizar para facilitar na mudança aqui da posição dos serviços, na posição do label em si, então vamos colocar aqui lineHeigth como sendo 21. labelStyle: { fontWeigth: 'bold', fontSize: 16, lineHeigth: 21. Vamos salvar.

[03:03] Já temos aqui os nossos serviços, o carrinho, nossos botões, nossos textos maiores. Vamos pensar em como que vamos fazer essa linha superior. Não temos uma forma de fazer isso simples aqui adicionando só uma propriedade e pronto, já temos a linha superior. Para isso, vamos ter que fazer um pouco na mão essa parte.

[03:27] O que podemos pensar em fazer? Podemos fazer com que esse label ocupe quase todo o tamanho da tab, deixe apenas um espaço em cima, daí esse espaço que vai ser a nossa linha. Vamos fazer isso.

[03:42] Vamos começar vindo aqui colocando width: '100%' e flex: 1. Isso vai fazer com que a nossa tab cresça, o nosso label cresça no tamanho inteiro da tab. Vou recarregar aqui.

[04:08] Pronto. Agora o nosso label está do tamanho inteiro, tanto que ele está aqui em cima porque é a primeira posição que ele pode pensar em estar, mas vamos fazer com que ele fique com uma marginTop de 3, que essa vai ser o tamanho da nossa linha, e também podemos botar um paddingTop: 21 para que esse texto fique mais para baixo. E colocamos também o backgroundColor: cores.laranja. Vamos salvar.

[04:53] Temos aqui a nossa cor de fundo laranja e os nossos botões aqui, agora dá para ver o mais claro, mas o selecionado está roxo e o outro fica mais claro, quase branco. Podemos ver aqui que mesmo fazendo tudo esse cálculo aqui, botando todas essas coisas, ainda estamos com esse botão aqui do IOS, essa barra do IOS por cima.

[05:21] Isso acontece porque a nossa tela padrão, o SafeAreaView está só dentro, internamente, então temos que transferir ele aqui para fora. Vamos pegar aqui as nossas telas de carrinho e de serviços, então entramos aqui no "index" de cada uma delas e vamos remover a tela padrão.

[05:45] Podemos remover a tela padrão e deixar só um componente vazio, como se fosse um fragmento. Vou salvar aqui e remover aqui dos imports da tela padrão também. Mesma coisa no "Serviços". Vamos ver aqui que vai começar a ficar estranho, mas já vamos arrumar.

[06:05] Vamos tirar aqui a tela padrão dos imports de serviços e deixar aqui apenas um fragmento. E vamos no "app. js" e colocamos a nossa tela padrão, export default function App() {return <TelaPadrao><Rotas />, e deixamos as rotas dentro dela. Vou salvar aqui.

[06:30] Precisa importar também, import TelaPadrão from './src/componentes/TelaPadrao'. Agora já temos essa parte por cima, mas ainda está pequeno porque não mudamos o tamanho do nosso menu inferior. Vamos voltar para as "Rotas" e adicionar também um style: { height: 70, }. Pronto.

[07:18] Agora temos uma SafeAreaView e todas aquelas configurações que fizemos por fora de todas as nossas rotas, então todas as rotas vão ter essa configuração, e temos também aqui a nossa barra com texto centralizado.

[07:35] Agora precisamos fazer com que essa barra mude de cor com base no que estiver ativo no momento. Para isso, voltamos aqui quase no começo, embaixo do inactiveTintColor e podemos declarar aqui activeBackgroundColor como sendo roxo e o inativo sendo laranja, para ele parecer que é a mesma coisa aqui.

[08:02] activeBackgroundColor: cores.roxo, inactiveBackgroundColor: cores.laranja. Salvei. Pronto. Agora temos aqui nossa barra sempre que ela estiver ativa.

[08:18] Ainda temos mais um problema que acontece no IOS, não vai acontecer, deixa eu adicionar o Keyboard. No IOS e no Android também vai acontecer dessa barra ficar aqui por cima e acaba cortando grande parte da tela. Queremos que essa barra não fique visível quando abrimos o teclado. Vamos ver aqui no final, quando fechamos o labelStyle, vou adicionar aqui keyboardHideTabBar: true.

[09:05] Agora, sempre que abrirmos a nossa tabBar não vai mais aparecer, sempre que abrirmos o teclado. Na próxima aula, vamos ver melhor como estilizar essa parte superior e inferior aqui que está, no caso, em branco na nossa aplicação. Te vejo em breve.

@@05
Estilização das bordas

[00:00] Pode parecer que agora já temos todos os nossos estilos da nossa aplicação prontos, mas se olharmos aqui, por exemplo, no dispositivo IOS mais recente temos o Notch, que está branco, e essa barra inferior que também está branca.
[00:15] No Android, também vamos ter algumas coisas, por exemplo o Notch pode ser que ela esteja só mais escura, mas ela não tem nenhuma customização nossa. Ok. Vamos começar a customizar então essa parte inferior e superior.

[00:31] Para isso, precisamos entrar lá dentro do nosso componente de tela padrão. Dentro da tela padrão a parte mais simples que podemos fazer é adicionar aqui no StatusBar uma cor, isso vai fazer com que essa cor seja aplicada, mas apenas em Android na parte superior.

[00:52] Vamos começar importando aqui dos estilosGlobal também as cores para ficar mais fácil para utilizarmos elas aqui. import estilosGlobal, {cores} from '../../estilos. Colocamos aqui dentro do StatusBar backgroundColor=cores.roxo.

[01:12] No meu simulador nada vai acontecer como eu disse, isso vai acontecer só em Android. Feito isso, para alterarmos no IOS o que precisamos fazer? Precisamos alterar os estilos da SafeAreaView mesmo, então precisamos alterar aqui dentro da SafeAreaView para termos uma cor.

[01:32] Vamos criar dentro da nossa pasta aqui de tela padrão um arquivo chamado "estilos.js". Nesse "estilos" vamos importar o import { StyleSheet } from 'react-native', que vai ser a nossa classe que vai permitir criarmos estilos. Podemos importar também as cores, import { cores } from '../.. / .. /estilos'.

[02:17] Agora exportamos como default o nosso estilo, export default StyleSheet.creat( { } ). Aqui dentro, então, podemos criar as nossas classes de estilos. Vamos colocar ajusteTela:, precisamos manter o flex: 1, que é o que já temos dentro do nosso SafeAreaView, então mantemos o flex: 1 e adicionamos ainda um backgroundColor: cores.roxo. ajusteTela: { flex: 1, backgroundColor: cores.roxo}. Vou salvar. Nada vai acontecer porque não estamos utilizando esses "styles" aqui.

[03:01] Vamos importar esses estilos, import estilos from './estilos. Estamos importando. Agora, utilizamos aqui ao invés de estilosGloal.preencher na SafeAreaView estilos.ajusteTela. Vamos salvar. Nós já temos a nossa parte superior roxa, mas a nossa parte inferior está roxa também, não queremos que ela fica roxa também porque não combina com esse menino menu aqui, seria legal se ela ficasse só laranja mesmo igual o menu.

[03:44] Para fazer isso, vamos precisar criar uma segunda SafeAreaView, e essa segunda SafeAreaView vai ser aplicada aqui embaixo. A primeira SafeAreaView que temos vai identificar a cor aqui para cima e a segunda vai aplicar para baixo.

[04:02] Vamos criar, então, embaixo da SafeAreaView outra SafeAreaView, mas não podemos retornar duas coisas no React Native, então adicionamos aqui um fragmento para não mexermos na estrutura em si do nosso projeto e sim só agrupar essas duas SafeAreaView.

[04:23] Vamos adicionar </ SafeAreaView />. Salvando, já podemos ver que embaixo já está branco, então só precisamos aplicar estilos para ela também.

[04:37] Vamos vir nos nossos estilos que criamos, vamos colocar ajusteTelaBaixo, abrindo como objeto, colocamos aqui flex: 0 para ter certeza que ela não vai ocupar nenhum espaço na nossa tela, e backgroundColor: cores.laranja.

[05:01] E voltamos no “index.js” e aplicamos como style=estilos.ajusteTelaBaixo. </ SafeAreaView style=estilos.ajusteTelaBaixo. Pronto. Agora já temos o ajuste das cores da nossa parte superior e da parte inferior. O nosso menu está funcionando.

[05:26] Te vejo então no próximo vídeo.

@@06
Criando a navegação

Na última aula criamos a navegação do nosso aplicativo que, por meio de abas na parte inferior, pudemos mudar entre as telas de Serviços e Carrinho. Marque a resposta que explica como fizemos essa navegação.

Utilizamos a funcionalidade do próprio expo de telas, onde bastou editar o arquivo de rotas adicionando nossas telas e o informar um tipo de navegação.
 
Alternativa correta
Criamos um componente que engloba todas as telas e, nesse componente, implementamos manualmente a nossa lógica de troca de telas dependendo de botões que adicionamos no inferior da tela.
 
Alternativa correta
Utilizamos uma biblioteca chamada React Navigation, com que criamos um arquivo de rodas indicando quais as telas de nossa aplicação e qual o tipo de navegação. Então substituímos a chamada da tela pelas rotas.
 
Criamos o arquivo Rotas.js dentro do nosso src para declarar as rotas e o tipo de navegação, então substituímos no App.js a chamada da tela pela chamada do componente Rotas.
Alternativa correta
No final de cada tela adicionamos um componente que continha os dois botões para troca de tela e, dependendo de qual apertávamos, executamos um método passado por parâmetro para o componente superior, que trocava a tela.

@@07
Faça como eu fiz: Criando a navegação

Começamos seguindo a documentação do React Navigation, instalando a biblioteca via npm e as dependências via expo. Instalamos também a parte de bottom-tabs para podermos utilizar o tipo de navegação de abas na parte inferior.
Então criamos nosso componente Rotas.js na pasta src contendo as regras da nossa navegação. Por fim, substituindo em App.js a página estática pelo nosso novo componente de Rotas dinâmico.

Restou alterar os estilos do nosso menu inferior para ficar mais a cara do nosso projeto no componente Rotas. E também estilizar as bordas inferiores e superiores da nossa aplicação no componente TelaPadrao, deixando roxo em cima e laranja embaixo.

Assim temos a navegação da nossa aplicação devidamente configurada e estilizada, não dependendo mais de alterar o arquivo inicial para ver uma determinada tela.

@@08
O que aprendemos?

Nesta aula aprendemos a utilizar a biblioteca React Navigation, inclusive:
Instalamos a biblioteca, dependências e tipos de navegação;
Configuramos nosso arquivo de rotas;
Estilizamos o menu inferior.

#### 23/11/2023

@05-Finalizando o projeto e dicas

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/alura-gatito-static/tree/Aula4

@@02
Dev tools: Reactotron

[00:00] Nesse vídeo, vamos conhecer uma ferramenta de debug que vai nos ajudar a visualizar melhor os logs da nossa aplicação, mas, antes disso, vamos entender melhor o que são esses logs da nossa aplicação, como podemos usá-los e qual é o problema de usar um log sem essa ferramenta de debug.
[00:18] Eu vou abrir aqui o "app.js", independente do que estiver no seu você "app.js" você pode testar junto comigo. Vamos pegar aqui antes do return da aplicação e vamos colocar um console.log("Alura"). Eu vou salvar e ele já vai recarregar aqui, mas precisamos dar uma olhada lá no nosso terminal. Já temos "Alura" aqui no nosso terminal.

[00:49] Agora vamos pensar que queremos debugar um objeto, que esse objeto pode ser muito grande, então vou colocar aqui text: 'alura'.

[01:10] Na verdade, pode ser um array, por exemplo, e podemos colocar várias vezes a palavra "alura". Copiar e colar aqui várias vezes. Agora imagina que esse nosso array aqui está dentro de um for, que está exibindo 10 vezes esse mesmo array. Para encontrarmos a ocorrência que estamos procurando para tentar entender, fica tudo bem bagunçado aqui dentro do console.

[01:48] Nós temos, então, uma ferramenta que vai nos ajudar a organizar esses logs e vamos poder filtrar e visualizar de uma forma mais simplificada. Essa ferramenta se chama Reactotron. Para utilizá-la, precisamos tê-la instalada na nossa máquina. Eu já tenho aqui, mas vou mostrar para vocês como faço para baixar.

[02:13] Basicamente, vocês podem vir aqui em "github.com/infiniterd/reactotron", que é o projeto oficial no GitHub do Reactotron, então podemos descer e vir em "Quick Installation Guide".

[02:33] Vamos na página de "Realeases" para baixarmos a versão que queremos. Podemos vir, pular as versões Beta e vir direto para "Laters realease", que no caso aqui 2.17.1, é a última versão que não é Beta. Aqui embaixo, temos vários "Assets" que alguns deles são os instaláveis dependendo do seu sistema operacional.

[03:00] No caso do Mac, você iria instalar o "dmg", você poderia baixar esse. Se você está usando Linux, provavelmente, vai ser, talvez, o "rpm" ou "deb". No Windows, você pode usar o "msi" ou o "exe". Você instala esse programa na sua máquina e ele vai abrir dessa forma.

[03:23] Agora precisamos instalar o Reactotron dentro do nosso projeto também. Para isso, eu vou vir aqui no terminal, vou cancelar o que estamos executando. Eu vou rodar o comando npm install -- save-dev. O save-dav serve para que instalemos essa dependência somente no ambiente de dev, porque não precisamos dela no ambiente de produção. O save-dev e você escreve reactotron-react-native.

[04:08] Vamos instalar reactotron-react-native no módulo save-dev. reactotron-react-native está instalado aqui, a versão 5.0.0. Agora precisamos vir no nosso código e configurar, mas antes vamos deixar “startado” já o nosso bundle novamente do React Native. Está “startado” novamente. Vou vir no código e recarregar só para ele pegar esse novo start que fizemos.

[05:00] Agora no código, no "app.js" ainda, precisamos importar o Reactotron, então vamos importar import Reactotron from 'reactotron-react-native’;. Agora podemos utilizar esse objeto reactotron. Na verdade, primeiro temo que configura-lo embaixo, fora do export pode ser. Reactotron.configure().useReactNative().concect(). Isso vai fazer com que nos conectemos naquela aplicação que acabamos de instalar. Eu vou salvar e vamos dar uma olhada no que está acontecendo.

[05:58] Ainda não tem nenhuma conexão. Para que o dispositivo seja conectado precisamos recarregar a nossa aplicação.

[06:06] Pronto, recarreguei a aplicação. Aqui já temos um dispositivo, IOS 13.4, que no caso é o simulador e está ativo. Agora vamos ver como que fazemos para usar esses logs. Dentro do nosso "app.js", podemos chamar o Reactotron.log(), podemos colocar o que queremos, "alura" por exemplo, o queremos fazer o log.

[06:35] Se viermos no Reactotron e dar um refresh, vamos ver que está aqui "alura" no formato de debug.

[06:44] Podemos depois filtrar se quisermos só os debugs e vai aparecer só a parte de debug. Se colocarmos um objeto, vamos fazer um objeto em “app.js”, curso: "alura", então temos um objeto aqui que tem o parâmetro curso com o valor "alura".

[07:08] Vindo no Reactotron e atualizando a aplicação, vamos ter que ir no nosso objeto e se expandirmos ele mostra os parâmetros. No caso, se for um objeto muito grande vai ficar sempre uma linha, não vai ser uma coisa muito chamativa dentro da nossa lista de logs, então podemos ver uma linha e expandir depois para ver todo o resto do conteúdo.

[07:32] Aqui também podemos ver a data que esse log foi salvo, entre outros logs também que ele mostra, de API, se você estiver utilizando algumas requisições vai aparecer. Agora não queremos que tenhamos que importar toda vez esse Reactotron quando queremos chamar um log.

[07:52] Podemos fazer uma coisa muito interessante, que é adicionar o Reactotron dentro do nosso entre " console.log". Para isso, basta fazermos o seguinte: colocamos console, já temos o objeto do console do Java Script mesmo, podemos colocar .tron, que é uma propriedade que não existe ainda não, então vamos declarar ela sendo igual a Reactotron. console.tron = Reactotron.

[08:18] Fazendo isso, cada vez que chamarmos console.tron já vamos poder botar um .log, por exemplo, e exibir essa informação da mesma forma que está fazendo antes, só que a diferença é que é o console já está disponível em todos os arquivos da nossa aplicação, então não precisamos importar nada.

[08:37] Vou salvar, vou recarregar e continuamos tendo os mesmos logs de antes. "Curso alura" novamente. Sempre que você quiser utilizar logs, precisa entender melhor o que está acontecendo na sua aplicação, eu recomendo utilizar o Reactotron.

@@03
Por que usar o Reactotron

Em vídeo, vimos como integrar o Reactotron no nosso projeto. Quais afirmações abaixo são verdadeiras?

Devemos instalar o Reactotron na nossa aplicação para que possamos visualizar os logs em produção, ou seja, conferir se a aplicação está rodando como esperado fora do ambiente de desenvolvimento.
 
Alternativa correta
Não é possível acessar os logs da nossa aplicação sem um programa como Reactotron.
 
Alternativa correta
Com o Reactotron consigo analisar mais facilmente logs com objetos grandes.
 
Claro, pois o Reactotron minimiza os objetos em apenas uma linha, sendo muito mais simples navegar entre os logs. E, caso queira ver um objeto, basta expandir a linha dele.
Alternativa correta
Com Reactotron podemos visualizar os logs da nossa aplicação de forma cronológica.
 
Sim! Com Reactotron podemos ver a linha do tempo de logs da nossa aplicação.

@@04
Desafio: Refatore!

No nosso curso utilizamos alguns arquivos repetidos ou copiados, que tal começar com o Item e fazer dele um único componente reutilizável?

@@05
Faça como eu fiz: Configurando o Reactotron

Para utilizar o Reactotron, precisamos primeiro instalar a aplicação no computador e também instalar a biblioteca no projeto. Então configuramos uma conexão e adicionamos o Reactotron no console para facilitar a chamada. Simples assim.

Adicionar Reactotron nos nossos projetos pode ajudar a debugar o código em React Native. Caso queira saber mais sobre, este é o link para o projeto no github: https://github.com/infinitered/reactotron.

https://github.com/infinitered/reactotron

@@06
Para saber mais: Visual Studio Code

Um dos editores de texto mais populares é o Visual Studio Code ou, para os mais chegados, vscode. Esse foi o editor que utilizamos para preparar este curso e também para gravação das aulas. Por ser bem flexível e conter uma comunidade de plugins ativa, é possível utilizá-lo para quase qualquer linguagem, mesmo não sendo a melhor opção para todas. Mas no caso de javascript e react native é uma opção gratuita a se considerar. Se ainda não tiver um editor de texto ou quiser testar um novo, você pode baixar ele diretamente do site para Mac, Windows ou Linux.
Com ele podemos também customizar a aparência que mais se encaixa com seu estilo, ou de acordo com sua necessidade. Mas se estiver sem ideias, vou mostrar como configurar o seu vscode da forma que eu gosto. Vamos instalar o tema Dracula Official a partir da aba de extensões do vscode. Então é só selecionar a cor Dracula e já temos um tema configurado.

Outro recurso legal que podemos utilizar é o fontLigatures, que permite com que alguns caracteres se juntem formando um símbolo, como por exemplo um traço mais uma seta (->) que se tornam um único caractere com essa fonte, muito mais simples de ler, além de ser muito legal. As fontes padrão normalmente não têm esse recurso, mas uma das mais famosas fontes para codar, a firacode, nos permite fazer isso. Para configurá-la, precisamos antes baixa-lá do github do projeto e instala-la no nosso computador, todos esses passos estão no link How to install, pois a instalação varia de sistema operacional, mas no geral é um processo simples: basta abrir a pasta ttf do zip baixado e instalar a fonte regular dando dois cliques nela.

Com ela instalada podemos configurá-la em vários editores de texto, mas para o vscode vamos acessar as configurações em Code > Preferences > Settings, digitamos font na pesquisa e em Font Family substituímos por Fira Code.

Para habilitar as fontLigatures vamos, dentro da sessão Editor: Font Ligatures, clicar no link Edit in settings.json e então alteramos para "editor.fontLigatures": true. Agora em qualquer arquivo do vscode já podemos ver as alterações de fonte e os símbolos se formando ao juntar dois caracteres, como igual igual (==), exclamação igual (!=), mais mais (++), maior igual (>=), menor igual (<=) e vários outros.

@@07
Projeto final do curso

Caso queira, você pode baixar aqui o projeto completo implementado neste curso.

https://github.com/alura-cursos/alura-gatito-static/tree/Aula5

@@08
O que aprendemos?

Instalamos uma dev tool no nosso projeto, o Reactotron. Ele facilita a leitura de logs e requisições, criando uma timeline filtrável com os logs.
Além disso, esse é o fim do nosso curso. Parabéns por concluir mais um curso na Alura!

Você pode encontrar o projeto completo nesse link.

https://github.com/alura-cursos/alura-gatito-static

@@09
Conclusão

[00:00] Parabéns a todos que chegaram até aqui e concluíram mais um curso na Alura. Nesse curso, aprendemos a criar uma aplicação React Native do zero utilizando o Expo.
[00:10] Também aprendemos as melhores práticas para que possamos se adequar, tanto em dispositivos Android quanto em dispositivos IOS. Eu queria lembrar aqui também que, caso vocês tenham alguma dúvida, a nossa comunidade está ativa para conversar sobre esse e outros assuntos.

[00:27] Também temos vários cursos de tecnologia e programação que você pode encontrar na Alura para você se manter atualizado no mundo da tecnologia. Te vejo no próximo curso.
