import React from 'react'

const tabs = [
    {
        id: 1,
        name: "SignUp"
    },
    {
        id: 2,
        name: "LogIn"
    }
];

function Navbar({activetab, setActiiveTab}) {
  return (
    <div className="w-100 bg-light shadow-xl d-flex bg-dark gap-3 p-2 border">
        {tabs.map((tab) => {
            return (
                <div className="" onClick={() => setActiiveTab(tab.name)}>
                    <button className='border p-1 bg-light' style={{cursor: "pointer"}}>{tab.name}</button>
                </div>
            );
        })}
    </div>
  )
}

export default Navbar