// DOM Selector


let color_btns = document.querySelectorAll('.color-container .color')
let shoes_img_box = document.querySelectorAll('.img-box');


// Change on Color Btns

Array.from(color_btns).map(btn => {
  btn.addEventListener('click', e => {
    removeActiveColor()
    changeShoes(e.target.classList[e.target.classList.length - 1])
    e.target.classList.add('active-color')
  })
})


// Change Shoes

function changeShoes(colorName){
  Array.from(shoes_img_box).forEach(shoe => {
   if(shoe.id === colorName){
      removeActiveImage()
      shoe.classList.add("active-img")
   }
  })
}

// Remove Active Color

function removeActiveColor(){
  color_btns.forEach(btn => {
    btn.classList.remove('active-color')
  })
}


// Remove Active image

function removeActiveImage(){
  shoes_img_box.forEach(shoe => {
    shoe.classList.remove('active-img')
  })
}