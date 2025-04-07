import catalogPage from '../pageobjects/catalogPage';
import productDetailPage from '../pageobjects/productDetailPage';
import sideMenuPage from '../pageobjects/sideMenuPage';

export async function addProductsToCart(indexes: number[]) {
    const addedProductNames: string[] = [];

    for (const index of indexes) {
        const productName = await catalogPage.getProductName(index);
        addedProductNames.push(productName);

        await catalogPage.selectProductByIndex(index);
        await productDetailPage.clickAddToCartButton();
        await productDetailPage.clickSideMenu();
        await sideMenuPage.clickCatalogOption();
    }

    return addedProductNames;
}