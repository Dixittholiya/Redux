import React from 'react'
import { Card } from 'antd';

const Cards = (item) => {
  const { Meta } = Card;
  console.log("item : ",item);
  return (
    <div>
     {
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={item.image} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    }
    </div>
  )
}

export default Cards
