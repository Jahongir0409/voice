let button = document.querySelector('button')
let heading = document.querySelector('h1')
let SpeechRecognition = window.webkitSpeechRecognition
let voice = new SpeechRecognition()
voice.lang = "en-En"
voice.continuous = false
voice.start()

button.onclick = () => {
	voice.start ()

	voice.onresult = (event) => {
		let result = event.results[0][0]['transcript']
		heading.textContent = result
	}
	voice.onspeechend = function() {
		voice.stop()
	}
}