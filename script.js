function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
    }

var s1 = pizzaOven("deep dish", "traditional",["mozzarella"],["pepperoni", "sausage"]);
console.log(s1);

var s2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"], ["mushrooms","olives","onions"]);
console.log(s2);

var s3 = pizzaOven("hand tossed", "traditional",["feta"],["olives", "pepperoni"]);
console.log(s3);

var s4 = pizzaOven("deep dish", "marinara", ["feta"],["onions", "sausage"]);
console.log(s4);

function randomPizza(){
    const pizzaTypeArray = [s1, s2, s3, s4]
   console.log(pizzaTypeArray[Math.floor(Math.random() * pizzaTypeArray.length)])
    
}
randomPizza()

    //THIS WOULD WORK IF WE WERE MAKING ONE PIZZA BUT WEE NEED TO MAKE MULTIPLE 
        // crustType: ["deep dish", "hand tossed"]
        // sauceType: ["traditional", "marinara"]
        // cheeses: ["mozzarella","feta"]
        // toppings: ["pepperoni","sausage","mushrooms","olives","onions"]