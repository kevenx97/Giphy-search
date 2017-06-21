import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato.component';
import { ShareModule } from './../share-module/share.module';
import { ContatoRoutingModule } from './contato-routing.module';
import { GiphySearchManualModule } from './../giphy/giphy-search-manual/giphy-search-manual.module';

@NgModule({
	imports: [
		ShareModule,
		ContatoRoutingModule,
		GiphySearchManualModule
	],
	declarations: [
		ContatoComponent,
	]
})
export class ContatoModule { }
