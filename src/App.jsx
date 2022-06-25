import React, { useState } from "react";
import ListItem from "./ListItem";

function App(){
    let [val,setVal]=useState("");
    let [items,setItems]=useState([]);
    
    function change(e){
        setVal(e.target.value);
    }

    function insert(e){
        if(val!==""){
            setItems([...items,val]);
            setVal("");
        }
    }
  
    function remove(id){
        setItems((cur)=>{
            return(cur.filter((ele,ind)=>{
                return ind!==id;
            }));
        });
        console.log(id);
    }
    
    return(
        <>
            <div className="main-div">
                <div className="center-div">
                    <h3>ToDo list</h3>
                    <input type="text" placeholder="Add Items" onChange={change} value={val} className="text-area" id="inp"></input>
                    <button onClick={insert} className="add"><i class="fas fa-plus"></i></button>
                    <br/>
                    <ol>
                        {items.map((ele,ind)=>{
                            return(
                                <ListItem
                                    text={ele}
                                    id={ind}
                                    key={ind}
                                    onclick={remove}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App; 
