import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input()
  bookName
  allReviews = []
  bookReviews = []

  constructor(private service:BookService) { }

  ngOnInit() {
    this.service.getReviews()
    .then(response => {this.allReviews = response;console.log(response);})
    .catch(error => console.log(error))
  }

  getReview(){
    console.log(this.service.getBookReviews(this.bookName, this.allReviews));
    
  }

}
