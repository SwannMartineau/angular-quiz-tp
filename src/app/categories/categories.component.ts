import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesContent: any[] = this.categoriesService.categoriesContent;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getCategories();
  }
}