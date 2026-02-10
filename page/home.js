import express from 'express';
const router = express.Router();
const getHome = (req, res) => {
   res.send(`
  <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Node-only-website</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes colorShift {
          0% { color: #667eea; }
          25% { color: #764ba2; }
          50% { color: #f093fb; }
          75% { color: #4ecdc4; }
          100% { color: #667eea; }
        }
                @keyframes borderGlow {
          0% {
            border-color: #667eea;
            box-shadow: 0 0 15px rgba(102, 126, 234, 0.6);
          }
          25% {
            border-color: #764ba2;
            box-shadow: 0 0 15px rgba(118, 75, 162, 0.6);
          }
          50% {
            border-color: #f093fb;
            box-shadow: 0 0 15px rgba(240, 147, 251, 0.6);
          }
          75% {
            border-color: #4ecdc4;
            box-shadow: 0 0 15px rgba(78, 205, 196, 0.6);
          }
          100% {
            border-color: #667eea;
            box-shadow: 0 0 15px rgba(102, 126, 234, 0.6);
          }
        }

        @keyframes borderRainbow {
          0% {
            border-top-color: #ff6b6b;
            border-right-color: #ffd93d;
            border-bottom-color: #4ecdc4;
            border-left-color: #667eea;
          }
          25% {
            border-top-color: #ffd93d;
            border-right-color: #4ecdc4;
            border-bottom-color: #667eea;
            border-left-color: #ff6b6b;
          }
          50% {
            border-top-color: #4ecdc4;
            border-right-color: #667eea;
            border-bottom-color: #ff6b6b;
            border-left-color: #ffd93d;
          }
          75% {
            border-top-color: #667eea;
            border-right-color: #ff6b6b;
            border-bottom-color: #ffd93d;
            border-left-color: #4ecdc4;
          }
          100% {
            border-top-color: #ff6b6b;
            border-right-color: #ffd93d;
            border-bottom-color: #4ecdc4;
            border-left-color: #667eea;
          }
        }

        @keyframes evaristePulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 8px #667eea); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 20px #764ba2); }
        }

        @keyframes evarsteGlitchX {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { transform: translate(0); }
          20%, 24%, 55% { transform: translate(-2px, 0); }
        }

        @keyframes evarsteGlitchY {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { transform: translate(0); }
          20%, 24%, 55% { transform: translate(0, 2px); }
        }

        @keyframes buttonBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes scaleUpIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
        }

        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes recordSlideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes containerPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
          50% { box-shadow: 0 0 40px rgba(102, 126, 234, 0.6); }
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          padding: 20px;
        }
        
        .container {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          overflow: hidden;
          animation: slideInUp 0.8s ease-out;
          border: 3px solid;
          border-color: #667eea;
          animation: slideInUp 0.8s ease-out, borderRainbow 8s linear infinite;
        }
        
        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          animation: fadeInDown 0.8s ease-out;
          border-bottom: 3px solid;
          border-image: linear-gradient(90deg, #ff6b6b, #ffd93d, #4ecdc4, #667eea) 1;
          position: relative;
        }

        header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff6b6b, #ffd93d, #4ecdc4, #667eea, #ff6b6b);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        header h1 {
          animation: glow 2s ease-in-out infinite;
          font-size: 2.2em;
          margin-bottom: 10px;
        }

        header p {
          animation: fadeInDown 1.2s ease-out;
          font-size: 1.1em;
          opacity: 0.95;
        }
          #submitBtn {
            animation: fadeInDown 1.4s ease-out;
            transition: all 0.3s ease;
          }

          #submitBtn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
          }

          #submitBtn:active {
            transform: translateY(0);
          }

          h2, h3 {
            animation: slideInUp 0.8s ease-out;
          }

          form input, form textarea {
            animation: slideInUp 1s ease-out;
            transition: all 0.3s ease;
          }

          form input:focus, form textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 8px rgba(102, 126, 234, 0.3);
          }

          #recordsList {
            animation: slideInUp 1.2s ease-out;
          }

          #recordsList div {
            animation: slideInUp 0.5s ease-out;
            transition: all 0.3s ease;
          }

          #recordsList div:hover {
            background: #f0f2ff;
            padding-left: 12px;
            border-left: 4px solid;
            border-image: linear-gradient(180deg, #667eea, #764ba2) 1;
          }

          .controls-bar {
            display: flex;
            gap: 16px;
            align-items: center;
            padding: 12px 20px;
            background: linear-gradient(90deg, #f5f7ff 0%, #fff5f9 100%);
            border-bottom: 2px solid #667eea;
            animation: slideInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
            flex-wrap: wrap;
            justify-content: center;
            position: relative;
          }

          .controls-bar::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
          }

          .control-group {
            display: flex;
            gap: 8px;
            align-items: center;
            animation: slideInRight 0.8s ease-out;
          }

          .control-label {
            font-weight: 600;
            color: #333;
            font-size: 0.95em;
            white-space: nowrap;
          }

          .control-buttons {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }

          .control-btn {
            padding: 8px 12px;
            border: 2px solid #667eea;
            background: white;
            color: #667eea;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9em;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            animation: fadeInDown 1s ease-out;
            position: relative;
            overflow: hidden;
          }

          .control-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }

          .control-btn:hover::before {
            left: 100%;
          }

          .control-btn:hover {
            background: #667eea;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
            animation: buttonBounce 0.6s ease-in-out;
          }

          .control-btn.active {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border-color: #764ba2;
            box-shadow: 0 8px 24px rgba(102, 126, 234, 0.6);
            animation: pulse 2s ease-in-out infinite;
          }

          .record-count {
            display: inline-block;
            padding: 8px 16px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.9em;
            margin-bottom: 12px;
            animation: slideInDown 0.6s ease-out;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }
          .search-box {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
            animation: slideInUp 0.8s ease-out;
          }

          .search-box input {
            flex: 1;
            padding: 10px;
            border: 2px solid #667eea;
            border-radius: 8px;
            font-size: 0.95em;
            transition: all 0.3s ease;
          }

          .search-box input:focus {
            outline: none;
            box-shadow: 0 0 8px rgba(102, 126, 234, 0.5);
          }

          body.dark-theme .search-box input {
            background: #16213e;
            border-color: #e94560;
            color: #e0e0e0;
          }
          .action-buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 16px;
          }

          .action-btn {
            padding: 10px 16px;
            border: 2px solid #667eea;
            background: white;
            color: #667eea;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 0.9em;
            transition: all 0.3s ease;
          }

          .action-btn:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
          }
            .footer{
            position:relative;
            width:100vw;
            height:auto;
            justify-self:center;
            top:25px;
            background-color:#000;
            color:white;
            }
            .quick{
            position:relative;
            width:20vw;
            height:auto;
            justify-self:left;
            margin-left:10px;
            background-color:transparent;
            text-align:center;
            }
            .social{
            display:grid;
            gap:5px;
            }
            .social a{
            position:relative;
            text-decoration:none;
            color:wheat;
            over-flow:break-words;
            flex-wrap:wrap;
            }
            .social a:hover{
            position:relative;
            transition:all ease 0.3s;
            transform:translate(2px);
            color:purple;
            cursor:pointer;
            }
            .special{
            position:absolute;
            width:20vw;
            height:auto;
            background-color:transparent;
            cursor:pointer;
            justify-self:center;
            text-align:center;
            overflow:break-words;
            flex-wrap:wrap;
            bottom:45px;
            }
            .links{
            display:grid;
            flex-wrap:wrap;
            gap:5px;
            }
            .links a{
            position:relative;
            cursor:pointer;
            color:purple;
            text-decoration:none;
            font:20px bold;
            }
            .links a:hover{
            position:relative;
            color:wheat;
            transition:all ease 0.3s;
            transform:translate(2px);
            }
            .para{
            position:relative;
            top:40px;
            }
            .medi{
            position:absolute;
            width:20vw;
            height:auto;
            background-color:transparent;
            cursor:pointer;
            justify-self:right;
            text-align:center;
            overflow:break-words;
            flex-wrap:wrap;
            bottom:150px;
            }
            .social-links{
            display:grid;
            flex-wrap:wrap;
            gap:5px;
            }
            .social-links a{
            position:relative;
            cursor-pointer;
            text-decoration:none;
            text-transform:capitalize;
            color:wheat;
            }
            .social-links a:hover{
            position:relative;
            color:white;
            transform:translate(2px);
            cursor:pointer;
            transition:all ease 0.3s;
            }
      </style>
    </head>
    <body>
      <div class="container" id="container">
        <header>
          <div style="animation: fadeInDown 0.5s ease-out; margin-bottom: 20px;">
            <h1 id="welcome" style="animation: colorShift 4s linear infinite;">Evariste Data System</h1>
            <h2 id="welcome" style="animation:colorShift 4s linear infinite;">search other page above or scrow-down</h2>
            <p style="font-size: 0.9em; letter-spacing: 2px; animation: fadeInDown 0.8s ease-out 0.2s both; color: rgba(255,255,255,0.9);">SAVED DATA DISPLAY</p>
          </div>
          <p id="subtitle" style="margin-top: 12px;"></p>
        </header>
        <div style="padding:24px 30px; animation: slideInUp 0.8s ease-out 0.2s both;">
          <h2 id="recordDataLabel" style="margin-bottom:12px; animation: fadeInDown 0.8s ease-out 0.3s both;">Add Data</h2>
          <form id="recordForm" style="display:grid;gap:12px;max-width:640px; animation: slideInUp 0.8s ease-out 0.4s both;">
            <input name="title" placeholder="Title" required style="padding:10px;border-radius:8px;border:2px solid #667eea;transition:all 0.3s ease;animation:slideInUp 0.6s ease-out 0.5s both;" onfocus="this.style.borderColor='#764ba2';this.style.boxShadow='0 0 15px rgba(102,126,234,0.3)'" onblur="this.style.borderColor='#667eea';this.style.boxShadow='none'" />
            <textarea name="note" placeholder="Notes" rows="4" style="padding:10px;border-radius:8px;border:2px solid #667eea;transition:all 0.3s ease;animation:slideInUp 0.6s ease-out 0.6s both;" onfocus="this.style.borderColor='#764ba2';this.style.boxShadow='0 0 15px rgba(102,126,234,0.3)'" onblur="this.style.borderColor='#667eea';this.style.boxShadow='none'"></textarea>
            <div style="display:flex;gap:12px;align-items:center;animation:slideInUp 0.6s ease-out 0.7s both;">
              <button id="submitBtn" type="submit" style="background:linear-gradient(135deg, #667eea, #764ba2);color:white;border:none;padding:12px 24px;border-radius:8px;cursor:pointer;font-weight:600;transition:all 0.3s ease;animation:slideInUp 0.6s ease-out 0.7s both;" onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 20px rgba(102,126,234,0.4)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">Save Data</button>
              <span id="status" style="color:#333;font-size:0.95em;animation:slideInUp 0.6s ease-out 0.7s both;"></span>
            </div>
          </form>

          <h3 id="savedRecordsLabel" style="margin-top:26px;margin-bottom:8px;animation:fadeInDown 0.8s ease-out 0.5s both;">All Saved Data</h3>
          <div id="recordsList" style="background:#f8f9ff;padding:12px;border-radius:8px;min-height:40px;animation:slideInUp 0.8s ease-out 0.6s both;border:2px solid #667eea;"></div>
        </div>
        </div>
        <section class="footer">
        <div class="quick">
        <h3>Quicks-links</h3>
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
        <div class="medi">
       <h3>social-media links &hookleftarrow;</h3>
        <div class="social-links">
        <a href="https://www.youtube.com/@evaristebapfekurera5995">you tube</a>
        <a href="https://www.facebook.com/evariste.arrogent.ever">facebook</a>
        <a href="https://www.linkedin.com/in/evariste-bapfekurera-a3700b2b0/">linkedin</a>
        <a href="https://x.com/EBapfekure3">twitter</a>
        <a href="https://www.instagram.com/evari_ste2025/?hl=en">intagram</a>
      </div>
        </div>
        <div class="special">
        <h3>contact-links</h3>
        <div class="links">
Email: <a href="mailto:bapfekureraevariste@gmail.com">Email Us</a>
Phone: <a href="tel:+250785786547">Call Us</a>
location: <a href="/contact">full our info</a
        </div>
        </div>
        <div class="para">
         <p>
          &copysr;all right are reserved by Eva-Codes 2025
        </p>
        </div>
        </section>
        
    </body>
    </html>

    `);
};
 export default getHome;