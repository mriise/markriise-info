const load = async () => {
	console.log(window.location.hash)
	if(window.location.hash){
		let msg_name = window.location.hash.replace('#', '')
		let discord_html = await fetch(`https://discors.mriise.workers.dev/${msg_name}`,{mode: 'cors'})
		document.getElementById('body').innerHTML = await discord_html.text()
	}
}	
load()
window.onhashchange = load

// function rel_to_abs(url){
//     /* Only accept commonly trusted protocols:
//      * Only data-image URLs are accepted, Exotic flavours (escaped slash,
//      * html-entitied characters) are not supported to keep the function fast */
//   if(/^(https?|file|ftps?|mailto|javascript|data:image\/[^;]{2,9};):/i.test(url))
//          return url; //Url is already absolute

//     var base_url = location.href.match(/^(.+)\/?(?:#.+)?$/)[0]+"/";
//     if(url.substring(0,2) == "//")
//         return location.protocol + url;
//     else if(url.charAt(0) == "/")
//         return location.protocol + "//" + location.host + url;
//     else if(url.substring(0,2) == "./")
//         url = "." + url;
//     else if(/^\s*$/.test(url))
//         return ""; //Empty = Return nothing
//     else url = "../" + url;

//     url = base_url + url;
//     var i=0
//     while(/\/\.\.\//.test(url = url.replace(/[^\/]+\/+\.\.\//g,"")));

//     /* Escape certain characters to prevent XSS */
//     url = url.replace(/\.$/,"").replace(/\/\./g,"").replace(/"/g,"%22")
//             .replace(/'/g,"%27").replace(/</g,"%3C").replace(/>/g,"%3E");
//     return url;
// }