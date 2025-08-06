console.log("Script loaded trying!");

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

    // add color
    colorElement.style.backgroundColor= color

    // add the color element to the color container
    colorsContainer.appendChild(colorElement)
    


}

// add the array colors to the container
colors.forEach(color =>{
    addColor(color.color)
})

// custom add colors
document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('user-color');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', () => { 
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
shapediv.classList.add('shape',figures[i].figure)
figuresContainer.appendChild(shapediv)
}






