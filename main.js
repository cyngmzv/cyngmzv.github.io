let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #C227DB;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #C227DB;">Estudio seguridad en IT y hago contenido de tecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
