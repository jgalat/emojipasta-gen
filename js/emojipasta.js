function emojipasta() {
  setactivetab(0);
  emojis();
};

function copypasta(){
  setactivetab(0);
  $("#emojis").select();
  document.execCommand("copy");
};

function setactivetab(n){
  $(".tabs .tab").removeClass("active");
  switch(n) {
    case 0:
      $("#previewpasta").css("display", "none");
      $("#emojis").css("display", "block");
      $("#text").addClass("active");
      break;
    case 1:
      $("#emojis").css("display", "none");
      $("#previewpasta").css("display", "block");
      $("#apple").addClass("active");
      break;
    case 2:
      $("#emojis").css("display", "none");
      $("#previewpasta").css("display", "block");
      $("#android").addClass("active");
      break;
    default:
      break;
  }
};

function previewpasta(n){
  var emojitext = $("#emojis").val();
  $("#previewpasta").html(emojitext);
  setactivetab(n);
  switch(n) {
    case 0:
      break;
    case 1:
      $(".preview").minEmoji("apple");
      break;
    case 2:
      $(".preview").minEmoji("android");
      break;
    default:
      break;
  }
};
