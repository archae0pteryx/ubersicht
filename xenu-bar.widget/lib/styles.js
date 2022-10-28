// the CSS style for this widget, written using Emotion
// https://emotion.sh/

import { styled } from 'uebersicht'

export const Container = ''

export const Icon = styled('img')(() => ({
  height: '40px',
  width: '40px',
}))

export const className = `
    top: 2rem;
    right: 0;
    left: 0;
    width: 97%;
    box-sizing: border-box;
    margin: auto;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(0.5rem);
    color: white;
    font-family: FiraCode NF;
    border-radius: 0.5rem;

    .container {
        display: flex;
    }

    .output {
      color: white;
      font-size: 18px;
    }
`

