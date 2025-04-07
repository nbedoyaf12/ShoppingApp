import { addProductsToCart } from '../helpers/cartHelper';
import catalogPage from '../pageobjects/catalogPage';
import sideMenuPage from '../pageobjects/sideMenuPage';
import cartPage from '../pageobjects/cartPage';
import { expect } from '@wdio/globals';
import loginPage from '../pageobjects/loginPage';
import { userData } from '../data/userData';
import shippingInfoPage from '../pageobjects/shippingInfoPage';
import paymentPage from '../pageobjects/paymentPage';
import reviewOrderPage from '../pageobjects/reviewOrderPage';
import successfulOrderPage from '../pageobjects/successfulOrderPage';

describe('Cart Tests', () => {

    it('Add more than 1 product to the cart', async () => {
        const indexes = [0, 1];
        const addedProductNames = await addProductsToCart(indexes);

        await catalogPage.clickCartIcon();
        const cartProductNames = await cartPage.getProductsNames();

        addedProductNames.forEach((name, i) => {
            expect(cartProductNames[i]).toContain(name);
        });
    });

    it('Remove all product from the cart', async () => {
        await catalogPage.clickCartIcon();
        await cartPage.removeAllProducts();

        expect(await cartPage.getNoItemMessage()).toHaveText('No Items');
    });
});

describe('Sort filter', () => {

    const sortTests = [
        {
            option: 'nameascending',
            getList: async () => await catalogPage.getProductsNames(),
            sortFn: (a: string, b: string) => a.localeCompare(b),
        },
        {
            option: 'namedescending',
            getList: async () => await catalogPage.getProductsNames(),
            sortFn: (a: string, b: string) => b.localeCompare(a),
        },
        {
            option: 'priceascending',
            getList: async () => await catalogPage.getProductsPrices(),
            sortFn: (a: number, b: number) => a - b,
        },
        {
            option: 'pricedescending',
            getList: async () => await catalogPage.getProductsPrices(),
            sortFn: (a: number, b: number) => b - a,
        },
    ] as const;

    for (const { option, getList, sortFn } of sortTests) {
        it(`Sort by ${option}`, async () => {
            await catalogPage.clickSideMenu();
            await sideMenuPage.clickCatalogOption();
            await catalogPage.clickSortButton();
            await catalogPage.selectSortOption(option);

            const list = await getList();
            const sortedList = [...list].sort(sortFn as any);

            expect(list).toEqual(sortedList);
        });
    }
});


describe('Checkout', () => {
    it('Checkout flow', async () => {
        await addProductsToCart([1]);
        await catalogPage.clickCartIcon();

        await cartPage.clickProceedToCheckoutButton();
        await loginPage.login(userData.login.username, userData.login.password);

        await shippingInfoPage.fillShippingInfo(userData.address)
        await shippingInfoPage.clickToPaymentButton();
        await paymentPage.fillCardInfo(userData.card);
        await paymentPage.clickReviewOrderButton();

        await reviewOrderPage.clickPlaceOrderButton();

        await expect(await successfulOrderPage.getCheckoutCompleteTitle()).toBeDisplayed();
        await expect(await successfulOrderPage.getThankYouMessage()).toBeDisplayed();
    });
});