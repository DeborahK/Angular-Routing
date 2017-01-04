import { Injectable } from '@angular/core';

import { IUser } from './user';

@Injectable()
export class AuthService {
    currentUser: IUser;
    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(userName: string, password: string): void {
        if (userName === 'admin') {
            this.currentUser = {
                id: 1,
                userName: userName,
                isAdmin: true
            };
        } else {
            this.currentUser = {
                id: 2,
                userName: userName,
                isAdmin: false
            };
        }
    }

    logout(): void {
        this.currentUser = null;
    }
}
