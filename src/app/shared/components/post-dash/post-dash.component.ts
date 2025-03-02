import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss']
})
export class PostDashComponent implements OnInit {
 
  postArr!:Array<Ipost>
  constructor(
    private _postservice:PostService
  ) { }

  ngOnInit(): void {
    this._postservice.fetchAllPost()
        .subscribe(res=>{
          console.log(res);
          this.postArr=res
        })

  }

}
