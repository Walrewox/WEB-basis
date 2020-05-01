window.addEventListener('popstate', function(event) {
  console.log('popstate fired!');
  updateContent(event.state);
});