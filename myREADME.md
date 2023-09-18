Tech

- Astro
- Tailwindcss

to setup eslint + prettier + tailwind: https://patheticgeek.dev/blog/astro-prettier-eslint-vscode

setting.json "Eslint: Validate"

```
{
	"eslint.nodeEnv": "",
	"eslint.validate": ["javascript", "javascriptreact", "astro", "typescript", "typescriptreact"],
	"prettier.documentSelectors": ["**/*.astro"],
	"[astro]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```


info about slick https://kenwheeler.github.io/slick/