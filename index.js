/* index.js*/


document.addEventListener("DOMContentLoaded", genPassword);

function genPassword() {
    const dictionaryAPIURL = 'https://random-word-api.herokuapp.com/word?length=5';
    console.log(dictionaryAPIURL);
    const passwordOutput = document.getElementById('pwtextbox');
    const generatePasswordBtn = document.getElementById('generatePasswordButton');
    const passwordLengthSlider = document.getElementById('myRange');
    // const includeSymbolsCheckbox = document.getElementById('symbols');
    // const includeNumbersCheckbox = document.getElementById('number');
    const savedPasswordsBtn = document.getElementById('savePasswordButton');
    const copyPasswordBtn = document.getElementById('copyPasswordButton');
   
    
    var slider = document.getElementById("myRange");
    var output = document.getElementById("ranges");

    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
        console.log('Slider Value:', this.value);
    }


    var dropdownMenu = document.getElementById("dropdown");
    dropdownMenu.addEventListener('change', () => {
        var selectedOption = dropdownMenu.options[dropdownMenu.selectedIndex].value;
        console.log('Selected Dropdown Option:', selectedOption);
        var sharedDiv = document.getElementById("sharedDiv");
       





        if (selectedOption === 'random') {

            passwordOutput.innerHTML = "";
        // This checkbox is for random numbers
            var numberCheckbox = document.createElement('input');
            numberCheckbox.type = "checkbox";
            numberCheckbox.name = "number";
            numberCheckbox.value = "randomNumber";
            numberCheckbox.id = "number";
            // numberCheckbox.checked = false;
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




     

         

            /** 
             * generateRandomPassByButton is a function which you can generate a random password using the generate button
            */
          // ...

let result; // Declare result in a common scope
/** 
 * generateRandomPassByButton is a function which you can generate a random password using the generate button
 */
async function generateRandomPassByButton() {
    const numbers = document.getElementById('number').checked;
    const symbols = document.getElementById('symbols').checked;
    const theLengthOfThePassowrd = passwordLengthSlider.value;

    if (numbers && symbols) {
        console.log("Both numbers and symbols were checked");
        const listOfSymbols = "!@#$%^&*()_-~";
        result = '';
        for (let i = 0; i < theLengthOfThePassowrd; i++) {
            randomNumber = Math.floor(Math.random() * 100);
            pickSymbolRandomly = Math.floor(Math.random() * 13);
            result += randomNumber + listOfSymbols.charAt(pickSymbolRandomly);
        }
        passwordOutput.textContent = result;
    } else if (numbers && !symbols) {
        console.log("only numbers was checked");
        result = '';
        for (let i = 0; i < theLengthOfThePassowrd; i++) {
            randomNumber = Math.floor(Math.random() * 100);
            result += randomNumber + "-";
        }
        passwordOutput.textContent = result;
    } else if (!numbers && symbols) {
        console.log("only symbols was checked");
        const listOfSymbols = "!@#$%^&*()_-~";
        result = '';
        for (let i = 0; i < theLengthOfThePassowrd; i++) {
            pickSymbolRandomly = Math.floor(Math.random() * 13);
            result += listOfSymbols.charAt(pickSymbolRandomly);
        }
        passwordOutput.textContent = result;
    }

    await savePasswordToLocalStorage(result);
}
 console.log("Random password is:" + result);

   // This checkbox is for random numbers
   var numberCheckbox = document.createElement('input');
   numberCheckbox.type = "checkbox";
   numberCheckbox.name = "number";
   numberCheckbox.value = "randomNumber";
   numberCheckbox.id = "number";
   // numberCheckbox.checked = false;
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

/**
 * generateRandomPassBySlider is a function which you can generate a random password using the slider range.
 */
async function generateRandomPassBySlider() {
    const numbers = document.getElementById('number').checked;
    const symbols = document.getElementById('symbols').checked;
    const theLengthOfThePassowrd = passwordLengthSlider.value;

    if (numbers && symbols) {
        console.log("Both numbers and symbols were checked");
        const listOfSymbols = "!@#$%^&*()_-~";
        result = '';
        for (let i = 0; i < theLengthOfThePassowrd; i++) {
            randomNumber = Math.floor(Math.random() * 100);
            pickSymbolRandomly = Math.floor(Math.random() * 13);
            result += randomNumber + listOfSymbols.charAt(pickSymbolRandomly);
        }
        passwordOutput.textContent = result;

    } else if (numbers && !symbols) {
        console.log("only numbers was checked");
        result = '';
        for (let i = 0; i < theLengthOfThePassowrd; i++) {
            randomNumber = Math.floor(Math.random() * 100);
            result += randomNumber + "-";
        }
        passwordOutput.textContent = result;
    } else if (!numbers && symbols) {
        console.log("only symbols was checked");
        const listOfSymbols = "!@#$%^&*()_-~";
        result = '';
        for (let i = 0; i < theLengthOfThePassowrd; i++) {
            pickSymbolRandomly = Math.floor(Math.random() * 13);
            result += listOfSymbols.charAt(pickSymbolRandomly);
        }
        passwordOutput.textContent = result;
    }

    await savePasswordToLocalStorage(result);
}

            document.getElementById("sharedDiv").innerHTML = "";
            //create Numbers and Sympoles checkboxes
         

            sharedDiv.appendChild(numberCheckbox);
            sharedDiv.appendChild(labelNum);

            sharedDiv.appendChild(symbolsCheckbox);
            sharedDiv.appendChild(labelSymbol);

            generatePasswordBtn.addEventListener("click", generateRandomPassByButton);
            passwordLengthSlider.addEventListener("click", generateRandomPassBySlider);


       
        } else if (selectedOption === 'memorable') {
             passwordOutput.innerHTML = "";
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

            var numbersCheckbox = document.createElement('input');
            numbersCheckbox.type = "checkbox";
            numbersCheckbox.name = "numbers";
            numbersCheckbox.value = "Memorablenumbers";
            numbersCheckbox.id = "numbers";
            var labelFull = document.createElement('label')
            labelFull.htmlFor = "numbers";
            labelFull.id = "memo2";
            labelFull.appendChild(document.createTextNode('Numbers'));

            sharedDiv.appendChild(capitalizeCheckbox);
            sharedDiv.appendChild(labelCab);

            sharedDiv.appendChild(numbersCheckbox);
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
              console.log('Generating Memorable Password with Length:', passwordLength);
              const numberized = document.getElementById('numbers').checked;
              const capitalized = document.getElementById('capitalize').checked;

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

              console.log('Generated Password:', password);
              
              if (capitalized && !numberized){
                password = password.charAt(0).toUpperCase() + password.slice(1);
              }
              else if (!capitalized && numberized){
                var randomNumber = (Math.floor(Math.random() * 100).toString());
                password = password.concat(randomNumber)
                
              }
              else if (!capitalized && !numberized){
                password = password
              }

              else if(capitalized && numberized){
                password = password.charAt(0).toUpperCase() + password.slice(1);
                var randomNumber = (Math.floor(Math.random() * 100).toString());
                password = password.concat(randomNumber)
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
    console.log('Copying Password:', passwordValue);

    // provides an alert for the user and also for me to see if it worked

    try {
        document.execCommand("copy");
        alert("Password copied to clipboard!");
        console.log('Password copied to clipboard!');
    } catch (err) {
        console.error("Unable to copy to clipboard", err);
        console.log('Error copying password to clipboard:', err);
    }

    document.body.removeChild(textarea);
}


// Khadro Work

  function displaySavedPasswords() {
      const savedPasswords = getSavedPasswords().slice(-10); // Get the last ten passwords
      const savedPasswordsList = document.getElementById('savedPasswordsList');
      console.log('Saved Passwords:', savedPasswords);

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














  






  


  
