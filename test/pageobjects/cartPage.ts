import { $ } from '@wdio/globals'
import Page from './page';


class CartPage extends Page {

    private get proceedToCheckoutButton() {
        return $('~Proceed To Checkout button');
    }

    private get productsNames() {
        return $$('~product label');
    }

    private get removeItemButtons() {
        return $$('~remove item');
    }

    private get noItemMessage() {
        return $('//*[@content-desc="container header"]//android.widget.TextView');
    }

    public async clickProceedToCheckoutButton() {
        await this.proceedToCheckoutButton.waitForDisplayed();
        await this.proceedToCheckoutButton.click();
    }

    public async getProductsNames() {
        await this.productsNames[0].waitForDisplayed();
        const productElements = await this.productsNames;
        const productNames: string[] = [];
        for (const element of productElements) {
            const name = await element.getText();
            productNames.push(name);
        }
        return productNames;
    }

    public async removeAllProducts() {
        let removeButtons = await this.removeItemButtons;
    
        while (await removeButtons.length > 0) {
            await removeButtons[0].waitForDisplayed({ timeout: 5000 });
            await removeButtons[0].click();    
            removeButtons = await this.removeItemButtons; 
        }
    }

    public async getNoItemMessage() {
        return await this.noItemMessage;
    }

}

export default new CartPage();