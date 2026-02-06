import express from 'express';
const getLogin = (req, res) => {
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

       #login.login{
       position:relative;
       width:100vw;
       justify-self:center;
       top:100px;
       height:95vh;
       background:linear-gradient(to bottom,skyblue,cyan,indigo);
       }
       .login h3{
       position:relative;
       text-align:center;
       color:white;
       text-transform:capitalize;
       font:20px bold;
       overflow:break-words;
       top:20px;
       }
       .log{
       position:relative;
       text-align:center;
       width:60vw;
       height:50vh;
       background-color:white;
       border:3px solid hsla(193, 36%, 95%, 1.00);
       border-radius:35px;
       justify-self:center;
       top:100px;
       }
       .log input{
       position:relative;
       width:35vw;
       height:8vh;
       top:50px;
       }
       .log input::placeholder{
       position:relative;
       font:20px bold;
       font-weight:500;
       font-style:italic;
       color:black;
       }
       .log input:hover{
       position:relative;
       transiton:all ease 0.3s;
       border:1px solid #2020bc;
       border-radius:10px;
       cursor:pointer;
       }

       .log button{
       position:relative;
       width:17vw;
       height:7vh;
       border:none;
       background-color:cyan;
       font:20px medium;
       top:60px;
       cursor:pointer;
       border-radius:10px;
       overflow-wrap:break-word;
       }
       .log button:hover{
       position:relative;
       transition:all ease 0.3s;
       color:blue;
       background:linear-gradient(to bottom,cyan,skyblue,indigo)
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
        <form action="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
        <div class="login" id="login">
        <h3>join us here! your data will be safe with us!</h3>
        <div class="log">
        <input type="text" id="email" placeholder="enter your email" required>
        <br><br>
        <input type="password" id="password" placeholder="enter your password" required>
        <br><br>
        <button type="submit">submit</button>
        <button type="reset">reset</button>
        </div>
        </div>
        </form>
      </body>
      </html>
      `);
};
    
 export default getLogin;