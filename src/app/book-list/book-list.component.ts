import {Component, Input, OnInit} from '@angular/core';
import {BookServiceClient} from '../services/book.service.client';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books;
  @Input() currentUser;
  name: String;
  author: String;
  status: String;

  constructor(private bookService: BookServiceClient) { }

  ngOnInit() {
  }

  createUserBook(name, author, status) {
    this.bookService
      .addBookToUser(this.currentUser._id, name, author, status)
      .then(this.refreshBookList);
  }

  confirmUpdateBook() {

  }

  updateBook() {

  }

  refreshBookList() {
    this.bookService.findUserBooks(this.currentUser._id)
      .then(books => this.books = books);
  }

}
