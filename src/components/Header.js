import React from 'react';
import Login from './Login';

function Header({setDatas}) {
  return (
      <div className="flex h-20 pl-5 items-center bg-slate-900 text-white place-content-between ">
        <div>System Status</div>
        <div className="mr-10">
          <Login setDatas={setDatas}/>
        </div>
      </div>
  );
}

export default Header;
