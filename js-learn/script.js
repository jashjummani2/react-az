// console.log('Hello from script')
// if (10===10){
// console.log('Ten is equal to ten')}

// function greetUser(name){
//     console.log('Good morning '+name);
// }
// greetUser("vivek");
// greetUser('jash');

// const greetUserArrow = (name) => {
//     console.log("Good Morning with Arrow "+name);
// }
// greetUserArrow("Karan");

// class Account{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const account1 = new Account("jash" , 21);
// console.log(account1);


// const user = {
//     name : "jash",
//     age : 21,
//     sayName(){
//         console.log('my name is '+this.name);
//     },
// }
// user.sayName();



//Synchronous code: execute when previous code is executed, js reaches the code

//callback: passing another funtion into the another function

// function greetings(error,name){
//     if(error){
//         alert("Please Provide a name");
//     }
//     else{
//     alert("Hello "+name);}
// }
// function processInput(callback){
//     const name = prompt("Enter your name");
//     if(name===null){
//         callback(true,null);
//     }
//     else{
//         callback(false,name);
//     }
// }
// processInput(greetings);

//Promises
function getUser(userId){
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            resolve({userId:userId,name:'Jash'});
        }, 2000);
    })
}
function getUserPosts(userId){
    return new Promise((resolve, reject) => {
        // reject("ERROR");
        setTimeout(() => {
            resolve({postId:userId,content:'Hello from Jash'});
        }, 1000);
        // reject("ERROR");
    })
}
// getUser(1)
// .then((user) => {
//     console.log(user);
//     return getUserPosts(user.userId);
// })
// .then((post) => {
//     console.log(post);
// })
// .catch((error) => {
//     console.log(error);
// })


// instead of chaining of .then we can use async await function as its a industry standard

async function getUserAndPosts(){
    try{
        const user = await getUser(1);
        const post = await getUserPosts(user.userId);
        console.log(user);
        console.log(post);
    }
    catch(error){
        console.log(error);
    }
}

getUserAndPosts();