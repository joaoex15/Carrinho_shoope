import { item } from "./item";

export class carrinho {
    private lista: item[];

    constructor() {
        this.lista = [];
    }

    public additem(item: item) {
        this.lista.push(item);
    }

    public remover(nomeProduto: string, quantidadeRemover: number) {
        const index = this.lista.findIndex((element) => element.getNome() === nomeProduto);
    
        if (index !== -1) {
            const produto = this.lista[index];
            const novaQuantidade = produto.getQuant() - quantidadeRemover;
    
            if (novaQuantidade > 0) {
                produto.setQuant(novaQuantidade);
            } else {
                this.lista.splice(index, 1);  // Remove o item completamente se a quantidade for 0 ou menos
            }
        } else {
            console.log(`Produto "${nomeProduto}" não encontrado no carrinho.`);
        }
    }
    

    public listar() {
        if (this.lista.length === 0) {
            console.log("Carrinho vazio.");
            return;
        }

        this.lista.forEach((element, index) => {
            console.log(`Index ${index}`);
            element.Imprimir();
        });
    }

    public delete(index: number) {
        if (index >= 0 && index < this.lista.length) {
            this.lista.splice(index, 1);
        } else {
            console.log("Índice inválido!");
        }
    }
}
