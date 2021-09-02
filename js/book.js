
// search results

const searchFood = () => {  
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
   
    console.log(searchText);

    const url = `http://openlibrary.org/search.json?q=${searchText}`


    fetch(url)
    .then(Response => Response.json())
    .then(data => displayBook(data.docs))
   


}



const displayBook =(books) =>{
    const searchResult = document.getElementById('search-result')
    books.forEach(book =>{
        console.log(book);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        
        <div class="col">
        <div class="card">
         
          <div class="card-body">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <h3 class="card-title">Book Name: ${book.title}</h3>
            <h5 class="card-text">Author Name: ${book.author_name}</h5>
            <h6 class="card-text">Fast Publish date: ${book.publish_date}</h6>
          </div>
        </div>
      </div>
        

      
        `
        searchResult.appendChild(div)
        
    })
} 