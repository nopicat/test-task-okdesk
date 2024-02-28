import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard } from '../../types';

@Component({
    selector: 'cat-card',
    standalone: true,
    imports: [],
    templateUrl: './cat-card.component.html',
    styleUrl: './cat-card.component.scss',
})
export class CatCardComponent {
    @Input()
    public card?: ICard;

    @Output()
    public nextClicked = new EventEmitter();

    @Output()
    public likeClicked = new EventEmitter();
}
