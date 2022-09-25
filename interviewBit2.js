let hero = {
  powerLevel: 99,
  getPower() {
    return this.powerLevel;
  },
};

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };

//console.log(getPower());
//console.log(getPower.apply(hero2));

// returns undefined 42
//Reason - The first output is undefined since when the function is invoked, it is
//invoked referencing the global object

const a = function () {
  console.log("0", this);

  const b = {
    func1: function () {
      console.log("1", this);
    },
  };

  const c = {
    func2: () => {
      console.log("2", this);
    },
  };

  b.func1();
  c.func2();
};

// a();

const d = {
  name: "Vivek",
  f: function () {
    var self = this;
    console.log(this.name);
    (function () {
      console.log(this.name);
      console.log(self.name);
    })();
  },
};

d.f();
// returns Vivek undefined Vivek
