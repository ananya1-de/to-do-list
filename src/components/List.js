import React from 'react';
import ListItem from './ListItem';
import "./CSS/List.css"


class List extends React.Component{
    render(){
        const {todo, onDelete, onEdit, onTime, count, filterText} = this.props;
        console.log(todo)


        return( 
            <>
             <ul>
                   {
                     todo.map((item, index)=>{
                        return <ListItem
                        item={item.todo}
                        key={index}
                        handleDelete={() => {onDelete(index)}}
                        handleEdit={onEdit}
                        id={index}
                        handleTime={() => {onTime(index)}}
                        />
                      })
                    }
             </ul>
             <h2>You have {count} things to do</h2>
            </>
        );
    };
}

export default List; 