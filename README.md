#### Test proxying a JS DIC

The motivation behind this was to add the capabilities to `Proxy` `BottleJS` and Serve the registered services trough the `import` token.

Please, look the `src/test.js` for a better understanding.

to run the example:

```BASH
npm install
grunt build
node --harmony-proxies dist/module.js
```

Thanks
