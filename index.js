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


  // Function to fetch random word from the dictionary API
async function fetchRandomWord() {
  try {
    const response = await fetch('https://api.dictionary.com/your-dictionary-endpoint');
    const data = await response.json();
    // Assuming the API returns an array of words
    return data.word; // Adjust according to your API response structure
  } catch (error) {
    console.error('Error fetching random word:', error);
    return null;
  }
}

// Function to generate a password using words from the dictionary API
async function generatePassword(numWords) {
  let password = '';
  for (let i = 0; i < numWords; i++) {
    const word = await fetchRandomWord();
    if (word) {
      password += word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter of each word
    } else {
      password += 'RandomWord'; // Placeholder if API fails
    }
  }
  return password;
}

  document.getElementById('generatePasswordButton').addEventListener('click', async () => {
    const numWordsInPassword = 3; // Number of words in the password
    try {
      const password = await generatePassword(numWordsInPassword);
      console.log('Generated Password:', password);
      // Replace console log with code to display the generated password on your webpage
    } catch (err) {
      console.error('Password generation error:', err);
      // Handle error - display a message or take appropriate action
    }
  });







  