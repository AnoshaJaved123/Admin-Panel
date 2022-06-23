import React,{useState,useEffect} from "react";
import axios from "axios";
import './assets/App.css'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";

const Newboard = () => {
  
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
    <div className="App">
   
    <DragDropContext onDragEnd={handleDragEnd}>
      {_.map(state, (data, key) => {
        return(
          <div key={key} className={"column"}>
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
                              <div
                                className={`item ${snapshot.isDragging && "dragging"}`}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {el.name}
                                {el.detail}
                              </div>
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
   
  )
}

export default Newboard