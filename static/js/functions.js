var emojis;

$(function () {
  emojis = function () {
    var i, result = "";
    var emoji = $('#emojis');

    var  result =  markovemojis.makeChain(40);

    emoji.val(result);
  };
});
