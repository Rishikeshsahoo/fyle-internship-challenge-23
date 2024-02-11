import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { GithubRepo, GithubUser } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
describe('SearchService', () => {
  let service: SearchService;
  let httpClient:HttpClient;
  let httptestcontroller:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[SearchService]
    });
    service = TestBed.inject(SearchService);
  });

  beforeEach(()=>{
    service = TestBed.inject(SearchService);
    httptestcontroller=TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing the getData method : user details',()=>{
    let user:GithubUser={
      login: 'johnpapa',
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

    service.getData(user.login,false).subscribe((data)=>{
      expect(user.login).toBe(data.login,' should check mocked data')
    })

    const req=httptestcontroller.expectOne(`https://api.github.com/users/johnpapa`)
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(user);
    httptestcontroller.verify();




    
  })

  it('testing the getRepo menthd: repo details',()=>{
   
    let user:GithubUser={
      login: 'johnpapa',
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
    service.getRepos(user.login,10,1).subscribe((data)=>{
      expect(arr).toBe(data,' should check mocked data')
    })
   
    const req=httptestcontroller.expectOne(`https://api.github.com/users/${user.login}/repos?per_page=${10}&page=${1}`)
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(arr);
    httptestcontroller.verify();
    
  })
  it('testing caches',()=>{
    let cache = new Map<string, Observable<GithubUser>>();
    let  cacheRepo = new Map<string, Observable<GithubRepo[]>>();
    expect(cache).toEqual(service["cache"])
  })
});
