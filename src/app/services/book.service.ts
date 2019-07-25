import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:Http) { }

  getReviews(){
    return this.http.get("")
    .toPromise()
    .then(response => response.json())
    .catch(error => console.log(error));
    
  }

  getBookReviews(name, reviews){
    let temp = []
    for (let i of reviews){
      if(i.name ===  name){
        temp.push(i)
      }
    }
  }

}
