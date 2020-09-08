let People=
{

details:
[
    {
        name: "Aditya",
        age: 22,
        country: "India",
        hobbies: ["Reading", "Writing", "Singing"]
    },
    {
        name: "Shubham",
        age: 30,
        country: "India",
        hobbies: ["Reading", "Painting"]
    },
    {
        name: "Manthan",
        age: 12,
        country: "London",
        hobbies: ["Baking", "Cooking"]
    },
    {
        name: "Tushar",
        age: 24,
        country: "Dubai",
        hobbies: ["Writing", "Sketcing"]
    }
],


checkCountry()
{        
    console.log("Country is India")
    for (let i = 0; i < this.details.length; i++)
    {
        if (this.details[i].country == "India")
        {
            console.log(this.details[i]);
        }
    }
},

checkAge()
{
    console.log("Age less than 30")
    for (let i = 0; i < this.details.length; i++)
    {
        if (this.details[i].age < 30)
        {
            console.log(this.details[i]);
        }
    }
}
}