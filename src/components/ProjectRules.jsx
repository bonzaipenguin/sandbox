import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import '../styles/global.scss';

const ProjectRules = () => {
  return (
    <Row>
      <Col sm={4}>
        <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4']} currentClassName="is-current" className="list-unstyled project-steps">
          <li><a href="section-1">Political Cartooning With Mark Fiore</a></li>
          <li><a href="section-2">Watch and Analyze</a></li>
          <li><a href="section-3">Summarize your Idea</a></li>
          <li><a href="section-4">Create a Draft</a></li>
        </Scrollspy>
      </Col>
      <Col sm={8}>
        <div id="section-1">
          <div className="section">
            <p>Political cartoons take a stand on an issue using images and just a few words to make a powerful point. KQED’s Pulitzer-Prize-winning cartoonist <a href="/">Mark Fiore</a> uses drawings to capture his audience and inspire them to look at an issue in a new way.</p>
            <p>Now it’s your turn to draw or illustrate an original single-panel cartoon to share your view on an issue or news event you care about. You can draw the cartoon or create images with digital tools. But, every element of the cartoon must be original artwork you have done yourself. As you’ll soon see, you don’t have to be an expert artist to make a statement.</p>
          </div>
          <div className="section">
            <h5>Project requirements</h5>
            <ul>
              <li>Single-panel design</li>
              <li>Original artwork (hand-drawn, digital designs or a combination)</li>
              <li>In <strong>jpg</strong>, <strong>png</strong> or <strong>pdf</strong> format</li>
              <li>Reflection on your cartoon</li>
            </ul>
            <p>All submissions will be published on KQED Learn’s showcase and some selections will be shared digitally by Mark Fiore and with KQED’s general audience. We will contact you if your submission has been selected.</p>
          </div>
          <div className="section">
            <h5>Tools/What You’ll Need</h5>
            <p>You’ll be creating an original political cartoon, so decide if you’ll be drawing on paper or designing on a computer screen.</p>
            <p>If you’re going old school, you’ll need:</p>
            <ul>
              <li>Blank paper (not lined, if possible)</li>
              <li>A pencil and eraser for sketching and markers for your final design. (You don’t have to use color, but your final design should be in ink not pencil.)</li>
            </ul>
            <p>If you’re drawing on a computer, here are a few app recommendations. (There are many more, so use what looks good or what you know best.)</p>
            <ul>
              <li><a href="/">Google Drawing</a></li>
              <li><a href="/">Microsoft Fresh Paint</a></li>
              <li><a href="/">Krita</a></li>
              <li><a href="/">Chrome Canvas</a></li>
              <li><a href="/">Sketchpad</a></li>
            </ul>
            <p>To publish content on KQED Learn, you’ll need to have a parent or guardian sign the <a href="/">Materials Release</a> form. If you’re under 13, please also have a parent or guardian sign the <a href="/">COPPA consent</a> form.</p>
          </div>
          <div className="section gray-box">
            <div className="col-sm-12">
              <h5>Resources and Tips</h5>
              <p>To publish student content on KQED Learn, all students must have a parent or guardian sign a <a href="/">Materials Release</a> form. Students under 13 must also have a signed <a href="/">COPPA consent</a> form. KQED may ask for these forms if student work is selected for broadcast or digital publication.</p>
            </div>
          </div>
        </div>
        <div id="section-2">
          <div className="section">
            <h4>Watch and Analyze</h4>
            <p>All political cartoons start with a great idea that comes from an issue or event in the news. The word “cartoon” describes the artistic style. Political cartoons aren’t necessarily funny (some are) but they all send a message or make a point.</p>
            <p>Watch Mark Fiore, Pulitzer-Prize-winning cartoonist, describe how he creates a political cartoon from start to finish in the video, <a href="/">What Happens Inside a Cartoonist&apos;s Brain?</a></p>
          </div>
          <div className="section">
            <h5>Project requirements</h5>
            <ul>
              <li>Single-panel design</li>
              <li>Original artwork (hand-drawn, digital designs or a combination)</li>
              <li>In <strong>jpg</strong>, <strong>png</strong> or <strong>pdf</strong> format</li>
              <li>Reflection on your cartoon</li>
            </ul>
            <p>All submissions will be published on KQED Learn’s showcase and some selections will be shared digitally by Mark Fiore and with KQED’s general audience. We will contact you if your submission has been selected.</p>
          </div>
          <div className="section">
            <h5>Tools/What You’ll Need</h5>
            <p>You’ll be creating an original political cartoon, so decide if you’ll be drawing on paper or designing on a computer screen.</p>
            <p>If you’re going old school, you’ll need:</p>
            <ul>
              <li>Blank paper (not lined, if possible)</li>
              <li>A pencil and eraser for sketching and markers for your final design. (You don’t have to use color, but your final design should be in ink not pencil.)</li>
            </ul>
            <p>If you’re drawing on a computer, here are a few app recommendations. (There are many more, so use what looks good or what you know best.)</p>
            <ul>
              <li><a href="/">Google Drawing</a></li>
              <li><a href="/">Microsoft Fresh Paint</a></li>
              <li><a href="/">Krita</a></li>
              <li><a href="/">Chrome Canvas</a></li>
              <li><a href="/">Sketchpad</a></li>
            </ul>
            <p>To publish content on KQED Learn, you’ll need to have a parent or guardian sign the <a href="/">Materials Release</a> form. If you’re under 13, please also have a parent or guardian sign the <a href="/">COPPA consent</a> form.</p>
          </div>
          <div className="section gray-box">
            <div className="col-sm-12">
              <h5>Resources and Tips</h5>
              <p>To publish student content on KQED Learn, all students must have a parent or guardian sign a <a href="/">Materials Release</a> form. Students under 13 must also have a signed <a href="/">COPPA consent</a> form. KQED may ask for these forms if student work is selected for broadcast or digital publication.</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default ProjectRules;