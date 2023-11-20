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
PRÓXIMA ATIVIDADE

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
PRÓXIMA ATIVIDADE

Para alterarmos o nome de exibição da aplicação, a splash screen e o ícone da aplicação, precisamos apenas:

Alterar o name, o slug e o backgroundColor da splash dentro de app.json e substituir as imagens icon.png e splash.png dentro de assets. Reiniciar a aplicação para ver as alterações.
 
Correto! O Expo dispõe o arquivo app.json para que possamos configurar o nome, splash e ícone de maneira mais simples.
Alternativa correta
Não é possível alterar o nome da aplicação e imagens após serem criadas via código, para isso precisamos alterar nas lojas a publicação (Play Store e App Store).
 
Alternativa correta
Alteramos os parâmetros do componente dentro de App.js passando name e slug. Para as imagens, precisamos alterar o source do componente Image do react native incluindo as novas imagens.

@@06
Alterando a frase inicial
PRÓXIMA ATIVIDADE

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
PRÓXIMA ATIVIDADE

Lembre-se de fazer as atividades de configuração de ambiente, então podemos prosseguir com a criação do nosso projeto. Para isso, basta rodar o comando abaixo:
expo init gatitoCOPIAR CÓDIGO
Depois de selecionar o template blank e aguardar a instalação, execute o comando abaixo para rodar o projeto:

npm startCOPIAR CÓDIGO
Então na aba que abriu no navegador, você pode rodar o aplicativo no simulador ou escanear o QR code com o aplicativo do Expo diretamente no seu celular.

Como primeira alteração no projeto, podemos mudar o nome, splash screen e ícone utilizando o arquivo app.json do projeto e reiniciar a aplicação caso necessário.

Com isso temos nossa aplicação React Native rodando, além de nome, splash screen e ícone customizados!

@@08
O que aprendemos?
PRÓXIMA ATIVIDADE

Nesta aula começamos o curso, criando a partir do zero um projeto react native, rodando em um dispositivo ou simulador e alterando alguns elementos da aplicação como nome, splash screen e ícone. Os conceitos aprendidos nesta aula foram:
As diferenças entre um projeto react native utilizando o Expo CLI e outro utilizando o React Native CLI;
A criar um projeto e entendemos a estrutura básica dos arquivos gerados, para alterar o componente inicial e vermos as alterações em tempo real;
A alterar o nome da aplicação, configurando uma splash screen e mudando o ícone do aplicativo.