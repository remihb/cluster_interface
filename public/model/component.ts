// / <reference path="../../node.d.ts" />

'use strict';

// var createImage = require('../docker.js')

interface Component_Interface{
    // name: string;
    // description?: string;

    getName(): string;
    setName(name: string);
    getDescription(): string;
    setDescription(description: string);
    createModule(): Module_Interface;
}

class Component implements Component_Interface{
    name: string;
    description?: string;
    image: string;

    getName(): string{
        return this.name;
    }
    setName(name: string){
        this.name = name;
    }
    getDescription(): string{
        return this.description;
    }
    setDescription(description: string){
        this.description = description;
    }
    createModule(): Module_Interface{
        return null;
    }
};

class WordCounter extends Component {
    constructor (){
        super();
        this.name = "WordCounter";
        this.description = "Count the number of words in a given file";

    }
    createModule(): Module_Interface{
        return new WordCounterMod(this);
    }
};
