import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

   @Input() fromParent!:string

   title:string = 'List of Post'
   
   postParentMessage: string = 'Message comming from the post parent'

   childMessage: string = 'Form child component'

}
