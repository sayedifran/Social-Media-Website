// ///Sidebar
const manuItems= document.querySelectorAll(".manu-item")
///hightlight for massage card
const msgPopUp= document.querySelector("#messages-notification")
const masseges= document.querySelector(".masseges")
///search engine for massage 
const message= document.querySelectorAll(".message")
const messageSearch= document.querySelector("#message-search")

//theame customiation 
//theme card popup
const theme= document.querySelector("#theme")
const themeModel= document.querySelector(".customize-theme")
//changin font size in them card
const fontSizes=  document.querySelectorAll(".choose-size span")
const root= document.querySelector(":root")
///primary color custamization
const selectClr= document.querySelectorAll(".choose-color span")

///customizing the background color 
const bg1= document.querySelector(".bg-1")
const bg2= document.querySelector(".bg-2")
const bg3= document.querySelector(".bg-3")
const spanClr= document.querySelector(".bg-1 span")




////side bar add remove active class
const rmvActiveCls= ()=>{
    manuItems.forEach((item) =>{
       item.classList.remove("active")
      
    }) 
}


///hightlight for active and  popup for notificaton when manu-item is click
manuItems.forEach(item =>{
    item.addEventListener("click", ()=>{
        rmvActiveCls()
        item.classList.add("active")
        if(item.id != "notification"){
           document.querySelector(".notifications-popup").style.display= "none"
        }else{
            document.querySelector(".notifications-popup").style.display= "block" 
            document.querySelector("#notification .notification-counts").style.display= "none"
        }
       
    })
})

///hightlight for massage card
msgPopUp.addEventListener("click", ()=>{
    masseges.style.boxShadow= "0 0 1rem var(--color-primary)"
    setTimeout(() => {
        masseges.style.boxShadow= "none"
    }, 2000);
    document.querySelector("#messages-notification .notification-counts").style.display= "none"
})

///search engine for massage 
const seachMessage = () =>{
    const val= messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat =>{
        let name= chat.querySelectorAll("h5").textContent.toLowerCase()
        if(name.indexOf(val) != -1){
            chat.style.display= "flex";
        }else{
           chat.style.display= "none"
        }
    })
}

messageSearch.addEventListener("keyup", seachMessage);


  ////Theme display custamizatio



const openThemeModal= e =>{
  themeModel.style.display= "grid"
//   if (e.target.classList.contains("customize-theme")) {
//     themeModel.style.display= "none"
//   }
}

const closeThemeModel= (e)=>{
    if (e.target.classList.contains("customize-theme")) {
        themeModel.style.display= "none"
    }
}



theme.addEventListener("click", openThemeModal)
themeModel.addEventListener("click", closeThemeModel )

///font sizecustamization
 
// fontSize.forEach(chngFntSize = ()=>{
//     chngFntSize.addEventListener("click", ()=>{
//         if (chngFntSize.classList != "font-size-1") {
//             document.body.style.fontSize= "3rem"
//         }
//     })
// })

///remove active for font sizes
const rmvFntActive= (e)=>{
    fontSizes.forEach((e) =>{
    e.classList.remove("active")
    
    })
   
}

fontSizes.forEach( size =>{
    let fontSize;
   size.addEventListener("click", ()=>{
    rmvFntActive()
    size.classList.toggle("active")

    if (size.classList.contains("font-size-1")) {
        fontSize= "10px";
        root.style.setProperty("--sticky-top-left", "5.4rem")
        root.style.setProperty("--sticky-top-right", "5.4rem")
        // size.classList.add("active")
    }else if(size.classList.contains("font-size-2")){
        fontSize= "13px";
        root.style.setProperty("--sticky-top-left", "5.4rem")
        root.style.setProperty("--sticky-top-right", "-7rem")
        // size.classList.add("active")

    }else if(size.classList.contains("font-size-3")){
        fontSize= "16px";
        root.style.setProperty("--sticky-top-left", "-2rem")
        root.style.setProperty("--sticky-top-right", "-17rem")
        // size.classList.add("active")

    }else if(size.classList.contains("font-size-4")){
        fontSize= "19px";
        root.style.setProperty("--sticky-top-left", "-5rem")
        root.style.setProperty("--sticky-top-right", "-25rem")
        size.classList.add("active")

    }else if(size.classList.contains("font-size-5")){
        fontSize= "22px";
        root.style.setProperty("--sticky-top-left", "12rem")
        root.style.setProperty("--sticky-top-right", "-35rem")
        size.classList.add("active")

    }

    

    //chng font size of html root element
    document.querySelector("html").style.fontSize= fontSize;
   })
})

// fontSizes= document.body.style.fontSize;

////custamizing primary btn color 
// remove active class 
const rmvClrAtv= ()=>{
    selectClr.forEach((e) =>{
        e.classList.remove("active")
    })
}

const setClr=(addCLr)=>{
    addCLr.addEventListener("click", () =>{

    rmvClrAtv()
    let primaryColor;
    addCLr.classList.add("active")

    if (addCLr.classList.contains("color-1")) {
        primaryColor = " 252";
    }else if(addCLr.classList.contains("color-2")){
        primaryColor= "52"
    }else if(addCLr.classList.contains("color-3")){
        primaryColor= "352"
    }else if(addCLr.classList.contains("color-4")){
        primaryColor= "152"
    }else if(addCLr.classList.contains("color-5")){
        primaryColor= "282"
    }

    root.style.setProperty("--primary-color-hue", primaryColor)

    // document.querySelectorAll(".btn, .btn-primary").style.background= primaryColor;

})
}
selectClr.forEach(setClr)


///customizimg background color

//background value
let lightClorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg function
const changeBg= ()=>{
   root.style.setProperty("--light-color-lightness", lightClorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  
}

bg2.addEventListener("click", () =>{
    darkColorLightness= "95%" ;
    whiteColorLightness= "20%";
    lightClorLightness= "15%";
    bg1.style.background= "white"
    bg2.style.color= "white"
    bg3.style.color= "white"
    spanClr.style.background="white"

    //add actitve class
    bg2.classList.add("active")
    //remove active class
    bg1.classList.remove("active")
    bg3.classList.remove("active")
    changeBg();

})
bg3.addEventListener("click", ()=>{
    lightClorLightness= "0%";
    darkColorLightness= "95%";
    whiteColorLightness= "10%";
    
     //add actitve clas1
     bg3.classList.add("active")
     //remove active class
     bg1.classList.remove("active")
     bg2.classList.remove("active")
     changeBg();

})
bg1.addEventListener("click", () =>{
     //add actitve class
     bg1.classList.add("active")
     //remove active class
     bg2.classList.remove("active")
     bg3.classList.remove("active")

     //remove customize chanes from local stot=rage
     window.location.reload();
})