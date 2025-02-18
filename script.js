let student = {
  name: "John",
  age: 30,
  city: "New York"
};
function getKeys(student) {
return Object.keys(student);
}
console.log(getKeys(student)); // Output: ["name", "age", "city"]