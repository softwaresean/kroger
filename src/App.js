import React from 'react';
import groceries from './order-details';


// a good component would be to display the thumbnail image
const images = groceries.products.map((product) => product.images);
const thumbnails = images.forEach(array => {

  console.log(array.filter(item => item.size === 'thumbnail'))
});
function App() {
  return (
    <div className="App">
      {thumbnails}
    </div>
  );
}

export default App;
