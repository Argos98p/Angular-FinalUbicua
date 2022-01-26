export class Producto{
    nombre:string;
    precio:number;
    seccion:string;
    descripicion:string;
    imagen:string;

    constructor(pnombre:string='',pprecio:number=0.0,pseccion:string='',pdescripcion:string='',pimagen:string=''){
        this.descripicion=pdescripcion;
        this.seccion=pseccion;
        this.precio=pprecio;
        this.nombre=pnombre;
        this.imagen=pimagen;
    }

}