import React from 'react'

class MountingConstruct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'ilman teguh prasetya'
        }
        console.log('Mounting Contruct')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Mounting Derived State From Props')
        return null
    }
    componentDidMount(){
        console.log('Mounting Component did mount')

    }
    render(){
        console.log('dari render')
        
        return(
            <div>
                <p>Selamat Datang</p>
            </div>
        )
    }
}
export default MountingConstruct