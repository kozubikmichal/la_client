export default class ScriptCache {
	static loaded: Array<string> = [];
	static counter: number = 0;

	constructor() { }

	public load(scripts: Array<string>): Promise<any> {
		return Promise.all(
			scripts.map(s => this.loadSrc(s))
		);
	}

	private loadSrc(src: string): Promise<string> {
		if (ScriptCache.loaded.indexOf(src) >= 0) {
			return Promise.resolve(src);
		} else {
			return this.scriptTag(src).then(() => {
				ScriptCache.loaded.push(src);
				return src;
			});
		}
	}

	private scriptTag(src: string): Promise<any> {
		return new Promise((resolve, reject) => {
			let tag = this.createScriptTag();

			tag.onload = () => resolve(src);
			tag.onerror = (event) => reject(event)

			if (src.search("callback=") >= 0) {
				let cbName = this.generateCallbackName();
				src = src.replace(/(callback=)[^\&]+/, `$1${cbName}`);
				(window as any)[cbName] = tag.onload;
			} else {
				tag.addEventListener("load", tag.onload);
			}

			tag.addEventListener("error", tag.onerror);
			tag.src = src;

			document.getElementsByTagName("body")[0].appendChild(tag);
		})
	}

	private createScriptTag(): HTMLScriptElement {
		let tag = document.createElement("script");
		tag.type = "text/javascript"
		tag.async = false;

		return tag;
	}

	private generateCallbackName(): string {
		return `scriptCacheLoaded${ScriptCache.counter++}`;
	}
}