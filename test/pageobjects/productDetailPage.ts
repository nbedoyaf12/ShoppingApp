import { $ } from '@wdio/globals'
import Page from './page';

class ProductDetailPage extends Page {

    private get addToCartButton() {
        return $('~Add To Cart button');
    }

    public async clickAddToCartButton() {
        await this.addToCartButton.waitForDisplayed();
        await this.addToCartButton.click();
    }

}

export default new ProductDetailPage();