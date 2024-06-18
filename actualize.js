var newDomain = "miradres2.com", // новый домен
	oldDomains = "resadg.net,miradres.com,arcchid.link,aderom.net,cadmist.com,gencit.info,plplayer.online,playep.pro",
		delay = 2000;

oldDomains = oldDomains.split(","),
oldDomains.push(newDomain);

replace();
console.log(oldDomains, newDomain);

function replace() {
	setTimeout(replace, delay);
	
	Array.prototype.find.call(document.body.getElementsByTagName("iframe"), function (elem) {
		var src = elem.src;
		oldDomains.forEach((item) => {
			if (src.includes(item)) {
				if (item == newDomain) return;
				
				elem.src = src.replace(item, newDomain);
				console.log(elem.src);
			}
		});
	});
}
