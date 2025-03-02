import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { PostDetailComponent } from './shared/components/post-detail/post-detail.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';

const routes: Routes = [{
  path:'',
//  component:PostDashComponent,
 redirectTo:'posts',
pathMatch:'full'
},
{
  path:'posts',
  component:PostDashComponent
},
{
  path:'posts/add',
  component:PostFormComponent
},
{
  path:'posts/:userId',
  component:PostDetailComponent
},
{
  path:'posts/:postId/edit',
  component:PostFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
