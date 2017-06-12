import React from 'react'
import cx from 'classnames'


const Login = (props) => (
    <div className={cx('login', {'open': props.isOpen})} >
        <form action="api/login/" method="POST">
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <input type="submit"/>
        </form>
    </div>
)

export default Login