import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';
  constructor() { }

  ngOnInit() {
    this.records= [
      { CategoryID: 1,  CategoryName: "Tailored Jeans", Description: "Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum." },
      ];
    }
}