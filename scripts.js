function sendTracker() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://maker.ifttt.com/trigger/Notifies-phone/with/key/b_Yu8_AU_JIDYDYR_WXF5-?value3=donate", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send();
}

sendTracker();
