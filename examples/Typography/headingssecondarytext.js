
            import React from 'react';

            export default class CoreExample extends React.Component {

              render() {

              /* eslint-disable */
              // Disabled to ignore Dangerously Setting Inner HTML

                return <div dangerouslySetInnerHTML={{__html: ` <div class="row">
   <div class="columns medium-12">
     <h1 class="__web-inspector-hide-shortcut__">h1. Example heading <small>Secondary text</small></h1>
   </div>
 </div>
 <div class="row">
   <div class="columns medium-12">
     <h2>h2. Example heading <small>Secondary text</small></h2>
   </div>
 </div>
 <div class="row">
   <div class="columns medium-12">
     <h3>h3. Example heading <small>Secondary text</small></h3>
   </div>
 </div>
 <div class="row">
   <div class="columns medium-12">
     <h4>h4. Example heading <small>Secondary text</small></h4>
   </div>
 </div>
 <div class="row">
   <div class="columns medium-12">
     <h5>h5. Example heading <small>Secondary text</small></h5>
   </div>
 </div>
 <div class="row">
   <div class="columns medium-12">
     <h6>h6. Example heading <small>Secondary text</small></h6>
   </div>
 </div>`}} />

              /* eslint-enable */
              }
            }
          