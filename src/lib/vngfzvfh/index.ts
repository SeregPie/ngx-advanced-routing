import {Vvkksmzj} from '../vvkksmzj';

export interface Param<
	//
	TName extends string = string,
	TValue = any,
> extends Vvkksmzj<TValue> {
	name: TName;
}

export function param<
	//
	TName extends string,
	TValue,
>(
	//
	name: TName,
): Param<TName, TValue> {
	throw 'not implemented yet';
}
