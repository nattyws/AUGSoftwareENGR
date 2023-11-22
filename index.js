/* index.js*/


document.addEventListener("DOMContentLoaded", genPassword);

function genPassword() {
    const dictionaryAPIURL = 'https://random-word-api.herokuapp.com/word?length=5';
    console.log(dictionaryAPIURL);
    const passwordOutput = document.getElementById('pwtextbox');
    const generatePasswordBtn = document.getElementById('generatePasswordButton');
    const passwordLengthSlider = document.getElementById('myRange');
    const includeSymbolsCheckbox = document.getElementById('symbols');
    const includeNumbersCheckbox = document.getElementById('number');
    const savedPasswordsBtn = document.getElementById('savePasswordButton');
    const copyPasswordBtn = document.getElementById('copyPasswordButton');
   
    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("ranges");

    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }

    var dropdownMenu = document.getElementById("dropdown");
    dropdownMenu.addEventListener('change', () => {
        var selectedOption = dropdownMenu.options[dropdownMenu.selectedIndex].value;
        var sharedDiv = document.getElementById("sharedDiv");

        // Getting all the elements that I created, so that I can hide or show based on the option selected

        if (selectedOption === 'random') {
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

        } else if (selectedOption === 'memorable') {
            document.getElementById("sharedDiv").innerHTML = "";

            var capitalizeCheckbox = document.createElement('input');
            capitalizeCheckbox.type = "checkbox";
            capitalizeCheckbox.name = "capitalize";
            capitalizeCheckbox.value = "Memorablecapitalize";
            capitalizeCheckbox.id = "capitalize";
            var labelCab = document.createElement('label')
            labelCab.htmlFor = "capitalize";
            labelCab.id = "memo1";
            labelCab.appendChild(document.createTextNode('Capitalize'));

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

            async function generateMemPassword() {
              const passwordLength = passwordLengthSlider.value;
              let password = '';
          
              for (let i = 0; i < passwordLength; i++) {
                  const word = await fetchRandomWord();
                  if (word) {
                      password += word;
                      if (i < passwordLength - 1) {
                          password += '_';
                      }
                  } else {
                      password += 'unknown';
                      if (i < passwordLength - 1) {
                          password += '_';
                      }
                  }
              }

              // Khadro work for saved password
          
              savePasswordToLocalStorage(password);
          
              passwordOutput.textContent = password;
          }
          

          generatePasswordBtn.addEventListener('click', generateMemPassword);

      } else {
          document.getElementById("sharedDiv").innerHTML = "";
      }
  });

  savedPasswordsBtn.addEventListener('click', displaySavedPasswords);

  // Khadro Work for copy button

  copyPasswordBtn.addEventListener('click', copyPassword);

  // used textContent for a div or value for an input


  function copyPassword() {
    const passwordText = document.getElementById("pwtextbox");
    const passwordValue = passwordText.textContent || passwordText.value; 
    const textarea = document.createElement("textarea");
    textarea.value = passwordValue;
    document.body.appendChild(textarea);
    textarea.select();

    // provides an alert for the user and also for me to see if it worked

    try {
        document.execCommand("copy");
        alert("Password copied to clipboard!");
    } catch (err) {
        console.error("Unable to copy to clipboard", err);
    }

    document.body.removeChild(textarea);
}


// Khadro Work

  function displaySavedPasswords() {
      const savedPasswords = getSavedPasswords().slice(-10); // Get the last ten passwords
      const savedPasswordsList = document.getElementById('savedPasswordsList');

      // Clear the existing list
      savedPasswordsList.innerHTML = "";

      // Display saved passwords on the screen
      savedPasswords.forEach((password) => {
          const listItem = document.createElement('li');
          listItem.textContent = password;
          savedPasswordsList.appendChild(listItem);
      });
  }

  // saved it on local storage and that was the easiest method for me to begin with

  function savePasswordToLocalStorage(password) {
      let passwords = getSavedPasswords();
      passwords.push(password);
      localStorage.setItem('passwords', JSON.stringify(passwords));
  }

  function getSavedPasswords() {
      return JSON.parse(localStorage.getItem('passwords')) || [];
  }
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


