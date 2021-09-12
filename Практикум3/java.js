var nouns = ['море', 'солнце', 'озеро', 'молоко', 'животное', 'существо'];
var verbs = ['пришло', 'ушло', 'убежало', 'спало', 'спряталось', 'улетело'];
var adjectives = ['хорошее', 'черное', 'зимнее', 'сложное', 'синее', 'тихое'];
var styles = ['cl1', 'cl2', 'cl3', 'cl4', 'cl5', 'cl6'];
function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let all = document.querySelector("#task");
let timer = setInterval(function() {
	let key1 = rnd(0, nouns.length - 1);
  let key3 = rnd(0, verbs.length - 1);
  let key2 = rnd(0, adjectives.length - 1);
  let sp = document.createElement("span");
  sp.innerHTML = adjectives[key2] + " " + nouns[key1] + " " + verbs[key3] + "<br>";
  let key4 = rnd(0, styles.length - 1);
  sp.classList.add(styles[key4]);
	all.append(sp)
}, 100);
