import React, { Component } from 'react'

class List extends Component {

state = {
    isVisible: false,
    count:0
}

componentDidMount() {
    setInterval(() =>{
    this.setState({count: this.state.count +1})
    },1000);
}

Person = [
    {fullName:'Karray Abdeljalil'},
    {imgSrc:'./TT.png'},
    {bio:'Web Developer'},
    {profession:'Engineer'}
    ]

Visibility = () => {
    this.setState({
        isVisible : !this.state.isVisible
    })
}

render() {

    return (
        <div>
            {this.state.isVisible ?
            (<div>
                <button className='visibility-btn' onClick={this.Visibility}>Hide content</button>
                {this.Person.map((el,i) => (
                <div>
                <h1 key={i}>{el.fullName}</h1>
                <img className='photo' key={i} src={el.imgSrc} alt='' />
                <h2 key={i}>{el.bio}</h2>
                <h2 key={i}>{el.profession}</h2>                
                </div>))}
                <p>{this.state.count}</p>
                </div>) :
                (<button className='visibility-btn' onClick={this.Visibility}>Show content</button>)
            }
            </div>
    );
    }
}

export default List;