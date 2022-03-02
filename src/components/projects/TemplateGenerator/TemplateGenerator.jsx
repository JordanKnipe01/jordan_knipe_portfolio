import React from 'react';
import './templategenerator.css';
import template_generator from '../../../assets/HTMLTemplateSCS.PNG'
import webshop_app from '../../../assets/SnapshotWebshopApp.PNG.png'
const TemplateGenerator = () => {
  return <div>
  <body className='project-block'>
      <img src={webshop_app} className='webshop-app'>
      </img>
    <h1 className='active-project-header'>Template Generator</h1>
    <div>
    <div className='project-details'>
        <p>
        This tool was made for a business I worked for that allowed users that aren't completely computer literate to help them generate HTML and CSS Code so that they could add ecommerce listings to their website and ebay shop whilst maintaining a good looking GUI written in CSS and HTML.
    <br></br>
    <br></br>
    How it works is the users are able to add or remove the Description, Features, Benefits, Specifications, Items and Important information regarding the product and select the generate button of ebay or for the webshop(website) and the code will be copied and ready to be pasted into a wordpress or ebay html parser. The Languages used for this project were Python, HTML, CSS and Javascript.
    </p>
    <img src={template_generator} className='template-app'>
      </img>
    </div>
    </div>

    </body>
  </div>
};

export default TemplateGenerator;
