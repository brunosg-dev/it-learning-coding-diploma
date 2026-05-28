function reloadFrame() {
    const frame = document.querySelector('iframe');
    frame.src = frame.src;
}

function toggleFullscreen() {
    const frame = document.querySelector('iframe');

    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    } else {
        alert('Fullscreen mode is not supported by this browser.');
    }
}