async function fetchMultipleApi(){
    const userFetch = fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => data.json())
    const postFetch = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((data) => data.json())
    
    const [user, post] = await Promise.all([userFetch, postFetch])
    console.log("User Data :", user)
    console.log("Post Data :", post)
}
fetchMultipleApi()