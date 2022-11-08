class Car {
    constructor(make, model, reg, year, color){
        this.make = make;
        this.model = model;
        this.reg = reg;
        this.year = year;
        this.color = color;
    }

    isUlez() {
        if(this.year > 2009)
        return `your car is Ulez compliant`
        else
        return `your car is not Ulez compliant`

    }
}

const kp58sml = new Car("BMW", "3 series", "KP58 SML", 2008, "silver");
const lm55gzf = new Car("Mercades", "C220d", "LM55 GZF", 2005, "black");
const bm69pln = new Car("fiat", "panda", "BM69 PLN", 2019, "white");

console.log(kp58sml.isUlez())
// console.log(lm55gzf)

let form = document.querySelector("#form");
let regBox = document.querySelector("#regBox");
let result = document.querySelector("#result");


form.addEventListener("submit", function (event){
    event.preventDefault();
    let checker = (regBox.value);
    result.textContent = `your car is ${checker}`
})


// function ulez (regBox) {
//     if(regBox.value < 58)
//     return false

// }