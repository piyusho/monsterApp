// const user = new Promise((resolve, reject) => {
//     if(true){ setTimeout(() =>{
//         resolve("This is a resolved state of the Promise");
//     },2000)}
//     else{
//         reject("This is a rejected state of the Promise")
//     }
   
// })

// user.then((value) => {return console.log(value)})
// .catch(error => console.log(error))


//PRomises

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(jsonData => jsonData[0])
// .then(data =>{
// return fetch('https://jsonplaceholder.typicode.com/posts?userId='+data.id)}).then(res => res.json()).then(posts => console.log(posts))






//Async Await

const myAsync = async () => {
    try {
        const user = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await user.json()
    const first = await data[1]
    
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${first.id}`)
    const posts = postResponse.json()
    console.log(posts)

        
    } catch (error) {
        console.log("There was an error Bro")
    }
    
}
