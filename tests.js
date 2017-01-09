'use strict';

/*var chai = require('chai');
var expect = chai.expect;
*/

var Person = require('./lib/oop.js').Person;
var Employee = require('./lib/oop.js').Employee;
var Cleaner = require('./lib/oop.js').Cleaner; 



(function(){
  'use strict';
  describe("create a person class with first and last name", function() {
      var john = new Person('John', 'Smith', 2);

    it("The person should have a firstname", function() {   
      expect(john.firstname).toEqual('John');
    });
    it("The person should have a last name", function() {
        expect(john.lastname).toEqual('Smith');
    })
    it("The person should have a property of alive", function(){
        expect(john.isAlive).toBe(true);
    })
  
    it("The person class should have a private variable of Bank balance", function() {
        expect(john.returnBalance).toBe(undefined);
    })
    it("The person class should have a private method", function() {
        var myBalanceMethod = john.askTeller();
        var myBalance = myBalanceMethod();
        expect(myBalance).toEqual(7500);
    })
    

   describe("create a prototype class of person called employer", function() {
       var newEmployee = new Employee('Esther', 'Jules');

       it("The employer class should also have a first and last name", function() {
           expect(newEmployee.firstname).toEqual('Esther')
       })
       it("The employer class should have 2 legs", function() {
           expect(newEmployee.numLegs).toBe(2);
       })
   })

  describe("create a prototype class of person called cleaner", function() {
      var myCleaner = new Cleaner("Tolu","Dada"); 
      it("The cleaner class should have a property of single", function() {
          expect(myCleaner.status).toEqual('single');
      })
      it("The cleaner should inherit from alive property from the person class", function() {
          expect(myCleaner.isAlive).toBe(true);
      })
      it("The cleaner class inherit numLegs from the employer class", function() {
          expect(myCleaner.numLegs).toBe(2)
      })
  })
  })
})();