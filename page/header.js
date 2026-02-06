import express from 'express';
const router = express.Router();
const getHeader = (req, res) => {
    res.send(`
         <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Node-only-website</title>
      <style>
      body{
      background:linear-gradient(to bottom,skyblue,blue,wheat);
      margin:0;
      }
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
       .headers{
       position:relative;
       width:100vw;
       height:auto;
       justify-self:center;
       top:90px;
       }
       .header{
       position:relative;
       width:160px;
       height:160px;
       justify-self:center;
       border-radius:60px 0 60px 0;
       background-color:wheat;
       top:50px;
        animation-name:header;
       animation-duration:8s;
       animation-delay:10s;
       animation-timing-function:300ms;
       animation-iteration-count:infinite;
       }
       @keyframes header{
       from{
       transform:rotate(0deg);
       color:purple;
    }
       to{ transform:rotate(360deg);
       background-color:transparent;
       color:yellow;
       }
       }
       .paza h2{
       position:relative;
       text-align:center;
       top:30px;
       overflow-wrap:break-word;
       }
       .head{
       position:relative;
       width:160px;
       height:160px;
       justify-self:center;
       border-radius:60px 0 60px 0;
       overflow-wrap:break-word;
       background-color:olive;
       top:50px;
       transform:translate(-50%);
        animation-name:head;
       animation-duration:15s;
       animation-delay:10s;
       animation-timing-function:300ms;
       animation-iteration-count:infinite;
       }
       @keyframes head{
       from{
       transform:rotate(0deg);
       color:indigo;
    }
       to{ transform:rotate(360deg);
       background-color:transparent;
       color:cyan;
       }
       }
       .head1 h2{
       position:relative;
       text-align:center;
       top:50px;
       }
       .head2{
       position:absolute;
       width:160px;
       height:160px;
       justify-self:center;
       border-radius:0 60px 0 60px;
       overflow-wrap:break-word;
       background-color:violet;
       bottom:945px;
       transform:translate(50%);
       animation-name:head2;
       animation-duration:10s;
       animation-delay:15s;
       animation-timing-function:300ms;
       animation-iteration-count:infinite;
       }
       @keyframes head2{
       from{
       transform:rotate(0deg);
       color:green;
    }
       to{ transform:rotate(360deg);
       background-color:transparent;
       color:violet;
       }
       }
       .head3 h2{
        position:relative;
       text-align:center;
       top:30px;
       }
       #header.card{
       position:relative;
       background-color:transparent;
       width:100vwh;
       height:auto;
       justify-self:center;
       }
       .card1{
       position:relative;
       background-color:white;
       width:80vw;
       height:auto;
       overflow-wrap:wrap;
       text-align:center;
       border-radius:20px;
       justify-self:center;
       border:2px solid rgba(221, 221, 224, 0.73);
       top:105px;
       }
       .card1 p{
       position:relative;
       font:20px medium;
       text-transform:capitalize;
       font-style:italic;
       text-align:center;
       }
       .card2{
       position:relative;
       background-color:white;
       width:80vw;
       height:auto;
       overflow-wrap:wrap;
       text-align:center;
       border-radius:20px;
       justify-self:center;
       border-left:2px solid #0316bdbb;
       border-right:2px solid cyan;
       top:100px;
       }
       .card2 p{
       position:relative;
       font:20px medium;
       text-transform:capitalize;
       font-style:italic;
       text-align:center;
       }
       .card3{
       position:relative;
       background-color:white;
       width:80vw;
       height:auto;
       overflow-wrap:wrap;
       text-align:center;
       border-radius:20px;
       justify-self:center;
       border:2px solid rgba(53, 1, 58, 0.73);
       top:100px;
       }
       .card3 p{
       position:relative;
       font:20px medium;
       text-transform:capitalize;
       font-style:italic;
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
        <section class="headers">
        <div class="header">
        <div class="paza">
        <h2>HTML5,CSS,JS,react+vite(front-end)</h2>
        </div>
        </div>
        <div class="head">
        <div class="head1">
        <h2>NODEjs,Mongodb(back-end)</h2>
        </div>
        </div>
        <div class="head2">
        <div class="head3">
        <h2>ReactNative,C++,C,PhP,C#</h2>
        </div>
        </div>
        <section class="card" id="header">
        <div class="card1">
        <h1>learning html5</h2>
        <p>when you learning html5 is very language that can help uou to know more things and make some website easy and how you can <br>
        make some web page and some form without internet and you can also make more things other can't know with more efficiently. if you are able <br>
        to be interest to our website you will see more things you didn't see or hear every where or other website.this only can you all things without paying <br>
        any amount of money.this free website to get every things with free.we hope to motivate you to be one of our clients and we hope to have you. <br>
        and also you can make some design other can't do because when you are touched this website you will know more things like how you can become <br>
        software developer and web development in the contest of designing like some panel on the streets and how can make some system ease.
        </p>
        </div>
        <div class="card2">
        <h2>learning CSS/CSS3</h2>
        <p>
        this is a language that will help you to decoration your html file and make a good visibilitty and good functioning with javascript. <br>
        so when you finish to write your html file wwill you use this language of CSS to styling your html file to looking goog in the front f user <br>
        this is only can help you in make simple website and simple web page or some form user can complete.so this is introduction of this website of <br>
        it working and how you can get learning code in the easy way without payting some amount of money.will upload all requirement for you inorder you <br>
        you full courses about those language.we encourage you to learning this language we need a good software developer in whole country across the world wide.
        </p>
        </div>
        <div class="card3">
        <h2>learning Javascript(js)</h2>
        <p>
        this is language ot javascript that will help you to make your some things you have been design to be functioning properly and this is only can all things <br>
        working in the website or in the system and other things like form or simple web page and some design.this is help some one to make a good visibility of thier product.<br>
        when you become a software developer,you must know this three(3) language.this is minimum for some one who have willingness to make some things that can change the future <br>
        and  also that can their society or community and some people are not have ability to make some things like how he/her getting some food.this website it will help you <br>
        according to your willingness you want to become.
        </p>
        </div>
        </section>
        </section>
</body>
    </html>
    `);
};
router.get('/header', getHeader);
export default getHeader;