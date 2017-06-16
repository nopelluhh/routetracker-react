import React, {Component} from 'react'
import cx from 'classnames'


class Login extends Component {
	render = () => (
		<div className={cx('login-overlay', {'open': this.props.isOpen})}>
			<div className={cx('login', {'open': this.props.isOpen})} >
				<form action="api/login/" method="POST">
				<h2>LOGIN</h2>
				<input type="text" name="username" placeholder="username"/>
				<input type="password" name="password" placeholder="password"/>
				<div className="flex space-between">
					<input type="button" value="Cancel" onClick={this.props.toggle}/>
					<input type="submit"/>
				</div>
				</form>
			</div>
		</div>
    )
}

export default Login