const prompt = require("prompt-sync");

let Teste = Number(0);

let Nph = [12 , 12 , 14];

let Rapida = [4 , 4 , 8 , 4];

let comp = [1, 2, 3, 4, 5];

let teclado = prompt();
let option = 0;
while (option != 5) {
    Teste =  +teclado("qual e o seu teste de hj ")
    console.log(`------------insulina ${Teste}---------------`);
    console.log("* 1- cafe da manhã ---------------*");
    console.log("* 2- almoço ----------------------*");
    console.log("* 3- cafe da tarde ---------------*");
    console.log("* 4- jantar ----------------------*");
    console.log("* 5- sair   ----------------------*");
    console.log("-----------------------------------");
    option = +teclado("Escolha a refeição: ");
    switch (option) {
        case 1:
            if (Teste <= 140) {
                
                let dose = Nph[0] + Rapida[0];
                console.log(`sua dosagem e ${Nph[0]} + ${Rapida[0]} `);
                console.log(`seu total e ${dose}`);
            }
          
            break;
    
        default:
            break;
    }
}