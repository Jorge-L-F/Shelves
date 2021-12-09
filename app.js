const HIDE = [" hidden", "3.5%", "70px", "40px", "15px"]
const REVEAL = ["", "6%", "120px", "100px", "10px"]

window.onload = function init() {
    
    let side_bar = document.getElementById("flex-window").getElementsByClassName("side-bar")[0];
    let profile_picture = side_bar.getElementsByClassName("profile-picture")[0];
    let side_bar_content = side_bar.getElementsByClassName("side-bar-content")[0];
    shrink(side_bar, side_bar_content, profile_picture);
    
    side_bar.onmouseenter = function() {
        enlarge(side_bar, side_bar_content, profile_picture);
    };
    
    side_bar.onmouseleave = function() {
        shrink(side_bar, side_bar_content, profile_picture);
    };
    
}

function shrink(side_bar, side_bar_content, profile_picture) {
    
    if (!side_bar_content.className.includes(HIDE[0]))
        side_bar_content.className += HIDE[0];
    //side_bar.setAttribute("style", "width: " + HIDE[1]);
    side_bar.style.width = HIDE[1];
    //side_bar.setAttribute("style", "min-width: " + HIDE[2]);
    side_bar.style.minWidth = HIDE[2];
    profile_picture.style.width = HIDE[3]
    profile_picture.style.height = HIDE[3]
    profile_picture.style.padding = HIDE[4]
    
}

function enlarge(side_bar, side_bar_content, profile_picture) {
    
    side_bar_content.className = side_bar_content.className.replace(HIDE[0], "");
    //side_bar.setAttribute("style", "width: " + REVEAL[1]);
    side_bar.style.width = REVEAL[1];
    //side_bar.setAttribute("style", "min-width: " + REVEAL[2]);
    side_bar.style.minWidth = REVEAL[2];
    profile_picture.style.width = REVEAL[3]
    profile_picture.style.height = REVEAL[3]
    profile_picture.style.padding = REVEAL[4]
    
}
