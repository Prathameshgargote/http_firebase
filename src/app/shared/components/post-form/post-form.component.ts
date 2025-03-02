import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postform!: FormGroup
  postId!: string
  Iseditmode: boolean = false
  editpostObj!: Ipost
  constructor(
    private _activeRoute: ActivatedRoute,
    private _PostService: PostService,
    private Router: Router

  ) { }

  ngOnInit(): void {
    this.createform()
    console.log(this._activeRoute.snapshot.params);

    this.postId = this._activeRoute.snapshot.params['postId']
    console.log(this.postId);
    if (this.postId) {
      this.Iseditmode = true
      this._PostService.fetchsinglpost(this.postId)
        .subscribe(res => {
          console.log(res);
          this.postform.patchValue(res)

        })

    } else {
      this.Iseditmode = false
    }



  }

  createform() {
    this.postform = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
      userId: new FormControl(null, [Validators.required])
    })
  }


  onaddpost() {
    if (this.postform.valid) {
      let newpost = this.postform.value;
      console.log(newpost);
      this._PostService.createpost(newpost)
        .subscribe(res => {
          console.log(res);
          newpost.id = res.name
          console.log(newpost);
          this.Router.navigate(['posts'])
        })
    }
  }


  updatepost() {
    if (this.postform.valid) {
      console.log(this.postform.value);
      let updatepostobj = { ...this.postform.value, id: this.postId }
      console.log(updatepostobj);
      this._PostService.updatepost(updatepostobj)
        .subscribe(res => {
          console.log(res);
          this.Router.navigate(['posts'])
        })


    }

  }


}
