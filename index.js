/* index.js*/


document.addEventListener("DOMContentLoaded", genPassword);

function genPassword(){
    const dictionaryAPIURL = 'https://random-word-api.herokuapp.com/word?length=5';
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
      // var memorable = document.getElementById("memorableDiv");
      // var random = document.getElementById("randomDiv");
      var sharedDiv = document.getElementById("sharedDiv");

      console.log(sharedDiv);


      

       








      





      //Getting all the elements that I created, so that I can hide or show base on the obtion selected
          // All memerable elements
      

      // All random elements
      




   


      if (selectedOption === 'random') {

        //clear the sharedDiv
        document.getElementById("sharedDiv").innerHTML = "";
        
        //create Numbers and Sympoles checkboxes
         // This checkbox is for random numbers
        var numberCheckbox = document.createElement('input');
        numberCheckbox.type = "checkbox";
        numberCheckbox.name = "number";
        numberCheckbox.value = "randomNumber";
        numberCheckbox.id = "number";
        var labelNum = document.createElement('label')
        labelNum.htmlFor = "number";
        labelNum.id = "random";
        labelNum.appendChild(document.createTextNode('Numbers'));

        // This checkbox is for random symbols
        var symbolsCheckbox = document.createElement('input');
        symbolsCheckbox.type = "checkbox";
        symbolsCheckbox.name = "symbols";
        symbolsCheckbox.value = "randomSymbol";
        symbolsCheckbox.id = "symbols";
        var labelSymbol = document.createElement('label')
        labelSymbol.htmlFor = "symbols";
        labelSymbol.id = "random2";
        labelSymbol.appendChild(document.createTextNode('Symbols'));

        sharedDiv.appendChild(numberCheckbox);
        sharedDiv.appendChild(labelNum);

        sharedDiv.appendChild(symbolsCheckbox);
        sharedDiv.appendChild(labelSymbol);

      }
      else if (selectedOption === 'memorable') {

        //clear the sharedDiv
        document.getElementById("sharedDiv").innerHTML = "";


        //create Numbers and Sympoles checkboxes
          // This checkbox is for memorable capitalize
        var capitalizeCheckbox = document.createElement('input');
        capitalizeCheckbox.type = "checkbox";
        capitalizeCheckbox.name = "capitalize";
        capitalizeCheckbox.value = "Memorablecapitalize";
        capitalizeCheckbox.id = "capitalize";
        var labelCab = document.createElement('label')
        labelCab.htmlFor = "capitalize";
        labelCab.id = "memo1";
        labelCab.appendChild(document.createTextNode('Capitalize'));


        // This checkbox is for memorable full Words
        var fullWordsCheckbox = document.createElement('input');
        fullWordsCheckbox.type = "checkbox";
        fullWordsCheckbox.name = "fullWords";
        fullWordsCheckbox.value = "MemorablefullWords";
        fullWordsCheckbox.id = "fullWords";
        var labelFull = document.createElement('label')
        labelFull.htmlFor = "fullWords";
        labelFull.id = "memo2";
        labelFull.appendChild(document.createTextNode('Full Words'));

        sharedDiv.appendChild(capitalizeCheckbox);
        sharedDiv.appendChild(labelCab);

        sharedDiv.appendChild(fullWordsCheckbox);
        sharedDiv.appendChild(labelFull);




        

        
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
       //clear the sharedDiv
        document.getElementById("sharedDiv").innerHTML = "";
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


