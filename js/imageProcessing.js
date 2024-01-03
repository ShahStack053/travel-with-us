let cropper;
document.addEventListener('DOMContentLoaded', function() {
    const tripImageInput = document.getElementById('tripImage');
    const imageElement = document.getElementById('image');

    tripImageInput.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
            // Display the image element
            imageElement.style.display = 'block';

            // Read the selected image
            const reader = new FileReader();
            reader.onload = function(e) {
                imageElement.src = e.target.result;

                // Destroy the old cropper instance
                if (cropper) {
                    cropper.destroy();
                }

                // Initialize Cropper.js
                cropper = new Cropper(imageElement, {
                    aspectRatio: 600 / 400,
                    viewMode: 1,
                    autoCropArea: 1,
                    scalable: true,
                    crop(event) {
                        console.log(event.detail.x);
                        console.log(event.detail.y);
                        console.log(event.detail.width);
                        console.log(event.detail.height);
                        console.log(event.detail.rotate);
                        console.log(event.detail.scaleX);
                        console.log(event.detail.scaleY);
                    },
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    });

    // Add more JS code here to handle the form submission and send the cropped image to the server
});
// Example of getting the cropped image from the cropper instance
// document.getElementById('yourFormId').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get the canvas with the final cropped result
//     let croppedCanvas = cropper.getCroppedCanvas({
//         width: 600,
//         height: 400,
//     });

//     // Convert the canvas to a Blob
//     croppedCanvas.toBlob(function(blob) {
//         // Create a FormData object and append the blob file
//         let formData = new FormData();
//         formData.append('croppedImage', blob);

//         // Post the FormData object with the file to the server
//         // Replace 'yourServerEndpoint' with your actual upload URL
//         fetch('yourServerEndpoint', {
//             method: 'POST',
//             body: formData,
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             // Handle the server response here
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     });

//     // Alternatively, to get the Base64 image data
//     let croppedImageDataURL = croppedCanvas.toDataURL();
//     // You can now send 'croppedImageDataURL' to your server
// });
document.getElementById('addTripForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  var formData = new FormData(this);

  // Check if the cropper instance is valid
  if (cropper) {
    // Get the cropped image as a Blob
    cropper.getCroppedCanvas().toBlob(function (blob) {
      // Append the Blob to your FormData
      formData.append('croppedImage', blob, 'croppedImage.jpg'); // You can give any filename

      // Log the form data for debugging purposes
      for (var pair of formData.entries()) {
        console.log(pair[0]+ ': ', pair[1]);
      }

        console.log('formdata===>',formData)
      // Now, use AJAX to send the formData to the server
      // Example using fetch:
      fetch('yourServerEndpoint', { // Replace with your server endpoint
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the server response here
      })
      .catch(error => {
        console.error('Error:', error);
      });

    }, 'image/jpeg'); // You can adjust the image type
  } else {
    alert('Please select an image and use the cropper before submitting.');
  }
});

