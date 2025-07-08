// import { fs } from 'fs';

const Pesonagens = require("./CHARACTERS.js")
const readline = require('readline');
/**
 * Tipos de blocos
 */
const blocos = {
  1 : 'RETA',
  2 : 'CURVA',
  3 : 'CONFRONTO'
};

/**
 * 
 * @param {Object} rl readline create interface
 * @param {string} pergunta pergunta a ser exibida no console
 * @returns {*} Valor digitado no console
 */
function fazerPergunta(rl,pergunta){
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      console.log("RESPOSTA DIGITADA: " + resposta.trim() );
      resolve(resposta.trim());
    });
  });
};
/**
 * @desc Obtém personagens  d4os jogadores 
 */
async function obterJogadores(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("--- Seleção de Personagens ---");
  const menu = `
  Digite 0 para - Mario,
  Digite 1 para - Luigi,
  Digite 2 para - Yoshi,
  Digite 3 para - Bowser,
  Digite 4 para - DonkeyKong,
  Digite 5 para - Peach
  > `;
  const index1 = await fazerPergunta(rl, `Jogador 1, selecione seu personagem:${menu}`);
  const CHAR1 = Pesonagens[String(index1)];
  console.log(`Jogador 1 selecionou: ${CHAR1.nome}
    [velocidade : ${CHAR1.velocidade}]
    [manobrabilidade : ${CHAR1.manobrabilidade}]
    [poder : ${CHAR1.poder}]
    \n`);

   const index2 = await fazerPergunta(rl, `Jogador 2, selecione seu personagem:${menu}`);
  const CHAR2 = Pesonagens[String(index2)];
  console.log(`Jogador 2 selecionou: ${CHAR2.nome}
    [velocidade : ${CHAR2.velocidade}]
    [manobrabilidade : ${CHAR2.manobrabilidade}]
    [poder : ${CHAR2.poder}]\n`);

  rl.close();
  return { CHAR1,CHAR2}
}

/**
 * @desc Gera um número entre 1 e o intervalo 
 * @param {Number} intervalo Número que determina o valor maximo do número aleatorio
 * @returns {Number}
 */
async function gerarNumeroAleatorio(intervalo) {
  return Math.floor( Math.random() * intervalo  ) + 1;
};

/**
 * @desc Verifica o vencedor e atualiza os pontos
 * @param {Object} param0  P1 - instancia da classe PERSONAGEM (Jogador 1); P1_pontos - pontos obtidos em uma rodada
 * @param {Object} param1  P2 - instancia da classe PERSONAGEM (Jogador 2); P2_pontos - pontos obtidos em uma rodada
 * @returns 
 */
function calcular_rodada({P1,P1_pontos},{P2,P2_pontos},atributo){
  console.log(`Atributo a ser utilizado: ${atributo}`);
  if(P1_pontos > P2_pontos){
    P1.calcular_pontos(1,true);
    P2.calcular_pontos(1,false);
    console.log("Jogador 1 venceu a rodada!");
    console.log(` -- Pontos J1 : ${P1_pontos} -- 
      -- Pontos J2 : ${P2_pontos}-- `);
      return;
    };
  if(P1_pontos < P2_pontos){
      P2.calcular_pontos(1,true);
      P1.calcular_pontos(1,false);
      console.log("Jogador 2 venceu a rodada!");
      console.log(` -- Pontos J1 : ${P1_pontos} -- 
    -- Pontos J2 : ${P2_pontos}-- `);
        return;
      };
  return  P1_pontos === P2_pontos ? console.log("EMPATE!") : console.log(`ERRO CALCULO P1: ${P1_pontos} - ${P2_pontos}`);
}

/**
 * @desc Responsável por "rodar" as rodadas e implementar lógica de cada uma das 5 rodadas
 * @param { Object } P1 instancia da classe PERSONAGEM
 * @param { Object } P2 instancia da classe PERSONAGEM
 */
async function rodadas(P1,P2) {
  
  for(let rodada = 1; rodada <6 ; rodada++ ){
    const blockIndex = await gerarNumeroAleatorio(3);
    const blockType = blocos[blockIndex];
    console.log(`---INICIO DA RODADA ${rodada}---`)
    const dadoP1 = await P1.lancar_dado();
    console.log(P1.nome + " lançou um dado! resultado: " +dadoP1 );
    const dadoP2 = await P2.lancar_dado();
    console.log(P2.nome + "lançou um dado! resultado: " +dadoP2);
    console.log(`Bloco sorteado da rodada: ${blockType}! `);
    // ambos lançam DADO e somam a velocidade, manobra ou poder
    switch (blockType) {
      case "RETA":
     
        
        
        calcular_rodada(
          { P1 : P1, P1_pontos : P1.velocidade + dadoP1 },
          { P2:P2 , P2_pontos : P2.velocidade + dadoP2 },
          'velocidade'
        );
        break; 
      case "CURVA":
        
        
        calcular_rodada(
          { P1 : P1, P1_pontos : P1.manobrabilidade + dadoP1 },
          { P2:P2 , P2_pontos : P2.manobrabilidade + dadoP2 },
          'manobrabilidade'
        );
        break;
      case "CONFRONTO":
        
        
        calcular_rodada(
          { P1 : P1, P1_pontos : P1.poder + dadoP1 },
          { P2:P2 , P2_pontos : P2.poder + dadoP2 },
          "poder"
        );
        break;
    }
    console.log(`-- Número de vitórias por rodada 💯 
      
              [ J1: ${P1.pontos} ]
              [ J2: ${P2.pontos} ]
  `);
  }
  console.log("❌ FIM DE JOGO ❌")
  P1.pontos < P2.pontos ? console.log(`Jogador 2 é o vencedor!` ) : console.log("Jogador 1 é o vencedor!");
};

async function init() {
  const { CHAR1,CHAR2} = await obterJogadores();
  

  await rodadas(CHAR1, CHAR2);




};
init();