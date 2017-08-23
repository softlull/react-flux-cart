var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

//This is the function that closes the pop-up
function endBlackout() {
  $(".blackout").css("display", "none");
  $(".msgbox").css("display", "none");
}

//This is the function that starts the pop-up
function strtBlackout() {
  $(".msgbox").css("display", "block");
  $(".blackout").css("display", "block");
}

//Sets the buttons to trigger the blackout on clicks
$(document).ready(function() {
  $("#btn1").click(strtBlackout); // open if btn is pressed
  $(".blackout").click(endBlackout); // close if click outside of popup
  $(".closeBox").click(endBlackout); // close if close btn clicked

});

var feed = new Instafeed({
    get: 'tagged',
    tagName: 'iftheshoefits',
    userId: '5717177908',
    accessToken: '5717177908.afb9dd2.4cd8bfb23d374cf79fe94ea9ae2251b9',
    template: '<a href="{{link}}"><img src="{{image}}" /></a>',
    resolution: 'thumbnail'
});
feed.run();

// $('#instafeed').animate({width: 'toggle'});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

// Flux product view
var FluxProduct = React.createClass({

  // Add item to cart via Actions
  addToCart: function (event) {
    var sku = this.props.selected.sku;
    var update = {
      name: this.props.product.name,
      type: this.props.selected.type,
      price: this.props.selected.price
    };
    FluxCartActions.addToCart(sku, update);
    FluxCartActions.updateCartVisible(true);
  },

  // Select product variation via Actions
  selectVariant: function (event) {
    FluxCartActions.selectProduct(event.target.value);
  },

  // Render product View
  render: function () {
    var ats = (this.props.selected.sku in this.props.cartitems) ?
    this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity :
      this.props.selected.inventory;
    return (
      <div>
      <div className="flux-product">
        <img src={'img/' + this.props.product.image}/>

        <div className="flux-product-detail">
          <h1 className="name">{this.props.product.name}</h1>

          <p className="description">{this.props.product.description}</p>

          <p className="price">Price: £{this.props.selected.price}</p>
          <select onChange={this.selectVariant}>
            {this.props.product.variants.map(function (variant, index) {
              return (
                <option key={index} value={index}>{variant.type}</option>
              )
            })}
          </select>
          <button type="button"  onClick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add To Cart' : 'Sold Out'}
          </button>
          <br/>
          <div id="share-buttons">
            <center>
            <a href="http://www.facebook.com/sharer.php" target="_blank">
                <img src="img/facebook.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/share?url=https://localhost:8080/&amp;text=Golden%20Shoe%20&amp;hashtags=iftheshoefits" target="_blank">
                <img src="img/twitter.png" alt="Twitter" />
            </a>
            </center>
        </div>
        </div>
          Size Guide  <input id="btn1" name="submit" type="image" src='img/measure_tape.jpg' onClick={this.strtBlackout} />      
     </div>
     <center>
       <h4>#iftheshoefits</h4>
       <img src="img/twitter-black.png" width="30px" /> <img src="img/insta.png" width="30px" />
       <br/>
       <br/>
       <div class="bxslider" id="instafeed"></div>
     </center>
     </div>
      
    );
    
    
  }


});

module.exports = FluxProduct;