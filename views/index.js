const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <!-- <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script> -->
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div className="search" style="text-align: center;">
          <input type="search"
                name="search"
                placeholder="Search..."
                hx-post="/books/search"
                hx-trigger="keyup changed delay:300ms"
                hx-target=".book-list"
          >
        </div>

        <div class="book-list" >
          <!-- book list here later -->
           <!-- <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show Books</button> -->
           <button hx-get="/books" hx-target=".book-list" hx-trigger="dblclick">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
           <form
                hx-post="/books"
                hx-on::after-request="document.querySelector('form').reset()"
                hx-target=".book-list ul"
                hx-swap="beforeend"
            >
            <input
                type="text"
                name="title"
                placeholder="Book Title"
                required
            >
            <input
                type="text"
                name="author"
                placeholder="Author's Name"
                required
            >
            <!-- hx-on:htmx:after-request="" -->
            <button
                hx-on:click="console.log('new book added', event)"
                
                >Add Book</button>
           </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;