import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WzGrid from './wzGrid'
import WzContainer from './components/wzContainer'
import WzStep from './components/wzStep'
import WzPreview from './components/wzPreview'
import Swipe from 'components/common/swipeContainer'

class RtWizard extends Component {
    constructor() {
        super()
        this.state = {
            step: 0,
            gymFilter: undefined
        }

        this.clicks = 0
        this.clicked = 'gym'
        this.steps = ['gym', 'color', 'grade', 'location', 'tags']
        this.move = this.move.bind(this)
        this.update = this.update.bind(this)
        this.updateTags = this.updateTags.bind(this)
    }

    render() {
        return (
            <Swipe onSwipe={this.onSwipe}>
            <WzContainer step={this.state.step}>
              { this.stepContent()
                    .map((step) => (
                        <WzStep key={step.name} 
                                name={step.name}
                                prev={this.move} 
                                next={this.move} 
                                update={this.update} 
                                end={step.end}
                                review={step.review}>
                            {step.content}
                        </WzStep>)
                ) }
            </WzContainer>
            </Swipe>
        )
    }

    onSwipe = (dir) => {
        if( 
            // last step
            (this.state.step !== 5 && dir < 0) || !(this.steps[this.state.step] in this.props.route)) return
        
        let toStep = this.state.step + (dir > 0? -1 : 1)

        this.setState({step: toStep})
    }

    move(dir, field) {
        let current = this.state.step
        // called by update
        if(field) return this.setState({step: current + dir})
        // check if we've made it past this step already
        if(current + dir < 0 || !(this.steps[this.state.step] in this.props.route) && dir > 0) return
        this.setState({step: current + dir})
    }

    update(field, value) {
        // handle double click
        if (this.clicks > 0 && this.props.route[field] === value) return this.move(1, field)

        this.props.update(field, value)
        let next = this.state.step + 1

        
        if (
            // if we've manually gone backwards, don't move
            (!this.props.route[this.steps[next]] && field !== 'type')
            // or the next step is multiple choice
            || this.steps[next] === 'tags'
        ) return this.move(1, field)

        // store click for double click
        this.clicks++
        this.clicked = field
        setTimeout(() => this.clicks--, 500)
    }

    updateTags(tags, tag) {
        let {value} = tag
        
        // handle double click
        if (this.clicks > 0 && this.props.route.tags.indexOf(value) >=0 ) return this.move(1, true)

        // if we've manually gone backwards, don't move
        // if (!this.props.route[this.steps[this.state.step + 1]]) return this.move(1, field)
        this.props.updateTags(value)

        // store click for double click
        this.clicks++
        this.clicked = value
        setTimeout(() => this.clicks--, 500)
    }

    filterGyms(gyms, filter) {
        if(!filter) return []
        return gyms.filter(gym => gym.walls[filter].length)
    }

    setFilter(filter) {
        this.update('type', filter)
        this.setState({gymFilter: filter})
    }

    resetForm() {
        this.props.reset()
        this.setState({step: 1})
    }

    stepContent() {
        return [
            {
                name: 'gym',
                content: (
                <div>
                     <div className="wz-grid">
                       <div className={ 'wz-list-item ' + (this.state.gymFilter === 'boulder' ? 'item-selected' : '' )} onClick={() => this.setFilter('boulder')}>
                         <div className="wz-label list-label">Bouldering</div>
                       </div>
                       <div className={ 'wz-list-item ' + (this.state.gymFilter === 'rope' ? 'item-selected' : '' )} onClick={() => this.setFilter('rope')}>
                         <div className="wz-label list-label">Ropes</div>
                       </div>
                     </div>
                     <hr/>
                     <WzGrid items={this.filterGyms(this.props.gyms, this.state.gymFilter)} route={this.props.route} selector={'gym'} update={this.update} list/>
                </div>)
            }, {
                name: 'color',
                content: (
                    <WzGrid items={this.props.team.colors} route={this.props.route} selector={'color'} update={this.update}/>
                )
            }, {
                name: 'grade',
                content: (
                    <WzGrid items={this.props.team.grades} route={this.props.route} selector={'grade'} update={this.update}/>
                )
            }, {
                name: 'location',
                content: (
                    <WzGrid items={this.props.route.gym && this.props.route.gym.walls[this.state.gymFilter] || []} route={this.props.route} selector={'location'} update={this.update} list/>
                )
            }, {
                name: 'tags',
                content: (
                    <WzGrid items={this.props.team.tags} route={this.props.route} selector={'tags'} update={this.updateTags} list/>
                )
            }, {
                name: 'review',
                end: true,
                review: true,
                content: (
                    <WzPreview route={this.props.route}/>
                )
            }
        ]
    }
}

RtWizard.propTypes = {
    route: PropTypes.object,
    gyms: PropTypes.array,
    update: PropTypes.func,
    team: PropTypes.object
}

export default RtWizard