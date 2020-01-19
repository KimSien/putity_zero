import Putity from "./Putity/Putity";

/**
 * extends PutiFlame
 */
class F extends Putity {
  constructor(h) {
    super(h);
  }
  setState() {
    return (self.state = {
      test: "test message",
      goukei: 1
    });
  }
  sender() {
    this.changeState("test", "change message");
  }
  alertmessage() {
    const temp = self.state.goukei + 1;
    this.changeState("goukei", temp);
  }
  run() {
     self.f = this;    
  }

  render() {
    const myname = this.props.name;

    return `<p>
        my name is ${myname}
        <br>this is ${self.state.test}
        <br>goukei is ${self.state.goukei}
        <span id="app2"></span>
        </p>
        <button onClick="self.f.sender()">test</button>  
        `;
  }
}

let action;
const f = new F({
  props: {
    name: "new name"
  },
  targetDom: "app"
},action);
f.run();




function sender2(){
    console.log("fda");
}
class FF extends Putity {
  constructor(h) {
    super(h);
  }
  sender2() {
    console.log("test");
  }
  run() {
    self.ff = this;
  }
  render() {
    return `<p>
              sub module --------
          </p>
          <button onClick="self.ff.sender2()">click</button>
              `;
  }
}

const ff = new FF({
  props: {
    name: "new name"
  },
  targetDom: "app2"
});
ff.run();
