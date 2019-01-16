var x = 10;// type inference
//x = 'ABC';

var s:string;// type annotation


function Add(x:number,y:number):number{
    return x + y;
}

function Subtract(x,y){
        return x - y;
}

class Car{
    name:string;
    speed:number;
    constructor(n:string,s:number){
        this.name = n;
        this.speed = s;
    }
    Accelerate():void{
        console.log('VVRROMM...')
    }
}
class JamesBondCar extends Car{
    canFly = true;
        constructor(n:string,s:number,canFly:boolean){
                super(n,s);
                this.canFly = canFly;
        }
}
var jbc = new JamesBondCar('Houston',200,true);