import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { CatCardService } from './cat-card/cat-card.service';
import { CatCardComponent } from './cat-card/cat-card.component';
import { CardLoadingComponent } from './card-loading/card-loading.component';
import { ICard } from '../types';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NgIf, CatCardComponent, CardLoadingComponent],
    providers: [CatCardService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    constructor(private readonly catCardService: CatCardService) {}

    private cardId = 1;
    public isCardLoading = false;
    public card?: ICard;
    public liked = false;
    public isButtonsDisabled = false;

    public async loadCurrentCard() {
        this.liked = false;
        this.isButtonsDisabled = false;

        this.isCardLoading = true;
        this.card = await this.catCardService.getCard(this.cardId);
        this.isCardLoading = false;
    }

    public async next() {
        if (this.cardId === 5) {
            this.cardId = 1;
        } else {
            this.cardId++;
        }

        await this.loadCurrentCard();
    }

    public async like() {
        this.isButtonsDisabled = true;
        const { liked } = await this.catCardService.like(this.cardId);
        this.isButtonsDisabled = false;

        if (liked) {
            this.liked = true;
        }
    }

    public async ngOnInit() {
        await this.loadCurrentCard();
    }
}
