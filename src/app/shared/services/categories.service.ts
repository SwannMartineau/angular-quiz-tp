import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  categoriesContent: any[] = []

  constructor(private http: HttpClient) { }

  getCategories() {
    const url = 'http://localhost:3000/categories';
    this.http.get(url).subscribe((categories: any) => {
      for (let category of categories) {
        this.categoriesContent.push(category);
      }
    });
  }
}
