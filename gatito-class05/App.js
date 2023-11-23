import React from "react";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Reactotron from 'reactotron-react-js';

import Rotas from './src/rotas';
import TelaPadrao from './componentes/TelaPadrao/index';

//Reactotron.configure().useReactNative().connect();
Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect()

export default function App() {
  Reactotron.log('hello rendering world')
  return <TelaPadrao>
    <Rotas />
  </ TelaPadrao >;
}

