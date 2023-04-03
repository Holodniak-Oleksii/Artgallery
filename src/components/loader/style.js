export default `


#loader {
    position: fixed;
    top:  0;
    left: 0;
    width: 100%;
    height: 100%;
    transition:  all 1s ease-in-out;
    z-index: 1000;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}


.spinner {
    width: 56px;
    height: 56px;
    display: grid;
    border: 4.5px solid #0000;
    border-radius: 50%;
    border-color: #dbdcef #0000;
    animation: spinner-e04l1k 1s infinite linear;
  }
  
  .spinner::before,
  .spinner::after {
    content: "";
    grid-area: 1/1;
    margin: 2.2px;
    border: inherit;
    border-radius: 50%;
  }
  
  .spinner::before {
    border-color: #474bff #0000;
    animation: inherit;
    animation-duration: 0.5s;
    animation-direction: reverse;
  }
  
  .spinner::after {
    margin: 8.9px;
  }
  
  @keyframes spinner-e04l1k {
    100% {
      transform: rotate(1turn);
    }
  }

`;
