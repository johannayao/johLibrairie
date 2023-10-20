
const button = document.querySelector(".button")

const contPanier= JSON.parse(localStorage.getItem("panier"))
const compt = document.querySelector(".hu")
const count = document.querySelector(".count")
count.textContent = contPanier === null ? 0: contPanier.length


button.addEventListener("click",(e)=>{
   
    let enfant = e.target
    let parent = enfant.closest(".bix") 

    const imgs = document.querySelector(".imgs").src
    const prix = document.querySelector(".prix").textContent
    const nomArticle = document.querySelector(".lili").textContent
    const nomAuteur = document.querySelector(".nono").textContent
    // console.log(prix,nomArticle,nomAuteur);

         let article = {
            prix: prix,
            nomArticle: nomArticle,
            nomAuteur: nomAuteur,
            imgs : imgs 
         }

         let panier = localStorage.getItem("panier")
         console.log(panier);
         if(panier === null){
            panier =[]
            panier.push(article)
            localStorage.setItem("panier",JSON.stringify(panier))
            window.location.reload()
          
         }else{
            panier=JSON.parse(panier)
            panier.push(article)
            localStorage.setItem("panier",JSON.stringify(panier))
           window.location.reload()
         }
         console.log(panier);
         console.log(article);
        
})