// users-list.component.ts
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  animations: [
    trigger('scaleOnHover', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hover', style({
        transform: 'scale(1.1)'
      })),
      transition('normal <=> hover', animate('200ms ease-in-out'))
    ])
  ]
})
export class UsersListComponent implements OnInit ,OnDestroy {
  users: any[] = [];
  private userSubscription!: Subscription;
  isLoaded:boolean = false;
  pagedUsers: any[] = [];
  totalUsers: number = 0;
  pageSize = 5; // Initial page size
  filteredUsers: any[] = [];
  hovered :any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private http: HttpClient, private userService:UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
    console.log(this.users);

  }
 ngOnDestroy(): void {
   this.userSubscription.unsubscribe();
 }

  fetchUsers() {
    this.isLoaded = true;
    this.userSubscription = this.userService.fetchUsers().subscribe(response => {
      this.users = response.data;
      this.totalUsers = response.total;
      this.updatePagedUsers();
      this.isLoaded = false;
    });
  }

  updatePagedUsers() {
    console.log("pageindex = "+this.paginator.pageIndex)
    console.log("pagesize = "+this.paginator.pageSize)
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;

    const endIndex = startIndex + this.paginator.pageSize;
    this.pagedUsers = this.users.slice(startIndex, endIndex);
    this.filteredUsers = this.users.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.updatePagedUsers();
  }

  searchUsers(query: string) {
    if (query.trim() === '') {
      this.filteredUsers = [...this.users]; // Reset filteredUsers if query is empty back all users again
    } else {
      this.filteredUsers = this.users.filter(user => user.id.toString().includes(query)); //otherwise make this filter as which user is compatible with the id (query) retrived from header component with event binding
    }
  }

  onHover(userId: number) {
    this.hovered = userId;
  }

  onLeave() {
    this.hovered = null;
  }
}
