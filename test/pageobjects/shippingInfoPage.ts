import { $ } from '@wdio/globals'
import Page from './page';


class ShippingInfoPage extends Page {

    private get fullNameInput() {
        return $('~Full Name* input field');
    }

    private get adressOneInput() {
        return $('~Address Line 1* input field');
    }

    private get adressTwoInput() {
        return $('~Address Line 2 input field');
    }

    private get cityInput() {
        return $('~City* input field');
    }

    private get zipCodeInput() {
        return $('~Zip Code* input field');
    }

    private get countryInput() {
        return $('~Country* input field');
    }

    private get toPaymentButton() {
        return $('~To Payment button');
    }

    public async fillShippingInfo(info: {
        fullName: string,
        address1: string,
        address2?: string,
        city: string,
        zipCode: string,
        country: string
    }) {
        await this.fullNameInput.waitForDisplayed(),
            await this.fullNameInput.setValue(info.fullName);
        await this.adressOneInput.setValue(info.address1);
        if (info.address2) {
            await this.adressTwoInput.setValue(info.address2);
        }
        await this.cityInput.setValue(info.city);
        await this.zipCodeInput.setValue(info.zipCode);
        await this.countryInput.setValue(info.country);
    }

    public async clickToPaymentButton() {
        await this.toPaymentButton.click();
    }

}

export default new ShippingInfoPage();