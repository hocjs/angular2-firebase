import {Injectable} from '@angular/core';
import {AuthService} from '../auth/shared/auth.service';

/**
 * Service for common functions
 */

@Injectable()
export class SharedHelperService {

    constructor(private authService: AuthService) {
    }

    isUserLoggedIn() {
        return this.authService.authState;
    }
}
