import express from 'express';
const getRearch = (req,res)=>{
    res.send(`
         <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Node-only-website</title>
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
       font:20px bold;
       text-decoration:none;
       color:white;
       bottom:20px;
       flex-wrap:wrap;
       }
       .social a:hover{
       position:relative;
       transition:all ease 0.3s;
       color:purple;
       }
       body{
       background:linear-gradient(to bottom,cyan,white,skyblue);
       }
       .search{
       position:relative;
       width:100vw;
       height:90vh;
       justify-self:center;
       top:100px;
       }
       .card h2{
       position:relative;
       text-align:center;
       top:50px;
       text-decoration:underline;
       }
       .card p{
       position:relative;
       top:50px;
       text-align:center;
       font-size:20px;
       font-weight:500;
       }
       .card1{
       position:relative;
       justify-self:center;
       top:150px;
       }
       .card1 button{
       position:relative;
       width:30vw;
       height:20vh;
       margin-left:20px;
       flex-wrap:wrap;
       overflow-wrap:break-word;
       border-radius:20px;
       border:1px solid purple;
       border-left:5px solid #011f1fff;
       cursor:pointer;
       font-weight:900;
       color:wheat;
       font-style:italic;
       background:linear-gradient(to top,indigo,white);
       }
       .card1 button:hover{
       position:relative;
       transition:all ease 0.3s;
       color:blue;
       background:linear-gradient(to bottom,cyan,skyblue,indigo);
       border:2px solid black;
       transform:translate(2px);
       }
       .footer{
       position:relative;
       width:100vw;
       height:30vh;
       background-color:black;
       color:white;
       justify-self:center;
       text-align:center;
       top:10px;
       }
       .footer h2{
       position:relative;
       overflow-wrap:break-word;
       top:30px;
       }
       .form{
       position:relative;
       top:20px;
       text-align:center;
       }
       .form input{
       position:relative;
       width:30vw;
       color:white;
       height:6vh;
       background-color:#000;
       border:1px solid white;
       border-radius:10px;
       }
       .form input:hover{
       position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       border:1px solid cyan;
       font-style:italic;
       }
       .form button{
       position:relative;
       width:12vw;
       height:6vh;
       border-radius:5px ;
       margin-left:5px;
       border:1px solid #ddff;
       color:white;
       background-color:cyan;
       color:#000;
       cursor:pointer;
       flex-wrap:wrap;
       font-size:medium;
       }
       .form button:hover{
       position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       color:black;
       background-color:olive;
       border:1px solid transparent;
       }
       .foot{
       position:relative;
       top:20px;
       text-align:center;
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
        <section class="search">
        <div class="card">
        <h2>SearchDeepAI 2026 new model.</h2>
        <p>here we build your project and you have all things you need to know that are related to coding and <br>
        how you can build your product in the easy way with to our SearchDeepAI new version 2026 model. 
        </p>
        <p>every things Unkknown!
        </div>
        <div class="card1">
        <a href="https://evariste123.github.io/website12/index10.html">
        <button class="button">
        <h3>
        Search with SD(AI)
        </h3>
        </button>
        </a>
        <a href="https://evariste123.github.io/my-API/">
        <button class="button">
        <h3>Access to our API and enjoy every things</h3>
        </button>
        </a>
        </div>
        </section>
        <section class="footer">
        <h2>welcome to SearchDeepAI 2026 new Models</h2>
        <div class="form">
        <h3>stay update with us to get all!</h3>
        <form action="" id="myForm">
        <input type="text" id="Email" required placeholder="Your Email..."><button type="submit">send</button>
        </form>
        </div>
        <div class="foot">
         <p>
          &copysr;all right are reserved by Eva-Codes 2025
        </p>
        </div>
        </section>
        <script>
        let myForm = document.getElementById("myForm");

        myForm.addEventListener('submit',(e)=>{
          e.preventDefault(e);

          const Email = document.getElementById("Email").value;

          console.log("my Email:" ,Email);
          {
          alert("fetching data....");
          return;
          }
          myForm.reset();
          });
        </script>
      </body>
      </html>
        `);    
};
export default getRearch;