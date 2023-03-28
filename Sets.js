/* Sets */
function mySet() {

    // the var collection will hold the set
    var collection = [];

    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    //this method will return all the values in the set
    this.values = function() {
        return collection;
    };

    //this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    //this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };

    //this method will return the size of two sets
    this.size = function() {
        return collection.length;

    };

    //this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(function(e) {
            unionSet.add(e);
        });

        secondSet.forEach(function(e) {
            unionSet.add(e);
        })
        return unionSet;
    };

   
  //this method will return the differnce of two sets as a new set
  this.difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
        if(!otherSet.has(e)) {
            differenceSet.add(e);
        }

    });
      return differenceSet;
  };
  //this method will test if the set is a subset of a difference set 
  this.subset = function(otherSet) {
     var firstSet = this.values();
     return firstSet.every( function(value) {
        return otherSet.has(value);
     });
  };

}

var setA = new mySet();
var setB = new mySet();


setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setA.intersection(setB).values());

var setC = new Set();
var setD = new Set();

setC.add("a");
setD.add("b");
setC.add("c");
setD.add("a");
setC.add("d");
console.log(setD.has("a"));
console.log(setD.add("d"));
