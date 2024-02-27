(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const offsetTop = document.querySelector(
        this.getAttribute("href")
      ).offsetTop;
      const headerOffset = 50; // Height of your fixed header
      window.scrollTo({
        top: offsetTop - headerOffset, // Subtract header height to adjust for fixed header
        behavior: "smooth",
      });
    });
  });

  var currentTrips = 0;
  const tripsToShowEachTime = 3;
  const dummyTrips = [
    {
      name: "Tropical Paradise",
      location: "Murree",
      duration: 3,
      persons: 2,
      price: 149.0,
      image: "../img/package-1.jpg",
      description:
        "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway.",
    },
    {
      name: "Adventure Awaits",
      location: "Swat",
      duration: 4,
      persons: 2,
      price: 139.0,
      image: "../img/package-2.jpg",
      description:
        "Explore the diverse landscapes of Swat, from volcanic mountains to lush rainforests .",
    },
    {
      name: "City Lights",
      location: "Gilgit",
      duration: 5,
      persons: 2,
      price: 189.0,
      image: "../img/package-3.jpg",
      description:
        "Discover the vibrant city life of Gilgit and its stunning skyline was a very delight experience.",
    },
    {
      name: "Tropical Paradise",
      location: "Murree",
      duration: 3,
      persons: 2,
      price: 149.0,
      image: "../img/package-1.jpg",
      description:
        "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway.",
    },
  ];
  //     function createTripCards(trips) {
  //     var tripContainer = $('#trips .row');

  //     trips.forEach(function(trip) {
  //         var tripCardHtml = `
  //             <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  //                 <div class="package-item">
  //                     <div class="overflow-hidden">
  //                         <img class="img-fluid" src="${trip.image}" alt="">
  //                     </div>
  //                     <div class="d-flex border-bottom">
  //                         <small class="flex-fill text-center border-end py-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>${trip.location}</small>
  //                         <small class="flex-fill text-center border-end py-2"><i class="fa fa-calendar-alt text-primary me-2"></i>${trip.duration} days</small>
  //                         <small class="flex-fill text-center py-2"><i class="fa fa-user text-primary me-2"></i>${trip.persons} Person</small>
  //                     </div>
  //                     <div class="text-center p-4">
  //                         <h3 class="mb-0">$${trip.price}</h3>
  //                         <p>${trip.description}</p>
  //                         <div class="d-flex justify-content-center mb-2">
  //                             <a href="#" class="btn btn-sm btn-primary px-3 border-end" style="border-radius: 30px 0 0 30px;">Read More</a>
  //                             <a href="#" class="btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;">Book Now</a>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         `;

  //         tripContainer.append(tripCardHtml);
  //     });
  // }
  // function createTripCards(trips) {
  //     var container = document.getElementById('tripContainer');
  //     container.innerHTML = ''; // Clear existing content

  //     for (var i = 0; i < currentTrips && i < trips.length; i++) {
  //         var trip = trips[i];
  // var cardHtml = `
  //     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
  //         <div class="package-item">
  //             <div class="overflow-hidden">
  //                 <img class="img-fluid" src="${trip.image}" alt="${trip.name}">
  //             </div>
  //             <div class="d-flex border-bottom">
  //                 <small class="flex-fill text-center border-end py-2">
  //                     <i class="fa fa-map-marker-alt text-primary me-2"></i>${trip.location}
  //                 </small>
  //                 <small class="flex-fill text-center border-end py-2">
  //                     <i class="fa fa-calendar-alt text-primary me-2"></i>${trip.duration} days
  //                 </small>
  //                 <small class="flex-fill text-center py-2">
  //                     <i class="fa fa-user text-primary me-2"></i>${trip.persons} Person
  //                 </small>
  //             </div>
  //             <div class="text-center p-4">
  //                 <h3 class="mb-0">$${trip.price.toFixed(2)}</h3>
  //                 <p>${trip.description}</p>
  //                 <div class="d-flex justify-content-center mb-2">
  //                     <a href="#" class="btn btn-sm btn-primary px-3 border-end">Check Weater</a>
  //                     <a href="#" class="btn btn-sm btn-primary px-3">Book Now</a>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  // `;
  //         container.innerHTML += cardHtml;
  //     }
  //      updateShowMoreButton(trips); // Update the Show More button visibility
  //     }

  function createTripCards(trips) {
    var container = document.getElementById("tripContainer");
    container.innerHTML = ""; // Clear existing content

    trips.forEach(function (trip, index) {
      if (index < currentTrips) {
        // Column div
        var colDiv = document.createElement("div");
        colDiv.className = "col-lg-4 col-md-6 wow fadeInUp";
        colDiv.setAttribute("data-wow-delay", "0.1s");

        // Package item div
        var packageDiv = document.createElement("div");
        packageDiv.className = "package-item";

        // Image container
        var imgContainer = document.createElement("div");
        imgContainer.className = "overflow-hidden";
        var img = document.createElement("img");
        img.className = "trip-card-image";
        img.src = trip.image;
        img.alt = trip.name;
        imgContainer.appendChild(img);

        // Info container
        var infoDiv = document.createElement("div");
        infoDiv.className = "d-flex border-bottom";

        var locationSpan = document.createElement("small");
        locationSpan.className = "flex-fill text-center border-end py-2";
        locationSpan.innerHTML = `<i class="fa fa-map-marker-alt text-primary me-2"></i>${trip.location}`;

        var durationSpan = document.createElement("small");
        durationSpan.className = "flex-fill text-center border-end py-2";
        durationSpan.innerHTML = `<i class="fa fa-calendar-alt text-primary me-2"></i>${trip.duration} days`;

        var personsSpan = document.createElement("small");
        personsSpan.className = "flex-fill text-center py-2";
        personsSpan.innerHTML = `<i class="fa fa-user text-primary me-2"></i>${trip.persons} Person`;

        infoDiv.appendChild(locationSpan);
        infoDiv.appendChild(durationSpan);
        infoDiv.appendChild(personsSpan);

        // Description and button container
        var descDiv = document.createElement("div");
        descDiv.className = "text-center p-4";

        var priceH3 = document.createElement("h3");
        priceH3.className = "mb-0";
        priceH3.textContent = `PKR ${trip.price.toFixed(2)}`;
        var descP = document.createElement("p");
        descP.textContent = trip.description;

        var buttonContainer = document.createElement("div");
        buttonContainer.className = "d-flex justify-content-center mb-2";

        var weatherButton = document.createElement("button");
        weatherButton.className = "btn btn-sm btn-primary px-3 border-end";
        weatherButton.textContent = "Check Weather";
        weatherButton.onclick = function () {
          checkWeather(trip.location, index);
        };

        var bookButton = document.createElement("a");
        var isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn === "true") {
          // If logged in, navigate to the booking section
          bookButton.href = "#booking";
        } else {
          // If not logged in, navigate to the login page
          bookButton.href = "/login.html"; // Update this with the actual path to your login page
        }
        bookButton.className = "btn btn-sm btn-primary px-3";
        bookButton.textContent = "Book Now";

        buttonContainer.appendChild(weatherButton);
        buttonContainer.appendChild(bookButton);

        // Append all parts to the package item
        packageDiv.appendChild(imgContainer);
        packageDiv.appendChild(infoDiv);
        descDiv.appendChild(priceH3);
        descDiv.appendChild(descP);
        descDiv.appendChild(buttonContainer);
        packageDiv.appendChild(descDiv);

        // Append the package item to the column div
        colDiv.appendChild(packageDiv);

        // Append the column div to the container
        container.appendChild(colDiv);
      }
    });

    updateShowMoreButton(trips); // Update the Show More button visibility
  }
  function fetchWeather(location) {
    const apiKey = "8026683f4a92594cb95b44eba6b80af4"; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod && data.cod !== 200) {
          showToast(`Error: ${data.message}`);
        } else {
          displayWeather(data); // Function to display weather data in your modal
        }
      })
      .catch((error) => {
        showToast(`Error: ${error.message}`); // Function to display error in toast
        console.error("Error:", error.message);
      });
  }

  function displayWeather(data) {
    // Assuming you have a modal element to show the weather
    const weatherModal = document.getElementById("weatherModalContent"); // Ensure you have a div with this id in your modal for content
    const weatherContent = `
        <div class="weather-modal-header">
            <h5 class="weather-modal-title">Weather in ${data.name}</h5>
        </div>
        <div class="weather-modal-body">
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].main}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        </div>
    `;

    weatherModal.innerHTML = weatherContent;
    $("#weatherModal").modal("show");
  }

  function showToast(message) {
    const weatherToast = new bootstrap.Toast(
      document.getElementById("weatherToast")
    );
    document.querySelector("#weatherToast .toast-body").textContent = message;
    weatherToast.show();
  }

  function checkWeather(location, index) {
    // Here you would fetch the weather data based on the location
    // For demo purposes, I'm just showing a static message
    fetchWeather(location);
    // Show the modal (assuming you are using Bootstrap's modal)
    // $('#weatherModal').modal('show');
  }
  function showMoreTrips() {
    currentTrips += tripsToShowEachTime;
    createTripCards(dummyTrips); // Assuming dummyTrips is your data array
  }

  // Function to update the visibility of the Show More button
  function updateShowMoreButton(trips) {
    var showMoreBtn = document.getElementById("showMoreBtn");
    if (currentTrips < trips.length) {
      showMoreBtn.style.display = "block"; // Show the button
    } else {
      showMoreBtn.style.display = "none"; // Hide the button if no more trips are available
    }
  }

  // Example array of testimonials
  const testimonials = [
    {
      name: "Asif",
      location: "Islamabad, Pakistan",
      image: "../img/testimonial-1.jpg",
      text: "My journey with 'Travel With Us' was nothing short of fabulous. From the bustling markets of Bangkok to the serene beaches of Phuket, every moment ",
    },
    {
      name: "Mujtaba",
      location: "Rawalpindi, Pakistan",
      image: "../img/testimonial-2.jpg",
      text: "The attention to detail and the level of care provided throughout our tour of the Italian countryside was incredible. 'Travel With Us' truly made this a trip of a lifetime!",
    },
    {
      name: "Awais",
      location: "karachi, Pakistan",
      image: "../img/testimonial-3.jpg",
      text: "I never knew a trip could be this stress-free. 'Travel With Us' took care of every single detail, allowing me to immerse myself in the culture and beauty of Japan.",
    },
    {
      name: "Ashaan ",
      location: "lahore, Pakistan",
      image: "../img/testimonial-4.jpg",
      text: "Exploring the ancient ruins of Machu Picchu with expert guides was an enlightening experience. The service was impeccable, and every accommodation ",
    },
  ];
  // Function to render testimonials dynamically on the page
  function renderTestimonials(testimonialsArray) {
    const testimonialContainer = document.querySelector(
      ".testimonial-carousel"
    );
    testimonialContainer.innerHTML = ""; // Clear existing testimonials

    testimonialsArray.forEach((testimonial) => {
      const testimonialElement = document.createElement("div");
      testimonialElement.className =
        "testimonial-item bg-white text-center border p-4";
      testimonialElement.innerHTML = `
      <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="${testimonial.image}" alt="Testimonial from ${testimonial.name}" style="width: 80px; height: 80px;">
      <h5 class="mb-0">${testimonial.name}</h5>
      <p class="text-muted">${testimonial.location}</p>
      <p class="mb-0 testemonial-text">${testimonial.text}</p>
    `;
      testimonialContainer.appendChild(testimonialElement);
    });

    // Now that dynamic content has been added, initialize the carousel
    initializeCarousel();
  }

  // Call the function when the document is ready
  document.addEventListener("DOMContentLoaded", () =>
    renderTestimonials(testimonials)
  );

  function initializeCarousel() {
    // Check if the carousel was already initialized and destroy it
    if ($(".testimonial-carousel").data("owl.carousel")) {
      $(".testimonial-carousel").data("owl.carousel").destroy();
    }

    // Reinitialize the carousel
    $(".testimonial-carousel").owlCarousel({
      center: true,
      loop: true,
      margin: 24,
      autoplay: true,
      autoplayTimeout: 3000, // Set the timeout to 3 seconds
      autoplayHoverPause: true, // Pause on hover
      responsive: {
        600: {
          items: 3,
        },
      },
    });

    // Update the active class after initialization and on change
    updateActiveClass();
    $(".testimonial-carousel").on("changed.owl.carousel", updateActiveClass);
  }

  function updateActiveClass() {
    // You might need to adjust the selector based on the version of Owl Carousel
    $(".owl-item.active").siblings().removeClass("active");
    $(".owl-item.active").eq(1).addClass("active"); // Since the center item is the second active item in the array
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderTestimonials(testimonials);
  });
  document.addEventListener("DOMContentLoaded", function () {
    var logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function () {
      // Remove the token from local storage
      localStorage.clear();
      // Redirect the user to index.html
      window.location.href = "../index.html";
    });
  });

  function fetchTrips() {
    // fetch('URL_OF_YOUR_API') // Replace with your API URL
    //     .then(response => response.json())
    //     .then(data => {
    //         createTripCards(data);
    //     })
    //     .catch(error => console.error('Error:', error));
    const dummyTrips = [
      {
        name: "Tropical Paradise",
        location: "Murree",
        duration: 3,
        persons: 2,
        price: 149.0,
        image: "../img/package-1.jpg",
        description:
          "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway.",
      },
      {
        name: "Adventure Awaits",
        location: "Swat",
        duration: 4,
        persons: 2,
        price: 139.0,
        image: "../img/package-2.jpg",
        description:
          "Explore the diverse landscapes of Swat, from volcanic mountains to lush rainforests.",
      },
      {
        name: "City Lights",
        location: "Gilgit",
        duration: 5,
        persons: 2,
        price: 189.0,
        image: "../img/package-3.jpg",
        description:
          "Discover the vibrant city life of Gilgit and its stunning skyline was a very delight experience.",
      },
    ];

    // Function to create trip cards can then use this dummy data
    createTripCards(dummyTrips);
  }
  function filterTrips(searchQuery) {
    const filteredTrips = dummyTrips.filter((trip) =>
      trip.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    createTripCards(filteredTrips);
  }
  document.getElementById("searchButton").addEventListener("click", () => {
    const searchQuery = document.getElementById("searchInput").value;
    filterTrips(searchQuery);
  });
  // $(document).ready(function() {
  //     // Existing code ...

  //     // Fetch and display trips
  //     fetchTrips();
  // });
  document
    .getElementById("showMoreBtn")
    .addEventListener("click", showMoreTrips);

  // Initial load
  $(document).ready(function () {
    currentTrips = tripsToShowEachTime;
    createTripCards(dummyTrips);
  });
})(jQuery);
