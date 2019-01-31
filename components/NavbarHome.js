import React, { Component } from 'react'
import Head from 'next/head'

export default class NavbarHome extends Component {
  state = {
    emojiArr: []
  }

  componentDidMount = () => {
    this.setState(() => ({ emojiArr: ['🤯', '🤩', '😎', '🤓', '😝', '😴'] }))
  }

  render() {
    return (
      <div className="container">
        <nav className="level nav-padding nav__height">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title is-1">
                <span>{this.state.emojiArr[Math.floor(Math.random() * ((this.state.emojiArr.length-1) - 0 + 1)) + 0]}</span>
              </h1>
            </div>
          </div>
          {/** Bar of the social media*/}
          <div className="level-right social-icon is-mobile">
            <p className="level-item blog--anchor"><a className="link-blog"><strong>Blog</strong></a></p>
            <p className="level-item"><a href="https://www.instagram.com/loconluis/" target="_blank"><i className="fab fa-instagram"/></a></p>
            <p className="level-item"><a href="https://twitter.com/LoconLuis" target="_blank"><i className="fab fa-twitter"/></a></p>
            <p className="level-item"><a href="https://github.com/loconluis" target="_blank"><i className="fab fa-github-alt"/></a></p>
            <p className="level-item"><a href="https://www.linkedin.com/in/loconluis/" target="_blank"><i className="fab fa-linkedin-in"/></a></p>
            <p className="level-item"><a href="https://codesandbox.io/u/loconluis" target="_blank"><i className="fab fa-codepen" /></a></p>
            <p className="level-item"><a href="" target="_blank">CV</a></p>
          </div>
        </nav>
      </div>
    )
  }
}
