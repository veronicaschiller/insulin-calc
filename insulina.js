"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let Teste = Number(245);
let nCA = [12];
let nA = [12];
let nJ = [14];
let RAca = [4];
let RAa = [4];
let RAct = [8];
let RAj = [4];
let R140 = [1];
let R160 = [2];
let R240 = [3];
let R260 = [4];
let R300 = [6];
let teclado = (0, prompt_sync_1.default)();
let option = 0;
while (option != 5) {
    console.log(`------------insulina ${Teste}---------------`);
    console.log("* 1- cafe da manhã ---------------*");
    console.log("* 2- almoço ----------------------*");
    console.log("* 3- cafe da tarde ---------------*");
    console.log("* 4- jantar ----------------------*");
    console.log("* 5- sair   ----------------------*");
    console.log("-----------------------------------");
    option = +teclado("Escolha a refeição: ");
    console.log(option);
    switch (option) {
        case 1:
            if (Teste <= 140) {
                let dose = +nCA + +RAca;
                console.log(`sua dosagem e ${nCA} + ${RAca} `);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 140) {
                let dose = +nCA + +RAca + +R140;
                console.log(`sua dosagem e ${nCA} + ${RAca} + ${R140}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 160) {
                let dose = +nCA + +RAca + +R160;
                console.log(`sua dosagem e ${nCA} + ${RAca} + ${R160}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 240) {
                let dose = +nCA + +RAca + +R160;
                console.log(`sua dosagem e ${nCA} + ${RAca} + ${R240}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 260) {
                let dose = +nCA + +RAca + +R260;
                console.log(`sua dosagem e ${nCA} + ${RAca} + ${R260}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 300) {
                let dose = +nCA + +RAca + +R300;
                console.log(`sua dosagem e ${nCA} + ${RAca} + ${R300}`);
                console.log(`seu total e ${dose}`);
            }
            break;
        case 2:
            if (Teste <= 140) {
                let dose = +nA + +RAa;
                console.log(`sua dosagem e ${nA} + ${RAa} `);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 140) {
                let dose = +nA + +RAa + +R140;
                console.log(`sua dosagem e ${nA} + ${RAa} + ${R140}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 160) {
                let dose = +nA + +RAa + +R160;
                console.log(`sua dosagem e ${nA} + ${RAa} + ${R160}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 240) {
                let dose = +nA + +RAa + +R160;
                console.log(`sua dosagem e ${nA} + ${RAa} + ${R240}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 260) {
                let dose = +nA + +RAa + +R260;
                console.log(`sua dosagem e ${nA} + ${RAa} + ${R260}`);
                console.log(`seu total e ${dose}`);
            }
            else if (Teste >= 300) {
                let dose = +nA + +RAa + +R300;
                console.log(`sua dosagem e ${nA} + ${RAa} + ${R300}`);
                console.log(`seu total e ${dose}`);
            }
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        default:
            break;
    }
}
