function upload() {
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;

  var image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can");
  image.drawTo(canvas);
}
