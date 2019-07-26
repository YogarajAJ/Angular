import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import Todo from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  total: number;
  allTodo: Todo[];
  todo: Todo[];


  constructor(private service: TodoService) { }

  ngOnInit() {

    this.service.getAllTodo().subscribe(
      response => {
        this.allTodo = JSON.parse (JSON.stringify(response));
        this.todo = this.allTodo;
        this.total = this.todo.length
      }
    )
  }

  allTodoList() {
    this.todo = this.allTodo
    this.total = this.todo.length
  }

  doneTodoList() {
    this.todo = this.service.getDoneTodo(this.allTodo)
    this.total = this.todo.length
  }

  notDoneTodoList() {
    this.todo = this.service.getNotDoneTodo(this.allTodo)
    this.total = this.todo.length
  }

  edit(todo){
    todo.completed =  !todo.completed
    
    this.service.updateTodo(todo).subscribe(
      data => console.log(data)    
    )
  }

  addData(){
    this.service.addData({})
  }

}
