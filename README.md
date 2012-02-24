# Tabs Controller for Spine.js

Simple tabs behavior written as a Spine.js controller


Features

* Navigates via url path using the HTML5 History API 
* Nice fadeIn when switching between tabs


## Usage


Html: 

```html
<div id="container">
      
      <nav class="tabs">
          <a href="/tab1">Tab 1</a>
          <a href="/tab2">Tab 2</a>
          <a href="/tab3">Tab 3</a>
      </nav>

      <article>
          <section data-tab="tab1" >
              -- Tab 1 Content --
          </section>
          <section data-tab="tab2" class="hidden" >
              -- Tab 2 Content --
          </section>
          <section data-tab="tab3" class="hidden" >
              -- Tab 3 Content --
          </section>
      </article>

</div>
```


Javascript: 

```js

// initalize tabs controller
new Spine.Controller.Tabs({ el: $("#container") });

// start routing
Spine.Route.setup({ history: true });
```

s
CSS: 

```css
.hidden {
    display: none;
}
```
