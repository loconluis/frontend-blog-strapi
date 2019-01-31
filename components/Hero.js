import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="container hero-section has-text-centered is-vcentered">
          <div className="columns">
            <div className="column is-full">
              <h2 className="subtitle has-text-white is-title-hero__center">
                Hi! 👋🏼 my name is Luis Locon
              </h2>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
