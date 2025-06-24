import {useRef, useState} from "react";
export default function TodoLists(){
    const [todoList, setTodoList] = useState([])
    const taskName = useRef()
    const createTodoList = () => {
        console.log(taskName.current.value)
       
        setTodoList([...todoList, {task:taskName.current.value, checked: false}])
    }

    const deleteTaskHandler = (i) => {
        setTodoList(todoList.filter((li, idx) =>{
            return i!=idx
        }))
    }

    const checkTaskHandler = (event,index) =>{
        console.log(event, index)
        setTodoList(
        todoList.map((ele,i) => {
            if(index == i && !ele.checked) ele.checked = true
            else ele.checked = false
            return ele
        })
        )
        
    }

    return <>
        <div className="flex flex-col gap-8 p-8 bg-white">
            <div className="flex gap-4 justify-center">
            <input type="text" className="text-black border border-black px-4 py-1 rounded-md outline-none" ref={taskName} />
            <button onClick={createTodoList} className="bg-black text-white rounded-md px-4 py-1 cursor-pointer">Submit</button>
            </div>
            {todoList.length > 0 && <div className="flex flex-col gap-2 items-center">{todoList.map((li, i) => {
                return <div key={`${li.task}-${i}`} className={`flex gap-8 border border-black w-fit rounded-md px-4 py-1 ${li.checked && "opacity-60"}`}>
                
                    <div className="flex gap-2 ">
                    <input type="checkbox" checked={li.checked} onChange={(event)=>{checkTaskHandler(event, i)}}/>
                    <span>{li.task}</span>
                    </div>
                    <button onClick={()=>{deleteTaskHandler(i)}} className="cursor-pointer">X</button>
                </div>
            })}
            </div>}
        </div>
    
    </>
}