
async function compileAndRender(source, compiledVar, jsonFile, outputEl){
	await compile(source, compiledVar)
	await renderTemplate(jsonFile, compiledVar, outputEl)
}
function compile(source, compiledVar) {
	var compiled = dust.compile(source, compiledVar);
	dust.loadSource(compiled);
	// console.log(source,compiledVar)
}

function renderTemplate(jsonFile, compiledVar, outputEl) {
	fetch(jsonFile)
	.then(response => {
		 return response.json();
	})
	.then(function(result) {
		// console.log(result)
		dust.render(compiledVar, result, function (err, out) {
			document.querySelector(outputEl).innerHTML = document.getElementById('tblcontainer').innerHTML + out
		});
	})
}