export class Usuario{
    nombre:string;
    apellido:string;
    ci:string
    email:string;



    constructor(pnombre:string='',papellido:string='', ci:string='',pemail:string=''){
        this.nombre=pnombre;
        this.apellido=papellido;
        this.email=pemail;
        this.ci=ci;      
    }
}