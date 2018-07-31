import React, { Component } from 'react';
import axios from 'axios'
import {setAxiosDefaults} from '../utils/SessionHeaderUtil'


class SkillReviews extends Component {
    state = {
        skill: {},
        reviews: []
    }

    componentDidMount(){
        const reviewsId = this.props.match.params.id || this.props.skill.id
        setAxiosDefaults()
        axios.get(`/skills/${reviewsId}/reviews`)
            .then(res => {
                this.setState({ 
                    reviews: res.data
                 })
            })
            .catch((err) => {
                console.error(err)
            })

    }
    
    
    render() {
    const reviewAll = this.state.reviews.map ((review)=>{
    return (
        <div>
            <br/>
        {review.title}
        <br/>
        {review.description}
        </div>
    )
        
  
})
        return (
            <div>
                {reviewAll}
            </div>
        );
    }
}

export default SkillReviews;
