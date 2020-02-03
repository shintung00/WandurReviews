/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const Input = styled.input`
  background-color: transparent !important;
  font-size: var(--font-form-element-small-font-size, 14px) !important;
  line-height: var(--font-form-element-small-line-height, 22px) !important;
  letter-spacing: var(--font-form-element-small-letter-spacing, normal) !important;
  font-family: var(--font-form-element-small-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  text-transform: var(--font-form-element-small-text-transform, undefined) !important;
  color: #484848 !important;
  padding-top: var(--spacing-form-element-small-vertical, 6px) !important;
  padding-bottom: var(--spacing-form-element-small-vertical, 6px) !important;
  font-weight: var(--font-book-font-weight, 600) !important;
  padding-left: var(--spacing-form-element-small-horizontal, 7px) !important;
  padding-right: var(--spacing-form-element-small-horizontal, 7px) !important;
  width: 100% !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 0px !important;
`;

// search image
const Path = styled.path`
  d: path("m 10.4 18.2 c -4.2 -0.6 -7.2 -4.5 -6.6 -8.8 c 0.6 -4.2 4.5 -7.2 8.8 -6.6 c 4.2 0.6 7.2 4.5 6.6 8.8 c -0.6 4.2 -4.6 7.2 -8.8 6.6 m 12.6 3.8 l -5 -5 c 1.4 -1.4 2.3 -3.1 2.6 -5.2 c 0.7 -5.1 -2.8 -9.7 -7.8 -10.5 c -5 -0.7 -9.7 2.8 -10.5 7.9 c -0.7 5.1 2.8 9.7 7.8 10.5 c 2.5 0.4 4.9 -0.3 6.7 -1.7 v 0.1 l 5 5 c 0.3 0.3 0.8 0.3 1.1 0 s 0.4 -0.8 0.1 -1.1");
  fill-rule: evenodd;
`;

// svg
const Svg = styled.svg`
  height: 1em;
  width: 1em;
  display: block;
  fill: currentcolor;
`;

// button
const Button = styled.button`
  background: none;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
`;

// container
const Container = styled.div`
  font-size: var(--font-form-element-small-font-size, 14px) !important;
  line-height: var(--font-form-element-small-line-height, 22px) !important;
  letter-spacing: var(--font-form-element-small-letter-spacing, normal) !important;
  font-family: var(--font-form-element-small-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  text-transform: var(--font-form-element-small-text-transform, undefined) !important;
  color: #484848 !important;
  padding-top: var(--font-form-element-small-padding-top, undefined) !important;
  padding-bottom: var(--font-form-element-small-padding-bottom, undefined) !important;
  padding-right: var(--spacing-form-element-small-decorator, 7px) !important;
  visibility: visible;
  height: 34px;
`;

// searchbar
const Searchbar = styled.div`
  background-color: #ffffff !important;
  margin-bottom: var(--unit, 8px) !important;
  font-size: var(--font-form-element-small-font-size, 14px) !important;
  line-height: var(--font-form-element-small-line-height, 22px) !important;
  letter-spacing: var(--font-form-element-small-letter-spacing, normal) !important;
  font-family: var(--font-form-element-small-font-family, Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif) !important;
  text-transform: var(--font-form-element-small-text-transform, undefined) !important;
  color: #484848 !important;
  padding-top: var(--font-form-element-small-padding-top, undefined) !important;
  padding-bottom: var(--font-form-element-small-padding-bottom, undefined) !important;
  position: relative !important;
  z-index: 0 !important;
  display: block !important;
  width: 100% !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(235, 235, 235) !important;
  border-radius: 4px !important;
`;

const Container2 = styled.div`
  
  padding-left: 8px !important;
  padding-right: 8px !important;
  min-height: 1px !important;
  position: relative !important;
`;

const Container3 = styled.div`
  margin-left: -8px !important;
  margin-right: -8px !important;
`;

export { Input, Path, Svg, Button, Container, Searchbar, Container2, Container3 };
