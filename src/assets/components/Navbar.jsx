
import React from 'react'

const Navbar = ({filterItem, menuList }) => {


  return (
    <>
        <nav className='navbar'>
        <div className="btn-group">

            {
                menuList.map((i)=>{
                    return (
                        <button className='btn-group__item' onClick={()=>filterItem(i)}>
                            {i}
                        </button>
                    )
                })
            }

        </div>
        </nav>
    </>
  )
}

export default Navbar
