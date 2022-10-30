var nameValid=document.getElementById('nameValid')
var name1Valid=document.getElementById('name1Valid')
nameValid.onkeyup = function () {
    var urlRejex =  /^[A-Za-z]\w{7,14}$/;
    if (urlRejex.test(nameValid.value)) {
     
        nameValid.classList.add("is-valid");
        nameValid.classList.remove("is-invalid");
        name1Valid.classList.add("d-none");
    } else {
        nameValid.classList.add("is-invalid");
        nameValid.classList.remove("is-valid");
        name1Valid.classList.remove("d-none");
    }
  }

  var emailValid=document.getElementById('emailValid')
  var emailValid1=document.getElementById('emailValid1')
  emailValid.onkeyup = function () {
      var urlRejex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (urlRejex.test(emailValid.value)) {
       
        emailValid.classList.add("is-valid");
        emailValid.classList.remove("is-invalid");
        emailValid1.classList.add("d-none");
      } else {
        emailValid.classList.add("is-invalid");
        emailValid.classList.remove("is-valid");
        emailValid1.classList.remove("d-none");
      }
    }
var phoneValid=document.getElementById('phoneValid')
var phoneValid1=document.getElementById('phoneValid1')
phoneValid.onkeyup = function () {
      var urlRejex =  /[0-9]{11}/;
      if (urlRejex.test(phoneValid.value)) {
       
        phoneValid.classList.add("is-valid");
        phoneValid.classList.remove("is-invalid");
        phoneValid1.classList.add("d-none");
      } else {
        phoneValid.classList.add("is-invalid");
        phoneValid.classList.remove("is-valid");
        phoneValid1.classList.remove("d-none");
      }
    }



var one2=document.getElementById('one2')
var all12=document.getElementById('all12')
all12.onkeyup = function () {
    var urlRejex = /^[A-Za-z]\w{7,14}$/;
    if (urlRejex.test(all12.value)) {
     
     all12.classList.add("is-valid");
     all12.classList.remove("is-invalid");
     one2.classList.add("d-none");
    } else {
     all12.classList.add("is-invalid");
     all12.classList.remove("is-valid");
     one2.classList.remove("d-none");
    }
  }

var one23=document.getElementById('one23')
var all123=document.getElementById('all123')
all123.onkeyup = function () {
    var urlRejex =  /^[A-Za-z]\w{7,14}$/;
    if (urlRejex.test(all123.value)) {
     
     all123.classList.add("is-valid");
     all123.classList.remove("is-invalid");
     one23.classList.add("d-none");
    } else {
     all123.classList.add("is-invalid");
     all123.classList.remove("is-valid");
     one23.classList.remove("d-none");
    }
  }




$('.ic').click(function(){
    let navWidth=$('.nav').outerWidth();
    if($('.nav').css('left') == '0px'){
            $('.nav').animate({'left':'-160px'},1000)
            $('.ic').html('<i id="closeTag" class=" closeTag fa-solid fa-bars"> </i>')  
            
        }
         else{
        $('.nav').animate({'left':0},1000)
            $('.ic').html('<i id="closeTag" class="fa-solid fa-xmark  "></i>')
        }

})
//---------------------------------------------------------------------------------
var aContactUs=document.getElementById('aContactUs')
var ContacUs=document.getElementById('ContacUs')
var aSearch=document.getElementById('aSearch')
var search=document.getElementById('search')
var category=document.getElementById('category')
var aCategory=document.getElementById('aCategory')
var area=document.getElementById('area')
var aArea=document.getElementById('aArea')
var ingrediants=document.getElementById('ingrediants')
var aingrediants=document.getElementById('aingrediants')
var categoryy=document.getElementById('categoryy')

aContactUs.onclick=function(){
    ContacUs.classList.remove('d-none')
    search.classList.add('d-none')
    category.classList.add('d-none')
    categoryy.classList.add('d-none')
    area.classList.add('d-none')
    ingrediants.classList.add('d-none')
}
aSearch.onclick=function(){
    search.classList.remove('d-none')
    ContacUs.classList.add('d-none')
    category.classList.add('d-none')
    area.classList.add('d-none')
    categoryy.classList.add('d-none')

    ingrediants.classList.add('d-none')


}
aCategory.onclick=function(){
    category.classList.remove('d-none')
    ContacUs.classList.add('d-none')
    search.classList.add('d-none')
    area.classList.add('d-none')
    ingrediants.classList.add('d-none')
    categoryy.classList.add('d-none')


}
aArea.onclick=function(){
    area.classList.remove('d-none')
    category.classList.add('d-none')
    ContacUs.classList.add('d-none')
    search.classList.add('d-none')
    ingrediants.classList.add('d-none')
    categoryy.classList.add('d-none')

}
aingrediants.onclick=function(){
    ingrediants.classList.remove('d-none')
    category.classList.add('d-none')
    ContacUs.classList.add('d-none')
    search.classList.add('d-none')
    area.classList.add('d-none')
    categoryy.classList.add('d-none')

}







//------------------------------------------------------------------------------

let rowApi=document.getElementById('rowApi')
var meal
async function getMealRandom(){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      meal=await response.json();
      displayMeal()
}
getMealRandom();
 
function displayMeal(){
      var cartona=''
    for(var i=0; i < meal.categories.length;i++){
        cartona+=
        `
        <div class="col-md-3 ahmed searchHovv">
            <img class='p-3 ' src="${meal.categories[i].strCategoryThumb}" alt="">
            
            <div class="searchHoverr bg-light text-center pb-3  ">
            <h2> ${meal.categories[i].strCategory}</h2>
            <h5 class='p-3'>${meal.categories[i].strCategoryDescription}</h5>
            
            
            </div>
            
           
        </div>
         
        `
    }
    rowApi.innerHTML=cartona

}
//--------------------------------------------------------------
var areaApi=document.getElementById('areaApi')
var mealArea

async function getAreaRandom(){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    mealArea=await response.json();
    displayArea()
}

getAreaRandom()
var areaName=document.getElementById('areaName')
function displayArea(){
    var cartona=''
  for(var i=0; i < mealArea.meals.length;i++){
      cartona+=
      `
      <div class="col-md-2 p-3 areaAll">
      <i class="fa-solid fa-earth-americas areaLogo p-3"></i>
      <h2 id="areaName" href=>${mealArea.meals[i].strArea}</h2>
      
       </div>
       
      `
  }
  areaApi.innerHTML=cartona
}


//---------------------------------------------
var ingrediantsApi=document.getElementById('ingrediantsApi')
var mealingrediant

async function getIngrediantRandom(){
    var response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    mealingrediant=await response.json();
    displayIngrediant()
}

getIngrediantRandom()
var areaName=document.getElementById('areaName')
function displayIngrediant(){
    var cartona=''
  for(var i=0; i < mealingrediant.categories.length;i++){
      cartona+=
      `
      <div class="col-md-2  ingrediantAll">
      <i class="fa-solid fa-bowl-food areaLogo"></i>
      <h2 id="areaName" href=>${mealingrediant.categories[i].strCategory}</h2>
      <p>${mealingrediant.categories[i].strCategoryDescription}</p>
      
       </div>
       
      `
  }
  ingrediantsApi.innerHTML=cartona
}
//------------------------------------------
var searchByName=document.getElementById('searchByName')
var searchByLetter=document.getElementById('searchByLetter')
var rowSearch=document.getElementById('rowSearch')
var mealByName
var mealByLetter
searchByName.onkeyup=function(){
    async function getByName(meal){
        var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        mealByName=await response.json();
        displayGetByName()
       console.log(mealByName)
    }
    getByName(searchByName.value)
   
}
function displayGetByName(){
    var cartona=''
  for(var i=0; i < mealByName.meals.length;i++){
      cartona+=
      `
      <div class="col-md-3 searchHov ">
      
      <img class="p-3 categoryIamge m-2" src="${mealByName.meals[i].strMealThumb}">
    
            <div class="searchHover bg-light text-center">
            <h2>${mealByName.meals[i].strMeal}</h2>
            
            
            </div>
     
      
      
       </div>
       
       
      `
  }
  rowSearch.innerHTML=cartona
}


searchByLetter.onkeyup=function(){
    async function getByLetter(letter){
        var response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        mealByLetter=await response.json();
        displayGetByLetter()
       console.log(mealByLetter)
    }
    getByLetter(searchByLetter.value)
   
}
function  displayGetByLetter(){
    var cartona=''
  for(var i=0; i < mealByLetter.meals.length;i++){
      cartona+=
      `
      <div class="col-md-3 searchHov ">
      
      <img class="p-3 categoryIamge m-2" src="${mealByLetter.meals[i].strMealThumb}">
    
            <div class="searchHover bg-light text-center">
            <h2>${mealByLetter.meals[i].strMeal}</h2>
            
            
            </div>
     
      
      
       </div>
       
       
      `
  }
  rowSearch.innerHTML=cartona
}

//----------------------------------------------------
var homeRow=document.getElementById('homeRow')
var homeRowCartona=''
var arrayy=["Pancakes","Lasagne","Kafteji","Koshary","Soup","Wontons","Moussaka","Sushi","Tamiya","Shawarma","Lasagne","Kafteji"]
for(var i=0;i<12;i++){
    homeRowCartona+=
    `
    <div class="col-md-2 rowImg  hov84">
        <img class="homeImg" src="img/${i}.jpg" alt="">
        <div class=" hov845 bg-light text-center">
        <h2>${arrayy[i]}</h2>
            
            
        </div>
     
        
     </div>
    `
}
homeRow.innerHTML=homeRowCartona







































// var list=document.getElementById('list')
// var mealList
// async function getMealList(){
//     var response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
//     mealList=await response.json();
//     console.log(mealList.meals[2].idMeal)
    
//     displayList()
    
// }
// getMealList()
// function displayList(){
//     var cartona=''
//   for(var i=0; i < mealList.meals.length;i++){
//       cartona+=
//       `
//       <div class="col-md-2 bg-warning">
//       <i class="fa-solid fa-earth-americas areaLogo p-3"></i>
//       <a id="areaName" href=>${mealList.meals[i].strMeal}</a>
      
//        </div>
    
//       `
//   }
//   list.innerHTML=cartona
// }


  
 

