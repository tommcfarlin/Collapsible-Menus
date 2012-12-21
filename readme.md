# Collapsible Menus

* [Tom McFarlin](http://tommcfarlin.com/)
* *License.* GPL and MIT

## Summary

Collapsible Menus for jQuery is a plugin that makes it easy to create collapsible menus using nested, unordered lists.

## How To

### 1. Include jQuery

Make sure that jQuery is included on your page:

`<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>`

### 2. Include Collapsible Menu

Add the plugin to your page:

`<script type="text/javascript" src="jquery.collapsible-menus.min.js"></script>`

### 3. Write Your Markup

Collapsible Menus is meant to be used with nested unordered menus. To get started, create an unordered list and give it an ID:

```html
<ul id="menu">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
</ul>
```

Next, add a nested, unordered list to one of the list items:

```html
<ul id="menu">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>
		<ul>
			<li>Nested Item 1</li>
			<li>Nested Item 2</li>
			<li>Nested Item 3</li>
		</ul>
	</li>
	<li>Item 3</li>
</ul>
```

### 4. Enable the plugin

In the JavaScript for your site, pass the ID of the menu to which you want to convert to a collapsible menu:

```javascript
$(function() {
	$('#menu').collapsible();
});
```

Here's an example of the two parameters the plugin supports:

```javascript
$(function() {
	$('#menu').collapsible({
		effect: 'none',				// The effect to use when expanding and collapsiing the menu. Accepts none, slide, or fade. Default: none.
		initialCollapse: true		// When true, collapses the menu when the page loads. Default: true
	});
});
```

### Additional Notes

When a nested menu has been expanded, the parent `ul` will have the class `expanded-menu`; otherwise, the nested `ul` will have the class `collapsed-menu.`

## Changelog

_1.1 (2012.12.20)_

* Collapsible Menus now throws an exception if it's called on an element that does not have an attribute
* Processed and minified using JSLint
* Verifying compatibility with jQuery 1.8.3

_1.0 (2012.04.16)_

* Official release

_0.2 (2012.04.09)_

* Adding support for multiple collapsible menus per page

_0.1 (2012.04.07)_

* Initial Release