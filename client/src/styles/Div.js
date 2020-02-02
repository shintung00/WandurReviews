import styled from 'styled-components';

const Div = styled.div`
  /* margin & padding */
  ${(props) => (props.margin_left ? `margin-left: ${props.margin_left}px;` : null)};
  ${(props) => (props.margin_top ? `margin-top: ${props.margin_top}px;` : null)}
  ${(props) => (props.margin_bottom ? `margin-bottom: ${props.margin_bottom}px;` : null)};

  /* height & weith */
  ${(props) => (props.height ? `height: ${props.height}px;` : null)};
  ${(props) => (props.width ? `width: ${props.width}px;` : null)};

  /* other */
  ${(props) => (props.display ? `display: ${props.display};` : null)};
  ${(props) => (props.position ? `position: ${props.position};` : null)};
  ${(props) => (props.align_items ? `align-items: ${props.align_items};` : null)};
  ${(props) => (props.justify_content ? `justify-content: ${props.justify_content};` : null)};
`;

export default Div;
