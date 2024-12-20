(function () {
    'use strict';

    const {
        stash,
        Stash,
        waitForElementId,
        waitForElementClass,
        waitForElementByXpath,
        getElementByXpath,
    } = unsafeWindow.stash;

    // Add event listener for the scenes page
    stash.addEventListener('page:scenes', function () {
        // Wait for the toolbar element to appear
        waitForElementClass("btn-toolbar", function () {
            // Check if the button already exists
            if (!document.getElementById('new-scenes-filter')) {
                const toolbar = document.querySelector(".btn-toolbar");

                // Create a new button group container
                const newGroup = document.createElement('div');
                newGroup.classList.add('mx-2', 'mb-2', 'd-flex');
                toolbar.appendChild(newGroup);

                // Create the new button
                const newButton = document.createElement("a");
                newButton.setAttribute("id", "new-scenes-filter");
                newButton.classList.add('btn', 'btn-secondary');
                newButton.innerHTML = 'New Scenes';
                // Set the URL for filtering new scenes
                newButton.href = `${stash.serverUrl}/scenes?disp=3&sortby=created_at&sortdir=desc`;
                newGroup.appendChild(newButton);
            }
        });
    });
})();
