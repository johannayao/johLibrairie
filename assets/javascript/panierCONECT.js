const joh= JSON.parse(localStorage.getItem("panier"))

let html = ""

function affiche(){ 
   
    joh.forEach(element => {
        html += ` 
        
  
             
        <div class="panier1">
        <div class="flex">
          <img src="../assets/images/livre2.jpeg" class="imgs" alt="" width="160px">
        </div>

          <div contextmenu="gu">
                <div class="tis">
                  <h3 class="lili">${element.nomArticle}</h3>
                  <p class="nono">${element.nomAuteur}</p>
                 <div > <p class="prix">${element.prix}</p></div>
                </div>
          </div>
          <div class="cor">
            <img src="../assets/images/corbeil-removebg-preview.png" alt="" width="70px">
          </div>
      </div>
            
              
                   
    `
    
        console.log(element.prix,element.nomArticle,element.imgs);
       
    });
    document.querySelector(".panier1").innerHTML = html
}

affiche()




