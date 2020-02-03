/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Page = styled.div`
  width: 32px !important;
  height: 32px !important;
  line-height: 32px !important;
  text-align: center !important;
  border-radius: 16px !important;
  ${(props) => (props.background_color ? `background-color: ${props.background_color};` : null)};
  ${(props) => (props.color ? `color: ${props.color};` : null)};
`;

const Button = styled.button`
  ${(props) => (props.color ? `color: ${props.color};` : null)};
  display: inline-block !important;
  background-color: transparent !important;
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  border-image: initial !important;
  outline: none !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 14px;
  text-decoration: none !important;
  cursor: pointer;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: center;
  align-items: flex-start;
  margin: 0em;
  padding: 1px 7px 2px;
`;

const List = styled.li`
  display: inline-block !important;
  vertical-align: middle !important;
  line-height: 10px !important;
  ${(props) => (props.margin_right ? `margin-right: ${props.margin_right}px;` : null)};
  ${(props) => (props.margin_left ? `margin-left: ${props.margin_left}px;` : null)};
`;

// page style for previous and next button
const Page2 = styled.div`
  align-items: center !important;
  background-color: transparent !important;
  box-shadow: rgb(0, 132, 137) 0px 0px 0px 1px inset !important;
  color: rgb(0, 132, 137) !important;
  display: flex !important;
  height: 32px !important;
  justify-content: center !important;
  width: 32px !important;
  border-radius: 50% !important;
`;

const Svg = styled.svg`
  height: 0.75em;
  width: 0.75em;
  display: block;
  fill: currentcolor;
`;

// Previous path image
const Path1 = styled.path`
  d: path("m 13.7 16.29 a 1 1 0 1 1 -1.42 1.41 l -8 -8 a 1 1 0 0 1 0 -1.41 l 8 -8 a 1 1 0 1 1 1.42 1.41 l -7.29 7.29 Z");
  fill-rule: evenodd;
`;

// Next path image
const Path2 = styled.path`
  d: path("m 4.29 1.71 a 1 1 0 1 1 1.42 -1.41 l 8 8 a 1 1 0 0 1 0 1.41 l -8 8 a 1 1 0 1 1 -1.42 -1.41 l 7.29 -7.29 Z");
  fill-rule: evenodd;
`;

const Period = styled.div`
  overflow-wrap: break-word !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 1.375em !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
`;

export { Page, Button, List, Page2, Svg, Path1, Path2, Period };
