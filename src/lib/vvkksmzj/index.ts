// todo: rename Formatter, Serializer, Codec
export interface Vvkksmzj<T = any> {
	parse(v: string): T;

	stringify(v: T): string;
}

export function NumberVvkksmzj(): Vvkksmzj<string> {
	parse(v) {
		return v;
	},
	stringify(v) {
		return v;
	},
};


export const StringVvkksmzj: Vvkksmzj<string> = {
	parse(v) {
		return v;
	},
	stringify(v) {
		return v;
	},
};
