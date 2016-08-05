interface Module_Interface{
        // name: string;
    //     containerInfo: {
    //         Image: string;
    //         Cmd?: Array<string>;
    //         name?: string;
    //     }
    //     startOptions?: {
    //         Binds?: Array<string>;
    //     createContainer();
    // }
}

class Module implements Module_Interface {
    name: string;
    containerInfo: {
        Image: string,
        Cmd?: Array<string>,
        name?: string
    }
    startOptions?: {
        Binds?: Array<string>
    }
    constructor(component: Component){
        this.name = component.getName();
    }
    createContainer(){
    }
}

class WordCounterMod extends Module{
    name: string;
    containerInfo: {
        Image: string;
        Cmd?: Array<string>;
        name?: string;
    }
    startOptions?: {
        Binds?: Array<string>;
        createContainer();
    }
    constructor(component: Component){
        super(component);
        this.containerInfo = {
            Image: 'debian'
        }
    }

}
