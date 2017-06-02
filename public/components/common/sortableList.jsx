import React, { Component } from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { renderIf } from 'rtutil'


class SortableList extends Component {
    state = {
        items: []
    }

    static propTypes = {
        className: PropTypes.string,
        component: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired,
        options: PropTypes.array,
        comparator: PropTypes.func
    }

    componentDidMount() {
        this.ListItem = this.props.component
        this.comparator = this.props.comparator || ((a, b) => a === b)

        this.setState({
            current: this.props.list
        })

        if (this.props.options) {
            const options = R.differenceWith(this.comparator, this.props.options, this.props.list)
            this.setState({
                options
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            current: nextProps.list
        })
        if (nextProps.options && this.state.current || nextProps.list) {
            const options = R.differenceWith(this.comparator, nextProps.options, nextProps.list)
            this.setState({
                options
            })
        }
    }

    render() {
        if (!this.state.current) return null
        return (
            <div className='row'>
                <div className="col">
              <ul className={ this.props.className } style={ { fontSize: '1.5em' } }>
                { this.state.current.map((item, ind, arr) => <this.ListItem data-source="list" key={ item.key || ind } {...item} {...this.makeOptions(ind, arr, 'list')}/>) }
              </ul>
              </div>
              { this.state.options? (
                  <div className="col">
                    <ul className={ this.props.className } style={ { fontSize: '1.5em' } }>
                      { this.state.options.map((item, ind, arr) => <this.ListItem data-source="options" key={ item.key || ind } {...item} {...this.makeOptions(ind, arr, 'options')}/>
                        ) }
                    </ul>
                    </div>) : null}
            </div>
        )
    }

    makeOptions = (ind, arr, source) => {
        return {
            draggable: true,
            onDragStart: (e) => {
                e.dataTransfer.setData('ind', ind)
                e.dataTransfer.setData('source', source)
                e.dataTransfer.effectAllowed = 'move'
            },
            onDragOver: (e) => {
                e.preventDefault()
            },
            onDrop: (e) => {
                let source = e.dataTransfer.getData('source')
                let dest = e.currentTarget.dataset.source

                if(source === dest) return 

                let oldInd = +e.dataTransfer.getData('ind')
                let newInd = ind

                let lists = {
                    list: [...this.state.current],
                    options: [...this.state.options]
                }

                if (newInd == arr.length - 1) {
                    newInd = arr.length
                }
                let newEl = lists[source].splice(oldInd, 1)[0]
                lists[dest].splice(newInd, 0, newEl)

                this.setState({
                    current: lists.list,
                    options: lists.options
                })
            }
        }
    }
}

function comparator(a, b) {
    return a.key === b.key
}

export default SortableList