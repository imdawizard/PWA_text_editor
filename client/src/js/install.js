// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});


const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault(); // Prevent the default browser prompt
  deferredPrompt = event;
  butInstall.style.display = 'block'; // Display the install button
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the installation');
    }
    deferredPrompt = null; // Reset the deferredPrompt
    butInstall.style.display = 'none'; // Hide the install button
  }
});

// Added a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installed by the user');
});