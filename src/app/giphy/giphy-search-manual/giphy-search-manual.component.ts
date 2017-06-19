import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Giphy } from './giphy.type';

import { GiphySearchManualService } from './giphy-search-manual.service';

@Component({
	selector: 'giphy-search-manual',
	templateUrl: 'giphy-search-manual.component.html'
})
export class GiphySearchManualComponent implements OnInit {
	gifs: Giphy[] = [];
	limit: any = '';
	term: any = '';

	constructor(private giphySearchManualService: GiphySearchManualService) { }

	ngOnInit() { }

	pesquisarGiphy() {
		this.giphySearchManualService.pesquisarGiphy(this.limit, this.term)
			.subscribe((response: Response) => this.gifs = response.json().data);
	};
}
