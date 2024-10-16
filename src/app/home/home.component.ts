import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playerName = '';

  constructor(private router: Router, private authService: AuthService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    //Nous verrons plus tard comment gérer cela avec des observables
    this.categoriesService.resetCategory();
    this.authService.isUserConnected();
    this.playerName = this.authService.user?.username || '';
  }

  get isPlayerNameFill() {
    return this.playerName.length < 1;
  }

  navigateToQuiz() {
    this.router.navigate(['/categories', this.playerName]);
  }
}
