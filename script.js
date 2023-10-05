let perm=document.getElementById('Colour');

perm.addEventListener('click',function(){
   let Colour= prompt("Enter prefarable colour");

   let element=document.getElementById('box');
   element.style.background=Colour;
});

let shapec=document.getElementById('Shape');

shapec.addEventListener('click',function(){
   let element=document.getElementById('box');
   element.style.borderRadius="50%";

   console.log(shapec)
})