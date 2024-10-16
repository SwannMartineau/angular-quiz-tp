import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesService } from '../shared/services/categories.service';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoriesContent: any[] = this.categoriesService.categoriesContent;

  constructor(private categoriesService: CategoriesService, private quizService: QuizService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories();
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
    })
  }

  filterCat(text: string): void {
    this.categoriesContent = this.categoriesService.categoriesContent.filter(
      categoriesContent => categoriesContent?.label.toLowerCase().includes(text.toLowerCase())
    );
  }

  reset() {
    this.categoriesContent = this.categoriesService.categoriesContent;
      return;
  }

  questionsOnClick(categoryId: number) {
    this.router.navigate(['/quiz', categoryId, this.quizService.playerName]);
  }
}