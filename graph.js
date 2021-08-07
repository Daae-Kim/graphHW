const express = require("express");
const router = express.Router();
const app = express();
app.set("port", process.env.PORT || 8001);
app.get("/", (req, res) => {
  var active = "";

  var i = 8.5;

  if (i >= 1 && i <= 7) {
    active = `
        .graph {height: 40px;
            background:#ccc;
            border-radius: 40px;
        }
    
        .graph span { display:block; 
            padding: 0 10px; width: ${i * 10}%; 
            height: 40px; line-height: 40px;
            text-align: right; 
            background: linear-gradient( to right, rgb(159, 226, 191), rgb(135, 206, 235), rgb(4, 55, 242));
            border-radius: 40px;    
            box-sizing: border-box; 
            color:#fff;
            animation: stack 2s 1;
        }
    
        @keyframes stack {
            0% {width: 0; opacity:0;}
            30% {color: rgba(255,255,255,1);}
            100% {width: ${i * 10}%;}    
        }
    
    </style>
    <div class="graph">
        <span>${i * 10}%</span>
    </div>`;
  } else if (i > 7 && i <= 10) {
    active = `.graph {height: 40px;
                        background:#ccc;
                        border-radius: 40px;
                    }

                    .graph span { display:block;
                        padding: 0 10px; width: ${i * 10}%;
                        height: 40px; line-height: 40px;
                        text-align: right;
                        background: rgb(255,15,15);
                        border-radius: 40px;
                        box-sizing: border-box;
                        color:#fff;
                        animation: stack 2s 1;
                    }

                    @keyframes stack {
                        0% {width: 0; opacity:0;}
                        30% {color: rgba(255,255,255,1);}
                        100% {width: ${i * 10}%;}
                    }

                </style>
                <div class="graph">
                    <span>${i * 10}%</span>
                </div>`;
  } else {
    res.send("ERR");
  }

  var graph = `
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <title>vulnerability</title>
        </head>
        <body>
            <style>
                body{ padding: 50px;}
                ${active}
        </body>
    </html>
    `;

  res.send(graph);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
