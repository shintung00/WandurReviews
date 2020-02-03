import styled from 'styled-components';

const UserPhoto = styled.img`
  vertical-align: middle !important;
  display: block !important;
  border-radius: 50% !important;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: rgb(255, 255, 255) !important;
  overflow: hidden !important;
  background-color: #D8D8D8 !important;
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

const Comment = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.375em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

const Breakline = styled.div`
  border-bottom-width: var(--border-rule-border-width, 1px) !important;
  border-bottom-color: var(--color-divider, #EBEBEB) !important; 
  border-bottom-style: solid !important; 
`;

export {
  UserPhoto, Name, Date, Comment, Breakline 
};
