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


    //  Mohamed Ali's changes
    var dropdownMenu = document.getElementById("dropdown");
    dropdownMenu.addEventListener ('change', () => {
      console.log(dropdownMenu.options[dropdownMenu.selectedIndex].value);

      var selectedOption = dropdownMenu.options[dropdownMenu.selectedIndex].value;
       var memorable = document.getElementById("memorableDiv");
       var random = document.getElementById("randomDiv");
      if (selectedOption === 'random') {
        memorable.style.display = 'none';
        random.style.display = 'inline';

      }
      else if (selectedOption === 'memorable') {
        random.style.display = 'none';
        memorable.style.display = 'inline';

      } else {
        random.style.display = 'none';
        memorable.style.display = 'none';

      }
    })



  });







  