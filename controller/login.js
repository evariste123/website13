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

       #login.login{
       position:relative;
       width:100vw;
       justify-self:center;
       top:100px;
       height:110vh;
       background:linear-gradient(to bottom,skyblue,cyan,indigo);
       }
       .login h3{
       position:relative;
       text-align:center;
       color:black;
       text-transform:capitalize;
       font:20px bold;
       overflow:break-words;
       top:50px;
       }
       .log{
       position:relative;
       text-align:center;
       width:60vw;
       height:auto;
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
       .log h2{
       position:relative;
       top:60px;
       }
       .google{
       position:relative;
       justify-self:center;
       top:150px;
       }
       .google button{
       position:relative;
       width:20vw;
       height:7vh;
       overflow-wrap:break-word;
       background-color:white;
       border:none;
       border-radius:20px;
       font-size:20px;
       font-weight:900;
       }
       .google button:hover{
       position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       background:linear-gradient(to right,skyblue,white);
       color:black;
       text-shadow: 10px 10px  #460257ff;
       }
       .facebook{
       position:relative;
       justify-self:center;
       top:200px;
       }
       .facebook button{
       position:relative;
       width:20vw;
       height:7vh;
       overflow-wrap:break-word;
       background-color:white;
       border:none;
       border-radius:20px;
       font-size:20px;
       font-weight:900;
       }
       .facebook button:hover{
        position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       background:linear-gradient(to right,skyblue,white);
       color:black;
       text-shadow: 10px 10px  #0d11fcff;
       }
       .github{
       position:relative;
       justify-self:center;
       top:250px;
       }
       .github button{
      position:relative;
       width:20vw;
       height:7vh;
       overflow-wrap:break-word;
       background-color:white;
       border:none;
       border-radius:20px;
       font-size:20px;
       font-weight:900;
       }
       .github button:hover{
        position:relative;
       transition:all ease 0.3s;
       cursor:pointer;
       background:linear-gradient(to right,skyblue,white);
       color:black;
       text-shadow: 10px 10px  #fc0dfcff;
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
        <form action="" id="Login">
        <div class="login" id="login">
        <h3>join us here! your data will be safe with us!</h3>
        <div class="log">
        <input type="text" id="Email" placeholder="enter your email" required>
        <br><br>
        <input type="password" id="Password" placeholder="enter your password" required>
        <br><br>
        <button type="submit">submit</button>
        <button type="reset">reset</button>
        <h2>login with social media</h2>
        </div>
        <div class="google">
        <a href="">
        <button type="click"><span style="color:blue">G</span><span style="color:red">o</span><span style="color:gold">o</span><span style="color:blue">g</span><span style="color:green">l</span><span style="color:red">e</span></button>
        </a>
        </div>
        <div class="facebook">
        <a href="">
        <button type="facebook">facebook</button>
        </a>
        </div>
        <div class="github">
        <a href="">
        <button type="github">Github</button>
        </a>
        </div>
        </div>
        </form>
       <script>
    let Login = document.getElementById("Login");

    Login.addEventListener('submit', (e) => {
        e.preventDefault();

        const numberPattern = /^[0-9]+$/;
        const Email = document.getElementById("Email").value;
        const Password = document.getElementById("Password").value;

        console.log("my Email: " + Email);
        console.log("my password: " +  Password);


        alert("              you have done to login to your account!       ");
      

if (!numberPattern.test(Password)) {
  alert("Password must contain only numbers!");
  return false;
} else {
  alert("Password is correct!");
  return true;
}
    });

    let Login1 = document.getElementById("Login");

    Login.addEventListener('reset', () => {

        const Email = document.getElementById("Email")
        const Password = document.getElementById("Password");

        console.log("my Email: " + ('null'));
        console.log("my password: " + ('null'));

        alert("your account is opening...");
      

        if (Password !== Password)
        {
        alert("password is not equal to database!");
        return;
        }
    });
</script>

      </body>
      </html>
      `);
};
    
 export default getLogin;