const ezy = new Proxy({"src":"/_astro/ezy.X-Qy_EJl.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/ezy.jpeg";
							}
							
							return target[name];
						}
					});

export { ezy as default };
