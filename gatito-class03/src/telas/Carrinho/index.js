import React from "react";
import { FlatList } from "react-native";

import Item from "./item/index.js";
import TelaPadrao from '../../../componentes/TelaPadrao/index.js';
import StatusCarrinhos from '../../../componentes/StatusCarrinho/index.js';


const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.00,
    descricao: "Nao de banho no seu gato! mas se precisar nos damos",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.00,
    descricao: "Uma dose da vacina V4, seu gato precisa de duas.",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina antirrabica",
    preco: 100.00,
    descricao: "Uma dose da vacina antirrabica, seu gato precisa de duas.",
    quantidade: 3,
  }
];

export default function Carrinho() {
  const total = servicos.reduce((soma, { preco, quantidade }) => soma + (preco * quantidade), 0)
  return < TelaPadrao >
    <FlatList data={servicos}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(id) => String(id)}
    />
    <StatusCarrinhos total={total}></StatusCarrinhos>
  </TelaPadrao >
}