import { Pipe } from '@angular/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe {
    public transform(tel: number, _args?: object): string {
        const value: string = tel.toString().trim().replace(/^\+/, '');

        if (value === '') {
            return value;
        }

        if (value.match(/[^0-9]/)) {
            return tel.toString();
        }

        const THREE: number = 3;
        const FOUR: number = 4;
        const FIVE: number = 5;
        const TEN: number = 10;
        const ELEVEN: number = 11;
        const TWELVE: number = 12;

        let country: string = '0';
        let city: string = '0';
        let num: string = '0';

        switch (value.length) {
            case TEN: // +1PPP####### -> C (PPP) ###-####
                country = '1';
                city = value.slice(0, THREE);
                num = value.slice(THREE);
                break;

            case ELEVEN: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, FOUR);
                num = value.slice(FOUR);
                break;

            case TWELVE: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, THREE);
                city = value.slice(THREE, FIVE);
                num = value.slice(FIVE);
                break;

            default:
                return tel.toString();
        }

        if (country === '1') {
            country = '';
        }

        num = `${num.slice(0, THREE)}-${num.slice(THREE)}`;

        return `${country} (${city}) ${num}`.trim();
    }
}
