var AllDecisionButtons = [];

function aFunctionImplementedInExternalJsFile(jsInt) {
	alert(jsInt + " from external js");
}

function AddNewButton(ButtonText)
{
	const newButton = document.createElement('button');
	newButton.textContent = UTF8ToString(ButtonText);
	document.body.appendChild(newButton);

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