#!/usr/bin/python

import sys
import string

def prepareCorpus(c):
    splitted = c.split("\n")
    filtered = list(filter(None, splitted))
    result = list(map(lambda x : x.capitalize(), filtered))
    return result

def reverseCorpus(c):
    reversed_corpus = []
    for line in c:
        words = line.split(" ")
        reversed_corpus.insert(0, " ".join(list(reversed(words))))
    return reversed_corpus

def generateDicts(corpus, span):
    startwords = []
    terminals = {}
    wordstats = {}
    for line in corpus:
        words = line.split(" ")
        length = len(words)
        if(span > 1):
            words = [" ".join(words[i : i + span]) for i in range(0, length, span)]
            length = len(words)
        terminals[words[length - 1]] = True
        startwords.insert(0, words[0])
        for i, word in enumerate(words):
            if i < length - 1:
                if word in wordstats:
                    wordstats[word].insert(0, words[i+1])
                else:
                    wordstats[word] = [words[i+1]]
    return (startwords, terminals, wordstats)

def stringListJs (l):
    js = "["
    if len(l) == 0:
        return js + "]"

    js += "\"" + l[0] + "\""
    for item in l[1:]:
        js += ",\"" + item + "\""

    return js + "]"

def boolJs (b):
    if b:
        return "true"
    else:
        return "false"

def dictionaryJs (d, p):
    js = "{"
    if not bool(d):
        return js + "}"

    l = list(d.items())
    js += "\"" + l[0][0] + "\":" + p(l[0][1])
    for key, words in l[1:]:
        js += ",\"" + key + "\":" + p(words)

    return js + "}"

def prepareJsVars(suffix, startwords, terminals, wordstats):
    startwords_js = "var startwords" + suffix + "="
    terminals_js = "var terminals"+ suffix + "="
    wordstats_js = "var wordstats"+ suffix + "="

    startwords_js += stringListJs(startwords) + ";\n"
    terminals_js += dictionaryJs(terminals, boolJs) + ";\n"
    wordstats_js += dictionaryJs(wordstats, stringListJs) + ";\n"

    js = startwords_js + terminals_js + wordstats_js
    return js

def markovJs (suffix):
    markov_js = "var markov" + suffix + "="
    markov_js += "new Markov(startwords" + suffix + ","
    markov_js += "terminals" + suffix + ","
    markov_js += "wordstats" + suffix + ");"
    return markov_js

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print ("Specify 1 corpus files: emojicorpus")
        exit()

    with open(sys.argv[1], 'r') as corpus:
        lyrics = corpus.read()

    js = []
    prepared_lyrics = prepareCorpus(lyrics)

    (s, t, w) = generateDicts(prepared_lyrics, 2)
    js.append(prepareJsVars("emojis", s, t, w))

    with open("js/markov.js", 'r') as markovjs:
        m = markovjs.read()
        js.append(m)

    js.append(markovJs("emojis"))

    with open("js/functions.js", 'r') as cjs:
        cm = cjs.read()
        js.append(cm)

    with open("js/emojis.js", "w") as emojis:
        emojis.write("\n".join(js))
