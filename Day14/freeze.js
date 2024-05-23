const movie={
    name:"Kabali",
    rating:4.5,
    language:"Tamil"
};
const obj1=Object.freeze(movie);
obj1.name="Leo"
console.log(obj1.name)
