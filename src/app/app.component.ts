import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngIntro';
  parentMessage:string = 'Message comming from parent componet'
  message!: string

  @ViewChild(PostComponent) childComponent: any 

  ngAfterViewInit(): void {
    this.message = this.childComponent.childMessage
  }
}
