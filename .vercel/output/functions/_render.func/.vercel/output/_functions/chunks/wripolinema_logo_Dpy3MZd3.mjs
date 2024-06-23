const wripolinema_logo = new Proxy({"src":"/_astro/wripolinema_logo.Bfnm8TsT.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/wripolinema_logo.jpeg";
							}
							
							return target[name];
						}
					});

export { wripolinema_logo as default };
