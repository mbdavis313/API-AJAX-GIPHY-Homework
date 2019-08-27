// Create a variable for the input search word.
// preventDefault() stops the browser from refreshing.
$('.js-button').on('click', function (e) { 
    e.preventDefault();
// Gets search text from HTML button. 
  let searchText = $('#search-term').val(); 
  console.log(searchText);

  let giphyUrl = "https://api.giphy.com/v1/gifs/search?q="+searchText+"&api_key=wPDa4EjfIpXM8MhwGbu93SBi1y7XPUhV&limit=5"
  $.ajax({
    url: giphyUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response.data)
  // console.log(response); 
  // console.log(response.data[0].images.original.url);    
  //const gifUrl = response.data[0].images.original.url;
  for (let i = 0; i < response.data.length; i++) {
  let gifUrl = response.data[i].images.original.url;
  // creates new HTML image element in jQuery
  const image = $('<img>');
  // Sets source of the image.
  image.attr("src", gifUrl);
  // Append the image to the DOM.
  $('#gifs').append(image);
  // END OF FOR LOOP
  }
    });
});






/* let buttonTopics = ["SpaceX", "Meditation", "Levitation"];
// This loops through the array index.
for (let index = 0; index < buttonTopics.length; index++) {
    // Each word of index is passed to const topic.
    const topic = buttonTopics[index];
    // Creates a new HTML element <button>.
    const $button = $('<button>');
    // .addClass - adds js-button to the button HTML element.
    $button.addClass('js-button');
    // Creates text for each button.
    $button.text(topic);
    // Gets the 1st value when a button is selected.
    $button.attr("data-topic", topic);
    // Appends to the end of all gif-buttons id elements
    $('#gif-buttons').append($button);
} */
// Binds a click event to the document and all child elements within it. This method is delegated event handling.

    /* // Attributes array 0, 1, and 2 to the const when selected.
    const clickedButtonTopic = $(this).attr('data-topic');
    // Outputs the buttonTopics when each is selected. */