import styled from 'styled-components';

const Div = styled.div`
  /* margin & padding */
  ${(props) => (props.margin_left ? `margin-left: ${props.margin_left}px;` : null)};
  ${(props) => (props.margin_top ? `margin-top: ${props.margin_top}px;` : null)}
  ${(props) => (props.margin_bottom ? `margin-bottom: ${props.margin_bottom}px;` : null)};

  /* height & weith */
  ${(props) => (props.height ? `height: ${props.height};` : null)};
  ${(props) => (props.width ? `width: ${props.width};` : null)};

  /* other */
  ${(props) => (props.display ? `display: ${props.display};` : null)};
  ${(props) => (props.position ? `position: ${props.position};` : null)};
  ${(props) => (props.align_items ? `align-items: ${props.align_items};` : null)};
  ${(props) => (props.justify_content ? `justify-content: ${props.justify_content};` : null)};
  ${(props) => (props.user_select ? `user-select: ${props.user_select};` : null)};
  ${(props) => (props.transform ? `transform: ${props.transform};` : null)};
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : null)};
  ${(props) => (props.vertical_align ? `vertical-align: ${props.vertical_align};` : null)};
  ${(props) => (props.float ? `float: ${props.float};` : null)};
`;

export default Div;
