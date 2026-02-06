import express from 'express';
const getService = (req, res) => {
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
       background-image:url({page/download.jpeg});
       }
       #service.container{
       background:linear-gradient(to bottom,white,skyblue);
       width:90vw;
       height:auto;
       justify-self:center;
       position:relative;
       border-radius:20px;
       top:130px;
       }
       .container h1{
       position:relative;
       text-align:center;
       top:10px;
       overflow-wrap:break-word;
       }
       .card{
       position:relative;
       width:70vw;
       height:auto;
       justify-self:center;
       text-align:center;
       background:linear-gradient(to right,wheat,skyblue);
       border-radius:20px;
       }
       .card p{
       position:relative;
       top:10px;
       font-size:medium;
       overflow-wrap:break-word;
       }
       .card a{
       position:relative;
       overflow-wrap:break-word;
       text-decoration:none;
       color:rose;
       }
       #buttona.button{
       position:relative;
       justify-self:center;
       text-align:center;
       }
       .button button{
       position:relative;
       width:20vw;
       height:7vh;
       font-size:medium;
       font-weight:500;
       border-radius:10px;
       border:1px solid hsla(306, 96%, 9%, 1.00);
       margin-left:10px;
       overflow-wrap:break-word;
       background-color:#aff;
       cursor:pointer;
       color:black;
       }
       .button button:hover{
       position:relative;
       transition:all ease-in 0.3s;
       color:white;
       background-color:#000;
       cursor:pointer;
       border-radius:none;
       border:1px solid #acff;
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
         <section class="container" id="service">
      <h1>explore your business through web finance. this image show us <br>
      the all steps how we can make to explore your business</h1>
      <div class="card">
        <p>
          here we explore your business and make it more different of your products and make <br>
          covering all details need for our clients and others that like our products or strategies <br>
          for give services and how we work for oour clients for getting more and clearly products and also <br>
          we make advertising your products and how when you have konwing about how we can make to edxplore your <br>
          business and how we can build your business growth through technologies with our website Eva-Codes. this is <br>
          only website that make things in the proper way. so when you come to close us, immediately we give you free 2GB <br>
          and getting our free products like downloading our apps and other things that interested to you. 
        </p>
        <h3>
          here you can find us via https://www.Eva-Codes.com we will touch you.and we hope every things it will be update every <br>
          time and be patients for any unexpected issue that will happen.let's make new world through Eva-code and to creatye our <br>
          future that will haven't some complaints and no povert.it's means to work together it is the way to make more and more <br>
          poducts that will be store a long-period of time even short-time products in our website and also we make some things <br>
          that are not exits in our currents time we are in. if you need to give us some advice you may click <a href="/home">here</a> <br>
          and go below to the last page of this website. thanks for your concerned to touch to our website.now you are one of our member.
        </h3>
      </div>
      <div class="button" id="buttona">
        <a href=""><button type="button" id="apply">&DownArrowBar; Apply Now</button></a>
        <a href=""><button type="button" id="ready">&RuleDelayed; get ready</button></a>
      </div>
    </section>
      </body>
      </html>
      `);
};
    
    export default getService;