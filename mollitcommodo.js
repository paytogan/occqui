// Sample JSON document
const jsonDocument = {
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
};

// JSON pointer
const jsonPointer = "/address/city";

// Function to retrieve value by JSON pointer
function getValueByJsonPointer(obj, pointer) {
  const parts = pointer.split('/').slice(1);
  let result = obj;
  for (let part of parts) {
    result = result[part];
  }
  return result;
}

// Retrieve value using JSON pointer
const value = getValueByJsonPointer(jsonDocument, jsonPointer);
console.log(value); // Output: Anytown
