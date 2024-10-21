// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map
  const map = L.map("map").setView([20.5937, 78.9629], 5); // Coordinates of India

  // Set up the map tiles from OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
  }).addTo(map);

  // Add markers for connected schools
  const schools = [
    { name: "Springfields Public School", lat: 28.6139, lon: 77.209 }, // Example: Delhi
    { name: "Silver Oaks School", lat: 19.076, lon: 72.8777 }, // Example: Mumbai
    { name: "Sri Sri Academy", lat: 22.5726, lon: 88.3639 }, // Example: Kolkata
    { name: "Kendriya Vidalaya", lat: 13.0827, lon: 80.2707 }, // Example: Chennai
  ];

  // Loop through each school and add a marker
  schools.forEach((school) => {
    const marker = L.marker([school.lat, school.lon])
      .addTo(map)
      .bindPopup(`<b>${school.name}</b>`)
      .openPopup();
  });

  // Modal functionality for viewing course folders
  document.addEventListener("DOMContentLoaded", () => {
    // Modal functionality for viewing course folders
    const modal = document.getElementById("courseModal");
    const closeModal = document.querySelector(".close");
    const courseTitle = document.getElementById("courseTitle");
    const courseVideo = document.getElementById("courseVideo");
    const courseNotes = document.getElementById("courseNotes");

    // Open modal when "View Course" button is clicked
    document.querySelectorAll(".view-course-btn").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const folder = e.target.closest(".folder").getAttribute("data-folder");
        courseTitle.innerText = folder.replace(/-/g, " ").toUpperCase();
        courseVideo.src = `https://www.youtube.com/embed/example_video_id`; // Replace with actual video ID or URL
        courseNotes.innerHTML = `<p>Notes related to ${folder.replace(
          /-/g,
          " "
        )}.</p>`;
        modal.style.display = "block"; // Show the modal
      });
    });

    // Close modal functionality
    closeModal.addEventListener("click", () => {
      modal.style.display = "none"; // Hide the modal
      courseVideo.src = ""; // Stop the video when closing
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
        courseVideo.src = ""; // Stop the video when closing
      }
    });
  });

  // Impact statistics count up
  const statistics = document.querySelectorAll(".statistic");
  const options = { threshold: 0.5 }; // Trigger animation when 50% of the element is visible

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statistics.forEach((stat) => {
          const count = parseInt(stat.getAttribute("data-count"));
          let currentCount = 0;
          const increment = Math.ceil(count / 100); // Adjusted increment for slower count
          const intervalDelay = 40; // Adjust this for smoother animation

          const counterInterval = setInterval(() => {
            if (currentCount < count) {
              currentCount += increment;
              stat.querySelector(".count").textContent = Math.min(
                currentCount,
                count
              ); // Update the count within the .count span
            } else {
              clearInterval(counterInterval);
            }
          }, intervalDelay); // Increased delay for slower animation
        });
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, options);

  statistics.forEach((stat) => {
    observer.observe(stat); // Observe each statistic
  });

  // FAQ Toggle
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
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
});
