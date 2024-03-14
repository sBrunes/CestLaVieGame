var AllDecisionButtons = [];

const newButton = document.createElement('BUTTON');
newButton.innerHTML = 'click me I guess';
document.getElementsByTagName("body")[0].appendChild(newButton);

function aFunctionImplementedInExternalJsFile(jsInt) {
	alert(jsInt + " from external js");
}

function AddNewButton(ButtonText)
{
	console.log("THis is adding a button");
	alert("Adding a button with " + ButtonText);
	const newButton = document.createElement('button');
	newButton.textContent = ButtonText;
	document.getElementById("ButtonParent").appendChild(newButton);

	AllDecisionButtons.push(newButton);
}

function ClearAllDecisionButtons()
{
	for(let i = 0; i < AllDecisionButtons.length; i++)
	{
		AllDecisionButtons[i].parentNode.removeChild(AllDecisionButtons[i]);
	}

	AllDecisionButtons = [];
}