import { Injectable } from '@angular/core';
import Fingerprint2 from 'fingerprintjs2';
import { UAParser } from 'ua-parser-js';

@Injectable({
    providedIn: 'root',
})
// eslint-disable-next-line import/prefer-default-export
export class GetFingerprintService {
    // eslint-disable-next-line class-methods-use-this
    getFingerprint(): Promise<string> {
        return new Promise((resolve, reject) => {
            async function getHash() {
                const options = {

                    excludes: {
                        plugins: true,
                        localStorage: true,
                        adBlock: true,
                        screenResolution: true,
                        availableScreenResolution: true,
                        enumerateDevices: true,
                        pixelRatio: true,
                        doNotTrack: true,
                    },

                    preprocessor: (key, value) => {
                        if (key === 'userAgent') {
                            const parser = new UAParser(value);
                            // return customized user agent (without browser version)
                            return `${parser.getOS().name} :: ${parser.getBrowser().name} :: ${parser.getEngine().name}`;
                        }
                        return value;
                    },

                };

                try {
                    const components = await Fingerprint2.getPromise(options);
                    const values = components.map((component) => component.value);
                    return String(Fingerprint2.x64hash128(values.join(''), 31));
                } catch (e) {
                    reject(e);
                }
            }

            setTimeout(async () => resolve(await getHash()), 500);
        });
    }
}
