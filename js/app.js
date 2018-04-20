/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var divElemTay = document.getElementById ("name1");
divElemTay.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var divElemDj = document.getElementById ("position2");
divElemDj.innerHTML = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var divElemPiko = document.getElementById ("alias3");
divElemPiko.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var divPrince  = document.getElementsByClassName("profile")
divPrince[0].innerHTML = '"Purple Rain!!"'

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var divBruce  = document.getElementsByClassName("profile")
divBruce[1].innerHTML = '"Adapt what is useful, reject what is useless, and add what is specifically your own."'

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var divSam  = document.getElementsByClassName("alias")
divSam[2].innerHTML = "Jules Winnfield"

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var divParent = document.getElementById ("nameParent")
var divPeter = document.createElement ("div");
divPeter.innerHTML = "Peter Griffin";
divPeter.id = "name7";
divParent.appendChild (divPeter)

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/



//Final Boss
/*9. Create your own profile.*/

