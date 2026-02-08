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
       bottom:20px;
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
  top:700px;
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
       top:680px;
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

      </section>
      <section class="plot">
         <div class="card" id="myPlot"></div>
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
        <form action="" id="myForm">
        <input type="text" id="fname" required placeholder="Your full name">
        <br><br>
        <input type="text" id="email" placeholder="your Email" required>
        <br><br>
        <input type="password" id="password" required placeholder="Your password">
        <br><br>
        <textarea id="comments" name="comments"  style="width:30vw;height:15vh;position:relative;
        border:1px solid white;color:white;background-color:transparent;border-radius:10px;">
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
            type:"dot",
            arientation:"dot",
            marker:{color:"green"}
        }];
       const layout = {title:"Eastern Africa Community (EAC) production(GDP) according to Percentges"};
        Plotly.newPlot("myPlot",data,layout);

        window.addEventListener('resize', () => {
  Plotly.Plots.resize('myPlot');
});

    </script>
      </body>
      </html>
      `);
};
    
 export default getBlog;