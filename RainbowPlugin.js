var brightness = 1;
var secondsUntilChange = 5;
//edit this ^^

//Don't edit the stuff below

setInterval(function() {
    var red = Math.random() * brightness;
    var green = Math.random() * brightness;
    var blue = Math.random() * brightness;


    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length; i++){
        if(window.getComputedStyle(divs[i])["background-color"].startsWith('rgb(')) {
            var color = window.getComputedStyle(divs[i])["background-color"].replace('rgb(', '').replace(')', '').split(',');
            if(typeof(divs[i].attributes["trueColor"]) == 'undefined')
                divs[i].attributes["trueColor"] = color;
            else
                color = divs[i].attributes["trueColor"];
            divs[i].style.backgroundColor = "rgb(" + Math.floor(parseInt(color[0]) * red) + ", " + Math.floor(parseInt(color[1]) * green) + ", " + Math.floor(parseInt(color[2]) * blue) + ")";
        }
    }
}, secondsUntilChange * 1000);
