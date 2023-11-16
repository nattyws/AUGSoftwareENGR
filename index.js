/* index.js*/


document.addEventListener("DOMContentLoaded", genPassword);

function genPassword(){
    const dictionaryAPIURL = 'https://random-word-api.herokuapp.com/word';
    console.log(dictionaryAPIURL)
    const passwordOutput = document.getElementById('pwtextbox');
    const generatePasswordBtn = document.getElementById('generatePasswordButton');
    const passwordLengthSlider = document.getElementById('myRange');
    const includeSymbolsCheckbox = document.getElementById('symbols');
    const includeNumbersCheckbox = document.getElementById('number');


    var slider = document.getElementById("myRange");
    var output = document.getElementById("ranges"); // Define the output element

    // Display the default slider value
    output.innerHTML = slider.value;

    // Update the current slider value (each time the slider handle is dragged)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }

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

        
        // Function to fetch a random word from the dictionary API
        async function fetchRandomWord() {
          try {
            const response = await fetch(`${dictionaryAPIURL}`);
            const data = await response.json();
            return data[0];
          } catch (error) {
            console.error('Error fetching random word:', error);
            return null;
          }
        }

        // Function to generate the password
        async function generateMemPassword() {
          const passwordLength = passwordLengthSlider.value;
          let password = '';

          for (let i = 0; i < passwordLength; i++) {
            const word = await fetchRandomWord();
            if (word) {
              password += word + '_';
            } else {
              password += 'unknown_';
            }
          }

          // Remove trailing underscore
          password = password.slice(0, -1);

          passwordOutput.textContent = password;
        }

        // Event listener for the Generate Password button click
        generatePasswordBtn.addEventListener('click', generateMemPassword);

      } else {
        random.style.display = 'none';
        memorable.style.display = 'none';


      }
    })




  }






  


  // //  Mohamed Ali's changes
  // var dropdownMenu = document.getElementById("dropdown");
  // dropdownMenu.addEventListener ('change', () => {
  //   console.log(dropdownMenu.options[dropdownMenu.selectedIndex].value);

  //   var selectedOption = dropdownMenu.options[dropdownMenu.selectedIndex].value;
  //    var memorable = document.getElementById("memorableDiv");
  //    var random = document.getElementById("randomDiv");
  //   if (selectedOption === 'random') {
  //     memorable.style.display = 'none';
  //     random.style.display = 'inline';

  //   }
  //   else if (selectedOption === 'memorable') {
  //     random.style.display = 'none';
  //     memorable.style.display = 'inline';

  //   } else {
  //     random.style.display = 'none';
  //     memorable.style.display = 'none';

  //   }
  // })


