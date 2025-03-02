import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashComponent } from './shared/components/post-dash/post-dash.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostDetailComponent } from './shared/components/post-detail/post-detail.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiInterseptorService } from './shared/services/api-interseptor.service';


@NgModule({
  declarations: [
    AppComponent,
    PostDashComponent,
    PostCardComponent,
    PostFormComponent,
    PostDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
    useClass:ApiInterseptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
