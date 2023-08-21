let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        isEven(numbers[i]);
    }
}
function isEven(num) {
    console.log(num + 'は偶数です');
}

class Car{
    constructor(gasolene, number){
        this.gasolene = gasolene;
        this.number = number;
    }

    getNumGas(){
        console.log("ガソリンは"+this.gasolene+"です");
        console.log("ナンバーは"+this.number+"です");
    }
}

let ins = new Car(20.5, 1234);
ins.getNumGas();