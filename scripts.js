async function getExternalIp() {
	const url = "https://api.ipify.org?format=json";
	let ipAddress = "";
	try {
		await fetch(url)
			.then(res => res.json())
			.then(res => ipAddress = res.ip);
	} catch (err) {
		console.log(`Error: ${err}`)
	}
	return ipAddress;
}

async function sendTracker() {
	const ip = await getExternalIp();
	const platform = `${navigator.platform}, ${navigator.vendor}`;
	const site = "donate";
	const url = `https://maker.ifttt.com/trigger/site_visited/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value1=${ip}&value2=${platform}&value3=${site}`;
	const xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send();
}

sendTracker();
