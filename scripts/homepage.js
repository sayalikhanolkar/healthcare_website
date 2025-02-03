// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Get all the buttons
    const getStartedButton = document.getElementById("get-started");
    const yogaSessionsButton = document.getElementById("yoga-sessions");
    const findYogaButton = document.getElementById("find-yoga");
    const dietPlansButton = document.getElementById("diet-plans");
    const joinVirtualSessionsButton = document.getElementById("join-virtual-sessions");
    const joinForumButton = document.getElementById("join-forum");
  
    // Event listener for Get Started button
    getStartedButton.addEventListener("click", function () {
      window.location.href = "get-started.html"; // Navigate to "get-started.html" page
    });
  
    // Event listener for Yoga Sessions button
    yogaSessionsButton.addEventListener("click", function () {
      window.location.href = "yoga-progress.html"; // Navigate to "yoga-progress.html" page
    });
  
    // Event listener for Find Yoga Classes button
    findYogaButton.addEventListener("click", function () {
      window.location.href = "find-yoga.html"; // Navigate to "find-yoga.html" page
    });
  
    // Event listener for Diet Plans button
    dietPlansButton.addEventListener("click", function () {
      window.location.href = "diet-plans.html"; // Navigate to "diet-plans.html" page
    });
  
    // Event listener for Join Virtual Sessions button
    joinVirtualSessionsButton.addEventListener("click", function () {
      window.location.href = "virtual-sessions.html"; // Navigate to "virtual-sessions.html" page
    });
  
    // Event listener for Join Forum button
    joinForumButton.addEventListener("click", function () {
      window.location.href = "community-forums.html"; // Navigate to "community-forums.html" page
    });
  
  });
  