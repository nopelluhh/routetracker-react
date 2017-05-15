import React, { Component } from 'react'

import LoadContainer from 'components/common/loadContainer'
import LoadBar from 'components/common/loadBar'
import RtCard from 'components/common/rtCard'
import RtForm from 'components/common/form'

import fetcher from 'services/fetcher'


class Account extends Component {
    state = {
        loaded: false
    }

    fields = () => [
        ['General',
            {
                label: 'Username',
                name: 'username',
                type: 'text',
                onBlur: this.fieldHandler('username')
            },

            {
                label: 'E-mail',
                name: 'email',
                type: 'email',
                onBlur: this.fieldHandler('email')
            }],
        ['Setting', {
            label: 'Nickname',
            name: 'nick',
            type: 'text',
            onBlur: this.fieldHandler('nick')
        }]
    ]

    values = {
        username: 'nopelluhh',
        email: 'napeller@gmail.com',
        nick: 'NP'
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 1000)
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    saveEdit = () => {
        this.setState({fetching: true})

        fetcher.update('')

        setTimeout(() => {
            this.setState({
                fetching: false
            })

            this.setState({
                edit: !this.state.edit
            })
        }, 5000)

    }

    fieldHandler = (field) => {
        return (e) => {
            this.values[field] = e.target.value
        }
    }

    render() {
        return (
            <LoadContainer loaded={ this.state.loaded }>
              <LoadBar/>
              <RtCard title="Your Account">
                { this.state.edit ? (<span><a onClick={ this.toggleEdit }>Cancel</a> | <a onClick={ this.saveEdit }>Save</a></span>) : (<a onClick={ this.toggleEdit }>Edit</a>) }
                {this.state.fetching? <div><LoadBar inline/></div> : null}
                <RtForm fields={ this.fields() } values={ this.values } edit={ this.state.edit } />
              </RtCard>
            </LoadContainer>
        )
    }
}

export default Account