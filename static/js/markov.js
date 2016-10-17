function choice (a) {
  return a[Math.floor(a.length * Math.random())];
};

function markov(startwords, terminals, wordstats) {

  this.terminals = terminals;
  this.startwords = startwords;
  this.wordstats = wordstats;
  this.last_word = "";

  this.findStart = function (start) {
    var result = [];
    var reg = new RegExp(start, 'i');
    this.startwords.forEach (function (item, index) {
      if(reg.test(item))
        result.push(item)
    });
    return choice(result);
  }

  this.makeChain = function (min_length, start = null) {
    if(!start)
      word = choice(this.startwords);
    else
      word = this.findStart(start);
    var chain = [word];
    while (this.wordstats.hasOwnProperty(word)) {
      var next_words = this.wordstats[word];
      word = choice(next_words);
      chain.push(word);
      if (chain.length > min_length && this.terminals.hasOwnProperty(word)) break;
    }
    if (chain.length < min_length)
      return this.makeChain(min_length, start);
    this.last_word = word;
    return chain.join(' ');
  };
};
