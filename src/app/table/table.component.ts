import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  userFilter = 'paid';
  showFilter = false;
  searchText = '';
  selectedUser: any = null;
  users = [
    { id: 1, name: 'ken', status: 'active' },
    { id: 2, name: 'Saris', status: 'inactive' },
    { id: 3, name: 'Elisée', status: 'active' },
    { id: 4, name: 'Mira', status: 'overdue' },
];
filterTab(status: string) {
  if (status === 'all') {
    return this.users;  // Retourne tous les utilisateurs si le filtre est 'all'
  }
  return this.users.filter(user => user.status === status); // Filtrage par statut
}

// Méthode pour gérer le clic sur les boutons de filtre
onFilterChange(status: string) {
  this.userFilter = status;
  this.filterTab(status);
}

ngOnInit(): void {
  this.filterTab(this.userFilter);
}
  }
   
   

