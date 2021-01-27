import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import './styles/pr-styles.scss';

const ProjectRules = () => {
  return (
    <Row>
      <Col sm={4}>
        <Scrollspy items={['section-1', 'section-2', 'section-3', 'section-4']} currentClassName="is-current" className="list-unstyled project-step-list">
          <li><a href="#section-1">Challenge Description</a></li>
          <li><a href="#section-2">Watch and Analyze</a></li>
          <li><a href="#section-3">Summarize your Idea</a></li>
          <li><a href="#section-4">Create a Draft</a></li>
        </Scrollspy>
      </Col>
      <Col sm={8}>
        <div className="project-step" id="section-1">
          <div className="section">
            <h4>Political Cartooning With Mark Fiore</h4>
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
        <div className="project-step" id="section-2">
          <div className="section">
            <h4>Watch and Analyze</h4>
            <p>
              All political cartoons start with a great idea that comes from an issue or event in the news. The word “cartoon” describes the artistic style. Political cartoons aren’t necessarily funny (some are) but they all send a message or make a point.
            </p>
            <p>
              Watch Mark Fiore, Pulitzer-Prize-winning cartoonist, describe how he creates a political cartoon from start to finish in the video, <a href="/">What Happens Inside a Cartoonist&apos;s Brain?</a>
            </p>
            <p>
              Then, look at some examples of professional political cartoons from Mark and other artists. Notice how you don’t have to be the best artist in the world to make a powerful statement.
              </p>
            <ul>
              <li>
                <a href="/">This cartoon</a> from Darrin Bell shows two simple mailboxes, but has a strong message about voter suppression.
              </li>
              <li>
                <a href="/">This cartoon</a> by Mark Fiore has just a thermometer, but makes a point about why there are so many wildfires in California.
              </li>
            </ul>
            <p>
              Check out this <a href="/">collection of political cartoons</a> from Mark Fiore and others. Use <a href="/">this graphic organizer</a> to analyze each cartoon and the images/visual symbols the artist uses.
            </p>
          </div>
          <div className="section">
            <h5>Analysis Questions</h5>
            <ul>
              <li>What issue or event is the cartoon about? How can you tell?</li>
              <li>What did you notice about how the artist got his/her viewpoint across using images and just a few words?</li>
              <li>What ideas do you have for your own cartoon after looking at these examples?</li>
            </ul>
          </div>
          <div className="section gray-box">
            <div className="col-sm-12">
              <h5>Resources in this section</h5>
              <ul>
                <li><a href="/">What Happens Inside a Cartoonist’s Brain?</a> (video)</li>
                <li><a href="/">Example cartoon collection</a> (slides)</li>
                <li><a href="/">Cartoon/visual symbol analysis</a> (graphic organizer)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-step" id="section-3">
          <div className="section">
            <h4>Summarize your Idea</h4>
            <p><strong>Brainstorm Ideas:</strong>Mark Fiore reads articles and watches news reports in search of a “spark” that he can build his cartoon around. It’s time to find your cartoon’s spark.</p>
            <p>Think of an issue that’s important to you, your family or your community. It could be something local like the high cost of housing where you live. It could be a national or international issue like police violence, gun control laws or climate change. <a href="/">This graphic organizer</a> takes you through the steps of finding your “spark.” If you’re not sure which issue to choose, check out <a href="/">Above the Noise</a> videos here on KQED Learn or search news sites like KQED, NPR, the New York Times, Newsela or CNN-10.</p>
            <p>Once you choose your issue, look for that spark! Read a few more articles or watch a recent video. Look for a <strong>phrase</strong>, <strong>event</strong> or <strong>quote</strong> to use as the starting point of your cartoon. <a href="/">Re-watch this video</a> from Mark for a reminder of how he finds the spark for his cartoons.</p>
          </div>
          <div className="section gray-box">
            <div className="col-sm-12">
              <h5>Resources in this section</h5>
              <ul>
                <li><a href="/">What Happens Inside a Cartoonist’s Brain?</a> (video)</li>
                <li><a href="/">Find an Idea and Plan Your Political Cartoon</a> (graphic organizer)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-step" id="section-4">
          <div className="section">
            <h4>Create a Draft</h4>
            <p>After you find your spark, it’s time to start sketching. Grab a piece of blank paper or an online drawing site. As we learned from Mark Fiore, the most important images go in the front, or foreground, of your cartoon. Or maybe your cartoon will have just one main image, like the <a href="/">thermometer example</a> from Step 2.</p>
            <p>If you can’t think of an idea, try Mark Fiore’s favorite <a href="/">drawing games</a> to get your imagination going. If your cartoon features political figures, check out this video on <a href="/">drawing political caricatures</a>. Spoiler alert: They don’t have to look exactly like the politician! The same goes for any celebrity or public figure.</p>
          </div>
          <div className="section gray-box">
            <div className="col-sm-12">
              <h5>Resources in this section</h5>
              <ul>
                <li><a href="/">Drawing Games to Jumpstart Your Imagination</a> (video)</li>
                <li><a href="/">Drawing Political Caricatures</a> (video)</li>
              </ul>
            </div>
          </div>
        </div>
      </Col>
    </Row >
  );
};
export default ProjectRules;