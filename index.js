
const panels = document.querySelectorAll('.panel');

//console.log(panels);

panels.forEach( function (panel) {
panel.addEventListener('click' , ()=> {
  //console.log(121)
  panelClassRemove()
  panel.classList.add('active')
})
} )
// arrow function ()=> 
function panelClassRemove() {
  panels.forEach(  (panel)=> {
    panel.classList.remove('active')
  } )
}