import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
    state = {  }

    static defaultProps = {
        fields: []
    }

    static propTypes = {
        fields: PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.array,
                PropTypes.shape({
                    name: PropTypes.string,
                    type: PropTypes.string,
                    onBlur: PropTypes.func,
                    onClick: PropTypes.func
                })
            ]
            )).isRequired,
        values: PropTypes.object
    }

    render() {
        return (
            <form className="form-horizontal">
              { this.makeForm(this.props.fields, this.props.values) }
            </form>
        )
    }

    makeForm(fields, values) {
        return fields.map((field, i) => {
            if (field instanceof Array) {
                return (<div key={ i }  style={{padding: '30px 0 0'}}>
                          <h5>{ field[0] }</h5>
                          <div>
                            { this.makeForm(field.slice(1), values) }
                          </div>
                        </div>)
            } else {
                return  (
                    <div className="form-group" key={ field.label }>
                        <label className="control-label col-md-2">{field.label}</label>
                        <div className="col-md-10">
                            {this.props.edit? (
                                <input {...field} className="form-control" defaultValue={ values[field.name] || field.label } />
                            ) : (
                                <p className="form-control-static text-left">{ values[field.name] || field.label }</p>
                            )}
                        
                        </div>
                    </div>
                )
            }
        })
    }
}

export default Form