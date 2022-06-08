// Como podemos melhorar o esse código usando TS?

interface PessoaType {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa1: PessoaType;

pessoa1 = {
  nome: "maria",
  idade: 29,
  profissao: "atriz",
};

let pessoa2: PessoaType = {
  nome: "roberto",
  idade: 19,
  profissao: "Padeiro",
};

let pessoa3: PessoaType, pessoa4: PessoaType;

pessoa3 = {
  nome: "laura",
  idade: 32,
  profissao: "Atriz",
};

pessoa4 = {
  nome: "carlos",
  idade: 19,
  profissao: "padeiro",
};
