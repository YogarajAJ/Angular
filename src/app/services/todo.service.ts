import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import Todo from '../models/todo.model';

const URL = "https://jsonplaceholder.typicode.com"

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getAllTodo() {
    return this.httpClient.get(`${URL}/todos`, headerOptions);
  }

  getDoneTodo(allTodo): Todo[] {
    let todo: Todo[] = []
    for (let i of allTodo) {
      if (i.completed) {
        todo.push(i)
      }
    }
    return todo;
  }

  getNotDoneTodo(allTodo): Todo[] {
    let todo: Todo[] = []
    for (let i of allTodo) {
      if (!i.completed) {
        todo.push(i)
      }
    }
    return todo;
  }

  updateTodo(todo){

    return this.httpClient.put(`${URL}/todos`, todo, headerOptions);
  }

  

  addData(obj){
    this.httpClient.post("http://localhost:3000/data", obj, headerOptions)
  }



}
