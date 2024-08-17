class MyComponent {
    constructor() {
        // Initialize the _el property to null
        this._el = null;
    }

    // Method to set the _el property
    setElement(element) {
        this._el = element;
    }

    // Method to clear the _el property
    clearElement() {
        this._el = null;
    }

    // Method to interact with the _el property
    doSomething() {
        if (this._el !== null) {
            // Perform some operation with this._el
            console.log("Element exists:", this._el);
        } else {
            console.log("Element is null");
        }
    }
}

// Example usage
const component = new MyComponent();
component.doSomething(); // Output: Element is null

const element = document.createElement('div');
component.setElement(element);
component.doSomething(); // Output: Element exists: [object HTMLDivElement]

component.clearElement();
component.doSomething(); // Output: Element is null
