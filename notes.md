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
PRÓXIMA ATIVIDADE

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
PRÓXIMA ATIVIDADE

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
PRÓXIMA ATIVIDADE

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
PRÓXIMA ATIVIDADE

Começamos organizando as pastas do projeto, criando uma pasta src para armazenar nosso código e outra chamada telas dentro para colocarmos nossas telas. Então criamos a pasta Servicos com um index.js dentro que será a nossa tela de serviços.
Sem esquecer de envolver todo conteúdo em um SafeAreaView e adicionar a StatusBar, vamos retornar nossa lista de serviços estática com uma FlatList. A renderização de cada item pode ser realizada por meio de um novo componente chamado Item que fica dentro da pasta de Servicos, contendo o nome, preço e descrição do serviço.

Então estilizamos nosso Item com os estilos disponíveis no vídeo, adicionando também a sessão de adicionar ao carrinho com um campo de quantidade, o total e um botão de "Adicionar". Nosso campo e botão se tornam os componentes CampoInteiro e Botao dentro de src/componentes, contendo os estilos disponíveis no vídeo.

Finalizamos com alguns detalhes como formatar as moedas, calcular o total dependendo da quantidade e um toggle para expandir ou retrair a sessão de adicionar ao carrinho quando clicamos na linha de serviço.

Ao fim dessa aula temos a tela de serviços estática estilizada e também configuramos nossa aplicação para ajustar o layout em diversos dispositivos!

@@10
Para saber mais: Class X Function Component
PRÓXIMA ATIVIDADE

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
PRÓXIMA ATIVIDADE

Nesta aula construímos a primeira tela, a tela de serviços, com uma lista de serviços fixa e o botão de adicionar ao carrinho estilizados. Também isolamos os componentes de botão e campo numérico para que possamos reutilizar depois. Os conceitos aprendidos nesta aula foram:
Como criar um componente e utilizá-lo em outro componente;
Utilizar SafeAreaView e StatusBar para que nossas telas não sejam sobrepostas aos elementos do dispositivo como a barra de status e barra inferior de gestos do iPhone;
Formatar moedas com intl.