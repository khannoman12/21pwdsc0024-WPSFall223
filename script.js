
const books = [
    { title: 'Hacking: The Art of Exploitation', author: 'Jon Erickson', isbn: '978-1593271442' },
    { title: 'Introduction to the Theory of Computation', author: 'Michael Sipser', isbn: '978-1133187790' },
    { title: 'Eloquent JavaScript: A Modern Introduction to Programming', author: 'Marijn Haverbeke', isbn: '978-1593279509' }
];

// Function to display books in the book list
function displayBooks() {
    const bookList = document.getElementById('book-list');
    // Clear existing book list
    bookList.innerHTML = '';

    // Iterate through books and create list items
    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author} ISBN: ${book.isbn}`;
        bookList.appendChild(listItem);
    });
}

// Function to add a new book
function addBook() {
    
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    // Check for duplicate entry
    const duplicateBook = books.find(book => book.isbn === isbnInput.value);
    if (duplicateBook) {
        alert('This book is already in the list!');
        return;
    }

  
    const newBook = {
        title: titleInput.value,
        author: authorInput.value,
        isbn: isbnInput.value
    };
    books.push(newBook);
    
// Display updated book list
    displayBooks();

    // Clear form inputs
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    alert('Book added successfully!');
}


function searchBooks() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = books.filter(book => book.title.toLowerCase().includes(searchInput));

    const searchResultsList = document.getElementById('search-results');
   
    searchResultsList.innerHTML = '';

   
    searchResults.forEach(result => {
        const listItem = document.createElement('li');
        listItem.textContent = `${result.title} by ${result.author} ISBN: ${result.isbn}`;
        searchResultsList.appendChild(listItem);
    });
}


displayBooks();
