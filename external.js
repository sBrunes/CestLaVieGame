var AllDecisionButtons = [];

function aFunctionImplementedInExternalJsFile(jsInt) {
	alert(jsInt + " from external js");
}

function AddNewButton(ButtonText)
{
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