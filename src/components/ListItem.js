import React from 'react';
import "./CSS/ListItems.css"




class ListItem extends React.Component{
    state = {
        onEdit: false,
        editVal: this.props.item
    };
    myRef = React.createRef();


    onRemove = () =>{
        this.myRef.current.className = "active";
        setTimeout(()=>{
            this.props.handleDelete();
        }, 200)
    };

    handleEditValue = e =>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    };

    

    onEdit = ()=>{
        this.setState({onEdit: true})
    };

    handleCancel = ()=>{
        const {editVal} = this.state;
        if(editVal === ''){
            this.setState({editVal: this.props.item});
        }
        this.setState({onEdit: false});
    };

    handleSave = ()=>{
        const {editVal} = this.state;
        if(editVal === ''){
            this.setState({editVal: this.props.item});
        }else{
            this.props.handleEdit(editVal, this.props.id);
        }
        console.log(this.props.id)
        this.setState({onEdit: false})
    }
    

    oncallMe = ()=>{
        setInterval(()=> {
            this.setState({ date: new Date()});
           this.state.date.toLocaleTimeString()
        },1000);
    };

    render(){
        const {item} = this.props;
        if(this.state.onEdit){
            return(
                <li>
                    <input type="text"
                    value={this.state.editVal}
                    name="editVal" id="editVal"
                    onChange={this.handleEditValue}                       
                    />
                    
                    <div className="row">
                       <i className="fa fa-save"
                       title="Save"
                       onClick={this.handleSave}
                       />
                     <i className="fa fa-times"
                       title="Cancel"
                       onClick={this.handleCancel}
                       />
                    </div>  
                </li>
            );           
        }
        else
        {
            return(
                <li ref={this.myRef}> {item}
                   <div className="row">
                       <i className="fa fa-pencil"
                        title="Edit"
                        onClick={this.onEdit}
                       />
                      <i className="fa fa-trash"
                        title="Delete"
                        onClick={this.onRemove}
                        />
                        <i className="fa fa-clock-o"
                          title="Time"
                          onClick={this.oncallMe}
                          />
                   </div>
                 </li>
              );
        }
    };
}

export default ListItem;