$.getScript("js/jMinEmoji.js");

function emojipasta() {
  setactivetab(0);
  $.get("gen/", function (data){
      $("#emojipasta").val(data);
    });
};

function copypasta(){
  setactivetab(0);
  $("#emojipasta").select();
  document.execCommand("copy");
};

function setactivetab(n){
  $(".tabs .tab").removeClass("active");
  switch(n) {
    case 0:
      $("#previewpasta").css("display", "none");
      $("#emojipasta").css("display", "block");
      $("#text").addClass("active");
      break;
    case 1:
      $("#emojipasta").css("display", "none");
      $("#previewpasta").css("display", "block");
      $("#apple").addClass("active");
      break;
    case 2:
      $("#emojipasta").css("display", "none");
      $("#previewpasta").css("display", "block");
      $("#android").addClass("active");
      break;
    default:
      break;
  }
};

function previewpasta(n){
  var emojitext = $("#emojipasta").val();
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
