const createEditFormTemplate = (book) => /*html*/`
    <form hx-put="/books/${book.id}" hx-swap="outerHTML" hx-target="closest li">
        <input
            type="text"
            name="title"
            placeholder="Book Title"
            required
            value="${book.title}"
        >
        <input
            type="text"
            name="author"
            placeholder="Author's Name"
            required
            value="${book.author}"
        >
        <!-- hx-on:htmx:after-request="" -->
        <button
            hx-on:click="console.log('new book added', event)"
            
        >Confirm</button>
    </form>
`

export default createEditFormTemplate
        