
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 183
});

typewriter
  .typeString("Non est ad astra mollis e terris via")
  .pauseFor(900)
  .typeString("...")
  .pauseFor(2100)

  .start();



