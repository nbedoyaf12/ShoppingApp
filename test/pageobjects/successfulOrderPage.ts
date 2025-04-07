import { $ } from '@wdio/globals'
import Page from './page';

class SuccessfulOrderPage extends Page {

    private get continueShoppingButton() {
        return $('~Continue Shopping button');
    }

    private get checkoutCompleteTitle() {
        return $('//*[@text="Checkout Complete"]');
    }

    private get thankYouMessage() {
        return $('//*[@text="Thank you for your order"]');
    }

    public async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    public async getCheckoutCompleteTitle(){
        return this.checkoutCompleteTitle;
    }

    public async getThankYouMessage(){
        return this.thankYouMessage;
    }
}

export default new SuccessfulOrderPage();