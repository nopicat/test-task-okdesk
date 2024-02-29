import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICard } from '../../types';
import { NgIf } from '@angular/common';

@Component({
    selector: 'cat-card',
    standalone: true,
    imports: [
        NgIf,
    ],
    templateUrl: './cat-card.component.html',
    styleUrl: './cat-card.component.scss',
})
export class CatCardComponent {
    @Input()
    public card?: ICard;

    @Input()
    public liked = false;

    @Output()
    public nextClicked = new EventEmitter();

    @Output()
    public likeClicked = new EventEmitter();

    @Input()
    public isButtonsDisabled = false;
}
