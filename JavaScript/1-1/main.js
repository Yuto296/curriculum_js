console.log("10 + 8");
console.log(10 + 8);
console.log("20割る3の余りは"+(20 % 3));
window.alert("Hello World!!");

let price = 100;
console.log(price * 2);

price = 500;
console.log(price * 2);

//a !== 10;
//b >= 10 && b < 20 && (b % 2 === 0)
let x = 10;
if(x >= 10 && x <= 20){
    console.log("成功です");
}else{
    console.log("失敗です");
}

let y = 0;
if(y % 2 === 0){
    console.log("偶数です");
}else{
    console.log("奇数です");
}

for(let number = 1; number <= 100; number++){
    if(number % 3 == 0){
        if(number % 5 == 0){
            console.log("FizzBuzz!!!");
            continue;
        }
        console.log("Fizz!");
        continue;
    }else if(number % 5 == 0){
        console.log("Buzz!");
        continue;
    }
    console.log(number);
}

//①関数名を適切なものに変えてください
//②仮引数を適切なものに変えてください
function createJuice(fruits) {
    //③「〇〇を受け取りました。ジュースにして返します」と出力
    console.log(`${fruits}を受け取りました。ジュースにして返します`);
    //④受け取った果物にジュースという文字列を結合して、呼び出し元に返す
    return `${fruits}ジュース`;
}
//⑤関数の実行：「みかん」を渡して、結果を受け取れるように適当な変数（orangeJuice）を用意
let orangeJuice = createJuice("みかん");
//⑥返ってきた変数を利用して「〇〇が届きました」と出力する
console.log(`${orangeJuice}が届きました`);

let scores = [10, 15, 20, 25];
console.log(scores);
for(let i = 0; i < scores.length; i++){
    if(scores[i] % 2 === 0){
        console.log(scores[i]+"は偶数です");
    }
}

let car = {gass: 20.5, num: 1234};
console.log(car);
console.log("ガソリンは"+car.gass+"です");
console.log(`ナンバーは${car["num"]}です`);

class Taiyaki {
    constructor(nakami){
        this.nakami = nakami;
    }

    showTaste(){
        console.log(`中身は${this.nakami}です`);
    }
}

let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");
anko.showTaste();
cream.showTaste();
cheese.showTaste();