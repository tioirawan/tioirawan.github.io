const hummatech = new Proxy({"src":"/_astro/hummatech.C58VCdHR.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/hummatech.jpeg";
							}
							
							return target[name];
						}
					});

export { hummatech as default };
