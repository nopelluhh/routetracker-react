import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { RtForm } from 'components/common'

import fetcher from 'services/fetcher'
import pi, { sleep } from 'rtutil'

class BasicInfo extends Component {
    state = {  }

    static propTypes = {
        user: PropTypes.object
    }

    render() {
        return (
            <RtForm
                    fields={ this.fields() }
                    values={ this.props.user }
                    editable={ true }
                    onSave={ this.onSave }
                    pending={ this.state.pending } />
        )
    }

    onSave = (data) => {
        this.setState({
            pending: true
        })

        this.values = pi.expandSimpleObject(data)

        return fetcher.update('users/current', data)
            .then(sleep(1000))
            .then(() => {
                this.setState({
                    pending: false
                })
                return data
            })


    }

    fields = () => [
        [
            'General',
            {
                label: 'Username',
                name: 'username',
                type: 'text',
                validate: this.validateEmpty
            },
            {
                label: 'E-mail',
                name: 'email',
                type: 'email',
                validate: this.validateEmail
            }],
        [
            'Setting',
            {
                label: 'Nickname',
                name: 'nickname',
                type: 'text',
                validate: this.validateEmpty
            }]
    ]

    validateEmpty = (value) => value.length > 0

    validateEmail = (value) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)

}

export default BasicInfo

