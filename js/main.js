/**
 * This file should only contain functions that don't interact with the DOM.
 * That means no document.querySelector, no document.getElementById, etc.
 * This file should only contain functions that do things like calculations,
 * data manipulation, etc. This is so that we can test these functions
 * without having to worry about the DOM or the browser environment.
 */

/**
 * This function alerts whatever value was selected from the radio checkbox. 
 */
  export function alertFromRadio(radioList) {
    const selectedValue = Array.from(radioList).find(radio => radio.checked); 
    return selectedValue.value; 
  }
