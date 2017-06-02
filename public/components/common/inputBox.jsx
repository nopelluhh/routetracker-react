import React from 'react'
import PropTypes from 'prop-types'


class InputBox extends React.Component {
    state = {
        valid: true
    }

    static propTypes = {
        updateForm: PropTypes.func
    }

    handleChange = (e) => {
        if (this.props.field.validate) {
            let valid = this.props.field.validate(e.target.value)
            this.setState({
                valid
            })
        }
    }

    onBlur = (e) => {
        const data = {
            value: e.target.value,
            field: this.props.field
        }
        this.props.updateForm(data)
    }

    render() {
        let {field, values} = this.props

        return (
            <div className={ this.state.valid ? 'form-group row' : 'form-group row has-warning' } key={ field.label }>
              <label className="form-control-label col-md-2 col-form-label">
                { field.label }
              </label>
              <div className="col-md-10">
                { this.props.edit ? (
                  <input
                         type={ field.type }
                         name={ field.name }
                         onBlur={ this.onBlur }
                         onChange={ this.handleChange }
                         className="form-control"
                         defaultValue={ values[field.name] || field.label } />
                  ) : (
                  <p className="form-control-static text-left">
                    { values[field.name] || field.label }
                  </p>
                  ) }
              </div>
            </div>)
    }
}

InputBox.propTypes = {
    field: PropTypes.object,
    values: PropTypes.object,
    edit: PropTypes.bool
}




export default InputBox