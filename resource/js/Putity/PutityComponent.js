/**
 * Class PutityComponet
 * @constructor
 */
export class PutitiyComponent {
  constructor() {
    this.state = [];
  }

  /**
   * Get Json Data with Ajax.
   * @param {string} jsonurl - json url path
   * @returns {json} return value with jsondata
   */
  CallAjax(jsonurl) {
    return fetch(jsonurl)
      .then(function (response) {
        return response.json();
      })
      .then(function (rv) {
        return rv;
      });
  }

  /**
   * syuger coating function with renders function.
   */
  components() {
    return this.renders();
  }

  /**
   * need implement this function with extends putity component class.
   */
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
   * ComponentAtach
   * 
   * create new putitiy object.
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
   * Render Putity Conponet
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
