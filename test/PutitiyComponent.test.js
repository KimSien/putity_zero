import {
  Putity,
  PutitiyComponent
} from "../resource/js/Putity/PutityComponent";

class TestClass extends PutitiyComponent {
  constructor(childname) {
    super();
    this.childname = childname;
  }
  renders() {
    //console.log(this.datajson);
    return `<p>my name is ${this.childname} module </p>`;
  }
}

function callF(){
    throw new Error('you are using the wrong JDK');
    /*
    try{
        const a = new TestClass(a,b);   
        return a;
    }catch(e){
       return e;
    }
    */
}

test("make putitiuy component", () => {
  const childname = "kodomo";
  const testclass = new TestClass(childname);
  const MatchDom = "<p>my name is kodomo module </p>";
  expect(testclass.renders()).toMatch(MatchDom);

  //console.log("callF is ",callF());
  expect(callF).toThrow('you are using the wrong JDK');


});







