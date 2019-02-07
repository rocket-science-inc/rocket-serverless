import { Events } from "./store";

interface IFeedParams {
    count: number,
    page: number,
    before?: number,
    after?: number
}

export class FeedProvider {

    static feed({count, page, before, after}:IFeedParams):Promise<any> {
        return new Promise((resolve) => {
            resolve({
                count, page,
                next: Events.length >= (page + 1) * count ? page + 1 : null,
                records: Events.filter((event, index) => {
                    return index >= (page - 1) * count && index < page * count
                })
            })
        })
    };

}