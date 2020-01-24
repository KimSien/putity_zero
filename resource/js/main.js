/*
; (function (w) {
  class PutitiyComponent {
      constructor() {
          this.componentname = "PutitiyComponent";
      }
  }
  w.PutitiyComponent = PutitiyComponent;

  w.PutityApp = {
      AtachComponent: "",
      AtachDom: ""
  };

  w.PutitiyComponentAtach = (name, classobject) => {
      w[name] = new classobject();
      w[name].component = "window." + name;
      //Object.freeze(w[name].name);

      return w[name];
  }
  w.PutitiyRender = () => {

      const str = w.PutityApp.AtachComponent.renders();
      const replaced = str.replace(/<king2>/g, w.king2.renders());
      console.log(replaced) // apple banana orange

      const dummy = document.createElement("div");
      dummy.innerHTML = w.PutityApp.AtachComponent.renders();
      document.querySelector(w.PutityApp.AtachDom).innerHTML = dummy.innerHTML;
  }

})(window)
*/

import {PutitiyComponent,PutitiyComponentAtach,PutitiyRender,PutitySet} from "./Putity/PutityComponent";

class Ems2 extends PutitiyComponent {
  constructor() {
      super();
      this.name = "king";
  }
  hello(n) {
      console.log(n);
      this.name = "queen";
      PutitiyRender();
  }

  renders() {
      return `
      <p>my name is ${this.name} module </p> 
      <button onClick="${this.component}.hello('blocken')">click</button>
      `;
  }
}
PutitiyComponentAtach("king2", Ems2);
PutitiyComponentAtach("king3", Ems2);


class Ems extends PutitiyComponent {
  constructor() {
      super();
      this.name = "king";
  }
  hello(n) {
      console.log(n);
      this.name = "queen";
      PutitiyRender();
  }
  renders() {
      return `
      <p>my name is ${this.name} module </p> 
      <button onClick="${this.component}.hello('blocken')">click</button>
      <king2>
      ${king3.renders()}

      `;
  }
}

PutitiyComponentAtach("king", Ems);
PutitySet(king,"#app");
PutitiyRender();
