import { $ } from '@wdio/globals'
import Page from './page';

class PaymentPage extends Page {

    private get cardUsernameInput() {
        return $('~Full Name* input field');
    }

    private get cardNumberInput() {
        return $('~Card Number* input field');
    }

    private get cardExpirationDateInput() {
        return $('~Expiration Date* input field');
    }

    private get cardSecurityCodeInput() {
        return $('~Security Code* input field');
    }

    private get reviewOrderButton() {
        return $('~Review Order button');
    }

    public async clickReviewOrderButton(){
        await this.reviewOrderButton.waitForDisplayed();
        await this.reviewOrderButton.click();
    }

    public async fillCardInfo(info: {
        fullName: string,
        cardNumber: string,
        expirationDate: string,
        securityCode: string
    }) {
        await this.cardUsernameInput.waitForDisplayed();
        await this.cardUsernameInput.setValue(info.fullName);
        await this.cardNumberInput.setValue(info.cardNumber);
        await this.cardExpirationDateInput.setValue(info.expirationDate);
        await this.cardSecurityCodeInput.setValue(info.securityCode);
    }
}

export default new PaymentPage();