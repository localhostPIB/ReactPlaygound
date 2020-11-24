import React from 'react';


class Magic extends React.Component{

    constructor(props){
        super(props);

        this.state = {render : true}
    }

    deleteMe(){
        this.setState({
            render : false
        });
    }

    createtable(){
        let table = new Array();

        for(let i = 0; i <= 10; i++){
            let children = [];
            table.push(<this.deleteMe/>);
        }
        return table;
    }


    render(){
        return(<table>
            {this.createtable()}
            </table>);
            }
    

    render(){
        if(this.state.render){
        return(
            <button onClick={(e) => this.deleteMe(e)}>
                Delete Me :-)
            </button>
        );
    } else{
        return null;
    }
}
}
export default Magic;