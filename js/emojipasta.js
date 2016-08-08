$.getScript("js/jMinEmojiApple.min.js");
$.getScript("js/jMinEmojiAndroid.min.js");

function emojipasta() {
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  previewpasta.style.display = "none";
  emojipasta.style.display = "block";
  $.get("gen/", function (data){
      emojipasta.value = data;
    });
};

function copypasta(){
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  emojipasta.style.display = "block";
  previewpasta.style.display = "none";
  emojipasta.select();
  document.execCommand("copy");
};

function previewpasta(n){
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  var emojitext = emojipasta.value;
  emojipasta.style.display = "none";
  previewpasta.innerHTML = emojitext;
  previewpasta.style.display = "block";
  switch(n) {
    case 0:
      $('.preview').minEmojiApple();
      break;
    case 1:
      $('.preview').minEmojiAndroid();
      break;
    default:
      break;
  }
};
