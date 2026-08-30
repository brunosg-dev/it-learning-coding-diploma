const toggleButton = document.querySelector(".toggle-button");
const box = document.querySelector(".box");

toggleButton.addEventListener("click", function () {
  box.classList.toggle("highlight");
});


/*Find the button
Find the box

When the button is clicked:
    look at the box's class list
    switch the highlight class on/off
    
querySelector()      → look for something now
addEventListener()   → wait/listen for something to happen
classList            → the element's CSS class list
toggle()             → add if missing, remove if present
    
    */