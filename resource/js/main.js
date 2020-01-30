import { PutitiyComponent, Putity } from "./Putity/Putity";

import { Ems2 } from "./Ems2";

Putity.ComponentAtach("king2", Ems2);
//Putity.ComponentAtach("king3", Ems2);

// Merge all of the nodes that the callback returns


class Ems extends PutitiyComponent {
    constructor() {
        super();
        this.name = "king5";
    }
    hello(n) {
        console.log(n);
        this.name = "queen";
        Putity.Render();
    }
    renders() {
        return `
      <p>my name is ${this.name} module </p> 
      <button onClick="${this.component}.hello('blocken')">click</button>
      ${king2.components()}
      `;
    }
}
Putity.ComponentAtach("king", Ems);


Putity.RenderSetting(king, "#app");
Putity.Run();
