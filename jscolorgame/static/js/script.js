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

colors.forEach(color =>{
    addColor(color.color)
})

// custom add colors
document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('user-color');
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        const selectedColor = colorInput.value;
        console.log("Selected custom color:", selectedColor);
        // add user color
        addColor(selectedColor);
    });
});




