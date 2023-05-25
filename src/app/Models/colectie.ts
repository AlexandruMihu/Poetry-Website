export class Colectie{
    id:number;
    numeColectie:string;
    numeAutor:string;
    dataPublicare:string;
    cover:string;
    review:string;
    poezii:Poezii[];

    constructor(){
        this.id = 0;
        this.numeColectie = '';
        this.numeAutor = '';
        this.dataPublicare = '';
        this.cover = '';
        this.review = '';
        this.poezii = [];
    }
}

export class Poezii{
    idPoezie:number;
    titlu:string;
    text:string;

    constructor(){
        this.idPoezie = 0;
        this.titlu = '';
        this.text = '';
    }

}