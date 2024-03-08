
import React, { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './ManuCard'
import Navbar from './Navbar'
import './style.css'

const uniqueList = [...new set(Menu.map((d)=>{
    return d.category;
})),"ALL"
]
console.log(uniqueList)

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu)
    const[menuList] = useState(uniqueList)

    const filterItem = (category) =>{
        if (category === "ALL") {
             setMenuData(Menu)
             return;
        }

        const updatedList = Menu.filter((item)=>{
            return item.category === category
        })
        setMenuData(updatedList);
    }
  return (
    <>
      <Navbar  filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant
