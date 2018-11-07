async function fetchAsync(jsonFile) {
	let data = await (await fetch(jsonFile)).json();
	return data;
}
async function compileAndRender(source, compiledVar, jsonFile, outputEl, langCode, surahno, ayath){
	await compile(source, compiledVar,surahno)
	var result = await fetchAsync (jsonFile);
	await renderTemplate(result, compiledVar, outputEl, langCode, surahno, ayath)
}
function compile(source, compiledVar) {
	var compiled = dust.compile(source, compiledVar);
	dust.loadSource(compiled);
}
function renderTemplate(result, compiledVar, outputEl,langCode, surahno, ayath) {
		result["langCode"] = langCode
		if(surahno) result["surahno"] = surahno
		if(ayath) result["ayath"] = ayath		
		dust.render(compiledVar, result, function (err, out) {

			document.querySelector(outputEl).innerHTML = document.getElementById('tblcontainer').innerHTML + out
		});

}
function changeLang(){
	var elem = (typeof this.selectedIndex === "undefined" ? window.event.srcElement : this);
	// options[selectedIndex].value && self.location
    var value = elem.value || elem.options[elem.selectedIndex].value;
    var url = document.location.origin + document.location.pathname + '?langCode='+ value;
    document.location.replace(url);
}

function searchQuran(){

	var params = (new URL(document.location)).searchParams;
	var langCode = params.get("langCode");
	var ayath= document.querySelector('#ayath').value;
	var url = document.location.origin + document.location.pathname + '?langCode='+ langCode + '&ayath='+ ayath;
	document.location.replace(url);
	// console.log(langCode, ayath)
	// loadQuranVerses(langCode, '', ayath)

	
	// var url = document.location.origin + document.location.pathname + '?langCode='+ langCode;
	// document.location.replace(url);
	// loadQuranVerses(langCode, surahno, ayath)
}