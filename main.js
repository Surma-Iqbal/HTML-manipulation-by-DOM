      //1.change the tag by button click

      /*function toggleText(){
      const text = document.getElementById("toggle");
      text.textContent="Hello"
     }*/


     //2.From ON to OFF and OFF to ON

     /*function toggleText(){
      const text = document.querySelector("#toggle");
      text.textContent=text.textContent==="ON"?"OFF":"ON";
     }*/
     

     //3.From ON to OFF and OFF to ON if more than one class

       /*function toggleText(){
      const text = document.querySelectorAll("#toggle");
      text[0].textContent=text[0].textContent==="ON"?"OFF":"ON";
      text[1].textContent=text[1].textContent==="ON"?"OFF":"ON";
      text[2].textContent=text[2].textContent==="ON"?"OFF":"ON";
     */

      //4.how to see Input value through DOM

       /*function login(event){
       event.preventDefault();
       const username=document.querySelector("#username").value;
       const password=document.querySelector("#password").value;
       const message=document.querySelector("#message");
       message.textContent=username;
       const pass=document.querySelector("#pass");
       pass.textContent=password;
       }*/

        //5.welcome message addressing name given in Input value through DOM
      
        /*function login(event){
         event.preventDefault();
         const username=document.querySelector("#username").value;
         const password=document.querySelector("#password").value;
         const res=document.querySelector("#loginMessage");
         res.textContent=`Welcome ${username} !`
         }*/

        //6.summation of two number

          /*function add(){
          const num1=document.querySelector("#num1").value;
          const num2=document.querySelector("#num2").value;
          const sum=parseFloat(num1)+parseFloat(num2);
          const res=document.querySelector("#ans");
          res.textContent= sum
         }*/

        //7.counter App(increment-decrement)
       
         /*let count=0;
         function add(){
         count++;
         const result=document.querySelector("#ans");
         result.textContent=count; 
         }
         function sub(){
         count--;
         const result=document.querySelector("#ans");
         result.textContent=count; 
         }*/
       
       //8.list using button

          /*let count=0;
        function addNumber(){
        const parent=document.querySelector(".parent");
        count++;
        const listItem=document.createElement("li");
        listItem.textContent=count;
        parent.appendChild(listItem);
        }*/

       //9.bulb ON/OFF or change the picture

       /*function toggle(){
        const bulb=document.querySelector("#bulb");
        bulb.src=bulb.src.includes("anime.jpeg")?"dragon.jpeg":"anime.jpeg";
       }*/