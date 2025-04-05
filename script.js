document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = `${title} by ${author} (${year})`;

    // Append the new list item to the book list
    document.getElementById('book-list').appendChild(li);

    // Clear the input fields
    document.getElementById('book-form').reset();
});
