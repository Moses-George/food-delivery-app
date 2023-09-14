import { Credentials } from "../interfaces/interfaces";

export class Validator {
    message: string;
    credentials: Credentials;
    constructor(credentials: Credentials) {
        this.credentials = credentials;
        this.message = "";
    }
    isUsernameValid() {
        const username = this.credentials.username;
        const usernameIsValid = (/^[a-zA-Z0-9_.]+$/).test(username);
        if ( !username || username.trim().length === 0) {
            this.message = "Enter a valid username!";
        }
        if (!usernameIsValid) {
            this.message = "Username can only use letters, numbers, underscores and periods";
        }
        return usernameIsValid;
    }
    isEmailValid() {
        const email = this.credentials.email
        const emailIsValid = this.credentials.email.includes("@");
        if ( !email || email.trim().length === 0) {
            this.message = "Enter a valid email!";
        }
        if (!emailIsValid) {
            this.message = "Not a valid email!";
        }
        return emailIsValid;
    }
    isPasswordValid() {
        const password = this.credentials.password;
        const atLeastTwoDigits = new RegExp("[0-9].*[0-9]").test(password);
        const atLeastOneCharacter = new RegExp("[a-zA-Z]").test(password);
        const lengthGreaterThanOrEqualToSix = password.length >= 6;

        if ( !password || password.trim().length === 0) {
            this.message = "Enter a valid password!";
        }

        if (!lengthGreaterThanOrEqualToSix) {
            this.message = "Password length must be greater than or equal to 6!";
        } else {
            if (!atLeastTwoDigits) {
                this.message = "Password must contain at least two digits!";
            }
            if (!atLeastOneCharacter) {
                this.message = "Password must contain at least one character!";
            }
        }
        return atLeastTwoDigits && atLeastOneCharacter && lengthGreaterThanOrEqualToSix;
    }
    CredentialisValid() {
        return this.isUsernameValid() && this.isEmailValid() && this.isPasswordValid();
    }
    errorMessage() {
        if (!this.CredentialisValid())
            return this.message;
    }
}
