import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  // let iframe = useRef("iframe")
  var iframe = document.getElementById('iframe');
  //   var iwindow = iframe.contentWindow;
  //  var idoc = iwindow.document;

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button>click it</button>
      <p>Start editing to see some magic happen :)</p>
      {/* <iframe
      id="iframe"
        refs="iframe"
        src="//player.bilibili.com/player.html?bvid=BV1jh411s7hJ"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        width="400px"
        height="300px"
        allowfullscreen="true"
      ></iframe> */}
    </div>
  );
}
