import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService, AuthenticationService } from '@/_services';
import { User } from '@/_models';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
    ) {

    }

    ngOnInit() {

    }
}