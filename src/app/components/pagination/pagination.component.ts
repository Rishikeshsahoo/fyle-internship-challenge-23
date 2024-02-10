import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormDataLocal } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges{

  @Input() formData!:FormDataLocal;
  @Input() totalRepos!:number;
  @Input() totalPages!:number;
  @Input() min!:number;
  @Input() max!:number;
  
  @Output() pageEmitter=new EventEmitter<number>();


  ngOnChanges()
  {
    console.log("damnnn", this.formData)
    this.totalPages=Math.ceil(this.totalRepos/this.formData.per_page);
    this.min=Math.max(this.formData.page-2,1);
    this.max=Math.min(this.totalPages,this.formData.page+2);

  }
  numSequence(a: number, b:number): Array<number> { 
    const result: number[] = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
  } 
  handleClick(page:number){
    this.formData.page=page;
    this.pageEmitter.emit(page)
  }
  constructor(){
    console.log("hi")
  }
}
