import React from "react";
import styled from "styled-components";

class App extends React.Component {
    state = {
        query : ""
    };

    render() {
        return (
            <Container query={this.state.query}>
            <Input
                placeholder="테마를 입력하세요."
                onKeyPress={this.handleInputKeyPress}
            >
            </Input>
        </Container>
        );
    }

    handleInputKeyPress = event => {
        if(event.key === "Enter"){
            this.setState({
               query: event.target.value
            });
            event.target.value= "";
        }
    };
}


const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
             linear-gradient(to right, rgba(20,20,20,0.1) 10%, rgba(20,20,20,0.7) 70%, rgba(20,20,20,1)), 
             url(https://source.unsplash.com/random/1280x720?${props => props.query});
  background-size: cover;
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 30px;
    background: transparent;
    outline: none;
    border: none;
    color: white;
`;
export default App;