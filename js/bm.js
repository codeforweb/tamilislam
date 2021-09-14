async function fetchAsync(jsonFile) {
	let data = await (await fetch(jsonFile)).json();
	return data;
}

async function compileAndRender(source, compiledVar, jsonFile, outputEl, bookno, hadithnum, hadithtext){
	await compile(source, compiledVar)
	var filecontents = await fetchAsync (jsonFile);
	await renderTemplate(filecontents, compiledVar, outputEl, bookno, hadithnum, hadithtext)
}

function compile(source, compiledVar) {
	var compiled = dust.compile(source, compiledVar);
	dust.loadSource(compiled);
}

function renderTemplate(filecontents, compiledVar, outputEl,  bookno, hadithnum, hadithtext) {

		if(bookno) filecontents["bookno"] = bookno
		if(hadithnum) filecontents["hadithnum"] = hadithnum
		if(hadithtext) filecontents["hadithtext"] = hadithtext

		console.log(hadithnum,bookno, hadithtext)	

		dust.render(compiledVar, filecontents, function (err, out) {
			document.querySelector(outputEl).innerHTML +=  out;
		});
}

function searchHadith(){
	var params = (new URL(document.location)).searchParams;
	var hadithnum= document.querySelector('#hadithnum').value;
	var hadithtext= document.querySelector('#hadithtext').value;


	if(hadithnum.length != 0){
		var url = document.location.origin + document.location.pathname + '?hadithnum='+ hadithnum;
		document.location.replace(url);
	}
	if(hadithtext.length != 0){
		var url = document.location.origin + document.location.pathname + '?hadithtext='+ hadithtext;
		document.location.replace(url);
	}	
}