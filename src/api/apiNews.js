import { common } from "../utils/common";
import axiosClient from "./axiosClient";
const apiNews = {
   getAllNewsUser: (payload)=>{
      const url = 'news/'
      return axiosClient.post(url, payload)
   },
   getAllNews: (payload)=>{
      const url = 'newspaper/'
      return axiosClient.post(url, payload)
   },
   addNewsPaper: (payload)=>{
      const url = 'newspaper/create'
      return axiosClient.post(url, common.createFormDataPayload(payload))
   },
}
export default apiNews;