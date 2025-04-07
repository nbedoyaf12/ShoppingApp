import { $ } from '@wdio/globals'
import Page from './page';

class ProductDetailPage extends Page {

    private get minusButton() {
        return $('~counter minus button');
    }

    private get plusButton() {
        return $('~counter plus button');
    }

    private get addToCartButton() {
        return $('~Add To Cart button');
    }

    public async clickAddToCartButton() {
        await this.addToCartButton.waitForDisplayed();
        await this.addToCartButton.click();
    }

}

export default new ProductDetailPage();