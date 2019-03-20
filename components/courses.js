import React, { Component } from "react";
import styled from "styled-components";
import Create from "@material-ui/icons/Create";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import SettingsInputComponent from "@material-ui/icons/SettingsInputComponent";
import Keyboard from "@material-ui/icons/Keyboard";
import Computer from "@material-ui/icons/Computer";
import PowerInput from "@material-ui/icons/PowerInput";
import Train from "@material-ui/icons/Train";
import Landscape from "@material-ui/icons/Landscape";
import Build from "@material-ui/icons/Build";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Title = styled.h1`
  flex: 0 1 auto;
  margin-top: 100px;
  margin-left: 15%;
  font-family: "Raleway";
  font-size: 50px;
  color: #fff;
`;
const Icons = styled.div`
  flex: 0 1 auto;
  margin-top: 0px;
  margin-left: 15%;
  font-family: "Raleway";
  font-size: 50px;
  color: #fff;
`;

const Info = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  font-family: "Raleway";
  color: #fff;
  font-size: 25px;
`;

export default class Courses extends Component {
  render() {
    return (
      <Container>
        <Title>COURSES</Title>
        <Info>
          <VerticalTimeline>
            <VerticalTimelineElement
              date="9th Grade"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Create />}
            >
              <h3>Intro to Engineering Design</h3>
              <h4>Ms. Grunthaner</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="9th Grade"
              iconStyle={{ background: "#4e9e34", color: "#fff" }}
              icon={<DeveloperBoard />}
            >
              <h3>Computer Integrated Manufacturing</h3>
              <h4>Ms. Garrity</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="10th Grade"
              iconStyle={{ background: "#601c87", color: "#fff" }}
              icon={<SettingsInputComponent />}
            >
              <h3>Principles of Engineering</h3>
              <h4>Mr. Hanas</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="10th Grade"
              iconStyle={{ background: "#a0203e", color: "#fff" }}
              icon={<Keyboard />}
            >
              <h3>Computer Programming for Engineers</h3>
              <h4>Mr. Borchardt</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade"
              iconStyle={{ background: "#c4601d", color: "#fff" }}
              icon={<Computer />}
            >
              <h3>Computer Science &amp; Software Engineering</h3>
              <h4>Mr. Hanas</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade"
              iconStyle={{ background: "#c4a81d", color: "#fff" }}
              icon={<PowerInput />}
            >
              <h3>Digital Electronics</h3>
              <h4>Mr. Borchardt</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade"
              iconStyle={{ background: "#1dad82", color: "#fff" }}
              icon={<Train />}
            >
              <h3>Civil Engineering and Architecture</h3>
              <h4>Ms. Garrity</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="11th Grade"
              iconStyle={{ background: "#1d27ad", color: "#fff" }}
              icon={<Landscape />}
            >
              <h3>Biological Engineering &amp; Environmental Sustainability</h3>
              <h4>Dr. Ellesworth</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="12th Grade"
              iconStyle={{ background: "#a50192", color: "#fff" }}
              icon={<Build />}
            >
              <h3>Engineering Design &amp; Development</h3>
              <h4>Ms. Grunthaner &amp; Dr. Eng</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Info>
        <style jsx global>{`
          .vertical-timeline-element-date {
            color: #fff !important;
          }
          .vertical-timeline-element-content {
            color: #000 !important;
          }
          .vertical-timeline {
            margin-top: 20px !important;
            margin-bottom: 150px !important;
          }
        `}</style>
      </Container>
    );
  }
}