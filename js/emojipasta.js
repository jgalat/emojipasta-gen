$.getScript("js/jMinEmoji.js");

function emojipasta() {
  var emojipasta = document.getElementById("emojipasta");
  setactivetab(0);
  $.get("gen/", function (data){
      emojipasta.value = data;
    });
};

function copypasta(){
  var emojipasta = document.getElementById("emojipasta");
  setactivetab(0);
  emojipasta.select();
  document.execCommand("copy");
};

function setactivetab(n){
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  var text = document.getElementById("text");
  var apple = document.getElementById("apple");
  var android = document.getElementById("android");
  switch(n) {
    case 0:
      previewpasta.style.display = "none";
      emojipasta.style.display = "block";
      text.classList.add("active");
      apple.classList.remove("active");
      android.classList.remove("active");
      break;
    case 1:
      emojipasta.style.display = "none";
      previewpasta.style.display = "block";
      apple.classList.add("active");
      text.classList.remove("active");
      android.classList.remove("active");
      break;
    case 2:
      emojipasta.style.display = "none";
      previewpasta.style.display = "block";
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
      break;
    case 1:
      $('.preview').minEmoji("apple");
      break;
    case 2:
      $('.preview').minEmoji("android");
      break;
    default:
      break;
  }
};
