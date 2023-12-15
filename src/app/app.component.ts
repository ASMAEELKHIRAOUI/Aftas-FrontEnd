import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CompetitionComponent } from './components/competition/competition.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, SidebarComponent, CompetitionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "aftas"

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}
