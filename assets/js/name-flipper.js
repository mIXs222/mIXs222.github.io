// Wait for the entire document content to load before running the script
document.addEventListener('DOMContentLoaded', (event) => {
  // 1. Get the container element for the flipping name
  const nameContainer = document.getElementById('flipping-name');
  
  // Check if the element exists on the page
  if (!nameContainer) return; 

  // 2. Get all name elements within the container
  const names = nameContainer.querySelectorAll('.name-text');
  let currentIndex = 0;

  // 3. Define the function that performs the flip
  function flipName() {
      // Deactivate the currently visible name
      names[currentIndex].classList.remove('active');
      
      // Move to the next index (circularly)
      currentIndex = (currentIndex + 1) % names.length;
      
      // Activate the next name
      names[currentIndex].classList.add('active');
  }

  // 4. Attach the flip function to the click event of the name container
  nameContainer.addEventListener('click', flipName);

  // Flip automatically every 4 seconds
  setInterval(flipName, 5000); 
});