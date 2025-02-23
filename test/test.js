import {alertFromRadio} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    QUnit.test('Should return the value of the radio button selected', function(assert) {
        //Arrange
        const radioList = [
            { checked: false, value: 'Stan' },
            { checked: true, value: 'Kyle' },
            { checked: false, value: 'Cartman' },
            { checked: false, value: 'Kenny' }
        ];
        //Act
        const result = alertFromRadio(radioList); 
        assert.equal(result, 'Kyle', 'The selected value should return as "Kyle"');
    });


});
