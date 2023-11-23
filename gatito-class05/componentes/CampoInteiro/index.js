import React from "react";
import { TextInput } from "react-native";

import estilosPadrao from './estilos';

export default function CampoInteiro({ valor, acao, estilos }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = novoValor.replace(/^(0)(.*)/, '$2');

    acaoRetorno(removeZeroEsquerda);
  };
  const numeroString = String(valor);
  return <TextInput
    style={[estilosPadrao.campo, estilos]}
    keyboardType='number-pad'
    selectTextOnFocus
    value={numeroString}
    onChangeText={(novoValor) => { atualiza(novoValor, acao) }}
  />
}
