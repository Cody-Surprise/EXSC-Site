import petoday from'./howdidyoupetoday.jpg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import arnold from'./arnold.jpeg';
import button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import kid from './sleepboi.jpeg';
import griff from './IMG_2206.jpeg'
import climber from './climberoverhang.jpg'
import teamwork from './soldiersonwall.jpg'
import cody from './surpriseboat.jpeg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>Youth</Tab>
      <Tab>Psychological Skills</Tab>
      <Tab>SMART Goal Worksheet</Tab>
      <Tab>Calendar</Tab>
      <Tab>About Us</Tab>
    </TabList>
    <TabPanel>
      {/* Homepage */}
      <img src={arnold} alt="logo" />
      <h2 className="title">How does exercise help with overall happiness??</h2>
      <p>Exercise is an important part of general mental wellbeing.</p>
      <p>      In fact, not only did people who exercised regularly score higher on the Warwick-Edinburgh Mental Well-being Scale (WEMWBS) but they were also more likely to exhibit a “readiness to disclose” than their non-exercising counterparts. </p> 
      <p> This is in relation to discussing mental health issues, and suggests that those who exercise not only are more likely to have better general mental health, but also to report when their mental health has faltered, and seek help. </p>
    <a
    href="https://www.tandfonline.com/doi/abs/10.3109/09638237.2013.841874"
target="_blank"
rel="noopener nonreferrers"
    > 
    <h3>      
      "Journal of Mental Health 2013" </h3>
    </a>
    <p> This second facet speaks directly to increased confidence and self actualization that comes with exercise. With mental illness accounting for the plurality of disabilities in the United States, it makes sense that being able to come forward and seek help would be positive. </p>
    <p>In relation to the general mental health aspect, in the modern era, we are currently experiencing a major crisis. Suicide rates have increased amongst almost every demographic over the past thirty years </p>
    <a
      href="https://www.nytimes.com/2016/04/22/health/us-suicide-rate-surges-to-a-30-year-high.html"
      target="_blank"
      rel="noopener noreferrer"
      >
      <h3>New York Times, 2016</h3>
    </a>
    <p>Any intervention which can help to bring down rates of depression, anxiety, and suicidality, is therefore something that should be thoroughly considered. In an observational study, Sibold and colleagues showed, in a large sample (N=13,583,) that suicidal ideation, odds of sadness, and suicide attempts were lower amongs the group of children who exercised 4 to 5 days a week, when compared with the group that exercised 0 to 1 day a week. </p>
    <a
    href="https://www.sciencedirect.com/science/article/abs/pii/S0890856715004359"
    target="_blank"
    rel="noopener noreferrer">
    <h3>Journal of the American Academy of Child and Adolescent Psychiatry, 2015
   </h3>
 </a>
    <p>Another study from Oh and colleagues found in geriatric patients that had a history of attempted suicide, that exercise decreased the risk of suicidality being persistent or recurring. It’s clear that healthy habits of exercise can have a positive impact on mental health for everyone, regardless of age.</p>
    </TabPanel>
    <TabPanel>
      {/* Youth Page */}
      <h1 className="title">Bullying</h1>
      <div>
        <img src={kid} alt="logo" />
      </div>
      <p>Youths are especially susceptible to bullying. This is on both sides of the bully-victim relationship. </p>
      <p>While victims are at a higher risk than their peers for depression, anxiety, and suicidality,the perpetrator is at a relatively higher risk for commitment of violent crime, increased drug use, and shares some of the higher rate of suicidal ideation with victims. </p> 
      <p>Beyond this, being a victim of bullying as a youth increases someone’s odds of suicidal behavior later in life. </p>
      <p>ccording to the National Youth Risk Behavior Survey, as referenced by Sibold and colleagues, roughly 30% of students experienced depression, 22% had considered suicide, and 8% had made an attempt. </p>
      <p>Physical activity for 4+ days a week caused a 23% reduction in suicidal ideation and behavior. Even in children who did not report experiencing bullying, physical activity for 4+ days per week still lowered depression and sadness scores.</p>
      <p>Note that cyberbullying does not seem to have this same relation to exercise. For more information on cyberbullying, check out the following links:</p>
<div>
      <a
        className="App-link"
        href="https://www.cybersmile.org/"
        target="_blank"
        rel="noopener noreferrer">
          <h3>Cybersmile</h3>
        </a>
        <a
        className="App-link"
        href="https://www.stopbullying.gov/cyberbullying/what-is-it"
        target="_blank"
        rel="noopener noreferrer">
          <h3>Stop Bullying</h3>
        </a>
        <a
        className="App-link"
        href="https://kidshealth.org/en/teens/cyberbullying.html"
        target="_blank"
        rel="noopener noreferrer">
          <h3>Kid's Health</h3>
        </a>
     <h1 className="title">Background on Adolescents</h1>
        <h3>Trends in Mental Health</h3>
          <p>Unfortunately, the current trend in mental health for adolescents is not conducive to progress. Between 2006 and 2011, according to Gandhi and colleagues, </p>
          <a
        className="App-link"
        href="https://journals.sagepub.com/doi/full/10.1177/0706743715621254"
        target="_blank"
        rel="noopener noreferrer">
          <h3>Canadian Journal of Psychiatry</h3>
        </a>
        <p>mental health related medical visits for people aged 10 to 24 in Ontario, Canada increased by 32.5%, and hospitalizations specifically increased 53.7%. The research here does suggest that this increase could be due to increased availability of care for mental health, and it could be argued visibility and open conversation likely also contributes to increasing those numbers, however, the 53.7% increase in hospitalizations suggests that these are not people now able to access new resources, but rather people in a state of emergency.</p>
        <h3>What makes exercise work for kids</h3>
        <p>Kids' exercise being functional for improving their mental health really comes down to the “fun integration theory.” FIT uses a map of different aspects of sporting, and has children rate how important they are to the children’s enjoyment of said sport. </p>
        <p>Physical education classes haven’t proven to give any sort of psychological boon to kids, but participation in a sports team has. In a study of Norwegian high schoolers, Røset and colleagues differentiate between physical recreation and physical education.</p>
        <p> Physical recreation provides a cathartic reprieve from the stress of school, an opportunity to create new bonds, and strengthen old ones.Physical education, on the other hand can focus too much on organization and assessment, which increase stress and fully remove the catharsis of detachment from regular schooling. </p>
   <h1 className="title">Designing Plans for Youth</h1>
        <p>When working with youths, creating a plan has to be a very fluid, individualized, and involved process. Team sports are an easy way to circumvent the difficulties in programming for a child, but shouldn’t be forced upon the child. What will make them most likely to stick to an exercise regime is simply fun. </p>
        <p>To maintain fun in the child’s program, one needs to find what they enjoy doing, and possibly modify it to allow for exercise. Even non-physical interests can be used to get kids active. For example, if a child is interested in the stars, then taking them on a hike to look at the stars from a “better vantage point,” could be a great way to get them active.
</p>

</div>
       </TabPanel>
    <TabPanel>
      {/* Psychological Skills Training */}
      <h1 className="title">PST</h1>
      <p>
Psychological skills training, or PST, is a multifaceted approach to increasing mental acuity through regular practice. Some of the goals of PST include arousal regulation, effective imagery (covered later,) increased motivation and confidence, the ability to shift attentional focus and more. </p>
<p>
   At the end, the culmination of all these things is enhanced performance and skill acquisition. It isn’t an overly involved process either, taking only 10 to 15 minutes per day, 3 to five days per week. PST should be led by a qualified sports psychologist, however, coaches should have some skills to enact PST with their athletes. It’s also highly specialized, however, some examples of what to cover during PST are:</p>
<p>Somatic anxiety reduction through progressive muscle relaxation and deep breathing</p>
<p>Cognitive anxiety reduction through autogenic training (creating a warm, heavy, relaxed sensation)</p>
<h2 className="title">Imagery</h2>
<div>
  <img style={{width: 600}}src={climber}/>  
</div>
<p>Imagery is likely the easiest to implement of all PST interventions. There are several theories to why it works, however one of the most prominent (psychoneuromuscular) states that in the imagining of an action we actually stimulate our muscles involved in said action, but not beyond the threshold required to move. This is backed up by ECG data of people practicing imagery. It’s best to use an imagery script when attempting this technique, as it will allow reproducibility and thus introduce the imagery as a comforting constant for the athlete. The script should be multisensory and include statements such as “smell the grass,” or “feel the weight of the baseball in your hand,” and it should go from before the initiation of the athletic movement through its completion.  
</p>
<h2>Adherence Strategies</h2>
<img src={teamwork}/>
<p>Adherence to an exercise program is a complex interplay of a multitude of factors. Some adherence strategies include:</p>
<p>Positive feedback/reinforcement</p>
<p>Group Work</p>
<p>Goal Setting</p>
<p>Contracts</p>
<p>Financial Incentives</p>
<p>Enjoyability of Exercise</p>
<p>To make exercise considered habitual, one has to partake 3+ days per week for nine or more weeks, for a minimum of 20 minutes. The goal is to make exercise a lifelong habit, and some of these methods are not reasonable to be experienced by someone their entire life (for example contracts or financial incentives.) Because of this the focus should be on slowly shifting the adherence strategies from external to internal for the person exercising. </p>
    </TabPanel>
     <TabPanel> 
       {/* Smart Goal Tab */}
        <a
        className="App-link"
        href="https://www.mcckc.edu/counseling/goal-setting/docs/SMARTGoalWorksheet.pdf"
        target="_blank"
        rel="noopener noreferrer">
          <h1>SMART Goal Instructions</h1>
        </a>
         
    </TabPanel>
    <TabPanel>
      {/* Calendar Tab*/}
      <div>
      <a
        className="App-link"
        href="https://docs.google.com/spreadsheets/d/1S99zyhFCZU2T__OILrWyO7tLVl6V6ots8xEQ5kDAzmY/edit#gid=0"
        target="_blank"
        rel="noopener noreferrer">
          Individual Exercise Instructions
        </a>
        <p className="b">Here you will find 3 groups, find which one fits your description most accurately, and click the button to find the schedule you can use to guide you in your journey!</p>
        <div>
          <img style={{width: 550}} src={petoday} alt="logo" />
        </div>
        <h2 className="title">
        Group A attributes:
        </h2>
        <p>       
Sedentary less 4,000 steps per day </p>
<p>
Out of practice (5+ years without regular physical activity)
</p> <p>
2-3 hour commitment per week
        </p>
        <Button href="https://docs.google.com/spreadsheets/d/1S99zyhFCZU2T__OILrWyO7tLVl6V6ots8xEQ5kDAzmY/edit#gid=1134569316" target="_blank" variant="primary" rel="noopener referrer" size="lg" active>
    Take me to Group A Calendar
  </Button>
        <h2 className="title">
        Group B attributes:
       </h2>
        <p>
<p> Lightly active 4000-7000 steps per daym</p> 
Less than three years out of practice <p> 
2.5-4 hour commitment per week </p>
        </p>
        <Button href="https://docs.google.com/spreadsheets/d/1S99zyhFCZU2T__OILrWyO7tLVl6V6ots8xEQ5kDAzmY/edit#gid=2095417639" target="_blank" variant="primary" rel="noopener referrer" size="lg" active>
   Take me to Group B Calendar
  </Button>
        <h2 className="title">
        Group C attributes:
        </h2> <p>
Active more 7,000 steps per day </p> <p>
Has maintained some (if irregular) physical activity over past three years
3.5-5 hour commitment per week </p> <p>
Has a basis for self efficacy (Group C program has ranges for times on several days)
        </p>
        <Button href="https://docs.google.com/spreadsheets/d/1S99zyhFCZU2T__OILrWyO7tLVl6V6ots8xEQ5kDAzmY/edit#gid=9498495" target="_blank" variant="primary" rel="noopener referrer" size="lg" active>
    Take me to Group C calendar
  </Button>
      </div>
    </TabPanel> 
    <TabPanel>
      {/* About Us Tab */}
      <h1 className="title">Griffin Gourd</h1>
        <h3>Manchester, VT</h3>
      <img style={{width:500}}src={griff} />
      <p>Born and raised in Southern Vermont, I grew up in an active environment. After a period of time, I took a break from organized sports and ended up becoming very unhealthy, both physically and mentally. It wasn’t until I took sport back up again that I rediscovered what it meant to be truly healthy. It’s my goal to share this with other people, not just the physical, but the psychological aspect as well. </p>
    <div>
      <a
      href="https://www.youtube.com/watch?v=DLzxrzFCyOs&ab_channel=AllKindsOfStuff"
      rel="noopener referrer"
      target="_blank">
      <h1 className="title">Cody Surprise</h1></a>
        <h3>Burlington, VT</h3>
        <img src={cody}/>
        <p>Born in San Diego, CA. I went to boarding school in Vermont and decided to stay. I've since become an avid mountainneer, climber, and caver. I find studying exercise and the human body to be incredibly important, and aim to share what I've found in exercise to help everyone who is in need. I'd like to help the world become more active. 
        </p>
    </div>
    </TabPanel>

  </Tabs>
        {/* <img src={petoday} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
    </div>
  );
}

export default App;
