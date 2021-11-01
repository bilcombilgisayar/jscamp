function addToCart(quantity,productName="Elma") {
<<<<<<< HEAD
    console.log("Sepete eklendi : " + productName + " Adet : "+quantity)
}

// addToCart()
addToCart(10)
// addToCart(15)

// let dolarDun=9.50
let sayHello =()=>{
=======
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    console.log("Hello World!")
}

sayHello()

<<<<<<< HEAD
let sayHello2=function(){
    console.log("Hello World2!")
}
sayHello2()


function addToCart2(productName,quantity,unitPrice) {
=======
let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    
}

addToCart2("Elma",5,10)
<<<<<<< HEAD
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1={productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName);
    console.log("Miktar : "+product.quantity);
    console.log("Fiyat : "+product.unitPrice);
=======
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
}


addToCart3(product1)

<<<<<<< HEAD
let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

let sayi1=10
let sayi2=20
sayi1=sayi2
sayi2=100
=======
let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

<<<<<<< HEAD
let products =[
=======
let products = [
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

<<<<<<< HEAD
function add(bisey,...numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]        
=======
function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
<<<<<<< HEAD
// add(20,30,40)
// add(20,30,40,50)

let numbers=[30,50,15,250,150,280,85]
// console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", populations:"20M"}, 
    {name:"Marmara", populations:"30M"}, 
    {name:"Karadeniz", populations:"10M"}, 
    [
        ["Ankara","Konya",],
        ["İstanbul","Bursa",],
        ["Sinop","Trabzon",],
=======
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e
    ]
]

// console.log(icAnadolu.name)
<<<<<<< HEAD
// console.log(icAnadolu.populations)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma",unitPrice:10,quantity:5})
=======
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})
>>>>>>> 913ee0044458ba0401b6785ff179f907b3fb0c1e

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

