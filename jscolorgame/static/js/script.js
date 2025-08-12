console.log( "Script loaded" );


// let's add colors to the palette

let colors = [
    {color:'red',name:'red'},
    {color:'green',name:'green'},
    {color:'#8F00FF',name:'violet'},
    {color:'blue',name:'blue'},
    {color:'burlywood',name:'burlywood'},
    {color:'#18dcf2',name:'lightblue'},
    {color:'#05fa1d',name:'lightgreen'},
    {color:'#fa2c02',name:'orange'},
    {color:'black',name:'black'},
    {color:'brown',name:'brown'},
    {color:'yellow',name:'yellow'},
    {color:'#ffff',name:'white'},
]

// ------------------ color functionality -----------------------------------
// hoveroncolor function
const hoverOnColors = ()=>{
    const allColors= document.querySelectorAll('.colors')
    allColors.forEach(color => {
    color.addEventListener('mouseover', () => {
        color.style.cursor = "pointer";
    });
});
}

// addcolor function
const addColor = (color)=>{
    if (!color) {
        console.warn('No color provided.');
        console.alert('No color provided')
        return;
    }
    // get the colors container
    const colorsContainer= document.querySelector('.colors-container')

    // create the color element and shape it with the .colors class
    const colorElement= document.createElement('div');
    colorElement.classList.add('colors')
    colorElement.setAttribute("draggable",'true')

    // add color
    colorElement.style.backgroundColor= color

    // add the color element to the color container
    colorsContainer.appendChild(colorElement)
    // add hover effect
    hoverOnColors()
    


}

// add the array colors to the container
colors.forEach(color =>{
    addColor(color.color)
})

// custom add colors
document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('user-color');
    const addButton = document.getElementById('submit');

    addButton.addEventListener('click', () => { 
        const selectedColor = colorInput.value;
        // add user color
        addColor(selectedColor);
    });
});

// remove colors
document.addEventListener('DOMContentLoaded', () => {
    const removeButton = document.getElementById('remove');
    // remove the last element of the colors container
    removeButton.addEventListener('click', () => { 
    const colorsContainer= document.querySelector('.colors-container')
    const lastchild= colorsContainer.lastElementChild
    colorsContainer.removeChild(lastchild)

    });
});

// reset to original colors
document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('reset');
    // reset colors
    resetButton.addEventListener('click', () => { 
    const colorsContainer= document.querySelector('.colors-container')
    colorsContainer.replaceChildren()
    colors.forEach(color =>{
    addColor(color.color)
})

    });
});

// hover effects on buttons
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('submit');
    const removeButton = document.getElementById('remove');
    const resetButton = document.getElementById('reset');
    const colorInput = document.getElementById('user-color');

    // clean button
    cleanButton.addEventListener("mouseover",()=>{
    cleanButton.style.cursor= "pointer"
    })
    // add, remove, reset buttons
    addButton.addEventListener("mouseover",()=>{
        addButton.style.cursor= "pointer"
    })
    removeButton.addEventListener("mouseover",()=>{
        removeButton.style.cursor= "pointer"
    })
    resetButton.addEventListener("mouseover",()=>{
        resetButton.style.cursor= "pointer"
    })
    // color input
    colorInput.addEventListener("mouseover",()=>{
        colorInput.style.cursor= "pointer"
    })

});

// -----------------------------figures functionality------------------------------

// define shapes
let figures = [
    {figure:'square'},
    {figure:'triangle'},
    {figure:'circle'},
    {figure:'oval'},
    {figure:'rectangle'},
    {figure:'pentagon'},
    {figure:'hexagon'},
    {figure:'heptagon'},
    {figure:'octagon'},
    {figure:'star'},
    {figure:'trapezoid'},
    {figure:'parallelogram'},
    {figure:'rhombus'},
    {figure:'arrow'},
    {figure:'irregular1'},
    {figure:'irregular2'},
    {figure:'irregular3'},
    {figure:'irregular4'},
    {figure:'irregular5'},
    {figure:'irregular6'},



]

// add shapes
for (let i = 0; i < figures.length; i++) {
const figuresContainer= document.querySelector('.figures-container')
const shapediv= document.createElement('div')
shapediv.classList.add('shape',figures[i].figure,'child')
shapediv.setAttribute("draggable","true")
figuresContainer.appendChild(shapediv)
}

// hover effect on the figures
const allFigures= document.querySelectorAll('.child')

allFigures.forEach(fig => {
    fig.addEventListener('mouseover', () => {
        fig.style.cursor="pointer"
        fig.style.transform = 'scale(1.1)';
        fig.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    });

    fig.addEventListener('mouseout', () => {
        fig.style.transform = 'scale(1)';
        fig.style.boxShadow = 'none';
    });
});



// ------------------------------- drag and drop events -----------------------
const board= document.querySelector('.board')
const colorContainer= document.querySelector('.colors-container')
const figureContainer= document.querySelector('.figures-container')

// clean board
const cleanButton = document.getElementById('cleanbtn')
cleanButton.addEventListener("click",()=>{
    while (board.firstChild) {
    board.removeChild(board.firstChild);
}
})


// drag figures to the board
figureContainer.addEventListener("dragstart",(event)=>{
    event.dataTransfer.setData("classname",event.target.className)
    console.log("target:",event.target.className)

})

// drag colors to the board
colorContainer.addEventListener("dragstart",(event)=>{
    event.dataTransfer.setData("color",event.target.style.backgroundColor)
    console.log("target:",event.target.style.backgroundColor)

})

// drop zone
board.addEventListener("dragover",(event)=>{
    event.preventDefault()
})
board.addEventListener("drop",(event)=>{
    if (event.dataTransfer.getData("color")){
        const color= event.dataTransfer.getData("color")
        //verify if the target has ::after styles
        const afterStyle = window.getComputedStyle(event.target, "::after");
        if (afterStyle.content !== "none"){
            event.target.style.setProperty("--after-bg", color);
        }else{
        event.target.style.backgroundColor=color
        }
    }

    if (event.dataTransfer.getData("classname")){
        const classes= event.dataTransfer.getData("classname").split(' ')
        drawOnBoard(classes[0],classes[1])
        
    }
    
    
})

// add figure from a click
figureContainer.addEventListener("click",(event)=>{
    const classes= event.target.className.split(' ')
    drawOnBoard(classes[0],classes[1])

})

// draw function
const drawOnBoard = (class1,class2)=>{
    const divshape= document.createElement('div')
    divshape.classList.add(class1,class2)
    const board= document.querySelector('.board')
    board.appendChild(divshape)

}


// Language modal. Yes, All from javascript
const modalOverlay= document.querySelector('.modal-overlay')
const modal = document.createElement('div')
const h2 = document.createElement('h2')
const ENButton = document.createElement('button')
const ESButton = document.createElement('button')
ENButton.classList.add('en')
ESButton.classList.add('es')

// html content
h2.innerHTML="In what language do you want to view the page?"
ENButton.innerHTML="English"
ESButton.innerHTML="Spanish"
// modal styles
modal.style.background= "#fff"
modal.style.margin= "30px"
modal.style.padding= "30px"
modal.style.textAlign="center"
h2.style.textAlign="center"
// buttons styles
ENButton.style.padding= "9px 20px"
ESButton.style.padding= "9px 20px"
ENButton.style.margin= "15px"
ESButton.style.margin= "15px"
ENButton.style.border= "none"
ESButton.style.border= "none"
ENButton.style.background= "#ddd"
ESButton.style.background= "#ddd"

// All together
modal.appendChild(h2)
modal.appendChild(ENButton)
modal.appendChild(ESButton)
modalOverlay.appendChild(modal)

// hover
ENButton.addEventListener("mouseover",()=>{
    ENButton.style.cursor="pointer"
    ENButton.style.background="#0af548"
})
ESButton.addEventListener("mouseover",()=>{
    ESButton.style.cursor="pointer"
    ESButton.style.background="#0af548"
})

ENButton.addEventListener("mouseleave",()=>{
    ENButton.style.background="#ddd"
})
ESButton.addEventListener("mouseleave",()=>{
    ESButton.style.background="#ddd"
})

//animation
document.addEventListener('DOMContentLoaded',()=>{
    modalOverlay.style.height= "155vh"
    modalOverlay.style.width="100%"
    modalOverlay.style.position="absolute"
    modalOverlay.style.boxSizing="border-box"
    modalOverlay.style.opacity="0"
    modalOverlay.style.background="rgba(0, 0, 0, 0.7)"
    modalOverlay.style.animation="show 1s forwards"

})


// define language
const setLanguage = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("language","en")
        closeModal()
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("language","es")
        closeModal()
    })

}

// close modal
const closeModal = ()=>{
    modalOverlay.style.animation= 'vanish 1s forwards'
    setTimeout(()=>modalOverlay.style.display='none',1000)
}

const language = localStorage.getItem('language')

if (!language){ 
    setLanguage()
}else {
    console.log(`language: ${language}`)
    modalOverlay.style.display= "none"
}

// ----page in Spanish ----

// when selecting Spanish

document.querySelector(".es").addEventListener("click",()=>{
    welcomeTitle= document.querySelector('.welcome')
    welcomeTitle.innerHTML="Bienvenido. Diviértete coloreando figuras."
    instructions= document.querySelector('.instructions')
    instructions.children[0].innerHTML="instrucciones"
    instructions.children[1].innerHTML="Añade figuras al tablero arrastrándolas o haciendo clic en ellas. Luego, arrastra y suelta un color sobre la figura deseada para colorearla. También puedes cambiar el color del tablero y ver el efecto."

    addUserColors= document.querySelector('.add-user-color')
    addUserColors.children[0].innerHTML="Agrega otro color"
    addUserColors.children[2].setAttribute("value","agregar")
    addUserColors.children[3].setAttribute("value","eliminar")
    addUserColors.children[4].setAttribute("value","restablecer")

    cleanbtn= document.getElementById('cleanbtn')
    cleanbtn.innerHTML="vaciar tablero"

    figureLeyend=document.querySelector('.figure-leyend')
    figureLeyend.children[0].innerHTML="Figuras"
    figureLeyend.children[1].innerHTML="Elige la figura que quieras"

})

// when the page is reloaded
if(language=="es"){
    welcomeTitle= document.querySelector('.welcome')
    welcomeTitle.innerHTML="Bienvenido. Diviértete coloreando figuras."

    instructions= document.querySelector('.instructions')
    instructions.children[0].innerHTML="instrucciones"
    instructions.children[1].innerHTML="Añade figuras al tablero arrastrándolas o haciendo clic en ellas. Luego, arrastra y suelta un color sobre la figura deseada para colorearla. También puedes cambiar el color del tablero y ver el efecto."

    addUserColors= document.querySelector('.add-user-color')
    addUserColors.children[0].innerHTML="Agrega otro color"
    addUserColors.children[2].setAttribute("value","agregar")
    addUserColors.children[3].setAttribute("value","eliminar")
    addUserColors.children[4].setAttribute("value","restablecer")

    cleanbtn= document.getElementById('cleanbtn')
    cleanbtn.innerHTML="vaciar tablero"

    figureLeyend=document.querySelector('.figure-leyend')
    figureLeyend.children[0].innerHTML="Figuras"
    figureLeyend.children[1].innerHTML="Elige la figura que quieras"

} 


