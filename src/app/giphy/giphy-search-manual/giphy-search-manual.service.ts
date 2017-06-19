import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response  } from '@angular/http';

@Injectable()
export class GiphySearchManualService {
    constructor(private http: Http) {}

    pesquisarGiphy(limit: string, term: string): Observable<Response> {
        const url = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC&limit=' + limit;
        return this.http.get(url);
    }
}
