import React, { Component, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet'

import Video from '../public/starrynight.mp4'
import Icon from '../public/app-icon.png'
import './app.css'


    const App = () => {
    const playBack = useRef(null)
    useEffect(() => {
      // playBack.playbackRate = 0.25
      playBack.current.playbackRate = 0.75
    })
    return (
      
      <div className="App">
        <Helmet>
          <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="icon" href="/favicon.png" />
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </Helmet>
      <video id="vid" autostart="true" playsInline autoPlay={true} muted loop ref={playBack} src={Video} type="video/mp4" />
        <div className="content">
          <h1>Starbox</h1>
          <p>Apple's least favorite AppStore.</p>
          <a href="https://twitter.com/starbox_app?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @starbox_app</a>
          <div className="icon-wrapper">
            <img className="app-icon" src={Icon} alt=""/>
          </div>
          <a className="center-mid" href="https://storage.starbox.app/Star_Box.mobileconfig">
          <span className="badge">Install</span>
          </a>
          <footer>
          © {(new Date()).getFullYear()} starbox
        </footer>
        </div>
      </div>
    )
}

export default App
