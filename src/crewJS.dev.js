//testing code based on @Stoyan Stefanov (Javascript Patterns Book)
(function(root, factory) {
  'use strict';
  // Set up crewJS appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
  

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {


  // Finally, as a browser global.
  } else {
    
  }

}(this, function(root, crewJS) {
  'use strict';
  crewJS.version = 0.1;

  crewJS.Character = crewJS.Class = function Class(Parent, properties){
    var Child, Mediator;

    //constructor
    Child = function (){
      if (Child.super && Child.super.hasOWnProperty('__born')){
        Child.super.__born.apply(this, arguments);
      }
      if (Child.prototype.hasOWnProperty('__born')){
        Child.prototype.__born.apply(this, arguments);
      }
    };

    //inheritance
    Parent = Parent || Object;
    Mediator = function(){};
    Mediator.prototype = Parent.prototype;
    Child.prototype = new Mediator();
    Child.super = Parent.prototype;
    Child.prototype.constructor = Child;


    //overwritten
    Object.keys(properties).map(function(value, key) {
      Child.prototype[key] = value;
    });

    return Child;
  };

  return crewJS;
}));