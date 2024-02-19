import {Params, UrlTree} from '@angular/router';

export interface Route {}

export type RouteOptions = {};

interface Ccqpouqdb<TParams extends Params = Params> {
	createUrlTree(params: Omwxatqe<TParams>): UrlTree;

	createUrl(params: Omwxatqe<TParams>): string;

	navigate(params: Omwxatqe<TParams>): Promise<boolean>;
}

export function defineRoute(options: RouteOptions): Route {
	throw 'not implemented yet';
}
