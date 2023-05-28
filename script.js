function startDownload() {
    var progressBar = document.getElementById("progress-bar");
    var width = 0;
    var interval = setInterval(increaseProgress, 50);
  
    function increaseProgress() {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }
  
    // Simulate file download with a delay
    setTimeout(function() {
      window.location.href = "download.php"; // Redirect to PHP file for download
    }, 2000); // Change the delay as needed
  }
  