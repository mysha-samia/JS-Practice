// function one(){
//    return 1;
// };
// function two(){
//     return one()+one();
// };
// function three(){
//    let ans = two()+one();
//    console.log(ans);
// };
// three();
// setTimeout( ()=>{
//     console.log("using set time out");

// },5000);
// console.log("hello");

// let h1 = document.querySelector("h1");
// setTimeout(()=>{
//     h1.style.color ="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color ="pink";
// },2000);
// setTimeout(()=>{
//     h1.style.color ="blue";
// },3000); this is not the right thing to use;

//callback hell
// let h1 = document.querySelector("h1");
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color =color;
//         if(nextColorChange){
//         nextColorChange();
//         }
//     },delay);
// };
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//          changeColor("blue",1000,()=>{
//             changeColor("green",1000,()=>{
//                 changeColor("purple",1000,()=>{
//                     changeColor("black",1000);
//                 });
//             });
//          });
//     });
// });

//call back hell

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("green", 1000, () => {
//                 changeColor("purple", 1000, () => {
//                     changeColor("black", 1000);
//                 });
//             });
//         });
//     });
// });


//promise
// function saveToDB(data){
//     return new Promise((resolve, reject) => {
//        let internetSpeed = Math.floor(Math.random()*10)+1;
//        if(internetSpeed>4){
//         resolve("Success.Data was saved");
//        }else{
//         reject("data was not saved");
//        }
//     });
// };
//promise chaining
// let request = saveToDB("Mysha Samiha");
// request
// .then((result  )=>{
//     console.log("data1 was saved");
//     return saveToDB("Anika Ibdad")  })
//  .then(()=>{
//         console.log("data2 was saved");
//         return saveToDB("Munni Akther")
// })
// .then(()=>{
//     console.log("data3 was saved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
    
// })

//using proimise chaining

// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//   h1.style.color=color;
//   resolve("Promise is succesfully fired");
//     },delay);
//    })
// };

// changeColor("red",1000).then(()=>{
//     console.log("color changed to red")
//     return changeColor("orange",1000);
// }).then(()=>{
//     console.log("color changed to orange")
//     return changeColor("blue",1000); 
// }).then(()=>{
//     console.log("color changed to blue")
//     return changeColor("pink",1000); 
// }).then(()=>{
//     console.log("color changed to pink")
//     return changeColor("green",1000); 
// }).then(()=>{
//     console.log("color changed to green")
//     return changeColor("black",1000); 
// }).catch(()=>{
//     console.log("There is some error");
// })



//using async function with await key words
// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//    return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//   h1.style.color=color;
//   resolve("Promise is succesfully fired");
//     },delay);
//    })
// };
// async function colorChangeWithAwait(){ 
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("orange",1000);
//     await changeColor("blue",1000);
//     await changeColor("purple",1000);
// };
// colorChangeWithAwait();



//worked with json and fake APIs . here we got to know about two
//methods json.parse() and json.stringify().


// let jsonRes = '{"id":1,"name":"Lion","species":"Panthera leo","family":"Felidae","habitat":"Grasslands and Savannas","place_of_found":"Africa","diet":"Carnivore","description":"The lion is a large and powerful wild cat known for its majestic appearance and social behavior.","weight_kg":190,"height_cm":120,"image":"https://fakeimg.pl/500x500/cc6601"}';
// console.log(jsonRes);
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.description); 

// let student={
//     name: "Mysha Samiha",
//     id: 2020952,
//     age:23
// };
// let jsonObj = JSON.stringify(student);
// console.log(jsonObj);
// console.log(typeof jsonObj);


//axios
// let button = document.querySelector("button");
// button.addEventListener("click",async ()=>{
//  let fact = await  getFacts();
//  let para = document.querySelector("#cat");
//  para.innerText = fact;
 
  
// });

// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//   try{
//    let response = await axios.get(url);
//     return response.data.fact;
//   }catch(err){
//     console.log("Error",err);
//     return "No Fact Found"
//   }
// }

let url = "http://universities.hipolabs.com/search?name=";

let country ="nepal";

let  button=document.querySelector("button");
button.addEventListener("click",async ()=>{
  let collgesNames = await getColleges(country);
  let para =document.querySelector("#colleges");
  show(collgesNames);
});
function show(collgesNames){
  for(col of collgesNames){
    console.log(col.data.name);
  }

}

async function getColleges(country){
  try{
    let response =await axios.get(url+country);
    console.log(response);
    return response.data.name;
    
  }catch(err){
    console.log(err)
    return "GOT ERROR"
  }
}
