(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
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
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const offsetTop = document.querySelector(this.getAttribute('href')).offsetTop;
            const headerOffset = 50; // Height of your fixed header
            window.scrollTo({
            top: offsetTop - headerOffset,  // Subtract header height to adjust for fixed header
            behavior: 'smooth'
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
        price: 149.00,
        image: "img/package-1.jpg",
        description: "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway."
    },
    {
        name: "Adventure Awaits",
        location: "Kaghan",
        duration: 4,
        persons: 2,
        price: 139.00,
        image: "img/package-2.jpg",
        description: "Explore the diverse landscapes of Kaghan, from volcanic mountains to lush rainforests."
    },
    {
        name: "City Lights",
        location: "Gilgit",
        duration: 5,
        persons: 2,
        price: 189.00,
        image: "img/package-3.jpg",
        description: "Discover the vibrant city life of Gilgit and its stunning skyline."
    },
    {
        name: "Tropical Paradise",
        location: "Murree",
        duration: 3,
        persons: 2,
        price: 149.00,
        image: "img/package-1.jpg",
        description: "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway."
    },
    {
        name: "Adventure Awaits",
        location: "Kaghan",
        duration: 4,
        persons: 2,
        price: 139.00,
        image: "img/package-2.jpg",
        description: "Explore the diverse landscapes of Kaghan, from volcanic mountains to lush rainforests."
    },
    {
        name: "City Lights",
        location: "Gilgit",
        duration: 5,
        persons: 2,
        price: 189.00,
        image: "img/package-3.jpg",
        description: "Discover the vibrant city life of Gilgit and its stunning skyline."
    },
    {
        name: "Tropical Paradise",
        location: "Murree",
        duration: 3,
        persons: 2,
        price: 149.00,
        image: "img/package-1.jpg",
        description: "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway."
    },
    {
        name: "Adventure Awaits",
        location: "Kaghan",
        duration: 4,
        persons: 2,
        price: 139.00,
        image: "img/package-2.jpg",
        description: "Explore the diverse landscapes of Kaghan, from volcanic mountains to lush rainforests."
    },
    {
        name: "City Lights",
        location: "Gilgit",
        duration: 5,
        persons: 2,
        price: 189.00,
        image: "img/package-3.jpg",
        description: "Discover the vibrant city life of Gilgit and its stunning skyline."
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
function createTripCards(trips) {
    var container = document.getElementById('tripContainer');
    container.innerHTML = ''; // Clear existing content

    for (var i = 0; i < currentTrips && i < trips.length; i++) {
        var trip = trips[i];
var cardHtml = `
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="package-item">
            <div class="overflow-hidden">
                <img class="img-fluid" src="${trip.image}" alt="${trip.name}">
            </div>
            <div class="d-flex border-bottom">
                <small class="flex-fill text-center border-end py-2">
                    <i class="fa fa-map-marker-alt text-primary me-2"></i>${trip.location}
                </small>
                <small class="flex-fill text-center border-end py-2">
                    <i class="fa fa-calendar-alt text-primary me-2"></i>${trip.duration} days
                </small>
                <small class="flex-fill text-center py-2">
                    <i class="fa fa-user text-primary me-2"></i>${trip.persons} Person
                </small>
            </div>
            <div class="text-center p-4">
                <h3 class="mb-0">$${trip.price.toFixed(2)}</h3>
                <p>${trip.description}</p>
                <div class="d-flex justify-content-center mb-2">
                    <a href="#" class="btn btn-sm btn-primary px-3 border-end">Check Weater</a>
                    <a href="#" class="btn btn-sm btn-primary px-3">Book Now</a>
                </div>
            </div>
        </div>
    </div>
`;
        container.innerHTML += cardHtml;
    }
     updateShowMoreButton(trips); // Update the Show More button visibility
    }
    
    function showMoreTrips() {
    currentTrips += tripsToShowEachTime;
    createTripCards(dummyTrips); // Assuming dummyTrips is your data array
    }
    
    // Function to update the visibility of the Show More button
function updateShowMoreButton(trips) {
    var showMoreBtn = document.getElementById('showMoreBtn');
    if (currentTrips < trips.length) {
        showMoreBtn.style.display = 'block'; // Show the button
    } else {
        showMoreBtn.style.display = 'none'; // Hide the button if no more trips are available
    }
}


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
        price: 149.00,
        image: "img/package-1.jpg",
        description: "Experience the serene beauty of Murree's beaches and rich cultural heritage. Perfect for a quick getaway."
    },
    {
        name: "Adventure Awaits",
        location: "Kaghan",
        duration: 4,
        persons: 2,
        price: 139.00,
        image: "img/package-2.jpg",
        description: "Explore the diverse landscapes of Kaghan, from volcanic mountains to lush rainforests."
    },
    {
        name: "City Lights",
        location: "Gilgit",
        duration: 5,
        persons: 2,
        price: 189.00,
        image: "img/package-3.jpg",
        description: "Discover the vibrant city life of Gilgit and its stunning skyline."
    },
   
];

// Function to create trip cards can then use this dummy data
        createTripCards(dummyTrips);
    }
    
    // $(document).ready(function() {
    //     // Existing code ...

    //     // Fetch and display trips
    //     fetchTrips();
    // });
    document.getElementById('showMoreBtn').addEventListener('click', showMoreTrips);

// Initial load
$(document).ready(function() {
    currentTrips = tripsToShowEachTime;
    createTripCards(dummyTrips);
});
})(jQuery);

