//Task 1: Fetch Random Joke API
const fetchJokes = async () => {
    try{
        const responseJokeData = await fetch("https://official-joke-api.appspot.com/random_joke");
        if(!responseJokeData.ok) throw new Error("Failed to fetch the Data!")
            const jsonValue = await responseJokeData.json();
        console.log(`😂 Joke: ${jsonValue.setup}`)
        console.log(`🤣 Punchline: ${jsonValue.punchline}`)
    }catch(err){
        console.log(err)
    }
}
fetchJokes()


//Task 2: Parallel API Calls
const fetchUserAndPost = async () => {
    try{
        const [post, user] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json()),
            fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json())
        ]);

        console.log(`📝 Post Title: ${post.title}`);
        console.log(`👤 User: ${user.name}`);
    }catch(err){
        console.log("❌ Error fetching data:", err.message)
    }
}

fetchUserAndPost()