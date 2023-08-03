//Desenvolva um código que simule uma eleição com três candidatos.
//- candidato_X => 889
//- candidato_Y => 847
//- candidato_Z => 515
//- branco => 0

//O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

//Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 


//Lista de candidatos
const candidatos = {
    889: "candidato_X",
    847: "candidato_Y",
    515: "candidato_Z" ,
    0: "branco",
}


const votos = {
    889: 0,
    847: 0,
    515: 0,
    0: 0,
}

let numeroCandidato;
let continuarVotacao;

//Iniciar votação (adicionar votos)
while(isNaN(numeroCandidato) || Number(numeroCandidato)){
    numeroCandidato = Number(prompt("Digite o número do seu candidato"))
    if (isNaN(numeroCandidato)){
        //se inserir texto "você inseriu um texto, vote novamente"
        console.log("Você não digitou um número, vote novamente");
    }else if(numeroCandidato == 889){
        console.log("Você votou no ", candidatos[889]);
        votos[889]++;
        //Para perguntar se deseja continuar votação
        continuarVotacao = confirm("Você deseja finalizar a votação?");
        if(continuarVotacao == true){
            console.log("Votação terminada");
            break;
        } else {
        console.log("Novo voto");
        }
        
    } else if (numeroCandidato == 847){
        console.log("Você votou no ", candidatos[847]);
        votos[847]++;
        continuarVotacao = confirm("Você deseja finalizar a votação?");
        if(continuarVotacao == true){
            console.log("Votação terminada");
            break;
        } else {
        console.log("Novo voto");
        }

    } else if(numeroCandidato == 515){
        console.log("Você votou no ", candidatos[515]);
        votos[515]++;
        continuarVotacao = confirm("Você deseja finalizar a votação?");
        if(continuarVotacao == true){
            console.log("Votação terminada");
            break;
        } else {
        console.log("Novo voto");
        }

    } else {
        //vai contar brancos e nulos juntos
        console.log("Você votou branco ou nulo");
        votos[0]++;
        continuarVotacao = confirm("Você deseja finalizar a votação?");
        if(continuarVotacao == true){
            console.log("Votação terminada");
            break;
        } else {
        console.log("Novo voto");
        }
    } 
    
}

//Mostrar vencedor

if(votos[889] > votos[847] && votos[889] > votos[515]){
    console.log("O vencedor é o ", candidatos[889], "!");
} else if(votos[847] > votos[889] && votos[847] > votos[515]){
    console.log("O vencedor é ", candidatos[847], "!");
} else if(votos[515] > votos[889] && votos[515] >  votos[847]){
    console.log("O vencedor é ", candidatos[515], "!");
} else{
    console.log("A votação terminou em empate ou ninguém recebeu votos");
}

//Mostrar quantidade de votos dos candidatos
console.log("O resultado das eleições com o número de votos de cada candidato e os brancos e nulos é:")
console.log("O ", candidatos[889], " recebeu ", votos[889], " votos;");
console.log("O ", candidatos[847], " recebeu ", votos[847], " votos;");
console.log("O ", candidatos[515], " recebeu ", votos[515], " votos;");
console.log("Brancos e nulos: ", votos[0]);





