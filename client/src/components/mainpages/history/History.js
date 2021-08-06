import React,{useContext,useEffect} from 'react'
import {Link} from "react-router-dom"
import {GlobalState} from '../../../GlobalState'
import "./history.css"
import axios from"axios"

export default function History() {

    const state = useContext(GlobalState)
    const [history,setHistory] = state.userAPI.history
    const [isAdmin]= state.userAPI.isAdmin
    const [token] = state.token

    useEffect(() =>{

        if(token){
            const getHistory = async() =>{

               if(isAdmin){
                     
                   const res= await axios.get("/api/payment", {
                       headers: {Authorization: token}
                   })

                   setHistory(res.data)

               }
               else{



                  const res=  await axios.get('/user/history',{
                    headers: {Authorization : token}
                })
                setHistory(res.data)
               }

                //console.log(res)
                
            }
        
        getHistory()

           }

   },[token,isAdmin, setHistory])

    return (
        <div className="history-page">
           <h2>History</h2>

           <h4>You have {history.length} orders </h4>

           <div >
               <table>
                   <thead>
                     <tr>
                       <th>PaymentID</th>
                       <th>Date of Purshase</th>
                       <th></th>


                     </tr>
                   </thead>

                   <tbody>

                       {
                          history.map(item =>(
                              <tr key={item._id}>
                                  <td>{item.paymentID}</td>
                                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                  <td><Link to={`/history/${item._id}`}>View</Link></td>
                              </tr>
                          )
                              
                          )


                       }


                   </tbody>


               </table>
           </div>

        </div>
    )
}
