import {PutitiyComponent,Putity} from "./Putity/PutityComponent";

class Ems2 extends PutitiyComponent {
  constructor() {
      super();
      this.name = "king";
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
      `;
  }
}
Putity.ComponentAtach("king2", Ems2);
Putity.ComponentAtach("king3", Ems2);

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
      ${king2.renders()}
      ${king3.renders()}

      `;
  }
}
Putity.ComponentAtach("king", Ems);


Putity.RenderSetting(king,"#app");
Putity.Run();
