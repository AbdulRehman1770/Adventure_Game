import inquirer from "inquirer"

class Player{
    name : string;
    fuel : number = 100;

    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name : string;
    fuel : number = 100;

    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }
}

let player = await inquirer.prompt({
    name : "name",
    message : "Enter Your Name",
    type : "input"
})

let opponent = await inquirer.prompt({
    name : "name",
    message : "Select Opponent Character",
    type : "list",
    choices : ["Zombie", "Monster", "Godzilla"]
})

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.name)

do{
    if(opponent.name === "Zombie"){
        let ask = await inquirer.prompt({
            name : "name",
            type : "list",
            message : "What would you like to Do!",
            choices : ["Attack", "Drink Portion", "Run For Your Life.."]
        })
        if(ask.name === "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel <= 0){
                    console.log("You Losse Better Luck Next TIme");
                    process.exit()}}
            
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(o1.fuel <= 0){
                    console.log("You Win");
                    process.exit()}}}
        
        if(ask.name === "Drink Portion"){
            p1.fuelIncrease()
            console.log(`You Drink Energy Bottle Now Your Fuel is ${p1.fuel}`);}

        if(ask.name === "Run For Your Life.."){
            console.log("You Loose Better Luck Next Time!");
            process.exit()}}
    if(opponent.name === "Monster"){
                let ask = await inquirer.prompt({
                    name : "name",
                    type : "list",
                    message : "What would you like to Do!",
                    choices : ["Attack", "Drink Portion", "Run For Your Life.."]
                })
                if(ask.name === "Attack"){
                    let num = Math.floor(Math.random() * 2)
                    if(num > 0){
                        p1.fuelDecrease()
                        console.log(`${p1.name} fuel is ${p1.fuel}`);
                        console.log(`${o1.name} fuel is ${o1.fuel}`);
                        if(p1.fuel <= 0){
                            console.log("You Losse Better Luck Next TIme");
                            process.exit()}}
                    
                    if(num <= 0){
                        o1.fuelDecrease()
                        console.log(`${p1.name} fuel is ${p1.fuel}`);
                        console.log(`${o1.name} fuel is ${o1.fuel}`);
                        if(o1.fuel <= 0){
                            console.log("You Win");
                            process.exit()}}}
                
                if(ask.name === "Drink Portion"){
                    p1.fuelIncrease()
                    console.log(`You Drink Energy Bottle Now Your Fuel is ${p1.fuel}`);}
        
                if(ask.name === "Run For Your Life.."){
                    console.log("You Loose Better Luck Next Time!");
            process.exit()}}
    if(opponent.name === "Godzilla"){
                let ask = await inquirer.prompt({
                    name : "name",
                    type : "list",
                    message : "What would you like to Do!",
                    choices : ["Attack", "Drink Portion", "Run For Your Life.."]
                })
                if(ask.name === "Attack"){
                    let num = Math.floor(Math.random() * 2)
                    if(num > 0){
                        p1.fuelDecrease()
                        console.log(`${p1.name} fuel is ${p1.fuel}`);
                        console.log(`${o1.name} fuel is ${o1.fuel}`);
                        if(p1.fuel <= 0){
                            console.log("You Losse Better Luck Next TIme");
                            process.exit()}}
                    
                    if(num <= 0){
                        o1.fuelDecrease()
                        console.log(`${p1.name} fuel is ${p1.fuel}`);
                        console.log(`${o1.name} fuel is ${o1.fuel}`);
                        if(o1.fuel <= 0){
                            console.log("You Win");
                            process.exit()}}}
                
                if(ask.name === "Drink Portion"){
                    p1.fuelIncrease()
                    console.log(`You Drink Energy Bottle Now Your Fuel is ${p1.fuel}`);}
        
                if(ask.name === "Run For Your Life.."){
                    console.log("You Loose Better Luck Next Time!");
            process.exit()}}}

    

while(true)