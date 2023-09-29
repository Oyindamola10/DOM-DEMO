let productImg = document.getElementById('productImg');
let changeBtn1 = document.getElementById('changeImg1');
let changeBtn2 = document.getElementById('changeImg2');
let changeBtn3 = document.getElementById('changeImg3');
let changeBtn4 = document.getElementById('changeImg4');
let changeBtn5 = document.getElementById('changeImg5');
let changeBtn6 = document.getElementById('changeImg6');
let changeBtn7 = document.getElementById('changeImg7');


function changeImg(imgUrl){
    productImg.src = imgUrl;                                                                               
                                                                                
}

//changeBtn.addEventListener("click", changeImage)
changeBtn1.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/1.jpg?0873")
changeBtn2.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/2.jpg?1912")
changeBtn3.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/3.jpg?1912")
changeBtn4.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/4.jpg?4892")
changeBtn5.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/5.jpg?4892")
changeBtn6.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/6.jpg?4892")
changeBtn7.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/384028/7.jpg?4892")
