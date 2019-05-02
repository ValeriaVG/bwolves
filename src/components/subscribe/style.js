import { css } from "emotion";

export default css`
  background: #111111;
  color: white;
  padding: 32px 16px;
  .wrapper {
    display: flex;
    margin: 0 auto;
    max-width: 500px;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-right: 16px;
    h2 {
      margin: 0 16px 8px 0;
      font-weight: 400;
      font-size: 16px;
    }

    input {
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.16);
      font-size: 14px;
      padding: 8px;
      height: 32px;
      background: transparent;
      color: white;
      &:focus {
        border-bottom-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  .submit {
    margin-top: auto;
    input.button {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 4px;
      font-size: 14px;
      padding: 0 32px;
      height: 32px;
      line-height: 32px;
      font-weight: 400;
      cursor: pointer;
      text-transform: uppercase;
      color: white;
      transition: border-color 300ms ease, background-color 300ms ease;

      &:hover,
      &:focus,
      &:active {
        border-color: rgba(255, 255, 255, 1);
        background: rgba(255, 255, 255, 0.08);
        transition: border-color 300ms ease, background-color 300ms ease;
      }
    }
  }
`;
