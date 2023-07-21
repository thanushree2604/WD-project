let person = 
{
    name:"kiran",
    age:13,
    gender:"male",
    eyecolor:"black",
    cars:{
        car1:"Honda",
        car2:"BMW"
    }
}
for (i in person.cars){
    console.log(person.cars[i]);
}