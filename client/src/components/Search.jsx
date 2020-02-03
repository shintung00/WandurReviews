/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/extensions */
import React from 'react';
import { Input, Path, Svg, Button, Container, Searchbar, Container2, Container3 } from '../styles/Search.js';
import Div from '../styles/Div.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        
          <Container2>
            <Div display="block !important" width="100%">
              <Searchbar>
                {/* search icon */}
                <Div float="right !important">
                  <Container>
                    <Div display="table !important" position="relative !important" height="100% !important">
                      <Div display="flex !important" vertical_align="middle !important">
                        <Button type="button">
                          <Svg viewBox="0 0 24 24" role="presentation" aria-hidden={true} focusable={false}>
                            <Path />
                          </Svg>
                        </Button>
                      </Div>
                    </Div>
                  </Container>
                </Div>
                {/* input box */}
                <Div postion="relative !important" overflow="hidden !important">
                  <Input type="text" onChange={this.handleInput} placeholder="Search reviews" value={search} />
                </Div>
              </Searchbar>
            </Div>
          </Container2>
        
      </div>
    );
  }
}

export default Search;
