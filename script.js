// Create the student object
 module.exports = getKeys;
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
let result = getKeys(student); 
return result;
