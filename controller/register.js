import express from 'express';
const getRegister = (req, res) => {
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
       #register.register{
       position:relative;
       width:100vw;
       top:100px;
       justify-self:center;
       height:90vh;
       background:linear-gradient(to top,purple,cyan,skyblue);
       }
       .register h3{
       position:relative;
       text-align:center;
       font:20px bold;
       top:150px;
       text-transform:capitalize;
       animation-name:regi;
       animation-delay:5s;
       animation-timing-function:300ms;
       animation-duration:2s;
       animation-iteration-count:infinite;
       }
       @keyframes regi{
       from{
       color:orange;
       bottom:0px;
       }
       to{
       color:blue;
       bottom:10px;
       }
       }
       .regi{
       position:relative;
       width:60vw;
       height:auto;
       top:250px;
       justify-self:center;
       text-align:center;
       background-color:transparent;
       border-radius:30px;
       border-left:3px solid red;
       border-right:3px solid red;
       }
       .regi input{
       position:relative;
       width:20vw;
       height:8vh;
       text-align:center;
       top:5px;
       margin-left:10px;
       border:1px solid #44cc;
       }
       .regi input::placeholder{
       position:relative;
       font:20px medium;
       font-weght:500;
       flex-wrap:wrap;
       }
       .regi input:hover{
       position:relative;
       color:white;
       background-color:grey;
       cursor:pointer;
       border-radius:10px;
       boder:1px solid #aff;
       }
       .regi select{
       position:relative;
       width:20vw;
       height:8vh;
      border:1px solid #44cc;
       top:10px;
       text-align:center;
       font:20px bold;
       }
       .regi button{
       position:relative;
       width:17vw;
       height:7vh;
       border:1px solid rgba(44, 2, 38, 1);
       background-color:purple;
       color:white;
       font:20px medium;
       overflow:break-word;
       border-radius:10px;
       }
       .regi select:hover{
       position:relative;
       color:white;
       background-color:black;
       transition:all ease 0.3s;
       border:none;
       border-radius:10px;
       cursor:pointer;
       }
       .regi button:hover{
       position:relative;
       transition:all ease 0.3s;
       background-color:olive;
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
        <div class="register" id="myForm">
        <h3>register here!</h3>
        <form action="" id="register">
        <div class="regi">
        <input type="text" id="fname" placeholder="your first name" required><input type="text" id="lname" placeholder="your last name" required>
        <br><br>
        <input type="text" id="Email" placeholder="your Email" required><input type="date" id="date" placeholder="your birthdate" required>
        <br><br>
        <select type="gender" id="Gender">
        <option value="gender">..Gender..</option>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="no choosen">no choosen</option>
        </select><input type="password" id="Password" placeholder="your new password" required>
        <br><br>
        <input type="password" id="retype" placeholder="confirm your password" required><input type="time" id="time" placeholder="your time submitted" required>
        <br><br>
        <button type="submit">submit</button>
        <button type="reset">reset</button>
        </div>
        </form>
        <script>
    let myForm = document.getElementById("myForm");

    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const Email = document.getElementById("Email").value;
        const Gender = document.getElementById("Gender").value;
        const Password = document.getElementById("Password").value;
        const retype = document.getElementById("retype").value;

        console.log("my first name: " + fname);
        console.log("my last name: " + lname);
        console.log("my date: " + date);
        console.log("my time: " + time);
        console.log("my Email: " + Email);
        console.log("my Gender: " + Gender);
        console.log("my new Password: " + Password);
        console.log("my confirm password: " + retype);

        alert("You have been registered. Your account is updated!");

        if (Password !== retype) {
    alert("Passwords do not match! please try again your confirmation password!");
    return false;
}
    else if ( Password !=='' ){
    alert(" your password is correct!");
    return true;
    }
    myForm.reset();
    });
</script>
<script>
alert("welcome to registering account");
</script>
      </body>
      </html>
      `);
};
    
 export default getRegister;