class Heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        if(this.tipo === "mago") {
            return `o ${this.tipo} atacou usando magia`;

        }else if (this.tipo === "guerreiro") {
            return `o ${this.tipo} atacou usando espada`;

        }else if(this.tipo === "monge") {
            return `o ${this.tipo} atacou usando artes marciais`;

        }else if(this.tipo === "ninja") {
            return `o ${this.tipo} atacou usando shuriken`;
        }
    }
}

let heroi = new Heroi("Vitor","27","mago");
let heroi2 = new Heroi("Théo", "4", "guerreiro")
let heroi3 = new Heroi("Vitoria", "27", "monge")
let heroi4 = new Heroi("Pedro", "23", "ninja")


console.log(heroi.atacar())
console.log(heroi2.atacar())
console.log(heroi3.atacar())
console.log(heroi4.atacar())