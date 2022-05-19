import React from "react";
import Header from '../../components/Header'
import HeaderRight from '../../components/Header/HeaderRightAction'
import IconBack from "../../assets/icons/IconBack";
import IconAdd from '../../assets/icons/IconAdd'
function User(){
   return(
      <div>
         <Header title="Project" 
         leftComponent={
            <button className='bnt_back' >
                <IconBack/> Back
            </button>
         }
         rightComponent={
            
            <HeaderRight icon={<IconAdd/>} />
         }/>
         <h1>Page User</h1>
      </div>
   )
}
export default User;