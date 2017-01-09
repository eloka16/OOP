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
      //var john = new Person('John','Smith',30);   
      expect(john.firstname).toEqual('John');
    });
    it("The person should have a last name", function() {
        //var esther = new Person("Esther","Jules");
        expect(john.lastname).toEqual('Smith');
    })
    it("The person should have a property of alive", function(){
        //var tolu = new Person('tolu','we');
        expect(john.isAlive).toBe(true);
    })
  
    it("The person class should have a private variable of Bank balance", function() {
        expect(john.returnBalance).toBe(undefined);
    })
    it("The person class should have a private method", function() {
        var myBalanceMethod = john.askTeller();
        var myBalance = myBalanceMethod();
        expect(myBalance).teEqual(7500)
    })
    

   describe("create a prototype class of person called employer", function() {
       var newEmployee = new Employee('Esther', 'Jules');

       it("The employer class should also have a first and last name", function() {
           expect(newEmployee.firstname).toEqual('Esther')
       })
       /*it("The employer class should have 2 legs", function() {
           expect(employer.numLegs).toBe(2);
       })*/
   })

  /*describe("create a prototype class of person called cleaner", function() {
      it("The cleaner class should have a property of single", function() {
          expect(cleaner.status).toEqual('single');
      })
      it("The cleaner should inherit from alive property from the person class", function() {
          expect(cleaner.isAlive).toBe(true);
      })
      it("The cleaner class inherit numLegs from the employer class", function() {
          expect(cleaner.numLegs).toBe(2)
      })*/
  })
})();