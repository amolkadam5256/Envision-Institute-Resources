const getData = async () => {


    const options = {
        method: 'GET',
        url: 'https://hapi-books.p.rapidapi.com/top_authors',
        headers: {
            'x-rapidapi-key': '1b843769aemsh1aec3711bf731a1p1fa454jsn464b9efda6de',
            'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);

        response.data.map((Books) => {

            const bookId = document.createElement("h3");
            const child1 = document.createTextNode("bookId :" + Books.author_id);
            bookId.appendChild(child1);
            document.getElementById("Demo").appendChild(bookId);


            const bookimage = document.createElement("img");
            bookimage.src = Books.image;
            bookimage.style.width = "300px"
            bookimage.style.height = "300px"
            bookimage.style.margin = "auto"
            document.getElementById("Demo").appendChild(bookimage);

            const bookurl = document.createElement("h3");
            const child2 = document.createTextNode("bookurl :" + Books.url);
            bookurl.appendChild(child2);
            document.getElementById("Demo").appendChild(bookurl);

            const popular_book_title = document.createElement("h3");
            const child3 = document.createTextNode("popular_book_title :" + Books.popular_book_title);
            popular_book_title.appendChild(child3);
            document.getElementById("Demo").appendChild(popular_book_title);


            const popular_book_url = document.createElement("h3");
            const child4 = document.createTextNode("popular_book_url :" + Books.popular_book_url);
            popular_book_url.appendChild(child4);
            document.getElementById("Demo").appendChild(popular_book_url);

            
            const number_published_books = document.createElement("h3");
            const child5 = document.createTextNode("number_published_books :" + Books.number_published_books);
            number_published_books.appendChild(child5);
            document.getElementById("Demo").appendChild(number_published_books);
        })

    } catch (error) {
        console.error(error);
    }
}