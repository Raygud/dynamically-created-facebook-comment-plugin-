let FaceBookComment = document.createElement("div")
let SpanMod = document.createElement("span")
let iFramer = document.createElement("iframe")
let a = 0;
function fbcc(){
    a++

FaceBookComment
FaceBookComment.setAttribute("class", "fb-comments")
FaceBookComment.setAttribute("data-href", "YourUrl" + a)
FaceBookComment.setAttribute("data-numposts", "5")
FaceBookComment.setAttribute("style", "width: 100%")
FaceBookComment.setAttribute("fb-xfbml-state","rendered")
FaceBookComment.setAttribute("fb-iframe-plugin-query","app_id=&container_width=1231&height=100&href=http%3A%2F%2F ---> YOURURL <--- %2F&locale=en_GB&mobile=true&numposts=5&sdk=joey&version=v13.0&width=")
FaceBookComment.innerHTML = "glo"

SpanMod.setAttribute("style","vertical-align: bottom; width: 100%; height: 213px;")

iFramer.setAttribute("name","f2ca0604bb01968")
iFramer.setAttribute("width","1000px")
iFramer.setAttribute("height","100px")
iFramer.setAttribute("data-testid","fb:comments Facebook Social Plugin")
iFramer.setAttribute("frameborder","0")
iFramer.setAttribute("allowtransparency","true")
iFramer.setAttribute("allowfullscreen","true")
iFramer.setAttribute("scrolling","no")
iFramer.setAttribute("allow","encrypted-media")
iFramer.setAttribute("src","https://www.facebook.com/v13.0/plugins/comments.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2a0fac0968f49%26domain%3D127.0.0.1%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252F127.0.0.1%253A5500%252Ff209e0cc09f3f88%26relation%3Dparent.parent&container_width=1231&height=100&href=http%3A%2F%2Fruni01613.web.techcollege.dk"+ a+ "%2F&locale=en_GB&mobile=true&numposts=5&sdk=joey&version=v13.0&width=")
iFramer.setAttribute("style","border: none; visibility: visible; width: 100%; height: 500px;")
iFramer.setAttribute("class","")

FaceBookComment.appendChild(SpanMod);
SpanMod.appendChild(iFramer)

document.body.appendChild(FaceBookComment);

console.log(FaceBookComment)
console.log(document.getElementsByClassName("fb-comments").item(0))
}
