

const borrowUser = "borrowuser";
const borrowPass = "borrowpass";
const lentUser = "lentuser";
const lentPass = "lentpass";
const tradeUser1 = "tradeuser1";
const tradePass1 = "tradePass1";
const tradeUser2 = "tradeuser2";
const tradePass2 = "tradePass2";
const createUser = "createuser";
const createPass = "createpass";
const joinUser = "joinuser";
const joinPass = "joinpass";


function userLogin (){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    switch(username){

        case borrowUser:
            if (borrowPass.localeCompare(password) == 0){
                window.location.href = "./GeneralPages/UserBrowse.html";
                console.log("BorrowUser Entered")
            }
            break;
        case lentUser:
            if (lentPass.localeCompare(password) == 0){
                window.location.href = "./GeneralPages/UserBrowse.html";
                console.log("lentUser Entered")
            }
                break;
        case tradeUser1:
            if (tradePass1.localeCompare(password) == 0){
                window.location.href = "GeneralPages/UserBrowse.html";
                console.log("tradeUser1 Entered")
            }
                break;
        case tradeUser2:
            if (tradePass2.localeCompare(password) == 0){
                window.location.href = "./GeneralPages/UserBrowse.html";
                console.log("tradeUser2 Entered")
            }
                break;
        case createUser:
            if (createPass.localeCompare(password) == 0){
                window.location.href = "./GeneralPages/UserBrowse.html";
                console.log("createUser Entered")
            }
                break;
        case joinUser:
            if (joinPass.localeCompare(password) == 0){
                window.location.href = "./GeneralPages/UserBrowse.html";
                console.log("joinUser Entered")
            }
                break;
        default:
            console.log("Wrong Credentials");
            break;

    }

}