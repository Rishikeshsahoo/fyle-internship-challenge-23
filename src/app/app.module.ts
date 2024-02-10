import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { TopicComponent } from './components/topic/topic.component';
import { FormsModule } from '@angular/forms';
import { GhBodyComponent } from './components/gh-body/gh-body.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from "@angular/material/select"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    CardComponent,
    TopicComponent,
    GhBodyComponent,
    PaginationComponent,
    ProfileComponent,
    SkeletonComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    BrowserAnimationsModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
