import React, { Component } from 'react'
import PT from 'prop-types'
import cx from 'classnames'
import { InputBox, FlexRow, LoadBar } from 'components/common'

import { renderIf } from 'rtutil'



class RtForm extends Component {
    state = {
        valid: new Set()
    }

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
            <form className="form-horizontal" style={ { opacity: this.props.pending ? 0.5 : 1, transition: 'opacity 0.3s linear', position: 'relative' } }>
              <div className="form-group">
                <FlexRow inline>
                  { renderIf(this.props.editable && !this.state.edit)(
                        <button className="btn btn-outline-primary" onClick={ this.toggleEdit }>
                          Edit
                        </button>
                    ) }
                  { renderIf(this.props.editable && this.state.edit)(
                        <button className="btn btn-outline-secondary" onClick={ this.toggleEdit }>
                          Cancel
                        </button>
                    ) }
                  { renderIf(this.state.edit)(
                        <button disabled={!!this.state.valid.size} className={cx('btn', !this.state.valid.size? 'btn-outline-primary':'disabled', {'btn-outline-pending': this.props.pending})} onClick={ this.save }>
                          Save
                        </button>
                    ) }
                </FlexRow>
              </div>
              { this.makeForm() }
              </form>
        )
    }

    toggleEdit = (e) => {
        e.preventDefault()
        const data = Object.assign({}, this.state.edit ? this.props.values : this.state.data)
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

    makeForm = (fields) => {
        fields = fields || this.props.fields
        return fields.map((field, i) => {
            if (field instanceof Array) {
                return (<div key={ i } style={ { padding: '30px 0 0' } }>
                          <h5>{ field[0] }</h5>
                          <div>
                            { this.makeForm(field.slice(1), this.state.data, this.state.edit) }
                          </div>
                        </div>)
            } else {
                return (
                    <InputBox
                              key={ field.name }
                              field={ field }
                              values={ this.state.data }
                              edit={ this.state.edit }
                              updateForm={ this.updateForm } />
                )
            }
        })
    }

    updateForm = (update) => {
        this.setState((state) => {
            let modifier = {}
            modifier.valid = new Set(state.valid)
            
            modifier.data = Object.assign(state.data, 
                {
                    [update.field.name]: update.value
                }, )

            if(!update.valid) {
                modifier.valid.add(update.field.name)
            } else {
                modifier.valid.delete(update.field.name)
            }

            return modifier
        })
    }
}

export default RtForm