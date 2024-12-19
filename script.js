// script.js


function stars() {
    let count = 50;
    let canvas = document.querySelector('.canvas');

    let i = 0;


    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px'
        star.style.height = h + 'px';

        star.style.animationDuration = duration + 's';

        canvas.appendChild(star);

        i++;
    }
}

let functionTimeout;

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {
    // Select the rocket image by class
    const rocketImage = document.querySelector('.shake-on-hover');
    const header = document.querySelector(".header");
    const typingContainer = document.querySelector('.typing-container');
    
    // Add a click event listener to the rocket image
    rocketImage.addEventListener('click', function() {
       // Change the background color of the body when the rocket is clicked
       // document.body.style.backgroundColor = '#ffcc00';  /* Set the new background color (yellow here) */
       //stars();
       rocketImage.classList.remove('shake-on-hover');
       rocketImage.classList.add("rocket");
       header.style.display = "none";
       rocketImage.src = "images/rocket3.png";
       typingContainer.style.display = 'none';
       
       stars()

       const existingAudio = document.querySelector('audio');
       if (existingAudio) {
           existingAudio.pause(); // Stop the currently playing audio
       }

       // Create a new audio element
       const newAudio = new Audio('rocketlaunch.mp3'); // Replace with your new audio file path
       newAudio.play(); // Play the new audio

       setTimeout(function() {
            window.location.href = "timecode/index2.html"; 
       }, 4000);  // 4 seconds timeout


        //stars();
    });
 });



 function navigateToPeriod(period) {
    const contentArea = document.getElementById('content');
    let content = '';
  
    switch (period) {
      case 'WW1':
        content = '<h1>World War 1</h1><p>War movies of this era reflected the challenges of trench warfare and the human cost of global conflict.</p>';
        break;
      case 'WW2':
        content = '<h1>World War 2</h1><p>Movies focused on heroism, sacrifice, and the impact of the war on soldiers and civilians alike.</p>';
        break;
      case 'SpaceRace':
        content = '<h1>Space Race</h1><p>Science fiction movies explored the excitement and fear of venturing into space.</p>';
        break;
      case '911':
        content = '<h1>9/11</h1><p>Movies depicted the aftermath, resilience, and emotional impact of the September 11 attacks.</p>';
        break;
      default:
        content = '<p>Click on a timeline item to see details here.</p>';
    }
  
    contentArea.innerHTML = content;
  }


  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelector('.timeline-item.active').classList.remove('active');
        this.classList.add('active');
        console.log(`Year selected: ${this.dataset.year}`);
    });
});

  
const timelineItems = document.querySelectorAll('.timeline-item');
const content = document.getElementById('content');

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    const year = item.getAttribute('data-year');
    content.innerHTML = `
      <h1 id="header">Timeline Header</h1>
      <p>Details for ${year}.</p>
    `;
  });
});


 

