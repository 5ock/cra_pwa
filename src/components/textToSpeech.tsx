// import React from 'react';

// function speak(text: string, lang: string = 'zh-TW') {
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.lang = lang;
//   window.speechSynthesis.speak(utterance);
// }

// function App() {
//   const handleSpeak = () => {
//     speak('你好世界，這是一個演示語音合成的範例。');
//   }

//   return (
//     <div>
//       <button onClick={handleSpeak}>Speak</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import { useTts } from 'tts-react'
import type { TTSHookProps } from 'tts-react'

interface CustomProps extends TTSHookProps {
  highlight?: boolean
}

const CustomTTSComponent = ({ children, highlight = false }: CustomProps) => {
  const { ttsChildren, state, play, stop, pause } = useTts({
    children,
    markTextAsSpoken: highlight,
    lang: 'zh-CN'
  })

  return (
    <div>
      <>
        <button disabled={state.isPlaying} onClick={play}>Play</button>
        <button disabled={!state.isPlaying} onClick={pause}>Pause</button>
        <button onClick={stop}>Stop</button>
      </>
      {/* {ttsChildren} */}
    </div>
  )
}

const App = () => {
  const [ text, setText ] = useState<string>('')
  return (
    <>
    {/* <input onChange={(e:any) => setText(e.target.value)}></input> */}
    <CustomTTSComponent highlight>
      <p>你好世界，這是一個演示語音合成的範例。</p>
      {/* {text} */}
    </CustomTTSComponent>
    </>
  )
}

export default App