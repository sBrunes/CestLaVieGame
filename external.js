var AllDecisionButtons = [];

var MainMenuButtons = [];

var UnityButtonCallback;
var UnityButtonCallbackLogin;

var CreditsButtons = [];

var HTPButtons = [];

var ContinueButton;

var MoneyAmount;

var WellnessAmount;

var ExperienceAmount;

var BonusesAmount;

var NeighborhoodCurrent = "No neighborhood yet";

var SchoolCurrent = "No school yet";

var SocialGroupsCurrent = [];

var AssetElements = [];

var LoginElements = [];

var VoteElements = [];

var ContinueElements = [];

var CharDetailInfo = "";

function toUTF8Array(str) {
    var utf8 = [];
    for (var i=0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 
                      0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
            utf8.push(0xf0 | (charcode >>18), 
                      0x80 | ((charcode>>12) & 0x3f), 
                      0x80 | ((charcode>>6) & 0x3f), 
                      0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}


// const newButton = document.createElement('BUTTON');
// newButton.innerHTML = 'click me I guess';
// document.getElementsByTagName("body")[0].appendChild(newButton);

//alert("v7");

//Options Rules:
//Callback of 0 - 10 = Options buttons 1
//			0: How to play button
//			1: Options Button
//			2: How to play back
//			3: how to play next
//			4: How to play prev
//			5: Initial Character continue button
//Callback of -1 - -10 = scenario buttons
//Callback of 11 - 20 = Main menu buttons
//			11: Play Game
//			12: Credits
//			13: Credits Back

// function aFunctionImplementedInExternalJsFile(jsInt) {
// 	alert(jsInt + " from external js");
// }

function InitBtnFunctionality(btnCallback)
{
	UnityButtonCallback = btnCallback;

	document.getElementById('htp_button').onclick = () => {
		dynCall_vi(UnityButtonCallback, 0);
	}

	document.getElementById('option_button').onclick = () => {
		dynCall_vi(UnityButtonCallback, 1);
	}
}

// function AddNewButton(ButtonText)
// {
// 	console.log("THis is adding a button");
// 	alert("Adding a button with " + ButtonText);
// 	const newButton = document.createElement('BUTTON');
// 	newButton.innerHTML = ButtonText;
// 	document.getElementsByTagName("body")[0].appendChild(newButton);

// 	AllDecisionButtons.push(newButton);
// }

// function ClearAllDecisionButtons()
// {
// 	for(let i = 0; i < AllDecisionButtons.length; i++)
// 	{
// 		AllDecisionButtons[i].parentNode.removeChild(AllDecisionButtons[i]);
// 	}

// 	AllDecisionButtons = [];
// }

function AddMainMenuButtons()
{
	//create play button
	const newButton = document.createElement('BUTTON');
	newButton.innerHTML = "Play Game";
	document.getElementById('ButtonContainer').appendChild(newButton);

	MainMenuButtons.push(newButton);

	newButton.onclick= () => {
		dynCall_vi(UnityButtonCallback, 11);
	}

	//create credits button
	const newButton2 = document.createElement('BUTTON');
	newButton2.innerHTML = "Credits";
	document.getElementById('ButtonContainer').appendChild(newButton2);

	MainMenuButtons.push(newButton2);

	newButton2.onclick= () => {
		dynCall_vi(UnityButtonCallback, 12);
	}

	document.getElementById('TitleText').innerText = "Main Menu";
	document.getElementById('DetailsText').innerText = "";
}

function RemoveMainMenuButtons()
{
	for(let i = 0; i < MainMenuButtons.length; i++)
	{
		MainMenuButtons[i].parentNode.removeChild(MainMenuButtons[i]);
	}

	MainMenuButtons = [];
}

function AddCreditsInfo()
{
	document.getElementById('TitleText').innerText = "Credits:";
	document.getElementById('DetailsText').innerHTML = "Kosha D. Bramesfeld, PhD - Original game creator and designer<br>Created in association with Silvia M. Bigatti, PhD<br>Maggie Ricci - Project Management<br>Daniel Janicki - Project Management<br>Sam Brunes - Game development";

	const newButton = document.createElement('BUTTON');
	newButton.innerHTML = "Back";
	document.getElementById('ButtonContainer').appendChild(newButton);

	CreditsButtons.push(newButton);

	newButton.onclick= () => {
		dynCall_vi(UnityButtonCallback, 13);
	}
}

function RemoveCreditsInfo()
{
	for(let i = 0; i < CreditsButtons.length; i++)
	{
		CreditsButtons[i].parentNode.removeChild(CreditsButtons[i]);
	}

	CreditsButtons = [];
}

function AddHTPInfo(myString)
{
	document.getElementById('TitleText').innerText = "How to Play";
	document.getElementById('DetailsText').innerHTML = myString;

	const newButton = document.createElement('BUTTON');
	newButton.innerHTML = "Next";
	document.getElementById('ButtonContainer').appendChild(newButton);

	HTPButtons.push(newButton);

	newButton.onclick= () => {
		dynCall_vi(UnityButtonCallback, 3);
	}

	const newButton2 = document.createElement('BUTTON');
	newButton2.innerHTML = "Previous";
	document.getElementById('ButtonContainer').appendChild(newButton2);

	HTPButtons.push(newButton2);

	newButton2.onclick= () => {
		dynCall_vi(UnityButtonCallback, 4);
	}

	const newButton3 = document.createElement('BUTTON');
	newButton3.innerHTML = "Back";
	document.getElementById('ButtonContainer').appendChild(newButton3);

	HTPButtons.push(newButton3);

	newButton3.onclick= () => {
		dynCall_vi(UnityButtonCallback, 2);
	}
}

function ShowInitialCharDetails(myString)
{
	const newButton = document.createElement('BUTTON');
	newButton.innerHTML = "Continue";
	document.getElementById('ButtonContainer').appendChild(newButton);

	ContinueButton = newButton;

	newButton.onclick= () => {
		dynCall_vi(UnityButtonCallback, 5);
	}

	//set menu title
	document.getElementById('TitleText').innerText = "Your Character";

	//set details
	document.getElementById('DetailsText').innerHTML = myString;
}

function RemoveContinueButton()
{
	//reset details
	document.getElementById('TitleText').innerText = "";
	document.getElementById('DetailsText').innerHTML = "";

	//remove button
	ContinueButton.parentNode.removeChild(ContinueButton);
}

function AddDecisionButton(myString, Index, CanPress)
{
	document.getElementById('TitleText').innerText = "";

	const newButton = document.createElement('BUTTON');
	newButton.innerHTML = myString;
	document.getElementById('ButtonContainer').appendChild(newButton);

	AllDecisionButtons.push(newButton);

	if(CanPress)
	{
		newButton.onclick= () => {
			dynCall_vi(UnityButtonCallback, Index);
		}
	}
}

function RemoveAllDecisionButtons()
{
	for(let i = 0; i < AllDecisionButtons.length; i++)
	{
		AllDecisionButtons[i].parentNode.removeChild(AllDecisionButtons[i]);
	}

	AllDecisionButtons = [];
}

function SetDetailInfo(myString)
{
	document.getElementById('DetailsText').innerHTML = myString;
}