const dicoding = new Proxy({"src":"/_astro/dicoding.B0UPWHQf.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/dicoding.jpeg";
							}
							
							return target[name];
						}
					});

export { dicoding as default };
