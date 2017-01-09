'use strict';

var chai = require('chai');
var assert = chai.assert;


var person = require('./lib/oop.js').person;
var Emloyee = require('./lib/oop.js').Employee;
var Cleaner = require('./lib/oop.js').cleaner; 



(function(){
  'use strict';
  describe("create a person class with first and last name", function() {

    it("The person should have a firstname", function() {
      var john = new person('John','Smith',30);   
      expect(person.firstname).toBe('John');
    });
    /*it("The person should have a last name", function() {
        var employer = new person("Esther","Jules");
        expect(person.lastname).toEqual('Jules');
    })
    it("The person should have a property of alive", function(){
        expect(person.isAlive).toBe(true);
    })
  })
    it("The person class should have a private variable of Bank balance", function() {
        expect(person.returnBalance).toBe(undefined);
    })
    it("The person class should have a private method", function() {
        expect(person.askTeller).teEqual(7500)
    })
    

   describe("create a prototype class of person called employer", function() {

       it("The employer class should also have a first and last name", function() {
           expect(employer.firstname).toEqual('Jo')
       })
       it("The employer class should have 2 legs", function() {
           expect(employer.numLegs).toBe(2);
       })
   })

  describe("create a prototype class of person called cleaner", function() {
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