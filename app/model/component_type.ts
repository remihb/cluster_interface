'use strict';

interface Component_type{
    name: string;
    description: string;

    getName(): string;
    setName(name: string);
    getDescription(): string;
    setDescription(description: string);

}

class Component_type implements Component_type{
    constructor (name: string, description: string){
        this.name = name;
        this.description = description;
    }

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
}
