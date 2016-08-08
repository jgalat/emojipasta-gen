$.getScript("js/jMinEmojiApple.min.js");
$.getScript("js/jMinEmojiAndroid.min.js");

function emojipasta() {
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  previewpasta.style.display = "none";
  emojipasta.style.display = "block";
  setactivetab(0);
  $.get("gen/", function (data){
      emojipasta.value = data;
    });
};

function copypasta(){
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  previewpasta.style.display = "none";
  emojipasta.style.display = "block";
  setactivetab(0);
  emojipasta.select();
  document.execCommand("copy");
};

function setactivetab(n){
  var text = document.getElementById("text");
  var apple = document.getElementById("apple");
  var android = document.getElementById("android");
  switch(n) {
    case 0:
      text.classList.add("active");
      apple.classList.remove("active");
      android.classList.remove("active");
      break;
    case 1:
      apple.classList.add("active");
      text.classList.remove("active");
      android.classList.remove("active");
      break;
    case 2:
      android.classList.add("active");
      text.classList.remove("active");
      apple.classList.remove("active");
      break;
    default:
      break;
  }
};

function previewpasta(n){
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  var emojitext = emojipasta.value;
  previewpasta.innerHTML = emojitext;
  setactivetab(n);
  switch(n) {
    case 0:
      previewpasta.style.display = "none";
      emojipasta.style.display = "block";
      break;
    case 1:
      emojipasta.style.display = "none";
      previewpasta.style.display = "block";
      $('.preview').minEmojiApple();
      break;
    case 2:
      emojipasta.style.display = "none";
      previewpasta.style.display = "block";
      $('.preview').minEmojiAndroid();
      break;
    default:
      break;
  }
};
