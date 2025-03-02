import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  BASE_URL=`${environment.baseurl}`
  POST_URL=`${this.BASE_URL}/posts.json`




  constructor(
    private _http:HttpClient
  ) { }

  fetchAllPost():Observable<Array<Ipost>>{
    // const headers=new HttpHeaders()
    // .set("content-type","applicaton/json")
    // .set("auth","Bearer from LS")

    return this._http.get<Array<Ipost>>(this.POST_URL)
     .pipe(
      map((data)=>{
        let postArr:Array<Ipost>=[]
        for (const key in data) {
          postArr.push({...data[key],id:key})
          
        }
        return postArr
        
      })
     )
  }

  fetchsinglpost(id:string):Observable<Ipost>{
    let SINGLE_POST_URL=`${this.BASE_URL}/posts/${id}.json`
    return this._http.get<Ipost>(SINGLE_POST_URL)

  }

  createpost(postobj:Ipost):Observable<any>{
   return this._http.post <any>(this.POST_URL,postobj)
  }
  
  updatepost(updateobj:Ipost):Observable<Ipost>{
    let UPDATE_URL=`${this.BASE_URL}/posts/${updateobj.id}.json`
    return this._http.patch<Ipost>(UPDATE_URL,updateobj)
  }

  removepost(removeobj:Ipost):Observable<null>{
    let REMOVE_URL=`${this.BASE_URL}/posts/${removeobj.id}.json`
   return this._http.delete<null>(REMOVE_URL)

  }
}
