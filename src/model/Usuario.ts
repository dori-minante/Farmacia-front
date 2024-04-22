import Produto  from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  cpf: string;
  //produto?: Produto | null;
}