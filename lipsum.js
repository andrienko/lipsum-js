parent.generators.lipsum = {
    generate: function (num_sentences, min_words,max_words) {

        if(num_sentences==undefined)num_sentences=10;
        if(min_words==undefined)min_words=3;
        if(max_words==undefined)max_words=10;

        var sentences = [];

        for(var sn=0;sn<num_sentences;sn++){
            var sentence = this.generateSentence(min_words,max_words);
            sentences.push(sentence);
        }

        return sentences.join(' ');

    },
    generateSentence:function(min_words,max_words){

        var words = this.getWords(min_words,max_words);
        var sentence = words.join(' ')+".";
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        return sentence;

    },
    getWords:function(min_words,max_words){

        var num_words = Math.floor(Math.random()*(max_words-min_words))+min_words;

        var words = [];
        for(var wn = 0;wn<num_words;wn++){
            var word = this.words[Math.floor(Math.random()*this.words.length)];
            words.push(word);
        }

        return words;
    },
    words: [
        "a","ac","accumsan","adipiscing","aenean","aliquam","aliquet","amet","ante","arcu","at","auctor","augue",
        "bibendum","blandit","commodo","condimentum","congue","consectetur","consequat","convallis","cras","cum",
        "curabitur","cursus","dapibus","diam","dictum","dictumst","dignissim","dis","dolor","donec","dui","duis",
        "egestas","eget","eleifend","elementum","elit","enim","erat","eros","est","et","etiam","eu","euismod",
        "facilisi","facilisis","fames","faucibus","felis","fermentum","feugiat","fringilla","fusce","gravida",
        "habitant","habitasse","hac","hendrerit","iaculis","id","imperdiet","in","integer","interdum","ipsum",
        "justo","lacinia","lacus","laoreet","lectus","leo","libero","ligula","lobortis","lorem","luctus","maecenas",
        "magna","magnis","malesuada","massa","mattis","mauris","metus","mi","molestie","mollis","montes","morbi",
        "mus","nam","nascetur","natoque","nec","neque","netus","nibh","nisi","nisl","non","nulla","nullam","nunc",
        "odio","orci","ornare","parturient","pellentesque","penatibus","pharetra","phasellus","placerat","platea",
        "porta","porttitor","posuere","potenti","praesent","pretium","proin","pulvinar","purus","quam","quis",
        "quisque","rhoncus","ridiculus","risus","rutrum","sagittis","sapien","scelerisque","sed","sem","semper",
        "senectus","sit","sociis","sodales","sollicitudin","suscipit","suspendisse","tellus","tempor","tempus",
        "tincidunt","tortor","tristique","turpis","ullamcorper","ultrices","ultricies","urna","ut","varius",
        "vehicula","vel","velit","venenatis","vestibulum","vitae","vivamus","viverra","volutpat","vulputate"
    ]
}