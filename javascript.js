const myImage=document.getElementById("myImage");
let images=[
    "B  (1).jpg",
 "B (4).jpg",
 "B (5).jpg",
 "B (6).jpg"];
let i=0;
function nextImage() {
    i ++;
    if (i>= images.length) {
        i=0;
    }
    myImage.src=images[i]
  
}
function prevImage() {
    i --;
    if (i<0) {
        i=images.length -1;
    }
    myImage.src=images[i];
   
}