const aboutAstro = new Proxy({"src":"/_astro/about-astro.0znnbM0P.png","width":249,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/about-astro.png";
							}
							
							return target[name];
						}
					});

export { aboutAstro as default };
