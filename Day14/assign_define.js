const diary={

    brand:"Milky Mist",
    pro1:"paneer",
    pro2:"cheese",
    pro3:"gheee"
};

const obj=Object.assign({pro4:"butter"},diary)
console.log(obj.brand)



console.log("New Products")

const diary_1={};
Object.defineProperty(diary_1,'NewProduct',{
    new1:"milk Shake",
    new2:"Ice Cream",
    new3:"milk Shake"
});
diary_1.NewProduct;
console.log(diary_1.NewProduct);

