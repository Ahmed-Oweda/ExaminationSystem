//questions

var Q1 =
{
    q: "Who is the president of USA?  ",
    a: ["Bosh", "obama", "trump", "elsisi"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "trump",

}
var Q2 =
{
    q: "What is the capital of sudan?  ",
    a: ["Newyork", "cairo", "khartoom", "tunis"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "khartoom",

}
var Q3 =
{
    q: "What is the operating system of samsung?  ",
    a: ["Android", "IOS", "Windows", "Linus"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "Android",

}

var Q4 =
{
    q: "Who is the father of Geometry ?  ",
    a: ["Aristotle", "Euclid", "pythagoras", "kepler"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "Euclid",

}
var Q5 =
{
    q: "What is 2+1?  ",
    a: ["9", "3", "5", "10"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "3",



}
var Q6 =
{
    q: "What is 3+1?  ",
    a: ["3", "4", "5", "10"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "4",

}
var Q7 =
{
    q: "What is 4+1?  ",
    a: ["3", "2", "5", "10"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "5",

}
var Q8 =
{
    q: "What is 5+1?  ",
    a: ["3", "2", "6", "10"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "6",

}
var Q9 =
{
    q: "What is 8+1?  ",
    a: ["3", "2", "5", "9"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "9",
}
var Q10 =
{
    q: "What is 7+1?  ",
    a: ["8", "2", "5", "10"],
    //n:"question"+counter,

    m: 0,
    rightanswer: "8",

}
//variables

var user_name = document.getElementById("txb_name");
var user_email = document.getElementById("txb_email");
var user_id = document.getElementById("txb_id");
var user_track = document.getElementById("txb_track");

var namewarning = document.querySelector(".namefield")
var emailwarning = document.querySelector(".Emailfield");
var IDwarning = document.querySelector(".IDfield");
var trackwarning=document.querySelector(".trackfield");

var begin_test = document.getElementById("begin");
var login_form = document.querySelector(".loginpage");
var test1 = document.querySelector(".test");
var testcontainer = document.querySelector(".container");
var validation = document.querySelector(".validation");
var resultpage = document.querySelector(".results");
var arrrandom;
var counter = 0;

var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");

var wname = document.createElement("td");
var t = document.createTextNode("**Name cant be Empty");

var wemail = document.createElement("td");
var tt = document.createTextNode("**Email cant be Empty and must be valid");

var wid = document.createElement("td");
var ttt = document.createTextNode("**ID must be 6 numbers");

var wtrack = document.createElement("td");
var tttt= document.createTextNode("**you must choose a track");

var ans;
var current = 0;
var next = document.querySelector(".next");
var skip = document.querySelector(".skip");
var submit = document.querySelector(".submit");
var score = document.querySelector(".score");

var quw = document.querySelector(".question");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");

var skippeditems = document.querySelector(".skippedquestions");
var finalquestions = [];

var random = Math.floor(Math.random() * 10); //generate a random number from 1 to 10
arr = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];


//functions

function checkFields() {
var result = false;

if (user_name.value != "" && user_id.value.length == 6 && user_track.value!="" && isNaN(user_id.value) == false && validateEmail(user_email.value)) {
        result = true;
        alert("LOGIN SUCCESSFULL");
        login_form.style.display = "none";
        testcontainer.style.display = "flex";
        GenerteRandom();

        displayQuestion(0);



    }
if (user_name.value == "" && namewarning.textContent.includes('**Name cant be Empty') != true) {


        wname.appendChild(t);
        wname.classList.add("addanimation");
        namewarning.appendChild(wname);
        wname.style.color = "red";

    }

if (user_email.value == "" && emailwarning.textContent.includes("**Email cant be Empty and must be valid") != true) {


        wemail.appendChild(tt);
        wemail.classList.add("addanimation");
        emailwarning.appendChild(wemail);
        wemail.style.color = "red";

    }

if (user_id.value == "" && IDwarning.textContent.includes("**ID must be 6 numbers") != true) {


        wid.appendChild(ttt);
        wid.classList.add("addanimation");
        IDwarning.appendChild(wid);
        wid.style.color = "red";


    }




    if (user_track.value == "" && trackwarning.textContent.includes("**you must choose a track") != true) {


        wtrack.appendChild(tttt);
        wtrack.classList.add("addanimation");
        trackwarning.appendChild(wtrack);
        wtrack.style.color = "red";


    }
}



function Next() {


        if (ans == 1) {
            finalquestions[counter].m = 5;

        }
        if (counter == current) {

            if (counter < finalquestions.length - 1) {
                if (document.getElementById("bt1").checked == false && document.getElementById("bt2").checked == false && document.getElementById("bt3").checked == false && document.getElementById("bt4").checked == false) {
                    alert("you must answer the question before you hit next");
                }
                else {

                    counter++;
                    current++;
                    displayQuestion(counter);

                    document.getElementById("bt1").checked = false;
                    document.getElementById("bt2").checked = false;
                    document.getElementById("bt3").checked = false;
                    document.getElementById("bt4").checked = false;

                }
            }


        }
        else {
            current = counter
            displayQuestion(current);
            document.getElementById("bt1").checked = false;
            document.getElementById("bt2").checked = false;
            document.getElementById("bt3").checked = false;
            document.getElementById("bt4").checked = false;

        }





    }


function submitting() {


        var r = confirm("are you sure you want to submit");
        if (r == true) {



            var result = 0;
            for (let i = 0; i < 5; i++) {
                result = result + finalquestions[i].m

            }

            score.innerText = (result);

            testcontainer.style.display = "none";
            validation.style.display = "none";
            resultpage.style.display = "block";
        }






    }

    

function displayQuestion(index) {

        quw.innerText = finalquestions[index].q;
        ans1.innerText = finalquestions[index].a[0];
        ans2.innerText = finalquestions[index].a[1];
        ans3.innerText = finalquestions[index].a[2];
        ans4.innerText = finalquestions[index].a[3];




    }
    

function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }




    
function radiobt1() {
        if (ans1.innerText == finalquestions[counter].rightanswer) {
            ans = 1;
        }
        else {
            ans = -1;
        }

    }
function radiobt2() {
        if (ans2.innerText == finalquestions[counter].rightanswer) {
            ans = 1;
        }
        else {
            ans = -1;
        }

    }
function radiobt3() {
        if (ans3.innerText == finalquestions[counter].rightanswer) {
            ans = 1;
        }
        else {
            ans = -1;
        }

    }
function radiobt4() {
        if (ans4.innerText == finalquestions[counter].rightanswer) {
            ans = 1;
        }
        else {
            ans = -1;
        }

    }

function GenerteRandom() {
        arrrandom = [];
        for (let i = 0; i < 5; i++) {


            var random = Math.floor(Math.random() * 10); //generate a random number from 1 to 10 
            if (i == 0) {
                arrrandom.push(random);
                finalquestions.push(arr[random]);
            }
            else {
                if (arrrandom.includes(random) == false) {
                    arrrandom.push(random);

                    finalquestions.push(arr[random]);
                }
                else {
                    i--;
                }
                // if (arrrandom[i]!=arrrandom[i-1])
                // {
                //     arrrandom.push(random);
                // }


            }



        }


    }


    
function skipquestion() {

    
        if (counter < finalquestions.length - 1) {
            var newcounter = counter + 1;
            finalquestions[counter].n = "question" + " " + (newcounter);
            var htag = document.createElement("h3");
            htag.classList.add("skippeditems");
            var node = document.createTextNode(finalquestions[counter].n);
            // current = newcounter - 1;

            htag.addEventListener("click", function () {
                displayQuestion(newcounter - 1);
                current = newcounter - 1;
                htag.remove();


                //alert("jbjksdhj");
            })
            htag.appendChild(node);
            skippeditems.appendChild(htag);
            
            
            if (counter == current) {
                counter++;
                current++;
                displayQuestion(newcounter);
                
            }
            else {
                current = counter;
                
            }
        }


        }


//events 

bt1.addEventListener("click", radiobt1);
bt2.addEventListener("click", radiobt2);
bt3.addEventListener("click", radiobt3);
bt4.addEventListener("click", radiobt4);

submit.addEventListener("click", submitting);
next.addEventListener("click", Next);

begin_test.addEventListener('click', checkFields);
skip.addEventListener("click", skipquestion);

user_name.oninput = function () {

        if (user_name.value != "") {
            wname.remove();

        }
        else {
            wname.appendChild(t);
            wname.classList.add("addanimation");
            namewarning.appendChild(wname);
            wname.style.color = "red";
        }

    }






user_email.oninput = function () {

        if (user_email.value != "") {
            wemail.remove();

        }
        else {
            wemail.appendChild(tt);
            wemail.classList.add("addanimation");
            emailwarning.appendChild(wemail);
            wemail.style.color = "red";
        }

    }



user_id.oninput = function () {

        if (user_id.value.length == 6) {
            wid.remove();

        }
        else {
            wid.appendChild(ttt);
            wid.classList.add("addanimation");
            IDwarning.appendChild(wid);
            wid.style.color = "red";
        }

    }


user_track.oninput = function () {

        if (user_track.value != "") {
            wtrack.remove();

        }
        else {
            wtrack.appendChild(tttt);
            wtrack.classList.add("addanimation");
            trackwarning.appendChild(wtrack);
            wtrack.style.color = "red";
        }

}   












    

    





    




    




    


























