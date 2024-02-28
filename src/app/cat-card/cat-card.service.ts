import { Injectable } from '@angular/core';
import { ICard, ILike } from '../../types';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class CatCardService {
    public async getCard(id: number) {
        const { data } = await axios.get(
            'https://998f2550-0991-4141-99af-d28050c63cef.mock.pstmn.io/cats/' +
                id,
        );

        return data as ICard;
    }

    public async like(id: number) {
        const { data } = await axios.post(
            'https://998f2550-0991-4141-99af-d28050c63cef.mock.pstmn.io/cats/' +
                id,
        );

        return data as ILike;
    }
}
