import { PutitiyComponent, Putity } from "./Putity/PutityComponent";

/**
 * 
 * g.x) GetJson
 * 
 * 
 */
export class Ems2 extends PutitiyComponent {
  constructor(childname) {
    super();
    this.name = "king";
    this.childname = childname;
  }
  hello(n) {
    console.log(n);
    this.name = "queen";
    Putity.Render();
  }
  async GetJson() {
    const url = "datas.json";
    const d = await this.CallAjax(url);
    this.name = d.data[1].name;
    Putity.Render();

  }
  renders() {
    //console.log(this.datajson);
    return `
        <p>my chiledname is ${this.childname} module </p> 
        <p>my name is ${this.name} module </p> 
        <button onClick="${this.component}.GetJson()">getjson1</button>
        <button onClick="${this.component}.hello('blocken')">click</button>
        `;
  }
  component() {
    return this.renders();
  }
}
