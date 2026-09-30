 const memesImage = document.getElementById("memes")
 const memesbtn = document.getElementById("memesbtn")
 const result = document.getElementById("result")

 memesbtn.addEventListener("click", async ()=>{
    try{
        const reponse = await fetch("https://api.apileague.com/retrieve-random-meme")

        if(!reponse.ok){
            throw new Error("Failed to fetch")
        }
        
        const data = await reponse.json()
        console.log(data)
        memesImage.src = data.url

    }catch(error){
        result.textContent = "Something went Wrong"
        console.log(error)
    }
 })
 
