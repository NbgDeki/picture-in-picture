const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStram = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStram;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error, error.message);
  }
};

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

selectMediaStream();
