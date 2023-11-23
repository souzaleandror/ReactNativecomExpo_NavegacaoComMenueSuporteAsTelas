import React from "react";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Rotas from './src/rotas';
import TelaPadrao from './componentes/TelaPadrao/index';

export default function App() {
  return <TelaPadrao>
    <Rotas />
  </ TelaPadrao >;
}

