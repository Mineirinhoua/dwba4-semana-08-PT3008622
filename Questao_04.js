class Aluno{
  constructor(pn, sn, pnt, snt){
    this.primeiroNome= pn;
    this.segundoNome= sn;
    this.primeiraNota= pnt;
    this.segundaNota= snt;
    this.aprovado = false;
  }
  nomeCompleto(){
    this.nomeComp = (this.primeiroNome + " " + this.segundoNome);
    console.log("Nome completo: " + this.nomeComp);
  }
  media(){
    this.m = (this.primeiraNota * 0.6+this.segundaNota * 0.4);
    console.log("Média: " + this.m);
  }
  situacao(){
    this.ap = "Situação: Aprovado";
    this.rep = "Situação: Reprovado";

    if (this.m > 6){
    this.aprovado = true;
    }else{
      this.aprovado = false;
    }
    console.log(this.aprovado ? this.ap : this.rep);
  }
  imprimirAlerta(){
    alert("Nome completo: " + this.nomeComp +
    "\nMédia: " + this.m + "\n" + (this.aprovado ? this.ap : this.rep));
  }
}

let a1=new Aluno("Fábio", "Teixeira", 5, 5);
a1.nomeCompleto();
a1.media();
a1.situacao();
a1.imprimirAlerta();

let a2=new Aluno("João", "Machado", 3, 5);
let a3=new Aluno("Maria", "Silva", 9, 8);
let a4=new Aluno("Fred", "Santos", 10, 8.5);
let a5=new Aluno("Anne", "Marques", 6, 7);

var alunos = new Array(a1, a2, a3, a4, a5);

function percorreAlunos(){
  for(var i=0; i<5; i++){
    console.log("\nAluno: " + (i+1));
    alunos[i].nomeCompleto();
    alunos[i].media();
    alunos[i].situacao();
    console.log("---------------------------------");
  }
}

percorreAlunos();