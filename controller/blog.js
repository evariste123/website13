import express from 'express';
const getBlog = (req, res) => {
   res.send(`
       <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Node-only-website</title>
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
      <style>
       .quick{
       position:fixed;
       width:100vw;
       justify-self:center;
       background-color:skyblue;
       padding:10px;
       justify-items:end;
       top:0px;
       overflow:break-words;
       }
       .logo{
       position:relative;
       justify-self:left;
       margin-left:10px;
       text-align:center;
       bottom:20px;
       }
       .logo span{
       position:relative;
       color:green;
       text-transform:capitalize;
       }
       .social{
       display:flex;
       gap:15px;
       flex-wrap:wrap;
       }
       .social a{
       position:relative;
       cursor:pointer;
       margin-right:10px;
       overflow:break-words;
       margin-right:20px;
       font:20px bold;
       text-decoration:none;
       color:white;
       bottom:50px;
       flex-wrap:wrap;
       }
       .social a:hover{
       position:relative;
       transition:all ease 0.3s;
       color:purple;
       }
       body{
       position:relative;
       background-color:skyblue;
       }
       .plot{
       position:relative;
       background:linear-gradient(to bottom,white,skyblue,cyan);
       bottom:100px;
       justify-self:center;
       width:80vw; 
       height:70vh;
       border:2px solid #390249cc;
       border-radius:20px;
       }
       .card{
       top:50px;
       position:relative;
       margin-right:10px;
       width:50vw;
       height:60vh;
       justify-self:right;
       flex-wrap:wrap;
       }
       .footer{
       position:relative;
       width:100vw;
       height:auto;
       background-color:#000;
       top:100px;
       justify-self:center;
       text-align:center;
       color:white;
       }
       .item{
       flex-wrap:wrap;
       gap:20px;
       }
       .item a{
       position:relative;
       text-align:center;
       color:white;
       text-decoration:none;
       font-size:20px;
       text-transform:capitalize;
       font-weight:600;
       font-style:italic;
       }
       .item a:hover{
       position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       color:violet;
       }
       .social-links{
       flex-wrap:wrap;
       gap:5px;
       }
       .social-links a{
       position:relative;
       text-align:center;
       color:white;
       text-decoration:none;
       font-size:20px;
       text-transform:capitalize;
       font-weight:600;
       font-style:italic;
       bottom:10px;
       }
       .social-links a:hover{
        position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       color:violet;
       }

       .google{
       position:relative;
       justify-self:center;
       margin-right:10px;
       width:90vw;
       height:auto;
       bottom:0px;
       text-align:center;
       color:wheat;
       text-transform:capitalize;
       text-decoration:underline;
       }
     @media (max-width: 600px) {
  .google iframe {
   top:0px;
  }
}
  .google iframe{
  position:relative;
  border-radius:20px;
  }
.foot{
position:relative;
bottom:0px;
font-size:20px
justify-self:center;
overflow-wrap:wrap;
}
.google input{
position:relative;
width:30vw;
height:7vh;
border:1px solid white;
background-color:transparent;
color:white;
font-size:20px;
border-radius:10px;
}
.google input::placeholder{
color:white;
font:bold;
font-weight:500;
}
.google input:hover{
position:relative;
border:1px solid hsla(240, 2%, 36%, 1.00);
border-radius:5px;
cursor:pointer;
}
.google button{
position:relative;
width:20vw;
height:7vh;
border:none;
border-radius:20px;
background-color:olive;
color:white;
font-size:20px;
font-weight:500;
font:bold;
cursor:pointer;
}
.google button:hover{
position:relative;
color:black;
background:linear-gradient(to top,skyblue,cyan);
border:none;
cursor:pointer;
border-radius:0px;
}
.container{
position:relative;
width:100vw;
height:80vh;
justify-self:center;
background:transparent;
color:black;
top:105px;
}
.container h2{
text-align:center;
position:relative;
top:30px;
overflow-wrap:wrap;
font-weight:500;
font-size:20px;
font-style:italic;
}
.conta{
position:absolute;
width:100vw;
justify-self:center;
top:195px;
height:50vh;
text-align:center;
border-radius:50%  50% 0 0;
background-color: skyblue; 
border-top:3px solid purple;
}
.conta1{
position:absolute;
width:100vw;
justify-self:center;
top:100px;
text-align:center;
height:50vh;
border-radius:500px 500px 0 0;
background-color: lightblue;
border-left:3px solid blue;
border-right:3px solid yellow;
animation-name:conta1;
animation-timing-function:300ms;
animation-delay:10s;
animation-iteration-count:infinite;
animation-duration:3s;
}
@keyframes conta1{
from{
background-color:transparent;
color:blue;
transition:all ease;

}
to{
background-color:#000;;
color:blue;
}
}
.conta1 button{
position:relative;
width:20vw;
height:10vh;
overflow-wrap:wrap;
font-weight:900;
font-style:italic;
cursor:pointer;
border:1px solid white;
background-color:#000;
color:white;
border-radius:10px;
justify-self:center;
top:5px;
}
.conta1 button:hover{
position:relative;
transition:all ease 0.3s;
cursor:pointer;
color:white;
background:linear-gradient(to right,skyblue,indigo);
border-radius:0px;
border:1px solid black;
}
.button1{
position:relative;
justify-selft:left;
margin-left:20px;
top:25px;
}
.button1 button{
position:realtive;
width:120px;
height:120px;
font-size:20px;
overflow-wrap:wrap;
border-radius:60px;
background-color:darkblue;
color:white;
border:none;
}
.button1 button:hover{
position:relative;
background-color:darkorange;
color:black;
cursor:pointer;
}
.button2{
position:absolute;
justify-self:center;
top:990px;
}
.button2 button{
position:realtive;
width:120px;
height:120px;
overflow-wrap:wrap;
border-radius:60px;
font-size:20px;
background-color:darkorange;
color:white;
border:none;
}
.button2 button:hover{
position:relative;
background-color:darkcyan;
color:black;
cursor:pointer;
}
@media (max-width:600px){
.button2{
position:relative
gap:20px;
top:40%;
}
}
.button3{
position:absolute;
justify-self:right;
margin-right:20px;
top:990px;
}
@media (max-width:600px){
.button3 {
position:relative
gap:20px;
top:45%;
}
}
.button3 button{
position:realtive;
width:120px;
height:120px;
overflow-wrap:wrap;
font-size:20px;
border-radius:60px;
background-color:darkcyan;
color:white;
border:none;
}
.button3 button:hover{
position:relative;
background-color:gold;
color:black;
cursor:pointer;
}
            </style>
      </head>
      <body>
     <div class="quick">
     <div class="logo"><h2>Nodejs <span>website</span></h2></div>
        <div class="social">
         <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/product">product</a>
        <a href="/service">service</a>
       <a href="/blog">blog</a>
       <a href="/header">lesson</a>
        <a href="/register">register</a>
         <a href="/login">login</a>
        <a href="/join">join</a>
        <a href="/search">search</a>
        </div>
        </div>
      <section class="container">
      <div class="card1">
     <h2>welcome to my blog website eva-codes</h2>
      </div>
      <div class="conta1">
     <a href=""><button type="button"> Explorer your business</button></a>
      </div>
      <div class="conta">
      </div>
      </section>
      <section class="plot">
         <div class="card" id="myPlot"></div>
</section>
<section class="conta2">
<div class="button1">
<a href=""><button type="button">Home business</button></a>
</div>
<div class="button2">
<a href=""><button type="button">Roaming</button></a>
</div>
<div class="button3">
<a href=""><button type="button">Help?</button></a>
</div>
</section>
<section class="footer">

  <h1>quick-links &equiv;</h1>
      <div class="item">
        <a href="/home">home-</a>
    <a href="/contact">contact-</a>
      <a href="/about">about-</a>
      <a href="/service">services-</a>
      <a href="/header">lesson-</a>
      <a href="/product">product-</a>
      <a href="/blog">blog-</a>
      <a href="/login">login-</a>
      <a href="/join">join-</a>
      <a href="/register">register-</a>
      <a href="/search">search</a>
      </div>
   <hr>
      <div class="social-links">
        <h1>social-media links &hookleftarrow;</h1>
        <a href="https://www.youtube.com/@evaristebapfekurera5995">you tube</a>-
        <a href="https://www.facebook.com/evariste.arrogent.ever">facebook</a>-
        <a href="https://www.linkedin.com/in/evariste-bapfekurera-a3700b2b0/">linkedin</a>-
        <a href="https://x.com/EBapfekure3">twitter</a>-
        <a href="https://www.instagram.com/evari_ste2025/?hl=en">instagram</a>
      </div>
      
        <div class="google">
        <h2>our location from google map & contact us:!</h2>
        <h4>contact us:</h4>
        <form action="/myForm" id="myForm">
        <input type="text" name="fname" id="Fname" required placeholder="Your full name">
        <br><br>
        <input type="text" name="Email" id="Email" placeholder="your Email" required>
        <br><br>
        <input type="password" name="Password" id="Password" required placeholder="Your password">
        <br><br>
        <textarea id="Comments" name="comments"  style="width:30vw;height:15vh;position:relative;border:1px solid white;color:white;background-color:transparent;border-radius:10px;">
  Enter text here...
</textarea>
        <br><br>
        <button type="submit">send</button>
        <button type="reset">reset</button>
        </form>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353159043!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f0c3f5%3A0xb6899234a5a6e7f8!2sSome%20Place!5e0!3m2!1sen!2sus!4v1700000000000"
  width="100%"
  height="450"
  style="border:none;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade;">
</iframe>

      </div>
      <div class="foot">
        <p>
          &copysr;all right are reserved by Eva-Codes 2025
        </p>
        </div>
</section>
    <script>
        const x = ["Burundi(GDP%)","Kenya(GDP%)","Rwanda(GDP%)","Tanzania(GDP%)","Congo(GDP%)","Uganda(GDP%)","Soudan(GDP%)"];
        const y = [50,70,60,75,80,55,40];
        const data =[{
            x:x,
            y:y,
            type:"bar",
            arientation:"v",
            marker:{color:"green"}
        }];
       const layout = {title:"Eastern Africa Community (EAC) production(GDP) according to Percentges"};
        Plotly.newPlot("myPlot",data,layout);

        window.addEventListener('resize', () => {
  Plotly.Plots.resize('myPlot');
});
</script>
<script>
  const myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const Fname = document.getElementById("Fname").value;
    const Email = document.getElementById("Email").value;
    const Password = document.getElementById("Password").value;
    const Comments = document.getElementById("Comments").value;

    console.log("My first name:", Fname);
    console.log("My Email:", Email);
    console.log("My Password:", Password);
    console.log("My Comments:", Comments);

    alert("Your message has been sent!");
  });
  myForm.reset();
{
  alert("you're welcome to my blog 2026!");
  }
</script>

      </body>
      </html>
      `);
};
    
 export default getBlog;