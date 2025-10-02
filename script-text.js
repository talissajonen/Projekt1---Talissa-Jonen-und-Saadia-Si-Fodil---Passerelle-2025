document.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('textToModify');
  
  // Check if the element was found
  if (element) {
    const wordToLink = "Bern";
    const url = "https://fr.wikipedia.org/wiki/Berne"; // The destination link (e.g., Wikipedia)
    
    // 1. Create the HTML for the hyperlink
    // target="_blank" opens the link in a new browser tab/window.
    const linkHTML = `<a href="${url}" target="_blank">${wordToLink}</a>`;
    
    // 2. Use a Regular Expression for precise replacement
    //    - 'g' (global): Replaces ALL occurrences in the text.
    //    - 'i' (case-insensitive): Matches "Bern", "bern", "BERN", etc.
    //    - \\b : Represents a word boundary (ensures we don't match 'Berner' in 'Berner Alpen')
    const regex = new RegExp(`\\b${wordToLink}\\b`, 'gi');
    
    // 3. Get the text and replace the word with the link HTML
    // We use innerHTML to access and modify the text while preserving its formatting.
    const newHTML = element.innerHTML.replace(regex, linkHTML);
    
    // 4. Update the element's content with the new HTML
    element.innerHTML = newHTML;
  } else {
    console.error("The element with ID 'textToModify' was not found.");
  }
});