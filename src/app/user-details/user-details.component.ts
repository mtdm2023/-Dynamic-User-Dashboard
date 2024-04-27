
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit ,OnDestroy  {
  userId!: number;
  user: any;
  isloading:boolean = false;
  private userDeatailsSubscription!: Subscription;
  constructor(private route: ActivatedRoute, private http: HttpClient , private userservice:UserService) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.params['id'];
    this.fetchUserDetails();
  }
   ngOnDestroy():void{
  this.userDeatailsSubscription.unsubscribe();
  }


  fetchUserDetails() {
    this.isloading = true;
    this.userDeatailsSubscription =  this.userservice.fetchUserDetails(this.userId).subscribe(response => {
      this.user = response.data;
      this.isloading = false;
    });
  }
}
