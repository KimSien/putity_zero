/** -------------------------------------------------- */
/**
 * PutiFlame
 */
export default class Putity {
  constructor(h) {
    //this.state = {};
    this.state = this.setState();
    this.props = h.props;

    this.joinpt = null;

    if (typeof this.targetDom != undefined) {
      this.targetDom = h.targetDom;
      this._render();
    }
  }
  setState() {}
  
  setjoin(j){
    this.joinipt = j;
  }

  changeState(name, value) {
    self.state[name] = value;

    //if(this.targetDom != void 0){
    this._render();
    if(this.joinipt !=null){
      this.joinipt._render();
    }
    //}
  }
  _render() {
    if (this.targetDom == void 0) {
    } else {
      let tcontents = document.createElement("div");
      tcontents.innerHTML = this.render();
      let dom = document.getElementById(this.targetDom);
      dom.innerHTML = "";
      dom.appendChild(tcontents);
    }
  }
}
