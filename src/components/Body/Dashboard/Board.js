import React,{useState,useEffect} from "react";
import { createtask,deletetask } from "../../../Redux/taskSlice";
import {useDispatch} from 'react-redux'
import axios from "axios";
import { DragDropContext,Draggable,Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import '../../assets/App.css'
import PageHeader from "../../Common/PageHeader";



const Board = () => {
const [values, setValues] = useState({name:"",detail:""})
const {name,detail} = values
const dispatch =useDispatch()

const handlesubmittask =(e)=>{
  e.preventDefault()
dispatch(createtask({values}))
setValues({name:"",detail:""})
window.location.reload()
}

// APPROCH 3 using AXIOS

const [loadingData, setLoadingData] = useState(true);
const [data, setData] = useState([]);
const [state, setState] = useState({
    TODO: {
        title: "TODO",
        items: []
      },
      INPROGRESS: {
          title: "INPROGRESS",
          items: []
      },
      PENDING: {
        title: "PENDING",
        items: []
    },
      COMPLETED: {
          title: "COMPLETED",
          items: []
      }
  })

  useEffect(() => {
    async function getData() {
      await axios
        .get('http://localhost:5002/api/TaskAuth/fetchtask')
        .then((response) => {
            //insert array into data state temp var
          setData(response.data);
          //set state item with data
          setState(
            {
                TODO: {
                    title: "TODO",
                    items:response.data
                  },
                  INPROGRESS: {
                      title: "INPROGRESS",
                      items: []
                  },
                  PENDING: {
                    title: "PENDING",
                    items: []
                },
                  COMPLETED: {
                      title: "COMPLETED",
                      items: []
                  }
              }
          )
          setLoadingData(false);
        });
    }
    if (loadingData) {
        getData();
    }
}, []);

console.log(data)
 console.log(state)

  
 const handleDragEnd = ({destination, source}) => {
  if (!destination) {
    return
  }

  if (destination.index === source.index && destination.droppableId === source.droppableId) {
    return
  }

  // Creating a copy of item before removing it from state
  const itemCopy = {...state[source.droppableId].items[source.index]}

  setState(prev => {
    prev = {...prev}
    // Remove from previous items array
    prev[source.droppableId].items.splice(source.index, 1)


    // Adding to new items array location
    prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

    return prev
  })
}   
  

  return (
    <>

   
    <PageHeader label='Kanban Board' pageTitle='Application'/>
    <div className="container text-center">
    

    <div className="row ">

    <div className="input-group mb-3">
  <input value={name} onChange={(e)=>{setValues({...values,name:e.target.value})}} type="text" className="form-control" placeholder="Task Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <input value={detail} onChange={(e)=>{setValues({...values,detail:e.target.value})}} type="text" className="form-control" placeholder="Task Detail" aria-label="Recipient's username" aria-describedby="basic-addon2" />

  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2"> <a type="button" onClick={handlesubmittask}>Create</a></span>
  </div>
</div>


    </div>
    <hr />
   <div className="row">

   
    <DragDropContext onDragEnd={handleDragEnd}>
      {_.map(state, (data, key) => {
        return(
          <div key={key} className='col-md-3'>
            <h3>{data.title}</h3>
            <Droppable droppableId={key}>
              {(provided, snapshot) => {
                return(
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={"droppable-col"}
                  >
                    {data.items.map((el, index) => {
                      return(
                        <Draggable key={el._id} index={index} draggableId={el._id}>
                          {(provided, snapshot) => {
                            console.log(snapshot)
                            return(
                              <>
                              <div
                                className={`item ${snapshot.isDragging && "dragging"}`}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                
                                <div className="card">
                                   <div className="card-body">
                                     <h5 className="card-title">{el.name}</h5>
                                     <p className="card-text">{el.detail}</p>
                                     <a onClick={()=>{dispatch(deletetask({id:el._id})); window.location.reload()}} className="btn btn-sm btn-danger">Delete</a>
                                   </div>
                                 </div> 
                                
                              </div>
                         

                             </> 
                            )
                          }}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </div>
                )
              }}
            </Droppable>
          </div>
        )
      })}
    </DragDropContext>
    </div>
  </div>
  </>
   
  )
}

export default Board