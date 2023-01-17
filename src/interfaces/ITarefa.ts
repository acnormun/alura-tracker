import IProjeto from "./Projeto";

export default interface ITarefa {
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto,
    id: number
}