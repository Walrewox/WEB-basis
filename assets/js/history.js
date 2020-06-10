window.addEventListener('popstate', (event) => {
  console.log("location: " + document.location + ", state: " + event.state);
});
