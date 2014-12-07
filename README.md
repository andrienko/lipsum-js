Lorem ipsum generator writtem in JS
===

Basic stuff
---

    // Will produce a sentence containing from 3 to 10 words
    lipsumjs.generateSentence(3,10);
    
    // Will produce 10 sentences containing from 3 to 10 words, but first replaced
    // with canonical "Lorem ipsum dolor sit amet.." sentence
    lipsumjs.generate(10, 3, 10, addFirstCanon);
    
    // Will produce 10 paragraphs of variotic number of sentences (p-tags)
    lipsumjs.generateParagraphs(10);
    
    // Same as previous, only tags will be divs
    lipsumjs.generateParagraphs(10,'div');
    
Building own sentences
---
    
    // Will return an array containing from 3 to 10 words
    lipsumjs.getWords(3,10);
    
    // Will return an array containing from 3 to 10 words, only words will be taken
    // from words_base variable, which should be array
    lipsumjs.getWords(3,10,words_base);
    
    // Will build sentence from words in array
    lipsumjs.buildSentenceFromWords(words_array);
    
    // Will build sentence of 3 to 10 words containing up to 2 (Math.floor(10/4)) commas
    var words_array = lipsumjs.getWords(3,10);
    var commas = lipsumjs.getCommaIndexes(words_array.length);
    lipsumjs.buildSentenceFromWords(words_array, commas);
    