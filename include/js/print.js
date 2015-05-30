function convertNprint(nodes ,fontSize){
	for(var i=0,j=nodes.length;i<j;i++){
		node = nodes[i];
		node.style.fontFamily = "Meezan";
		node.style.fontSize = fontSize;
		node.innerHTML = unicode2meezan(node.innerHTML);
	}
}

function unicode2meezan(str) {
	var meezan = str;
	meezan = meezan.replace(/,/g, ">");

	meezan = meezan.replace(/ஜௌ/g, "n\[s");
	meezan = meezan.replace(/ஜோ/g, "N\[h");
	meezan = meezan.replace(/ஜொ/g, "n\[h");
	meezan = meezan.replace(/ஜா/g, "\[h");
	meezan = meezan.replace(/ஜி/g, "\[p");
	meezan = meezan.replace(/ஜீ/g, "\[P");
	meezan = meezan.replace(/ஜு/g, "\[{");
	meezan = meezan.replace(/ஜூ/g, "\[_");
	meezan = meezan.replace(/ஜெ/g, "n\[");
	meezan = meezan.replace(/ஜே/g, "N\[");
	meezan = meezan.replace(/ஜை/g, "i\[");
	meezan = meezan.replace(/ஜ்/g, "\[;");
	meezan = meezan.replace(/ஜ/g, "\[");




	meezan = meezan.replace(/கௌ/g, "nfs");
	meezan = meezan.replace(/கோ/g, "Nfh");
	meezan = meezan.replace(/கொ/g, "nfh");
	meezan = meezan.replace(/கா/g, "fh");
	meezan = meezan.replace(/கி/g, "fp");
	meezan = meezan.replace(/கீ/g, "fP");
	meezan = meezan.replace(/கு/g, "F");
	meezan = meezan.replace(/கூ/g, "$");
	meezan = meezan.replace(/கெ/g, "nf");
	meezan = meezan.replace(/கே/g, "Nf");
	meezan = meezan.replace(/கை/g, "if");
	meezan = meezan.replace(/க்/g, "f;");
	meezan = meezan.replace(/க/g, "f");


	meezan = meezan.replace(/ஙௌ/g, "nqs");
	meezan = meezan.replace(/ஙோ/g, "Nqh");
	meezan = meezan.replace(/ஙொ/g, "nqh");
	meezan = meezan.replace(/ஙா/g, "qh");
	meezan = meezan.replace(/ஙி/g, "qp");
	meezan = meezan.replace(/ஙீ/g, "qP");
	meezan = meezan.replace(/ஙு/g, "*");
	meezan = meezan.replace(/ஙூ/g, "*");
	meezan = meezan.replace(/ஙெ/g, "nq");
	meezan = meezan.replace(/ஙே/g, "Nq");
	meezan = meezan.replace(/ஙை/g, "iq");
	meezan = meezan.replace(/ங்/g, "q;");
	meezan = meezan.replace(/ங/g, "q");



	meezan = meezan.replace(/சௌ/g, "nrs");
	meezan = meezan.replace(/சோ/g, "Nrh");
	meezan = meezan.replace(/சொ/g, "nrh");
	meezan = meezan.replace(/சா/g, "rh");
	meezan = meezan.replace(/சி/g, "rp");
	meezan = meezan.replace(/சீ/g, "rP");
	meezan = meezan.replace(/சு/g, "R");
	meezan = meezan.replace(/சூ/g, "R+");
	meezan = meezan.replace(/செ/g, "nr");
	meezan = meezan.replace(/சே/g, "Nr");
	meezan = meezan.replace(/சை/g, "ir");
	meezan = meezan.replace(/ச்/g, "r;");
	meezan = meezan.replace(/ச/g, "r");


	meezan = meezan.replace(/ஞௌ/g, "nQs");
	meezan = meezan.replace(/ஞோ/g, "NQh");
	meezan = meezan.replace(/ஞொ/g, "nQh");
	meezan = meezan.replace(/ஞா/g, "Qh");
	meezan = meezan.replace(/ஞி/g, "Qp");
	meezan = meezan.replace(/ஞீ/g, "QP");
	meezan = meezan.replace(/ஞு/g, "*");
	meezan = meezan.replace(/ஞூ/g, "*");
	meezan = meezan.replace(/ஞெ/g, "nQ");
	meezan = meezan.replace(/ஞே/g, "NQ");
	meezan = meezan.replace(/ஞை/g, "iQ");
	meezan = meezan.replace(/ஞ்/g, "Q;");
	meezan = meezan.replace(/ஞ/g, "Q");



	meezan = meezan.replace(/டௌ/g, "nls");
	meezan = meezan.replace(/டோ/g, "Nlh");
	meezan = meezan.replace(/டொ/g, "nlh");
	meezan = meezan.replace(/டா/g, "lh");
	meezan = meezan.replace(/டி/g, "b");
	meezan = meezan.replace(/டீ/g, "B");
	meezan = meezan.replace(/டு/g, "L");
	meezan = meezan.replace(/டூ/g, "^");
	meezan = meezan.replace(/டெ/g, "nl");
	meezan = meezan.replace(/டே/g, "Nl");
	meezan = meezan.replace(/டை/g, "il");
	meezan = meezan.replace(/ட்/g, "l;");
	meezan = meezan.replace(/ட/g, "l");


	meezan = meezan.replace(/ணௌ/g, "nzs");
	meezan = meezan.replace(/ணோ/g, "Nzh");
	meezan = meezan.replace(/ணொ/g, "nzh");
	meezan = meezan.replace(/ணா/g, "zh");
	meezan = meezan.replace(/ணி/g, "zp");
	meezan = meezan.replace(/ணீ/g, "zP");
	meezan = meezan.replace(/ணு/g, "Z");
	meezan = meezan.replace(/ணூ/g, "Z}");
	meezan = meezan.replace(/ணெ/g, "nz");
	meezan = meezan.replace(/ணே/g, "Nz");
	meezan = meezan.replace(/ணை/g, "iz");
	meezan = meezan.replace(/ண்/g, "z;");
	meezan = meezan.replace(/ண/g, "z");

	meezan = meezan.replace(/தௌ/g, "njs");
	meezan = meezan.replace(/தோ/g, "Njh");
	meezan = meezan.replace(/தொ/g, "njh");
	meezan = meezan.replace(/தா/g, "jh");
	meezan = meezan.replace(/தி/g, "jp");
	meezan = meezan.replace(/தீ/g, "jP");
	meezan = meezan.replace(/து/g, "J");
	meezan = meezan.replace(/தூ/g, "J}");
	meezan = meezan.replace(/தெ/g, "nj");
	meezan = meezan.replace(/தே/g, "Nj");
	meezan = meezan.replace(/தை/g, "ij");
	meezan = meezan.replace(/த்/g, "j;");
	meezan = meezan.replace(/த/g, "j");



	meezan = meezan.replace(/நௌ/g, "nes");
	meezan = meezan.replace(/நோ/g, "Neh");
	meezan = meezan.replace(/நொ/g, "neh");
	meezan = meezan.replace(/நா/g, "eh");
	meezan = meezan.replace(/நி/g, "ep");
	meezan = meezan.replace(/நீ/g, "eP");
	meezan = meezan.replace(/நு/g, "E");
	meezan = meezan.replace(/நூ/g, "E}");
	meezan = meezan.replace(/நெ/g, "ne");
	meezan = meezan.replace(/நே/g, "Ne");
	meezan = meezan.replace(/நை/g, "ie");
	meezan = meezan.replace(/ந்/g, "e;");
	meezan = meezan.replace(/ந/g, "e");


	meezan = meezan.replace(/னௌ/g, "nds");
	meezan = meezan.replace(/னோ/g, "Ndh");
	meezan = meezan.replace(/னொ/g, "ndh");
	meezan = meezan.replace(/னா/g, "dh");
	meezan = meezan.replace(/னி/g, "dp");
	meezan = meezan.replace(/னீ/g, "dP");
	meezan = meezan.replace(/னு/g, "D");
	meezan = meezan.replace(/னூ/g, "D}");
	meezan = meezan.replace(/னெ/g, "nd");
	meezan = meezan.replace(/னே/g, "Nd");
	meezan = meezan.replace(/னை/g, "id");
	meezan = meezan.replace(/ன்/g, "d;");
	meezan = meezan.replace(/ன/g, "d");


	meezan = meezan.replace(/பௌ/g, "ngs");
	meezan = meezan.replace(/போ/g, "Ngh");
	meezan = meezan.replace(/பொ/g, "ngh");
	meezan = meezan.replace(/பா/g, "gh");
	meezan = meezan.replace(/பி/g, "gp");
	meezan = meezan.replace(/பீ/g, "gP");
	meezan = meezan.replace(/பு/g, "G");
	meezan = meezan.replace(/பூ/g, "G+");
	meezan = meezan.replace(/பெ/g, "ng");
	meezan = meezan.replace(/பே/g, "Ng");
	meezan = meezan.replace(/பை/g, "ig");
	meezan = meezan.replace(/ப்/g, "g;");
	meezan = meezan.replace(/ப/g, "g");


	meezan = meezan.replace(/மௌ/g, "nks");
	meezan = meezan.replace(/மோ/g, "Nkh");
	meezan = meezan.replace(/மொ/g, "nkh");
	meezan = meezan.replace(/மா/g, "kh");
	meezan = meezan.replace(/மி/g, "kp");
	meezan = meezan.replace(/மீ/g, "kP");
	meezan = meezan.replace(/மு/g, "K");
	meezan = meezan.replace(/மூ/g, "%");
	meezan = meezan.replace(/மெ/g, "nk");
	meezan = meezan.replace(/மே/g, "Nk");
	meezan = meezan.replace(/மை/g, "ik");
	meezan = meezan.replace(/ம்/g, "k;");
	meezan = meezan.replace(/ம/g, "k");


	meezan = meezan.replace(/யௌ/g, "nas");
	meezan = meezan.replace(/யோ/g, "Nah");
	meezan = meezan.replace(/யொ/g, "nah");
	meezan = meezan.replace(/யா/g, "ah");
	meezan = meezan.replace(/யி/g, "ap");
	meezan = meezan.replace(/யீ/g, "aP");
	meezan = meezan.replace(/யு/g, "A");
	meezan = meezan.replace(/யூ/g, "A+");
	meezan = meezan.replace(/யெ/g, "na");
	meezan = meezan.replace(/யே/g, "Na");
	meezan = meezan.replace(/யை/g, "ia");
	meezan = meezan.replace(/ய்/g, "a;");
	meezan = meezan.replace(/ய/g, "a");

	meezan = meezan.replace(/ரௌ/g, "nus");
	meezan = meezan.replace(/ரோ/g, "Nuh");
	meezan = meezan.replace(/ரொ/g, "nuh");
	meezan = meezan.replace(/ரா/g, "uh");
	meezan = meezan.replace(/ரி/g, "up");
	meezan = meezan.replace(/ரீ/g, "uP");
	meezan = meezan.replace(/ரு/g, "U");
	meezan = meezan.replace(/ரூ/g, "\&");
	meezan = meezan.replace(/ரெ/g, "nu");
	meezan = meezan.replace(/ரே/g, "Nu");
	meezan = meezan.replace(/ரை/g, "iu");
	meezan = meezan.replace(/ர்/g, "u;");
	meezan = meezan.replace(/ர/g, "u");


	meezan = meezan.replace(/லௌ/g, "nys");
	meezan = meezan.replace(/லோ/g, "Nyh");
	meezan = meezan.replace(/லொ/g, "nyh");
	meezan = meezan.replace(/லா/g, "yh");
	meezan = meezan.replace(/லி/g, "yp");
	meezan = meezan.replace(/லீ/g, "yP");
	meezan = meezan.replace(/லு/g, "Y");
	meezan = meezan.replace(/லூ/g, "Y}");
	meezan = meezan.replace(/லெ/g, "ny");
	meezan = meezan.replace(/லே/g, "Ny");
	meezan = meezan.replace(/லை/g, "iy");
	meezan = meezan.replace(/ல்/g, "y;");
	meezan = meezan.replace(/ல/g, "y");


	meezan = meezan.replace(/ளௌ/g, "nss");
	meezan = meezan.replace(/ளோ/g, "Nsh");
	meezan = meezan.replace(/ளொ/g, "nsh");
	meezan = meezan.replace(/ளா/g, "sh");
	meezan = meezan.replace(/ளி/g, "sp");
	meezan = meezan.replace(/ளீ/g, "sP");
	meezan = meezan.replace(/ளு/g, "S");
	meezan = meezan.replace(/ளூ/g, "Sh");
	meezan = meezan.replace(/ளெ/g, "ns");
	meezan = meezan.replace(/ளே/g, "Ns");
	meezan = meezan.replace(/ளை/g, "is");
	meezan = meezan.replace(/ள்/g, "s;");
	meezan = meezan.replace(/ள/g, "s");

	meezan = meezan.replace(/வௌ/g, "nts");
	meezan = meezan.replace(/வோ/g, "Nth");
	meezan = meezan.replace(/வொ/g, "nth");
	meezan = meezan.replace(/வா/g, "th");
	meezan = meezan.replace(/வி/g, "tp");
	meezan = meezan.replace(/வீ/g, "tP");
	meezan = meezan.replace(/வு/g, "T");
	meezan = meezan.replace(/வூ/g, "T+");
	meezan = meezan.replace(/வெ/g, "nt");
	meezan = meezan.replace(/வே/g, "Nt");
	meezan = meezan.replace(/வை/g, "it");
	meezan = meezan.replace(/வ்/g, "t;");
	meezan = meezan.replace(/வ/g, "t");


	meezan = meezan.replace(/ழௌ/g, "nos");
	meezan = meezan.replace(/ழோ/g, "Noh");
	meezan = meezan.replace(/ழொ/g, "noh");
	meezan = meezan.replace(/ழா/g, "oh");
	meezan = meezan.replace(/ழி/g, "op");
	meezan = meezan.replace(/ழீ/g, "oP");
	meezan = meezan.replace(/ழு/g, "O");
	meezan = meezan.replace(/ழூ/g, "*");
	meezan = meezan.replace(/ழெ/g, "no");
	meezan = meezan.replace(/ழே/g, "No");
	meezan = meezan.replace(/ழை/g, "io");
	meezan = meezan.replace(/ழ்/g, "o;");
	meezan = meezan.replace(/ழ/g, "o");

	meezan = meezan.replace(/றௌ/g, "nws");
	meezan = meezan.replace(/றோ/g, "Nwh");
	meezan = meezan.replace(/றொ/g, "nwh");
	meezan = meezan.replace(/றா/g, "wh");
	meezan = meezan.replace(/றி/g, "wp");
	meezan = meezan.replace(/றீ/g, "wP");
	meezan = meezan.replace(/று/g, "W");
	meezan = meezan.replace(/றூ/g, "W}");
	meezan = meezan.replace(/றெ/g, "nw");
	meezan = meezan.replace(/றே/g, "Nw");
	meezan = meezan.replace(/றை/g, "iw");
	meezan = meezan.replace(/ற்/g, "w;");
	meezan = meezan.replace(/ற/g, "w");

	meezan = meezan.replace(/ஹௌ/g, "n`s");
	meezan = meezan.replace(/ஹோ/g, "N`h");
	meezan = meezan.replace(/ஹொ/g, "n`h");
	meezan = meezan.replace(/ஹா/g, "`h");
	meezan = meezan.replace(/ஹி/g, "`p");
	meezan = meezan.replace(/ஹீ/g, "`P");
	meezan = meezan.replace(/ஹு/g, "{`");
	meezan = meezan.replace(/ஹூ/g, "`_");
	meezan = meezan.replace(/ஹெ/g, "n`");
	meezan = meezan.replace(/ஹே/g, "N`");
	meezan = meezan.replace(/ஹை/g, "i`");
	meezan = meezan.replace(/ஹ்/g, "`;");
	meezan = meezan.replace(/ஹ/g, "`");

	meezan = meezan.replace(/ஷௌ/g, "n\\s");
	meezan = meezan.replace(/ஷோ/g, "N\\h");
	meezan = meezan.replace(/ஷொ/g, "n\\h");
	meezan = meezan.replace(/ஷா/g, "\\h");
	meezan = meezan.replace(/ஷி/g, "\\p");
	meezan = meezan.replace(/ஷீ/g, "\\P");
	meezan = meezan.replace(/ஷு/g, "\{");
	meezan = meezan.replace(/ஷூ/g, "\\\_");
	meezan = meezan.replace(/ஷெ/g, "n\\");
	meezan = meezan.replace(/ஷே/g, "N\\");
	meezan = meezan.replace(/ஷை/g, "i\\");
	meezan = meezan.replace(/ஷ்/g, "\\;");
	meezan = meezan.replace(/ஷ/g, "\\");

	meezan = meezan.replace(/ஸௌ/g, "n]s");
	meezan = meezan.replace(/ஸோ/g, "N]h");
	meezan = meezan.replace(/ஸொ/g, "n]h");
	meezan = meezan.replace(/ஸா/g, "]h");
	meezan = meezan.replace(/ஸி/g, "]p");
	meezan = meezan.replace(/ஸீ/g, "]P");
	meezan = meezan.replace(/ஸு/g, "]{");
	meezan = meezan.replace(/ஸூ/g, "]_");
	meezan = meezan.replace(/ஸெ/g, "n]");
	meezan = meezan.replace(/ஸே/g, "N]");
	meezan = meezan.replace(/ஸை/g, "i]");
	meezan = meezan.replace(/ஸ்/g, "];");
	meezan = meezan.replace(/ஸ/g, "]");


	meezan = meezan.replace(/அ/g, "m");
	meezan = meezan.replace(/ஆ/g, "M");
	meezan = meezan.replace(/இ/g, ",");
	meezan = meezan.replace(/ஈ/g, "<");
	meezan = meezan.replace(/உ/g, "c");
	meezan = meezan.replace(/ஊ/g, "C");
	meezan = meezan.replace(/எ/g, "v");
	meezan = meezan.replace(/ஏ/g, "V");
	meezan = meezan.replace(/ஐ/g, "I");
	meezan = meezan.replace(/ஒ/g, "x")
	meezan = meezan.replace(/ஓ/g, "X");
	meezan = meezan.replace(/ஔ/g, "xs");
	meezan = meezan.replace(/ஃ/g, "\/");
	meezan = meezan.replace(/ஸ்ரீ/g, "=");

	meezan = meezan.replace(/வூ/g, "t+");
	meezan = meezan.replace(/பூ/g, "G+");
	meezan = meezan.replace(/யூ/g, "A+");
	meezan = meezan.replace(/ஹு/g, "`{");
	meezan = meezan.replace(/ஜு/g, "[{");
	meezan = meezan.replace(/ஸு/g, "]{");
	meezan = meezan.replace(/ஷு/g, "\{");
	meezan = meezan.replace(/யூ/g, "A+");
	meezan = meezan.replace(/ா/g, "h");
	meezan = meezan.replace(/ெ/g, "n");
	meezan = meezan.replace(/ே/g, "N");
	meezan = meezan.replace(/ை/g, "i");
	meezan = meezan.replace(/ு/g, "{");
	meezan = meezan.replace(/ூ/g, "_");
	meezan = meezan.replace(/ி/g, "p");
	meezan = meezan.replace(/ீ/g, "P");

	return meezan;
}