export default function speech(name1, score1, name2, score2) {

    const speechVoice = {
        name: "Alex",
        lang: "en-US"

    }

    const msg = new SpeechSynthesisUtterance();
    msg.volume = 0.8;
    msg.rate = 1;
    msg.pitch = 1;

    if (score2 > score1) {
        msg.text = `${name1} You are losing by score ${score2 - score1}`
    } else if (score1 > score2) {
        msg.text = `${name2} You are losing by score ${score1 - score2}`
    } else if (score1 === score2) {
        msg.text = `${name1} and ${name2} both have same score`
    }

    const voice = speechVoice;
    msg.voiceURI = voice.name
    msg.lang = voice.lang

    speechSynthesis.speak(msg)

}