// Un archivo JS no debe contener nada que no sea referente a la clase Animal
//
class Animal{
    constructor(nombre, tipo,salud, nivel,color,poder ){
        this.nombre = nombre;
        this.tipo = tipo;
        this.salud = salud;
        this.nivel = nivel;
        this.color = color;
        this.poder = poder;
    }
    recibirDaño(daño){
        if(this.salud - daño <= 0){
            this.salud=0;
            console.log(`${this.nombre} con los angelitos`)
        }
        else{
            this.salud-=daño;
            console.log(`${this.nombre} sigue vivito con ${this.salud}`)
        }
    }

    aumentarNivel(){
        this.nivel++;
        this.poder += this.nivel;
        console.log(`${this.nombre} tiene ${this.nivel} de nivel y poder ${this.poder}`)
    }
    //En JS no es necesario metodos get o set

}