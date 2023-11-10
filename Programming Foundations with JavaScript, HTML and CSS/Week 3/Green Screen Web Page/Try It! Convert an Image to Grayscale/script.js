var originalImage;
var grayscaleImage;

function upload() {
  var fileinput = document.getElementById("finput");
  var canvas = document.getElementById("originalCanvas");

  originalImage = new SimpleImage(fileinput);
  originalImage.drawTo(canvas);

  // Reset the grayscale canvas
  var grayscaleCanvas = document.getElementById("grayscaleCanvas");
  grayscaleCanvas.getContext("2d").clearRect(0, 0, grayscaleCanvas.width, grayscaleCanvas.height);
}

function makeGray() {
  if (originalImage) {
    grayscaleImage = new SimpleImage(originalImage.getWidth(), originalImage.getHeight());
    for (var pixel of originalImage.values()) {
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
      grayscaleImage.setPixel(pixel.getX(), pixel.getY(), pixel);
    }

    var grayscaleCanvas = document.getElementById("grayscaleCanvas");
    grayscaleImage.drawTo(grayscaleCanvas);
  } else {
    alert("Please upload an image first.");
  }
}
