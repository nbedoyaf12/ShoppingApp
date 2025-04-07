import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {

    private get usernameInput() {
        return $('~Username input field');
    }

    private get passwordInput() {
        return $('~Password input field');
    }

    private get loginButton() {
        return $('~Login button');
    }

    public async login(username: string, password: string) {
        await this.usernameInput.waitForDisplayed();
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();