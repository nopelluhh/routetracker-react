import React, { Component } from 'react'
import Block from './Block'
import HeaderText from './HeaderText'

const Content = (props) => (
    <div className="block__content">
        {props.children}
    </div>)


class Contact extends Component {

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
             <HeaderText ref={(el) => this.header = el} style={headerStyle}/>
                <Content>
                    <form method="POST" className="contact__form">
                    <h3 className="text-center"> CONTACT US </h3>
                        <div className="flex space-between">
                            <input type="text" name="name" placeholder="name" className="text-center"/>
                            <input type="email" name="email" placeholder="email" className="text-center"/>
                        </div>
                        <textarea name="body" placeholder="ask us anything!" style={{width: '100%', height: '30vh'}}/>
                        <div className="flex space-around" style={{width: '40%', margin: 'auto'}}>
                            <input type="button" value="Clear" />
                            <input type="submit" />
                        </div>
                    </form>
                </Content>
            </Block>
        )
    }
}

export default Contact