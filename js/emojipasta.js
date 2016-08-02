$.getScript("js/jMinEmoji.min.js");

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

function previewpasta(){
  var emojipasta = document.getElementById("emojipasta");
  var previewpasta = document.getElementById("previewpasta");
  var emojitext = emojipasta.value;
  emojipasta.style.display = "none";
  previewpasta.innerHTML = emojitext;
  previewpasta.style.display = "block";
  $('.preview').minEmoji();
};
