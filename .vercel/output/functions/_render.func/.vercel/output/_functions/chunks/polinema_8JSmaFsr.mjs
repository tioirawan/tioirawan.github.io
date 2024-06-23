const polinema = new Proxy({"src":"/_astro/polinema.BAhFIGnw.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/polinema.jpeg";
							}
							
							return target[name];
						}
					});

export { polinema as default };
