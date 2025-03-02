import { Component, inject, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'http_post';
 private  loadersub=inject(LoaderService)
 isloader:boolean=false
 ngOnInit(): void {
   this.loadersub.loaderbehaverSub$.subscribe(res=>{
    console.log(res);
    this.isloader=res
   })
 }
}
