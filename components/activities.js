import React, { Component } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const TotalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  font-family: "Raleway";
  font-weight: 900;
  font-size: 70px;
  color: #fff;
  background-color: #000;

  &:before {
    content: "";
    background-image: url("/static/laptop-working.jpg");
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }

  @media only screen and (max-width: 700px) {
    padding-top: 60px;
    font-size: 40px;
  }
`;

const Container = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  opacity: 1;
  z-index: 2;
  @media only screen and (max-width: 700px) {
    height: 65%;
    width: 75%;
  }
`;

const ActivitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  background-color: #fafafa;
  color: #000;
`;

const Title = styled.h1`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 30px;
  margin-left: 40px;
  margin-top: 40px;
`;

const Content = styled.p`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  margin-left: 40px;
  margin-top: 20px;
`;

const RightImage = styled.img`
  margin: 5%;
  max-width: 90%;
  max-height: 90%;
`;

const LeftContainer = styled.div`
  float: left;
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

const RightContainer = styled.div`
  float: right;
  width: 50%;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 50%;
  }
`;

const GeneralMeetings = props => (
  <div>
    <LeftContainer>
      <Title>General Meetings</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

const LeadershipConference = props => (
  <div>
    <LeftContainer>
      <Title>Leadership Conference</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

const CheckIns = props => (
  <div>
    <LeftContainer>
      <Title>Check Ins</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

const RelayForLife = props => (
  <div>
    <LeftContainer>
      <Title>Relay For Life</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

const EndOfYear = props => (
  <div>
    <LeftContainer>
      <Title>End of Year Wrap Up</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac mi
        quis lectus gravida aliquam sit amet eu lorem.
      </Content>
    </LeftContainer>
    <RightContainer>
      <RightImage src="/static/meeting.jpeg" />
    </RightContainer>
  </div>
);

export default class Activities extends Component {
  state = {
    tab: 0
  };
  render() {
    return (
      <TotalContainer>
        Activities
        <Container>
          <ActivitiesContainer>
            <Tabs
              value={this.state.tab}
              onChange={(event, value) => this.setState({ tab: value })}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="General Meetings" />
              <Tab label="Leadership Conference" />
              <Tab label="Check-Ins" />
              <Tab label="Relay For Life" />
              <Tab label="End of Year Wrap Up" />
            </Tabs>
            {this.state.tab == 0 && <GeneralMeetings />}
            {this.state.tab == 1 && <LeadershipConference />}
            {this.state.tab == 2 && <CheckIns />}
            {this.state.tab == 3 && <RelayForLife />}
            {this.state.tab == 4 && <EndOfYear />}
          </ActivitiesContainer>
        </Container>
      </TotalContainer>
    );
  }
}