import React from 'react'
import './HomePage.scss'

const HomePage = () => {
    let userfirstName = localStorage.getItem('userFirstName');
    return (
        <div id='Home'>
            {/* <div className='div1'><h1 className='Color'>Home Page {userfirstName}</h1></div> */}
            {
                userfirstName ? <h1 className='Color'>Hello {userfirstName}</h1> : null
            }
            <div className='homePageImage'>
                <img src="https://wallpapersprinted.com/download/2/jupiter_ferris_wheel_fair-wallpaper-1920x1080.jpg" className='Image' alt="" />
            </div>
            <div className='div2'><p className='Color'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eius error necessitatibus fugit accusantium beatae, esse sed, tempore doloribus molestiae voluptatum? Accusantium nobis magni, eaque illum, quidem quod fuga debitis veritatis, tempora impedit sit consectetur nostrum laudantium temporibus esse hic laborum. Laboriosam quaerat deleniti, numquam quae minus laudantium neque magnam dolores tempora ducimus nostrum blanditiis pariatur molestiae voluptate animi id vitae ex praesentium nihil architecto perferendis commodi explicabo voluptatibus? Amet quos animi accusamus, voluptate ratione suscipit ipsam fuga enim provident consectetur voluptatem hic aliquid ipsa nesciunt expedita quis eveniet, eligendi asperiores molestiae mollitia doloremque eaque repudiandae tempora. Ducimus, earum deserunt.</p></div>
            <div className='div3'></div>


        </div>
    )
}

export default HomePage
