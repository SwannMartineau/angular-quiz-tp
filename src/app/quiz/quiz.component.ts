import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';

  constructor(
    private categoriesService: CategoriesService,
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.categoryID = params['categorie'];
      this.categoriesService.getCategoryByID(params['categorie']);
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }

  get categoryName(): string {
    return this.categoriesService.selectedCategory;
  }
}
