function speak(text){
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.9; // slower for older users
  msg.pitch = 1;
  window.speechSynthesis.speak(msg);
}