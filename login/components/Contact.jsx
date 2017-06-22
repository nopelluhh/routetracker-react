import React, { Component } from 'react'
import Block from './Block'
import HeaderText from './HeaderText'
import fetcher from '../services/fetcher'

const Content = props => (
	<div className="block__content">
        {props.children}
    </div>)


class Contact extends Component {
	state = {
		content: '',
		email: '',
		name: ''
	}

	sendEmail = event => {
		event.preventDefault()
		fetcher.create('notifications', this.state)
		.then(() => {
			this.setState({content: 'thanks for your message!'})
		})
		.catch(() => {
			this.setState({content: 'woe is you!'})
		})

	}

	clearForm = () => {
		event.preventDefault()
		this.setState({
			email: '',
			content: '',
			name: ''
		})
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		const pinned = this.props.scroll < 0
		const offset = -this.props.top + 30

		const headerStyle = {
			top: pinned ? '5vh' : offset + 'px',
			position: pinned ? 'fixed' : 'relative',
			transform: 'none',
			zIndex: 300
		}

		return (
			<Block className="contact" style={{ overflow: 'hidden' }}>
                <HeaderText ref={el => this.header = el} style={headerStyle} />
                <Content>
                    <form className="contact__form">
                        <h3 className="text-center">CONTACT US</h3>
                        <div className="flex space-between">
                            <input
								type="text"
								name="name"
								placeholder="name"
								className="text-center"
								value={this.state.name}
								onChange={this.handleChange} />
                            <input
								type="email"
								name="email"
								placeholder="email"
								className="text-center"
								value={this.state.email}
								onChange={this.handleChange} />
                        </div>
                        <textarea
							name="content"
							placeholder="ask us anything!"
							style={{ width: '100%', height: '30vh' }}
							value={this.state.content}
							onChange={this.handleChange} />
                        <div className="flex space-around" style={{ width: '40%', margin: 'auto' }}>
                            <input type="button" value="Clear" onClick={this.clearForm}/>
                            <input type="button" value="Submit" onClick={this.sendEmail}/>
                        </div>
                    </form>
                </Content>
            </Block>
		)
	}
}

export default Contact