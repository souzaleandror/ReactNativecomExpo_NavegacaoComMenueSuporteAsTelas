import React from "react";
import { FlatList } from "react-native";

import Item from "./item/index.js";

const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.00,
    descricao: "Nao de banho no seu gato! mas se precisar nos damos"
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.00,
    descricao: "Uma dose da vacina V4, seu gato precisa de duas."
  },
  {
    id: 3,
    nome: "Vacina antirrabica",
    preco: 100.00,
    descricao: "Uma dose da vacina antirrabica, seu gato precisa de duas."
  }
];

export default function Servicos() {
  return <>
    <FlatList data={servicos}
      renderItem={({ item }) => <Item {...item} />}
      keyExtractor={(id) => String(id)}
    />
  </>
}