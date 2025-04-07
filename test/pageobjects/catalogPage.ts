import { $ } from '@wdio/globals'
import Page from './page';


class CatalogPage extends Page {

    private get productItems() {
        return $$('~store item');
    }

    private get productNames() {
        return $$('~store item text');
    }

    private get productPrices() {
        return $$('~store item price');
    }

    private get sortButton() {
        return $('~sort button');
    }

    private get nameAscending() {
        return $('~nameAsc');
    }

    private get nameDescending() {
        return $('~nameDesc');
    }

    private get priceAscending() {
        return $('~priceAsc');
    }

    private get priceDescending() {
        return $('~priceDesc');
    }

    public async selectProductByIndex(productIndex: number) {
        const productItems = this.productItems;
        await productItems[productIndex].click();
    }

    public async getProductName(index: number) {
        await this.productNames[0].waitForDisplayed();
        const names = await this.productNames;
        const name = names[index];
        await name.waitForDisplayed({ timeout: 10000 });
        return await name.getText();
    }

    public async getProductsNames() {
        await this.productNames[0].waitForDisplayed();
        const productElements = await this.productNames;
        const productNames: string[] = [];
        for (const element of productElements) {
            const name = await element.getText();
            productNames.push(name);
        }
        return productNames;
    }

    public async getProductsPrices(): Promise<number[]> {
        const priceElements = await this.productPrices;
        const prices: number[] = [];

        for (const element of priceElements) {
            await element.waitForDisplayed({ timeout: 10000 });
            const text = await element.getText();
            const price = parseFloat(text.replace('$', ''));
            prices.push(price);
        }

        return prices;
    }

    public async clickSortButton() {
        await this.sortButton.waitForDisplayed();
        await this.sortButton.click();
    }

    public async selectSortOption(option: string) {
        switch (option.toLowerCase()) {
            case 'nameascending':
                await this.nameAscending.click();
                break;
            case 'namedescending':
                await this.nameDescending.click();
                break;
            case 'priceascending':
                await this.priceAscending.click();
                break;
            case 'pricedescending':
                await this.priceDescending.click();
                break;
            default:
                throw new Error(`Sort option "${option}" is not valid.`);
        }
    }
}

export default new CatalogPage();