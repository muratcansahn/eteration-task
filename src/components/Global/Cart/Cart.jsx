import {useState} from 'react'
import './Cart.scss'
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const Cart = () => {
    const [count, setCount] = useState(0)
    const ButtonGroup = Button.Group;
    const increase = () => {
      setCount(count + 1)

    }
    const decrease = () => {
       if(count > 0){
        setCount(count - 1)
       }

    }

  return (
   <div className='cart-container'>
   <h5>Cart </h5>
   <div className='cart-card '>
    <div className='d-flex w-100 cart-item'>
        <div className='d-flex w-100 justify-content-between' >
        <div >
        Samsung S22

        <div className='main-color' >
        $1000

        </div>
        </div>
        <ButtonGroup>
          <Button onClick={decrease} icon={<MinusOutlined />} />
         <span className='cart-count'>
            {count}
         </span>
          <Button onClick={increase} icon={<PlusOutlined />} />
        </ButtonGroup>
        </div>

    </div>
    <div className='d-flex w-100 cart-item'>
        <div className='d-flex w-100 justify-content-between' >
        <div >
        Samsung S22

        <div className='main-color' >
        $1000

        </div>
        </div>
        <ButtonGroup>
          <Button onClick={decrease} icon={<MinusOutlined />} />
         <span className='cart-count'>
            {count}
         </span>
          <Button onClick={increase} icon={<PlusOutlined />} />
        </ButtonGroup>
        </div>

    </div>
 

   </div>
   </div>
  )
}

export default Cart