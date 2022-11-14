import { BookList } from "./clases.js";
import { Book } from "./clases.js";

window.onload = function(){
    var myBookList = new BookList();


    if(localStorage.getItem("bookList") != undefined){
        let lista = JSON.parse(localStorage.getItem("bookList"));
        for(let i = 0; i < lista.length; i++){
            let book = new Book(lista[i].title, lista[i].author, lista[i].read, lista[i].readDate);
            myBookList.add(book);
        }
        pintarListaLibros(myBookList);
    }

    document.querySelectorAll("button")[0].addEventListener("click", () =>{   
        let titulo = document.getElementById("title").value;
        let autor = document.getElementById("author").value;
        let genero = document.getElementById("genre").value;
        myBookList.add(new Book(titulo, autor, genero));
        pintarListaLibros(myBookList);
        localStorage.setItem("bookList", JSON.stringify(myBookList.books));
    });

    document.getElementById("readingList").addEventListener("click", () =>{     
        myBookList.finishCurrentBook();
        pintarListaLibros(myBookList);
    }); 
}


function pintarListaLibros(lista)
{
    document.getElementById("readingList").innerHTML = "";
    lista.books.forEach( (libro) =>{
            let leido;

            if (!libro.read)
                leido="Not Read";
            else
            {
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                leido="Read on " + libro.readDate.toLocaleDateString('en-EN', options);
            }

           //Añadir Libro en interfaz
           let bookEntry = `<li class="list-group-item d-flex justify-content-between"><div>
           <h6 class="my-0"><b>${libro.title}</b></h6> <small class="text-muted" contenteditable="true">${libro.author}&nbsp;</small>
           </div> <span class="text-muted">${leido}</span>
           </li>`;
           
              
           document.getElementById("readingList").innerHTML += bookEntry;
           
    })

    document.getElementById("booksRead").innerHTML = lista.numberBooksRead + " of "+ lista.totalBooks;
    
}