import React, { Component } from 'react'
import PT from 'prop-types'
import InputBox from 'components/common/inputBox'
import FlexRow from 'components/common/flexRow'

import { renderIf } from 'rtutil'

class RtForm extends Component {
    state = {  }

    static defaultProps = {
        fields: [],
        values: {}
    }

    static propTypes = {
        fields: PT.arrayOf(
            PT.oneOfType([
                PT.array,
                PT.shape({
                    name: PT.string.isRequired,
                    type: PT.string.isRequired,
                    label: PT.string,
                    onBlur: PT.func,
                    onClick: PT.func,
                    validate: PT.func
                })
            ]
            )).isRequired,
        values: PT.object,
        editable: PT.bool,
        pending: PT.bool,
        onSave: PT.func
    }

    componentWillMount() {
        if (!this.state.data) {
            this.setState({
                data: Object.assign({}, this.props.values)
            })
        }
    }

    render() {
        return (
            <form className="form-horizontal" style={{opacity: this.props.pending? 0.5 : 1, transition: 'opacity 0.3s linear'}}>
              <div className="form-group">
                <FlexRow inline>
                  { renderIf(this.props.editable && !this.state.edit)(
                        <button className="btn btn-default" onClick={ this.toggleEdit }>
                          Edit
                        </button>
                    ) }
                  { renderIf(this.props.editable && this.state.edit)(
                        <button className="btn btn-default" onClick={ this.toggleEdit }>
                          Cancel
                        </button>
                    ) }
                  { renderIf(this.state.edit)(
                        <button className="btn btn-default" onClick={ this.save }>
                          Save
                        </button>
                    ) }
                </FlexRow>
              </div>
              { this.makeForm(this.props.fields, this.state.data, this.state.edit) }
            </form>
        )
    }

    toggleEdit = (e) => {
        e.preventDefault()
        const data = Object.assign({}, this.state.edit? this.props.values : this.state.data)
        this.setState({
            edit: !this.state.edit,
            data
        })
    }

    save = (e) => {
        e.preventDefault()
        let result = this.props.onSave(this.state.data)
        if (result.then) {
            result.then((data) => {
                this.setState({
                    edit: false,
                    data: data
                })
            })
        } else {
            this.setState({
                edit: false,
                data: result
            })
        }
    }

    makeForm(fields, values, edit) {
        return fields.map((field, i) => {
            if (field instanceof Array) {
                return (<div key={ i } style={ { padding: '30px 0 0' } }>
                          <h5>{ field[0] }</h5>
                          <div>
                            { this.makeForm(field.slice(1), values, edit) }
                          </div>
                        </div>)
            } else {
                return (
                    <InputBox
                              key={ field.name }
                              field={ field }
                              values={ values }
                              edit={ edit }
                              updateForm={ this.updateForm } />
                )
            }
        })
    }

    updateForm = (update) => {
        this.setState({
            data: Object.assign(this.state.data, {[update.field.name]: update.value})
        })
    }
}

export default RtForm