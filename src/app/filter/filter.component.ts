import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation nécessaire pour utiliser les directives comme *ngFor

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],  // Importation des modules nécessaires
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']  // Correction du nom de la propriété
})
export class FilterComponent implements OnInit {
  constructor() { }
menu=false;
  ngOnInit(): void {
    // Code d'initialisation
  }
  toggleSubMenu() {
    this.menu = !this.menu;
  }
}
