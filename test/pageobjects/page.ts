
export default class Page {

    public get cartIcon() {
        return $('~cart badge');
    }

    public get sideMenu() {
        return $('~open menu');
    }

    public async clickCartIcon(){
        await this.cartIcon.click();
    }

    public async clickSideMenu(){
        await this.sideMenu.waitForDisplayed();
        await this.sideMenu.click();
    }
}
