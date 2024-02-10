import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {  GithubRepo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-gh-body',
  templateUrl: './gh-body.component.html',
  styleUrls: ['./gh-body.component.scss']
})
export class GhBodyComponent {

 @Input()  repositories!:Observable<GithubRepo[]>

  constructor(){}
}
