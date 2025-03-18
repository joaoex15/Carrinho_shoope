export class item {
   private Nome: string;
   private categoria:string;
   private valor:number;
   private quant:number
   private valor_final:number
    constructor(Nome:string,categoria:string,valor:number,quant:number) {
        this.Nome=Nome
        this.categoria=categoria
        this.valor=valor
        this.quant=quant
        this.valor_final=0
    }
    
    public getNome() : string {
        return this.Nome
    }

    public getcategoria() : string {
        return this.categoria
    }
    public getvalor() : number {
        return this.valor
    }
    public getquant() : number {
        return this.quant
    }    
    public getvalor_final(): number {
        return this.valor * this.quant;
    }
    
    

    
    public setNome(Nome : string) {
        this.Nome = Nome;
    }
    public setcategoria(categoria : string) {
        this.categoria = categoria;
    }
    public setvalor(valor : number) {
        this.valor = valor;
    }
    public setquant(quant : number) {
        this.quant = quant;
    }
    
    public Imprimir(){
        console.log(`Nome:${this.getNome()}`)
        console.log(`Categoria:${this.getcategoria()}`)
        console.log(`Valor:${this.getvalor()}`)
    }

}