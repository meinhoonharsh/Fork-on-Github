# Fork-on-Github

>> A Simple JavaScript Package to add Fork me on Github Ribbon on any Website

You can use this Library in your application through a UnPKG CDN.
```html
<script src="https://unpkg.com/fork-on-github"></script>
```

This Package is pretty simple and easy to use. 
Just call a Function `forkOnGithub()` and pass the following arguments:
```js
forkOnGithub({
  repo: "your_repository_url",
})
```

You can change Ribbon Appearance by passing the following optional arguments:
```js
forkOnGithub({
  repo: "your_repository_url",
  backgroundColor: "444",
  textColor: "fff",
  fontSize: "16px",
  text: "Fork me on GitHub",
})
```
Above values are default values for the respective properties.




