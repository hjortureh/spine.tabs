# Tab Controller for Spine.js

Features
 - Navigates via url path using the HTML5 History API 
 - Nice fadeIn when switching between tabs


# Usage

Html: 

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


Javascript: 

new Spine.Controller.Tabs({ el: $("#container"), route: "/:tab" });

Spine.Route.setup({ history: true });


CSS: 

.hidden {
    display: none;
}
