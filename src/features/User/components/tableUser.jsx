import React,{useMemo} from 'react'
import SuperTable from '../../../components/SuperTable'
import { Avatar,Button,Image, Switch } from 'antd'
import {EditOutlined, EyeOutlined,PictureOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function TableUser(props){
   const {dataSource,pagination,onPaginate,onTableChange,onStatusChange}=props
   const handleChangePagination = (pageNo, pageSize) => {
      if (onPaginate) {
         onPaginate(pageNo, pageSize)
      }
   }
   const history = useHistory()
   const columns = useMemo(()=>{
      return[
         {
            title: 'Full Name',
            key: 'fullname',
            dataIndex: 'fullname',
            width:300,
            render: (_,record)=>(
               <>
                  <Avatar
                     src={
                        record.avatar ? (
                           <Image src={record.avatar} style={{ width: 40, backgroundSize:'cover' }} />
                        ) : <Image src='https://joeschmoe.io/api/v1/random' style={{ width: 40, backgroundSize:'cover' }}/>
                     }
                     shape="circle"
                     icon={<PictureOutlined/>}
                  />
                  <span style={{ marginLeft: 10 }}>{record.fullname}</span>
               </>
            )
         },
         {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
         },
         {
            title: 'Giới tính',
            key: 'gender',
            dataIndex: 'gender',
            render: (_,record)=>{
               return record.gender === 'other'?<div>Khác</div>:record.gender==='male'?<div>Nữ</div>:<div>Nam</div>
            }
         },
         {
            title: 'Phone number',
            key: 'phone',
            dataIndex: 'phone',
         },
         {
            title: 'Trạng thái',
            key: 'activate',
            dataIndex: 'activate',
            render:(_,record)=>{
               return record.activate ?<div style={{color:'blue'}}>Hoạt động</div>:<div style={{color:'red'}} >Chờ active</div>
            }
         },
         {
            title: 'Hoạt động',
            key: 'work',
            dataIndex: 'work',
            render:(_,record)=>(
               <div>
                  <Button title='View profile' onClick={()=>{history.push(`/user/${record.uid}`)}}><EyeOutlined/></Button>
                  <Switch
                     checkedChildren="Block"
                     unCheckedChildren="UnBlock"
                     checked={record.activate}
                     onClick={async e => await clickStatusUser(e, record.uid)}
                  />
               </div>
            )
         },

         
      ]
   })
   const clickStatusUser = (value, uid) => {
      if (onStatusChange) {
         onStatusChange(value, uid)
         
      }
      
   }
   return(
      <SuperTable 
         columns={columns}
         hasPagination={true}
         dataSource={dataSource}
         pagination={pagination}
         onPaginate={onPaginate}
         // onChange={onTableChange}
         onChange={handleChangePagination}
         scroll={{ x:'max-content'}}
      />
   )
}
export default TableUser;