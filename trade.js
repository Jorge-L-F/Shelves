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

    let user_entries = document.getElementById("flex-window")
                        .getElementsByClassName("web-app-trade")[0]
                        .getElementsByClassName("flex-window")[0]
                        .getElementsByClassName("user-search column")[0].getElementsByClassName("box entry");
    
    let username = document.getElementById("flex-window")
                        .getElementsByClassName("web-app-trade")[0]
                        .getElementsByClassName("flex-window")[0]
                        .getElementsByClassName("details column")[0]
                        .getElementsByClassName("box no-border")[0]
                        .getElementsByClassName("details-username")[0].innerHTML;
    
    for (i = 0; i < user_entries.length; i++) {
        user_entries[i].onclick = function() {
            changeDetails(user_entries[i], username);
        };
    }
    
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

function changeDetails(user_entry, username) {
    console.log("event");
    console.log(user_entry);
    console.log(username);
    let name = user_entry.getElementsByClassName("user-entry")[0].getElementsByClassName("name-entry")[0].innerHTML;
    username = name;
}