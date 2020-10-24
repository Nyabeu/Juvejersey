var photoArea = document.getElementById("photoArea");
var thumbs = document.getElementById("thumbs");
var settingArea = document.getElementById("settingArea");
var badges = document.getElementById("badges");
var sectionFlocking = document.getElementById('sectionFlocking');
var infobox = document.getElementById("infobox");
var flockLayer = document.getElementById("flockLayer");
var blocNumber = document.getElementById("blocNumber");
var blocName = document.getElementById("blocName");
var toatlPrice = document.getElementById("toatlPrice");
var priceFlock = document.getElementById("priceFlock");
var priceBadge = document.getElementById("priceBadge");
var selectQty = document.getElementById("selectQty");



var flock = document.getElementsByClassName("flock");
var img = document.getElementsByTagName("img")[0];
var input = document.getElementsByTagName("input");
var blocBadge = document.getElementsByClassName("blocBadge")[0];
var checkbox = document.getElementsByName("checkbox");


var isflock = false;
var numBadges  = 0;
var qty = 1;
var priceUnit = 120;

function init(){
    thumbs.addEventListener("click", selectImage);
    flock[1].addEventListener("click", showForm);
    flock[0].addEventListener("click", hideForm);
    input[0].addEventListener("input", showNumber);
    input[1].addEventListener("input", showName);
    
    for(var i = 0; i < checkbox.length; i++){
        checkbox[i].addEventListener("change", createPrice);
    }
    selectQty.addEventListener("change", changeQty);

}

function selectImage(e){
    img.src = e.target.src;
}

function showForm(e){
    infobox.classList.toggle("hide");
    flockLayer.classList.toggle("hide");
    img.src = "images/3.jpg";
    e.target.style.color = "red";
    e.target.style.borderColor = "red";
    flock[0].style.color ="black";
    flock[0].style.borderColor ="black";
    isflock = true;
    computedTotal();
}
function hideForm(e){
    infobox.classList.toggle("hide");
    flockLayer.classList.toggle("hide");
    img.src = "images/1.jpg";
    e.target.style.color = "red";
    e.target.style.borderColor = "red";
    flock[1].style.color ="black";
    flock[1].style.borderColor ="black";
    blocNumber.innerText = "";
    blocName.innerText ="";
    /*flex.children[0].value ="";
    flex.children[1].value ="";*/
    isflock = false;
    totalPrice.innerText = 120;
    
}

function showNumber(e){
    var cond = (e.target.value.length < 3) && Number.isInteger(+e.target.value);
    if(cond){
        blocNumber.innerText = e.target.value;
    }
}
function showName(e){
    blocName.innerText = e.target.value;
}

 function createPrice(e){
     if(e.target.checked){
        numBadges += 1;
        priceBadge.innerText = 10 * numBadges;
     } else{
         numBadges -= 1;
         priceBadge.innerText = 10 * numBadges;
     }
     computedTotal();
 }

 function changeQty(e){
     qty = e.target.value;
    computedTotal();
 }

 function computedTotal(){
    var total = priceUnit + (numBadges * 10);
    total += isflock? 10 : 0;
    total *= qty;
    totalPrice.innerText = total;
 }

init();