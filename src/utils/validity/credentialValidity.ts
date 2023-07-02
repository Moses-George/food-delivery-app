interface ErrorMessage {
    usernameError: string,
    emailError: string,
    passwordError: string
}

interface Credentials {
    username: string,
    email: string,
    password: string
}


export class ValidityCheck {
    message: ErrorMessage;
    credentials: Credentials;
    constructor(credentials: Credentials) {
        this.credentials = credentials;
        this.message = { usernameError: "", emailError: "", passwordError: "" };
    }
    isUsernameValid() {
        const usernameIsValid = (/^[a-z0-9_.]+$/).test(this.credentials.username);
        if (!usernameIsValid) {
            this.message.usernameError = "Username can only use letters, numbers, underscores and periods";
        }
        return usernameIsValid;
    }
    isEmailValid() {
        const emailIsValid = this.credentials.email.includes("@");
        if (!emailIsValid) {
            this.message.emailError = "Not a valid email!";
        }
        return emailIsValid;
    }
    isPasswordValid() {
        const password = this.credentials.password;
        const atLeastTwoDigits = new RegExp("[0-9].*[0-9]").test(password);
        const atLeastOneCharacter = new RegExp("[a-zA-Z]").test(password);
        const lengthGreaterThanOrEqualToSix = password.length >= 6;

        if (!lengthGreaterThanOrEqualToSix) {
            this.message.passwordError = "Password length must be greater than or equal to 6!";
        } else {
            if (!atLeastTwoDigits) {
                this.message.passwordError = "Password must contain at least two digits!";
            }
            if (!atLeastOneCharacter) {
                this.message.passwordError = "Password must contain at least one character!";
            }
        }
        return atLeastTwoDigits && atLeastOneCharacter && lengthGreaterThanOrEqualToSix;
    }
    isCredentialValid() {
        return this.isUsernameValid() && this.isPasswordValid() && this.isEmailValid();
    }
    errorMessage() {
        if (!this.isCredentialValid())
            return this.message;
    }
}

let userValidity = new ValidityCheck({ username: "George", email: "mosesgeorge323287@gmail.com", password: "323287" });
console.log(userValidity.errorMessage()); 