const bpjs = new Proxy({"src":"/_astro/bpjs.B1ulLjMI.jpeg","width":100,"height":100,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mac/Projects/web/tioirawan.github.io/src/assets/bpjs.jpeg";
							}
							
							return target[name];
						}
					});

export { bpjs as default };
