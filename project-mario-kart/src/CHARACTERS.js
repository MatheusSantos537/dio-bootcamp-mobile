  class PERSONAGEM {

    constructor(nome,atributos){
        this.nome = nome;
        this.velocidade = atributos.velocidade;
        this.manobrabilidade = atributos.manobrabilidade;
        this.poder = atributos.poder;
        this.pontos = 0;
    }

    calcular_pontos(pontos,aumentar = true){
        if(aumentar){
            return this.pontos += Number(pontos);
        }
        return this.pontos - Number(pontos) <= 0 ? this.pontos = 0 : this.pontos -= Number(pontos);
    }

   async lancar_dado(){
        return Math.floor( Math.random() * 6  ) + 1;
    }
};

const Mario = new PERSONAGEM("Mario", {
    velocidade: 4,
    manobrabilidade:3,
    poder:3
});
const Yoshi = new PERSONAGEM("Yoshi", {
    velocidade: 2,
    manobrabilidade:4,
    poder:3
});
const Peach = new PERSONAGEM("Peach", {
    velocidade: 3,
    manobrabilidade:4,
    poder:2
});
const Luigi = new PERSONAGEM("Luigi", {
    velocidade: 3,
    manobrabilidade:4,
    poder:4
});
const Bowser = new PERSONAGEM("Bowser", {
    velocidade: 5,
    manobrabilidade:2,
    poder:4
});
const DonkeyKong = new PERSONAGEM("Donkey Kong", {
    velocidade: 2,
    manobrabilidade:2,
    poder:5
});

const Pesonagens = {
    '0':Mario,
    '1':Luigi,
    '2':Yoshi,
    '3':Bowser,
    '4':DonkeyKong,
    '5':Peach
};
 module.exports = Pesonagens;
