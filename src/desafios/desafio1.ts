// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface EmployeeType{
    code: number,
    name: string
};

let employee: EmployeeType;

employee = {
    code : 10,
    name : "John"
}