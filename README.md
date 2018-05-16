# markdown-it-fontawesome
[Markdown-it][markdown-it] plugin that adds [Font Awesome][fontawesome] icons support.

Turn this:

```md
Hello World! :fa-flag:
```

Into this:

```html
<p>Hello World! <i class="fa fa-flag"></i></p>
```


## Install
```bash
$ npm install markdown-it-fontawesome --save
```



## Usage


### Enable plugin

```js
var md = require('markdown-it');
var fa = require('markdown-it-fontawesome');

md().use(fa);
```


### Font Awesome version <= 4 example

```md
Hello World! :fa-flag:

- [:fa-google: Google](https://www.google.com/)
- [:fa-github: GitHub](https://github.com/)
```

Gets converted to:

```html
<p>Hello World! <i class="fa fa-flag"></i></p>
<ul>
<li><a href="https://www.google.com/"><i class="fa fa-google"></i> Google</a></li>
<li><a href="https://github.com/"><i class="fa fa-github"></i> GitHub</a></li>
</ul>
```


### Font Awesome 5+ example


```md
x
```

gets converted to: 

```html
test
```


[markdown-it]: https://github.com/markdown-it/markdown-it
[fontawesome]: https://fortawesome.github.io/Font-Awesome/


### Credits 

Original: https://github.com/nunof07

Font awesome 5 support and tests: https://github.com/rjjakes


### License

MIT