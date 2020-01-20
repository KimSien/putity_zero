import Putity from "./Putity/Putity";

class FF extends Putity {
  constructor(h) {
    super(h);
  }
  setState() {
    return (self.state = {
      test2: "test2"
    });
  }
  sender2() {
    console.log("test");
    this.changeState("test2", "child change message");
  }
  run() {
    window.ff = this;
  }
  render() {
    return `<p>
                sub module -------- ${this.state.test2}
            </p>
            <button onClick="window.ff.sender2()">click</button>
                `;
  }
}

const ff = new FF({
  props: {
    name: "new name"
  }
});
ff.run();
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
        ${ff.render()}
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
//ff.setjoin(f);    
