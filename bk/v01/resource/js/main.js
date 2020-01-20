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
     window.f = this;    
  }

  render() {
    const myname = this.props.name;

    return `<p>
        my name is ${myname}
        <br>this is ${self.state.test}
        <br>goukei is ${self.state.goukei}
        <span id="app2"></span>
        </p>
        <button onClick="window.f.sender()">test</button>  
        `;
  }
}

const f = new F({
  props: {
    name: "new name"
  },
  targetDom: "app"
});
f.run();


function sender2(){
    console.log("fda");
}
class FF extends Putity {
  constructor(h) {
    super(h);
  }
  setState() {
    return (self.state = {
      test: "test2 message",
      goukei: 1
    });
  }
  sender2() {
    //console.log("test");
    this.changeState("test", "child change message");
    
  }
  run() {
    self.ff = this;
  }
  render() {
    return `<p>
              sub module -------- ${this.state.test}
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
f.setjoin(ff);
