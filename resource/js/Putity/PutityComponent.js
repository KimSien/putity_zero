export class PutitiyComponent {
  constructor() {
    this.state = [];
  }

  CallAjax(jsonurl) {
    return fetch(jsonurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (rv) {
        return rv;
      });
  }

  components() {
    return this.renders();
  }
  renders() { }

}

/** */
export class Putity {
  /**
   * 
   * @param {*} atach_component 
   * @param {*} atach_dom 
   */
  static RenderSetting(atach_component, atach_dom) {
    window.PutityApp = {
      AtachComponent: atach_component,
      AtachDom: atach_dom
    };
  }
  /**
   * 
   * @param {*} name 
   * @param {*} classobject 
   * @param {*} param 
   */
  static ComponentAtach(name, classobject, param = null) {
    if (param == null) {
      window[name] = new classobject();
    } else {
      window[name] = new classobject(param);
    }
    window[name].component = "window." + name;
    return window[name];
  }

  /**
   * 
   * 
   * 
   */
  static Render() {
    const str = window.PutityApp.AtachComponent.renders();
    const dummy = document.createElement("div");
    dummy.innerHTML = window.PutityApp.AtachComponent.renders();
    document.querySelector(window.PutityApp.AtachDom).innerHTML =
      dummy.innerHTML;
  }
  /**
   * 
   * syuger coarting function
   * 
   */
  static Run() {
    Putity.Render();
  }
}
