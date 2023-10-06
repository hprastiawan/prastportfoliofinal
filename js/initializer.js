export const initializer = {
    load(instance, options, elementId) {
      // Initialize options by merging defaults and user-provided options
      instance.options = Object.assign({}, defaults, options);
  
      // Initialize other properties and flags
      instance.typingComplete = false;
      instance.strPos = 0;
      instance.arrayPos = 0;
      instance.curLoop = 0;
      instance.sequence = [];
      instance.pause = {
        status: false,
        typewrite: true,
        curString: "",
        curStrPos: 0,
      };
  
      // Set the target HTML element based on elementId (assuming elementId is a string or HTMLElement)
      if (typeof elementId === "string") {
        instance.el = document.getElementById(elementId);
      } else if (elementId instanceof HTMLElement) {
        instance.el = elementId;
      }
  
      // Add your custom initialization logic here
      // For example, you can check the options and customize behavior accordingly
      if (instance.options.customOption) {
        // Your custom logic here
      }
  
      // Other initialization logic can go here
    },
  };
  
  // Default options for Typed.js
  const defaults = {
    // Define your default options here
    customOption: false, // Example custom option
  };
  