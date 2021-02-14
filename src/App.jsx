import React, { Component, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { isMobile, isBrowser } from "react-device-detect";

import Video from "../public/starrynight.mp4";
import Icon from "../public/app-icon.png";
import "./app.css";

function MobileBackground() {
  if (isMobile) {
    return <div className="image-bg"></div>;
  } else {
    return null
  }
}

function DesktopBackground() {
  const playBack = useRef(null);
  useEffect(() => {
    if (playBack.current) {
      playBack.current.playbackRate = 0.75;
    }
  });
  if (isBrowser) {
    return (
      <video
        id="vid"
        autostart="true"
        autoPlay={true}
        muted
        loop
        ref={playBack}
        src={Video}
        type="video/mp4"
      />
    );
  } else {
    return null
  }
}

const App = () => {

  return (
    <div className="App">
      <Helmet>
        <title>Starbox - Install Tweaked Apps for free!</title>
        <meta
          name="description"
          content="starbox - tweaked and hacked apps no jailbreak. Get free tweaked apps on iOS. Free Hacks "
        />
        <meta
          name="keywords"
          content="starb, starbo, starbox, starboxapp, unc0ver, ipogo, Snapchat hack, spotify free, spotify premium free, pokemon hack, spotify++, tweaked apps, tweaked games, hacked, hacked games, hacked apps, tweaked, ipa, ipas, appvalley, appv, app-valley, ios, iOS, tweak, Jailbreak, Sideload, Sideloaded, themes, paid, free, no jailbreak, jailed, iphone, idevice, ipad, emulators, hack, no pc, without pc, emulator, cracked apps, ios tweaks no jailbreak, tweaks without jailbreak, pandahelper, tweakbox, tutubox, cokernutx, ipod touch, install cracked apps, install tweaked apps, install hacked apps, install hacked games, install tweaked games"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.png" />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <DesktopBackground />
      <MobileBackground />
      <div className="content">
        <h1>Starbox</h1>
        <p>Apple's least favorite AppStore.</p>
        <a
          href="https://twitter.com/starbox_app?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @starbox_app
        </a>
        <div className="icon-wrapper">
          <img className="app-icon" src={Icon} alt="" />
        </div>
        <a
          className="center-mid"
          href="https://storage.starbox.app/Star_Box.mobileconfig"
        >
          <span className="badge">Install</span>
        </a>
        <footer>© {new Date().getFullYear()} starbox</footer>
      </div>
    </div>
  );
};

export default App;
