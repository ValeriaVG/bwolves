import { css } from 'emotion'
export default css`
  display: flex;
  flex-direction: row;
  padding: 16px;
  .logo {
    display: flex;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.9);
    img {
      width: 32px;
    }
    .title {
      display: flex;
      flex-direction: column;
      margin-left: 8px;
      .name {
        font-size: 18px;
        font-weight: bold;
        display: block;
        line-height: 18px;
      }
      .slogan {
        font-size: 12px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`
