import { random, lorem, image, date, address, helpers } from "faker";

export const Events:any[] = new Array(2000).fill(0).map(() => {
    return {
        id: random.uuid(),
        title: ((s) => s[0].toUpperCase() + s.slice(1))(lorem.words()),
        image: image.business(),
        start: date.future().getTime(),
        location: {
            streetAddress: address.streetAddress(),
            ...helpers.contextualCard().address
        }
    }
})