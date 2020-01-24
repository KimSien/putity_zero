
export class PutitiyComponent {
    constructor() {
        this.componentname = "PutitiyComponent";
    }
}

/** */

export function PutitySet(atach_component,atach_dom){
    window.PutityApp = {
        AtachComponent: atach_component,
        AtachDom: atach_dom    
    }
};

export function PutitiyComponentAtach(name, classobject){
    window[name] = new classobject();
    window[name].component = "window." + name;
    //Object.freeze(w[name].name);

    return window[name];
}

export function PutitiyRender(){

    const str = window.PutityApp.AtachComponent.renders();
    const replaced = str.replace(/<king2>/g, window.king2.renders());
    console.log(replaced) // apple banana orange

    const dummy = document.createElement("div");
    dummy.innerHTML = window.PutityApp.AtachComponent.renders();
    document.querySelector(window.PutityApp.AtachDom).innerHTML = dummy.innerHTML;
}
