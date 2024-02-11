import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CardComponent } from 'src/app/components/card/card.component';
import { GhBodyComponent } from 'src/app/components/gh-body/gh-body.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { SkeletonComponent } from 'src/app/components/skeleton/skeleton.component';
import { TopicComponent } from 'src/app/components/topic/topic.component';
import { FormDataLocal, GithubRepo, GithubUser } from 'src/app/interfaces/interfaces';
import { SearchService } from 'src/app/services/search.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent,SearchBarComponent,SkeletonComponent,GhBodyComponent,ProfileComponent,PaginationComponent,CardComponent,TopicComponent],
      providers:[SearchService],
      imports:[HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form submisson tests',()=>{
      let service= fixture.debugElement.injector.get(SearchService);
      let user:GithubUser={
        login: 'someDummy',
        avatar_url: '',
        url: '',
        html_url: '',
        repos_url: '',
        type: '',
        name: '',
        location: '',
        bio: '',
        twitter_username: '',
        public_repos: 0,
      };
      spyOn(service,'getData').and.callFake(()=>{
        return of(user)
      })
      let formData: FormDataLocal = {
        searchQuery: 'RishikeshSahoo',
        per_page: 10,
        page: 1,
      };
      component.handleSubmit(formData)
      fixture.detectChanges()

      expect(component.formData.searchQuery).toEqual(formData.searchQuery)
      expect(component.response.login).toEqual(user.login)

  })

  it('pagination testing ',()=>{
    let service= fixture.debugElement.injector.get(SearchService);
    let arr:GithubRepo[]=[
      {
        description:"",
        name:"dummy1",
        topics:[]
      },
      {
        description:"",
        name:"dummy2",
        topics:[]
      }
    ]
    spyOn(service,'getRepos').and.callFake(()=>{
      return of(arr)
    })
    component.handlePagination(12);
    fixture.detectChanges()
    
    expect(component.formData.page).toEqual(12)
    expect(component.totalPages).toEqual(0)
    expect(component.min).toEqual(Math.max(component.formData.page-2,1))
    expect(component.max).toEqual(Math.min(component.totalPages,component.formData.page+2))

  })

  it('before opertaion testing',()=>{
    let response: GithubUser = {
      login: '',
      avatar_url: '',
      url: '',
      html_url: '',
      repos_url: '',
      type: '',
      name: '',
      location: '',
      bio: '',
      twitter_username: '',
      public_repos: 0,
    };
  
    let formData: FormDataLocal = {
      searchQuery: '',
      per_page: 10,
      page: 1,
    };
    let totalPages=0
    let min=0
    let max=1000
    let isLoaded=false;
  
    expect(component.formData).toEqual(formData)
    expect(component.response).toEqual(response)
    expect(component.totalPages).toEqual(totalPages)
    expect(component.min).toEqual(min)
    expect(component.max).toEqual(max)

  })
  


}
);
