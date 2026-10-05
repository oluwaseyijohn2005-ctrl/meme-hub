const memes = [
    
    {
        id:1, img:"https://img.wattpad.com/9c779bb3910bcfbc842cbbdc7b62f3208f236e66/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e727954613653576c6e557638513d3d2d31392e313632343833323232303930353532303538313338323731343737302e6a7067",
    },
    {
        id:2, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNMdcforFfhAjWHBC6A9VMZQqt92EhOoeBprkRkMOovRV1vFjKRPXR6U&s=10"
    },
    {
        id:3, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUgfkm6b85tGOWpvwhD8lo1NFyjy7LWzmPt3z1MG_0w&s=10"
    },
    {
        id:4, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LZdpbjrF9uWxexWbQ6ws_vWeYNscybOvHpcnRuQqSg&s=10"
    },
    {
        id:5, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG_ta_FG2ki1Cn10RVxcAMHMFnz9mANOntQUAkzIzCSQ&s=10"
    },
    {
        id:6, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdX6kmJKw4s8YZ4o7T1ppOKqzkORDQX9Gjt1IIpHMWsBSIQEER8pSehY&s=10",
    },
    {
        id:7, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCoObmFirisQAWwxqrWJQ18rRg4gLG4MVoR6jj3_UJQ&s"
    },
    {
        id:8, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSuiekF6y7j6riiRaru-WiBWdfMWRNqtEqAtGXdpergxQBWxLa-gItU-p&s=10",
    },
    {
        id:9, img:"https://i.pinimg.com/236x/dd/9d/2d/dd9d2d6ce246dae03224b0fb3bd5f7b7.jpg",
    },
    {
        id:10, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IYkbidT6Bno7P86xBQdJSBvKSFSwcJx0iAm5mGb-eA&s=10",
    },
    {
        id:11, img:"https://www.nairaland.com/attachments/3888658_img20160516234217_jpeg77a2f494c90fc167cb54270d1089af1f",
    },
    {
        id:12, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ty9UpcQzGo6FW-pGdlSOSya6MHjbmiHfF9NjfpX6Bg&s",
    },
    {
        id:13, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8_vT983UKphUZ_2dHl4Ttm5CIgdDkiswBiMBIjMexPFmwJTpR2ZO-AE&s=10",
    },
    {
        id:14, img:"https://www.nairaland.com/attachments/3888666_img20160515115515_jpeg7e1879ed9ad3a139902aa964a3402354",
    }
]

// const imageUrl = "https://dummyimage.com/600x400/000/fff.png"

// async function test(){
//     const response = await fetch (memes[0].img)

// const blob = await response.blob()
// const imagefiles = new File([blob],"meme.png",{type:blob.type})
// console.log(imagefiles)
// console.log(blob)

// await navigator.share({
//     files:[imagefiles]
// })

// }

// test()

const memefeed = document.getElementById("memefeed")

 memes.map((cards) =>{
const memecards = document.createElement("div")
const memeImg = document.createElement("img")
const likebtn = document.createElement("button")
const commentbtn = document.createElement("button")
const sharebtn = document.createElement("button")
 


memeImg.src = cards.img
likebtn.textContent = "🤍 Like"
commentbtn.textContent = "💬 Comment"
sharebtn.textContent = "↗ Share"

memecards.setAttribute("class","meme-cards")
memecards.append(memeImg,likebtn,commentbtn,sharebtn,)
memefeed.append(memecards)

likebtn.addEventListener("click",()=>{
    likebtn.textContent = "1 ❤️ Like"
})

sharebtn.addEventListener("click",async ()=>{
    if(navigator.share){
        try {
            await navigator.share({
                title:"My first Share",
                text:"Check this out",
                url:"cards.img"
            })
        } catch (e) {
            console.log("This was cancelled")
        }
    }else{
        console.log("Not Supported")
    }
})

})