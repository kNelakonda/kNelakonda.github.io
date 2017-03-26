var name;
var year;
var variables;

function getName(){
	name = $("#firstname")[0].value + " " + $("#lastname")[0].value;
	
	year = $("#year")[0].value;
	variables = $("#variables")[0].value.split(", ");
	
	
	var text = $("#javatext")[0].value;
	
	
		
		
		var textName = text.replace("Jessica Jiang", name);
		
		var textDate = textName.replace("2015", year)
		
		//next stuff here
		var textVariables = replaceVariables(textDate, variables);
		console.log(textVariables);
	$("#javaresult")[0].value = textVariables;
}

function replaceVariables(originalText, variables) {
	var index = 0;
	var newText = originalText;
	//console.log(variables);
	for (var j = 0; j<variables.length; j++)
	{
		var pieces = originalText.split("  "+variables[j] + " ");
		for(var i = 1; i< pieces.length; i++){
			var varName = pieces[i].substring(0, pieces[i].indexOf(" "));
			//console.log(varName);
			if(varName.length > 1)
			{
				var noVowels = removeVowels(varName);
			
				newText = replaceAll(newText, varName, noVowels );
				//console.log(newText);			
			}
		
		}
	}
	return newText;
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function removeVowels(str){
	var vowels = ["a", "e", "i", "o", "u"];
	var newStr = str;
	for(var i = 0; i < vowels.length; i++){
		var vowel = vowels[i];
		newStr = newStr.replace(vowel, "");
		
	}
	if(newStr.length == 0){
		return str;
	}
	else{
		return newStr;
	}
}