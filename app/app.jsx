import React from 'react'
import ReactDOM from 'react-dom'

class Node extends React.Component{
    constructor(props){
        super(props);
    }
    del(){
        console.log('con');
        this.props.remove(this.props.index)
    }
     render(){
         return(
             <div>
                 <p>{this.props.children}</p>
                 <button onClick={this.del.bind(this)}>Delete</button>
             </div>
         )
     }
 }
class List extends React.Component{
     constructor(props){
         super(props);
         this.state={
             mang:['android','ios','Nodejs']
         }
     }
     del(index){
         console.log('cha');
         this.state.mang.splice(index, 1);
         this.setState(
             this.state
         )
     }
    render(){
        return(
            <div>

                {this.state.mang.map((list, key)=>{
                    return(
                        console.log('cha render'),
                        <Node key={key}  remove={this.del.bind(this)} index={key}>{list}</Node>
                    )
                })}
            </div>
        )
    }
}
ReactDOM.render(
   <List/>,
    document.getElementById('root')
);