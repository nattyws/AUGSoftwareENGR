/* index.js*/


document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("ranges"); // Define the output element
  
    // Display the default slider value
    output.innerHTML = slider.value;
  
    // Update the current slider value (each time the slider handle is dragged)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
  });
  