Lorem ipsum generator writtem in JS
===
Disregard my odd codestyle.

    // Will produce a sentence containing from 3 to 10 words
    lipsumjs.generateSentence(3,10);
    
    // Will produce 10 sentences containing from 3 to 10 words, but first replaced
    // with canonical "Lorem ipsum dolor sit amet.." sentence
    lipsumjs.generate(10, 3, 10, addFirstCanon);
    
    // Will produce 10 paragraphs of variotic number of sentences
    lipsumjs.generateParagraphs(10);
    