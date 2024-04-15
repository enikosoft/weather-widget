import styled from 'styled-components';

export const Loader = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #241e20;
  width: 100%;
  z-index: 9999;
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -55px;
    width: 110px;
    height: 110px;

    svg {
      width: 110px;
      height: 110px;

      path {
        stroke: #9ea1a4;
        stroke-width: 0.25;
        fill: #241e20;
      }
    }

    #sun {
      position: absolute;
      top: 10px;
      left: 45px;
      opacity: 1;
      z-index: 1;
      animation-duration: 5000ms;
      animation-timing-function: linear;
      animation-iteration-count: infinite;

      animation-name: rotate;
      width: 65px;
      height: 65px;
    }

    #sun path {
      stroke-width: 0.18;
      fill: #939363;
    }

    #cloud {
      position: relative;
      z-index: 2;
    }

    .rain {
      position: absolute;
      margin-top: -32px;
      margin-left: 19px;
      width: 70px;
      height: 70px;

      .drop {
        display: block;
        float: left;
        opacity: 1;
        animation: drop 500ms infinite;
        margin-left: 4px;
        border-radius: 0px 0px 6px 6px;
        background: #66797f;
        width: 3px;
        height: 10px;
      }

      .drop:nth-child(1) {
        animation-delay: -900ms;
      }

      .drop:nth-child(2) {
        animation-delay: -1130ms;
      }

      .drop:nth-child(3) {
        animation-delay: -240ms;
      }

      .drop:nth-child(4) {
        animation-delay: -130ms;
      }

      .drop:nth-child(5) {
        animation-delay: -640ms;
      }

      .drop:nth-child(6) {
        animation-delay: -390ms;
      }

      .drop:nth-child(7) {
        animation-delay: -1300ms;
      }

      .drop:nth-child(8) {
        animation-delay: -105ms;
      }

      .drop:nth-child(9) {
        animation-delay: -790ms;
      }

      .drop:nth-child(10) {
        animation-delay: -525ms;
      }
    }
    .text {
      margin-top: 20px;
      margin-left: -43px;
      width: 200px;
      color: #a0a0a0;
      font-weight: bold;
      font-size: 12px;
      font-family: Helvetica, 'Helvetica Neue', sans-serif;
      letter-spacing: 1px;
      text-align: center;
    }
    @keyframes rotate {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }

    @keyframes drop {
      50% {
        opacity: 0;
        height: 45px;
      }

      51% {
        opacity: 0;
      }

      100% {
        opacity: 0;
        height: 1px;
      }
    }
  }
`;
