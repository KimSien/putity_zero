import Putity from "./Putity/Putity";

var sta = {
  fff: {
    test: "this is global ff"
  },
  ff: {
    test: "this is global ff"
  },
  f: {
    test: "test message",
    goukei: 1
  }
};


class FF {
  constructor() {
    this.run();
  }
  run() {
    self.ff = this;
  }
  df() {
    sta.ff.test = "click df";
    //console.log("test");
    Renders();
  }
  component() {
    return `
        <div>submodule des ------------ ${sta.ff.test}
        <button onClick="self.ff.df()">click</button>
        </div>
        `;
  }
}
const ff = new FF();




class FFF {
  constructor() {
    this.run();
  }
  run() {
    self.fff = this;
  }
  df() {
    sta.fff.test = "click df";
    //console.log("test");
    Renders();
  }
  component() {
    return `
          <div>submodule des ------------ ${sta.fff.test}
          <button onClick="self.fff.df()">click</button>
          </div>
          `;
  }
}
const fff = new FFF();

/**
 * extends PutiFlame
 */
class F {
  constructor(h) {
    this.run();
  }
  sender() {
    sta.f.goukei += 1;
    //console.log("sender");
    Renders();
  }
  run() {
    window.f = this;
  }

  component() {
    const myname = "name";
    return `<p>
        my name is ${myname}
        <br>this is ${sta.f.test}
        <br>goukei is ${sta.f.goukei}
        <span id="app2"></span>
        ${ff.component()}
        </p>
        <p>
        ${fff.component()}
        </p>
        <button onClick="window.f.sender()">test</button>  
        `;
  }
}
const f = new F();

const BaseComponent = f;
const BaseAppID = "app";
const Renders = function() {
  let tcontents = document.createElement("div");
  tcontents.innerHTML = BaseComponent.component();

  let dom = document.getElementById(BaseAppID);
  dom.innerHTML = "";
  dom.appendChild(tcontents);
};
Renders();
