function wallPaper(imgName,textAuthor,vartical,holizontal,textColor){
    imgName = imgName.toLowerCase();
    textAuthor = textAuthor.toLowerCase();
    vartical = vartical.toLowerCase();
    holizontal = holizontal.toLowerCase();
    textColor = textColor.toLowerCase();
    //imageまとめ
    const imgTable = {
        "different-job": "https://recursionist.io/img/different-job.png",
        "laptop"  : "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
        "robot"   : "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
        "metro"   : "https://cdn.pixabay.com/photo/2019/09/24/17/26/metro-4501839_1280.jpg",
        "barance" : "https://cdn.pixabay.com/photo/2013/05/12/18/55/balance-110850_1280.jpg",
        "guitar"  : "https://cdn.pixabay.com/photo/2015/03/26/09/55/musicians-690591_1280.jpg",
        "listen"  : "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        ""        : "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg"
    }
    //textまとめ
    const textTable = {
        "antoine" : "Perfection is achieved, <br> not when there is nothing more to add, <br> but when there is nothing left to take away.<br> - Antoine de Saint",
        "gordon"  : "The scientist discovers a new type of material or energy and the engineer discovers a new use for it.<br> - Gordon Lindsay Glegg",
        "theodore": "Scientists study the world as it is, engineers create the world that never has been.<br> - Theodore von Karman",
        "someone" : "Scariest thing is don't know about what oneself don't know<br> - Someone",
        "leandro" : "Finally, I can do Recursion! waite... is it already midnight??.......   <br>I DON'T CARE!!<br> - Leandro",
        "somebody": "Human is born to be happy.<br> - Somebody"
    }
    //縦
    const varticalTable = {
        "top":"align-self-start",
        "center":"align-self-center",
        "bottom":"align-self-end"
    }
    //横
    const holizontalTable = {
        "left":["justify-content-start","text-left"],
        "center":["justify-content-center","text-center"],
        "right":["justify-content-end","text-right"]
    }
    //div container
    let dCon = document.createElement("div");
    dCon.classList.add("container-fluid","m-3","my-5");
    //div row
    let dRow = document.createElement("div");
    dRow.classList.add("row");
    //div img
    let dImg = document.createElement("div");
    //img
    let img = document.createElement("img");
    img.src = imgTable[imgName];
    img.alt = imgName;
    img.style.width = "100%";
    img.classList.add("shadow","rounded");

    dImg.append(img);
    //div text
    let dText = document.createElement("div");
    dText.classList.add("col","d-flex",varticalTable[vartical],holizontalTable[holizontal][0]);
    dText.style.position = "absolute";
    dText.style.color = textColor;
    //p text
    let pText = document.createElement("p");
    pText.innerHTML = textTable[textAuthor];
    pText.classList.add(holizontalTable[holizontal][1]);
    pText.style.width = "65%";
    pText.style.fontSize = "4vw";
    pText.style.fontWeight = "bolder";
    pText.style.textShadow = "1px 1px 0 #fff"

    dText.append(pText);

    dRow.append(dImg,dText);
    dCon.append(dRow);
    return document.getElementById("target").append(dCon);
}
//wallPaper(imgName,textAuthor,vartical,holizontal,textColor)
let wallPaper1 = wallPaper("laptop","theodore","top","right","#000");
let wallPaper2 = wallPaper("listen","Leandro","top","left","#f040f0");




    