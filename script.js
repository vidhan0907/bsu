// script.js
document.addEventListener('DOMContentLoaded', () => {

// Initialize the map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Coordinates of India

// Set up the map tiles from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Add markers for connected schools
const schools = [
    { name: "Springfields Public School", lat: 28.6139, lon: 77.2090 },  // Example: Delhi
    { name: "Silver Oaks School", lat: 19.0760, lon: 72.8777 },  // Example: Mumbai
    { name: "Kendriya Vidalaya", lat: 13.0827, lon: 80.2707 },   // Example: Chennai
    { name: "Delhi Public School", lat: 28.5932, lon: 77.2076 },  // Example: Delhi
    { name: "Jain International School", lat: 12.9716, lon: 77.5946 },  // Example: Bangalore
    { name: "The Heritage School", lat: 22.5726, lon: 88.3639 },  // Example: Kolkata
    { name: "St. Xavier's High School", lat: 18.5204, lon: 73.8567 },  // Example: Pune
    { name: "Vivekananda School", lat: 28.7041, lon: 77.1025 },  // Example: Delhi
    { name: "Hyderabad Public School", lat: 17.3850, lon: 78.4867 },  // Example: Hyderabad
    { name: "Chennai Public School", lat: 13.0827, lon: 80.2707 },  // Example: Chennai
    { name: "Ahmedabad International School", lat: 23.0225, lon: 72.5714 },  // Example: Ahmedabad
    { name: "Jaipur Public School", lat: 26.9124, lon: 75.7873 },  // Example: Jaipur
    { name: "Lucknow Public School", lat: 26.8467, lon: 80.9462 },  // Example: Lucknow
    { name: "Nagpur Public School", lat: 21.1458, lon: 79.0882 },  // Example: Nagpur
    { name: "Surat International School", lat: 21.1702, lon: 72.8311 },  // Example: Surat
    { name: "Indore Public School", lat: 22.7196, lon: 75.8577 },  // Example: Indore
    { name: "Bhopal Public School", lat: 23.2599, lon: 77.4126 },  // Example: Bhopal
    { name: "Kanpur Public School", lat: 26.4499, lon: 80.3319 },  // Example: Kanpur
    { name: "Pune International School", lat: 18.5204, lon: 73.8567 },  // Example: Pune
    { name: "Vellore Institute of Technology", lat: 12.9672, lon: 79.1327 },  // Example: Vellore
    { name: "Birla High School", lat: 22.5726, lon: 88.3639 },  // Example: Kolkata
    { name: "Army Public School", lat: 28.6139, lon: 77.2090 },  // Example: Delhi
    { name: "Bangalore International School", lat: 12.9352, lon: 77.6244 },  // Example: Bangalore
    { name: "St. Joseph's High School", lat: 19.0760, lon: 72.8777 },  // Example: Mumbai
    { name: "Modern School", lat: 28.6139, lon: 77.2090 },  // Example: Delhi
    { name: "Sanskriti School", lat: 28.5932, lon: 77.2076 },  // Example: Delhi
    { name: "The International School", lat: 12.9716, lon: 77.5946 },  // Example: Bangalore
    { name: "DPS Ruby Park", lat: 22.5726, lon: 88.3639 },  // Example: Kolkata
    { name: "St. Xavier's College", lat: 18.5204, lon: 73.8567 },  // Example: Mumbai
    { name: "Sardar Patel Vidyalaya", lat: 28.5932, lon: 77.2076 },  // Example: Delhi
    { name: "Nirma University", lat: 23.0225, lon: 72.5714 },  // Example: Ahmedabad
    { name: "Guwahati International School", lat: 26.1445, lon: 91.7362 },  // Example: Guwahati, Assam
    { name: "DPS Bhubaneswar", lat: 20.2961, lon: 85.8189 },  // Example: Bhubaneswar, Odisha
    { name: "Raipur International School", lat: 21.2514, lon: 81.6296 },  // Example: Raipur, Chhattisgarh
    { name: "St. Xavier's School", lat: 25.5941, lon: 85.1376 },  // Example: Patna, Bihar
    { name: "Army Public School", lat: 26.1445, lon: 91.7362 },  // Example: Guwahati, Assam
    { name: "Kendriya Vidyalaya", lat: 20.2961, lon: 85.8189 },  // Example: Bhubaneswar, Odisha
    { name: "St. Thomas School", lat: 21.2514, lon: 81.6296 },  // Example: Raipur, Chhattisgarh
    { name: "Bihar Public School", lat: 25.5941, lon: 85.1376 },
    { name: "Sri Sri Academy", lat: 22.5726, lon: 88.3639 }

];

// Loop through each school and add a marker
schools.forEach(school => {
    const marker = L.marker([school.lat, school.lon]).addTo(map)
        .bindPopup(`<b>${school.name}</b>`)
        .openPopup();
});

    // Modal functionality for viewing course folders
    document.addEventListener('DOMContentLoaded', () => {
        // Modal functionality for viewing course folders
        const modal = document.getElementById('courseModal');
        const closeModal = document.querySelector('.close');
        const courseTitle = document.getElementById('courseTitle');
        const courseVideo = document.getElementById('courseVideo');
        const courseNotes = document.getElementById('courseNotes');
    
        // Open modal when "View Course" button is clicked
        document.querySelectorAll('.view-course-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const folder = e.target.closest('.folder').getAttribute('data-folder');
                courseTitle.innerText = folder.replace(/-/g, ' ').toUpperCase();
                courseVideo.src = `https://www.youtube.com/embed/example_video_id`; // Replace with actual video ID or URL
                courseNotes.innerHTML = `<p>Notes related to ${folder.replace(/-/g, ' ')}.</p>`;
                modal.style.display = 'block'; // Show the modal
            });
        });
    
        // Close modal functionality
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'; // Hide the modal
            courseVideo.src = ''; // Stop the video when closing
        });
    
        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none'; // Hide the modal
                courseVideo.src = ''; // Stop the video when closing
            }
        });
    });
    
    // Impact statistics count up
    const statistics = document.querySelectorAll('.statistic');
    const options = { threshold: 0.5 }; // Trigger animation when 50% of the element is visible

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statistics.forEach(stat => {
                    const count = parseInt(stat.getAttribute('data-count'));
                    let currentCount = 0;
                    const increment = Math.ceil(count / 100); // Adjusted increment for slower count
                    const intervalDelay = 40; // Adjust this for smoother animation

                    const counterInterval = setInterval(() => {
                        if (currentCount < count) {
                            currentCount += increment;
                            stat.querySelector('.count').textContent = Math.min(currentCount, count); // Update the count within the .count span
                        } else {
                            clearInterval(counterInterval);
                        }
                    }, intervalDelay); // Increased delay for slower animation
                });
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);

    statistics.forEach(stat => {
        observer.observe(stat); // Observe each statistic
    });

    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle the answer display
            if (answer.style.display === "block") {
                answer.style.display = "none"; // Hide the answer
            } else {
                // Show the answer
                answer.style.display = "block";
            }
        });
    });
    const classes = document.querySelectorAll(".classes_css");
  classes.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      // Toggle the answer display
      if (answer.style.display === "flex") {
        answer.style.display = "none"; // Hide the answer
      } else {
        // Show the answer
        answer.style.display = "flex";
      }
    });
  });
});
