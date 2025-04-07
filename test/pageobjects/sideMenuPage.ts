import { $ } from '@wdio/globals'
import Page from './page';

class SideMenuPage extends Page {

    private get catalogOption() {
        return $('~menu item catalog');
    }

    public async clickCatalogOption() {
        await this.catalogOption.click();
    }

}

export default new SideMenuPage();