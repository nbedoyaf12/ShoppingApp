import { $ } from '@wdio/globals'
import Page from './page';

class ReviewOrderPage extends Page {

    private get placeOrderButton() {
        return $('~Place Order button');
    }

    public async clickPlaceOrderButton() {
        await this.placeOrderButton.click();
    }

}

export default new ReviewOrderPage();