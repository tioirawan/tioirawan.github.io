const smkn8 = new Proxy({"src":"/_astro/smkn8.BD4cQCCS.jpeg","width":219,"height":230,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/smkn8.jpeg";
							}
							
							return target[name];
						}
					});

export { smkn8 as default };
