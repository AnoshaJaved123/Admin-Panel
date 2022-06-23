import React,{useState,useEffect} from "react";
import axios from "axios";
// import { fetchtask } from "../Redux/taskSlice";
// import {useDispatch, useSelector} from 'react-redux'
import { DragDropContext,Draggable,Droppable } from "react-beautiful-dnd";
const Board = () => {
  //APPROCH 1 FROM REDUX THUCK

//  const dispatch = useDispatch()
//  const task = useSelector(state => state.app.task)
// console.log(task)
//   useEffect(() => {
//       dispatch(fetchtask())
//     }, [dispatch])

//APPROCH 2 AXIOS
  
// const [taskState, setTaskState] = useState('')
// useEffect(() => {
//   getAllTask();
//   }, [])

//  let getAllTask = ()=>{
//      axios.get('http://localhost:5002/api/TaskAuth/fetchtask').then((resp) => {
//     // const newtask= resp.data;
//     setTaskState(resp.data)
//     // console.log(taskState)
//  } )
//  .catch(error => console.error(`error: ${error}`))
// }


//     console.log('taskstate',taskState)


// APPROCH 3 using AXIOS

const [loadingData, setLoadingData] = useState(true);
const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      await axios
        .get('http://localhost:5002/api/TaskAuth/fetchtask')
        .then((response) => {
          setData(response.data);
          setLoadingData(false);
        });
    }
    if (loadingData) {
          getData();
        }
      }, []);

      console.log(data)


  
  const handleresult = (results)=>{
    let temptask = [...data]
    let [selectedrow] = temptask.splice(results.source.index,1)
    console.log(results, selectedrow)
    temptask.splice(results.destination.index,0,selectedrow)
    setData(temptask)
  }
  

  return (
  <DragDropContext onDragEnd={(results)=>handleresult(results)}>
      <>
   <div className="container-fluid text-center">
    <div className="row"><h3>KANBAN BOARD</h3></div>
    <div className="row ">
    <div className="col-md-10"></div>
    <div className="col-md-2 text-end">
    <button type="button" className="btn btn-secondary ">Create</button>
    </div>

    </div>
    <hr />
    
    <Droppable droppableId="col-md-3">
      {
       (provided)=> (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="row  text-dark bg-opacity-10 shadow p-3 mb-5 bg-white rounded">


        <div className="col-md-3  text-center ">
        <h4 className='heading' >TODO</h4>

        {
          data.map((tasks,index)=>(
        <Draggable key={tasks._id} draggableId={tasks._id} index={index}>
          {
            (provided)=>(
              <div className="row " key={index}
               ref={provided.innerRef} 
               {...provided.draggableProps} 
              
              >
          <div className="card my-1" style={{width: '18rem'}}  {...provided.dragHandleProps}  >
       <div className="card-body">
         <h5 className="card-title">{tasks.title}</h5>
         <p className="card-text">{tasks.detail}</p>
         <a href="#" className="btn btn-primary">Go somewhere</a>
       </div>
    

      </div>


     </div>
            )
          } 
        </Draggable>

          ))
        }


            
        </div>
        
        <div className="col-md-3 ">
        <h4 className='heading' >PROGRESS</h4>

        </div>
        <div className="col-md-3 ">
        <h4 className='heading' >PENDING</h4>

        </div>
       
        <div className="col-md-3 ">
        <h4 className='heading' >COMPLETED</h4>

        </div>
        
        {provided.placeholder}
    </div>
       )
      }
    </Droppable>
   </div>

  
   </>
  </DragDropContext>
   
  )
}

export default Board