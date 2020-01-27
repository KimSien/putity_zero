import { PutitiyComponent, Putity } from "./Putity/PutityComponent";

export class Ems3 extends PutitiyComponent {
  constructor() {
    super();
    this.name = "king";
    this.kingname  = "";
    this.initjson();

  }

  async initjson(){

    const d = await this.CallAjax("or.json");
    this.state = d.data;
    this.mapitem();
  }
  mapitem(){
   
   this.kingname = this.state.map(function(v,i){
     return `<li>item is ${v.name}</li>`;
   }).join("");

    Putity.Render();
  }

  addmapitem(){
    this.state.push({
      name:"item4"
    });

    this.mapitem();
  }

  hello(n) {
    console.log(n);
    this.name = "queen";
    this.addmapitem();
    Putity.Render();
  }
  async GetJson() {
    const d = await this.CallAjax("datas.json");
    this.name = d.data[0].name;
    Putity.Render();

  }

  async GetJson2(){
    const d = await this.CallAjax("datas2.json");
    this.name = d.data[0].name;
    Putity.Render();
  }

  
  renders() {
    //console.log(this.datajson);
    return `
        <ul>${this.kingname}</ul>
        <p>my name is ${this.name} module </p> 
        <button onClick="${this.component}.GetJson2()">GetAjaxPutitiy</button>

        <button onClick="${this.component}.GetJson()">getjson</button>
        <button onClick="${this.component}.hello('blocken')">click</button>
        `;
  }
}
