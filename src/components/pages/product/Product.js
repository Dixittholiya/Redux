import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux' 
import { getDataToProduct } from '../../../redux/actions/ProductAction'
import Cards from '../../card/Cards'
import { Card } from 'antd';
import './Product.scss'
import ClipLoader from "react-spinners/ClipLoader";

const Product = () => {
  const dispatch = useDispatch()

  const getDataFromStore = useSelector((state) => state.productReducers)
  const showData = getDataFromStore.product[0]
  console.log("getDataFromStore : ",getDataFromStore.product[0]);

  const { Meta } = Card;

  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(()=>{
      setLoading(false)
      getData()
    },5000)

  }, [])

  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log("data : ",data);
    
    dispatch(getDataToProduct(data))
  }


  return (
    <>
    {
      loading ? 
          <ClipLoader
          color={"#D0021B"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        :
    
      <div id='Product'>
        <h1>Product Page</h1>
        <div className="showCard">
          {
            showData&&
            showData.map((item)=>(
              // <Cards item={item}/>
              <Card
                hoverable
                style={{ width: 300,margin:20 }}
                cover={<img alt="example" src={item.image} className='class'/>}
                >
                <Meta title={"Price $ "+item.price} description={"category : "+item.category} />
              </Card>
            ))
          }
        </div>
      </div>
    }
  </>
  )
}

export default Product
