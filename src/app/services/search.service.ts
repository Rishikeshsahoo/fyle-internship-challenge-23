import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay, throwError } from 'rxjs';
import { GithubRepo, GithubUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

   private cache = new Map<string, Observable<GithubUser>>();
   private cacheRepo = new Map<string, Observable<GithubRepo[]>>();

   

   constructor(private http: HttpClient) {}
 
   // Method to fetch data from API with caching
   getData(repo: string, isLoaded:boolean) {
    let url=`https://api.github.com/users/${repo}`
    isLoaded=true
     if (this.cache.has(url)) {
       return this.cache.get(url)!;
     } else {
       const data$ = this.http.get<GithubUser>(url).pipe(
         map(response => response),
         shareReplay(1),
       );
       this.cache.set(url, data$);
       return data$;
     }
   }

   getRepos(repo: string, pageRepoCount:number, pageNumber:number){
    let url=`https://api.github.com/users/${repo}/repos?per_page=${pageRepoCount}&page=${pageNumber}`
    if (this.cacheRepo.has(url)) {
      return this.cacheRepo.get(url)!;
    } else {
      const data$ = this.http.get<GithubRepo[]>(url).pipe(
        map(response => response),
        shareReplay(1) // Cache the response and replay for subsequent subscribers
      );
      this.cacheRepo.set(url, data$);
      return data$;
    }
   }
 
   
}
