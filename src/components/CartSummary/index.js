// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalPrice = 0

      cartList.forEach(element => {
        totalPrice += element.price * element.quantity
      })

      return (
        <div className="cart-summary-container">
          <div>
            <h1 className="cart-summary-card-title">
              Order Total:{' '}
              <span className="cart-summary-card-total">RS {totalPrice}\-</span>
            </h1>
            <p className="cart-summary-card-count">
              {cartList.length} {cartList.length === 1 ? 'item' : 'items'} in
              cart
            </p>
            <button className="check-out-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
