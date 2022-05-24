// Let's make a Cat constructor!
let Cat = (function () {
  let cats = [];
  let constructor = function (name, weight) {
    if (typeof name == "undefined" || typeof weight == "undefined") {
      throw Error("Must specify a name and a weight");
    }
    Object.defineProperty(this, "name", {
      get: function () {
        return name;
      },
    });
    Object.defineProperty(this, "weight", {
      get: function () {
        return weight;
      },
      set: function (x) {
        weight = x;
        return weight;
      },
    });
    cats.push(this);
  };
  constructor.averageWeight = function () {
    return (
      cats.reduce(function (sum, cat) {
        return sum + cat.weight;
      }, 0) / cats.length
    );
  };
  return constructor;
})();

// solution 2

// Let's make a Cat constructor!
// let Cat = function (n,w) {
//   if( arguments.length<2 ) throw "Unvalid arguments"
//   Cat.count = (Cat.count||0)+1;
//   Cat.wSum  = (Cat.wSum||0)+w;

//   weight = w;
//   name = n;

//   Object.defineProperty(
//     this, "weight", {
//       get : function(){ return weight },
//       set : function(v){ Cat.wSum-=weight; Cat.wSum+=v; weight=v }
//     }
//   )

// };

// Cat.averageWeight = function(){ return Cat.wSum/Cat.count }

// solution 3

// Let's make a Cat constructor!
// var Cat = function () {
//   if (arguments.length < 2) throw "Need two arguments";
//   let name = arguments[0],
//     weight = arguments[1];

//   Cat.count = (Cat.count || 0) + 1;
//   Cat.weightSum = (Cat.weightSum || 0) + weight;

//   Object.defineProperty(this, "weight", {
//     get: () => weight,
//     set: (v) => {
//       Cat.weightSum += v - weight;
//       weight = v;
//     },
//   });
// };

// Cat.averageWeight = () => Cat.weightSum / Cat.count;

// ================================================

garfield = new Cat("garfield", 25);
Cat.averageWeight(); // 25
console.log(
  "%c 🍟: //Cat.averageWeight -> Cat.averageWeight() ",
  "font-size:16px;background-color:#60484c;color:white;",
  Cat.averageWeight()
);

felix = new Cat("felix", 15);
Cat.averageWeight();
console.log(
  "%c ㊗️: //Cat.averageWeight -> Cat.averageWeight(); ",
  "font-size:16px;background-color:#014306;color:white;",
  Cat.averageWeight()
);

felix.weight = 25;
felix.weight; // 25
Cat.averageWeight(); // now 25
console.log(
  "%c 🕎: //Cat.averageWeight -> Cat.averageWeight(); // now 25 ",
  "font-size:16px;background-color:#e4cd81;color:black;",
  Cat.averageWeight()
);
