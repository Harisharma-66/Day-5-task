// QUESTION NO.1 JSON iterate over all for loops (for, for in, for of, forEach)

// For Loop condition
let studentname=[{"name":"HARISHARMA", "bloodgroup":"A+ve"},
                 {"name":"ARUN", "bloodgroup":"B+ve"}]
for(let i=0;i<studentname.length;i++)
{
    console.log(studentname[i].name)
    console.log(studentname[i].bloodgroup)
}

//For in Loop condition
{
let college=[{"department":"computer science", "year":"2021" },]
 for (let x in college)
     {
    console.log(x)
     }
    console.log(college[0].department,college[0].year)
}

//For of Loop condition   
 let car=[{"Brand":"KIA","Model":"Seltos", "price":"950000"},
          {"Brand":"MG","Model":"Hector", "price":"1950000"}]
for ( const best of car)
    {
        console.log(best)
    }
   
// for each condition
let student=[{"Name":"Harisharma v"},{"Mark":"Good"}]

student.forEach(i=> 
    console.log(i));