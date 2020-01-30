import styled from 'styled-components';

const UserInfo1 = styled.div`
  -webkit-box-pack: justify !important;
  display: flex !important;
  justify-content: space-between !important;
`;

const UserInfo2 = styled.div`
  display: flex !important;
`;

const UserInfo3 = styled.div`
  height: 48px;
  width: 48px;
  display: block;
  position: relative !important;
`;

const UserPhoto = styled.img`
  height: 48px;
  width: 48px;
  vertical-align: middle !important;
  display: block !important;
  border-radius: 50% !important;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: rgb(255, 255, 255) !important;
  overflow: hidden !important;
  background-color: #D8D8D8 !important;
`;

const Margin1 = styled.div`
  margin-left: 16px;
`;

const Name = styled.div`
  word-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Date = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 1.28571em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Margin2 = styled.div`
  margin-top: 16px;
`;

const Comment = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.375em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Margin3 = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const Breakline = styled.div`
  border-bottom-width: var(--border-rule-border-width, 1px) !important;
  border-bottom-color: var(--color-divider, #EBEBEB) !important; 
  border-bottom-style: solid !important; 
`;

export {
  UserInfo1, UserInfo2, UserInfo3, UserPhoto, Margin1,
  Name, Date, Margin2, Comment, Margin3, Breakline 
};
