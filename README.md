# JavaScript VanillaJS Template

> starting point for experiments with plain JavaScript and CSS

## Dependencies

- Only a web browser like Firefox or Chrome is needed to run the program.
- Optionally, if [Node.js](https://nodejs.org/en) is installed on the development computer, the [NPM](https://www.npmjs.com) package [alive-server](https://www.npmjs.com/package/alive-server) can be used for automatic page reloads after source code changes.

## Create new project

To create a new project from this template, download the project files from [here](https://github.com/experimental-software/javascript-vanillajs-template/archive/refs/heads/master.zip) or run the following [Bash](https://tldp.org/LDP/Bash-Beginners-Guide/html/) snippet:

```sh
SLUG=javascript-sandbox-$(date +%s)
{
git clone git@github.com:experimental-software/javascript-vanillajs-template.git $SLUG
cd $SLUG
}
```

## Development

```sh
npm install -g alive-server
alive-server --no-browser
```

Then open http://127.0.0.1:8080 in a web browser.

## References

- http://vanilla-js.com/
- https://github.com/ljcp/alive-server
