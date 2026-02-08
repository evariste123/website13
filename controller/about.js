import express from 'express';
const router = express.Router();
const getAbout = (req, res) => {
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
       bottom:10px;
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
       bottom:40px;
       flex-wrap:wrap;
       }
       .social a:hover{
       position:relative;
       transition:all ease 0.3s;
       color:purple;
       }
       #About.container{
       position:relative;
       width:100vw;
       height:80vh;
       justify-self:center;
       background:linear-gradient(to top,skyblue,white);
       top:100px;
       }
       .hero-text{
       position:relative;
       width:80vw;
       top:50px;
       height:50vh;
       border-radius:20px;
       justify-self:center;
       text-align:center;
       overflow-wrap:break-word;
       background:linear-gradient(to bottom,white,skyblue);
       }
       .hero-text h1{
       position:relative;
       overflow-wrap:break-word;
       top:30px;
       }
       .hero-text p{
       position:relative;
       overflow-wrap:break-word;
       top:50px;
       font-size:20px;
       }
       .hero-btns{
       position:relative;
       top:100px;
       text-align:center;
       justify-self:center;
       }
       .hero-btns button{
       width:20vw;
       height:7vh;
       position:relative;
       margin-left:10px;
       border:none;
       border-radius:10px;
       font-weight:900;
       overflow-wrap:break-word;
       cursor:pointer;
       }
       .hero-btns button:hover{
       position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       color:blue;
       background-color:wheat;
       border:2px solid #19011fff;
       }
       .footer{
       position:relative;
       width:100vw;
       height:auto;
       background-color:#000;
       color:white;
       justify-self:center;
       text-align:center;
       top:80px;
       }
       .item{
       flex-wrap:wrap;
       gap:20px;
       }
       .item a{
       position:relative;
       text-decoration:none;
       font-size:20px;
       font-weight:500;
       color:rose;
       text-transform:capitalize;
       }
       .item a:hover{
       position:relative;
       color:purple;
       transition:all ease 0.3s;
       }
       .line{
       position:relative;
       flex-wrap:wrap;
       }
       .social-links{
       flex-wrap:wrap;
       gap:10px;
       }
       .social-links a{
       position:relative;
       text-decoration:none;
       color:wheat;
       cursor:pointer;
       font-size:20px;
       text-transform:capitalize;
       }
       .social-links a:hover{
       position:relative;
       color:olive;
       transition:all ease 0.3s;
       transform:translate(2px);
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
        <section class="container" id="About">
          <div class="hero-text">
            <h1>professional <span style="color: blue;">web solutions</span>
            for your business via to Eva-Codes</h1>
            <p>We build cutting-edge websites and web <br>
              applications with modern technologies, <br>
              focusing on performance,
               user experience, and business growth.</p>
                </div>
               <div class="hero-btns">
               <a href=""> <button type="button" id="get">&gtrless; Get In Touch</button></a>
                <a href=""><button type="button0" id="save">&searrow; Get Our services</button></a>
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
      <div class="foot">
        <p>
          &copysr;all right are reserved by Eva-Codes 2025
        </p>
      </div>
    </section>
    <script>
    const About = document.getElementById("About");

About.addEventListener("open", (e) => {
  e.preventDefault();
  
  alert("Welcome to About page");
});

    </script>
      </body>
      </html>
      `);
   router.get('/about', getAbout);
};
 
export default getAbout;