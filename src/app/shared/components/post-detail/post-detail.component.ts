import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postId!:string
  singlepostObj!:Ipost
  constructor(
    private _postService:PostService,
    private _route:Router,
    private _ActivetRout:ActivatedRoute
  ) { }

  ngOnInit(): void {
 this.postId=this._ActivetRout.snapshot.params['userId']
console.log(this.postId);

 if(this.postId){
  this._postService.fetchsinglpost(this.postId)
  .subscribe(res=>{
    console.log(res);
    this.singlepostObj={...res,id:this.postId}
    console.log(this.singlepostObj);
    
  })
 }
     
  }


  onremove(){
    let getconfirn=confirm('are you sure! you want too remove this post')
   if(getconfirn){
    this._postService.removepost(this.singlepostObj)
    .subscribe(res=>{
      console.log(res);
      this._route.navigate(['posts'])
    })
   
   }
  }



}
