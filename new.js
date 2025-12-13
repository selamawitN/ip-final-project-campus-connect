document.addEventListener('DOMContentLoaded', () => {
    // Select all details elements that act as accordions
    const detailsElements = document.querySelectorAll('.course-details');

    detailsElements.forEach(targetDetail => {
        targetDetail.addEventListener('toggle', () => {
            // Check if the current details element is being opened
            if (targetDetail.open) {
                // Iterate over all details elements again
                detailsElements.forEach(detail => {
                    // If a details element is open AND it is NOT the one we just clicked
                    // AND they share the same direct parent node (ensures only siblings close)
                    if (detail.open && detail !== targetDetail && detail.parentNode === targetDetail.parentNode) {
                        detail.open = false; // Close the other details element
                    }
                });
            }
        });
    });
});
