import React, { useEffect, useState } from 'react'
import apiUser from '../../../api/apiUser';
import { constants } from '../../../constants/global';
import TableUser from '../components/tableUser';
import { useSnackbar } from 'notistack';
import Header from '../../../components/Header';
import HeaderRightAction from '../../../components/Header/HeaderRightAction';
import IconAdd from '../../../assets/icons/IconAdd';
import DetailUser from './detailUser';
import { utilsToken } from '../../../utils/token';
function ListUser(){
   const [loading, setLoading] = useState(false)
   const [dataSource, setDataSource] = useState([])
   const { enqueueSnackbar } = useSnackbar()
   const [pagination, setPagination] = useState(constants.DEFAULT_PAGINATION)
   const Token = utilsToken.getAccessToken()

   const getAllUser = async(pagination = constants.DEFAULT_PAGINATION)=>{
      setLoading(true)
      try {
         const response = await apiUser.getAllUser({
            page:pagination.pageNo,
            // page_size: pagination.pageSize,
         })
         console.log('data',response)
         setDataSource(response.data)
         // setPagination({
         //    pageNo: response.currentPage,
         //    pageSize: response.pageSize,
         // })
      } catch (error) {
         console.log('error', error)   
      }
      setLoading(false)
   }
   useEffect(()=>{
      getAllUser()
   },[])
   const handleStatusUser = async (activate, payload) => {
      setLoading(true)
      try {
         const payload={
            token: Token,
            uid: dataSource.uid,
           

         }
         const response = await apiUser.showHide(payload, activate)
         enqueueSnackbar(response.message, {
            variant: 'success'
         })
         await getAllUser()
      } catch (error) {
         console.log('error', error)
         enqueueSnackbar(error.message, {
            variant: 'error'
         })
      }
      setLoading(false)
   }
   return(
      <div>
         <Header
            title='User'
            rightComponent={
               <HeaderRightAction icon={<IconAdd/>} />
            }
         />
         <TableUser
         loading={loading}
         dataSource={dataSource}
         onStatusChange={handleStatusUser}
      />
      </div>
      
   )
}
export default ListUser;