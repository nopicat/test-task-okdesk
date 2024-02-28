export interface ICard {
    id: number;
    name: string;
    breed: string;
    habit: string;
    description: string;
    image: string;
}

export interface ILike {
    id: number;
    liked: boolean;
}
