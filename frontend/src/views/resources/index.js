import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  Divider,
  ListItem,
  Link,
} from '@mui/material';

import ResourceCategories from './ResourceCategories';
import ColorStackLogo from '../../static/dei/colorstack.jpeg';
import CodePathLogo from '../../static/programs/codepath.jpeg';
import OutInTechLogo from '../../static/dei/outintech.jpeg';
import ReWritingTheCode from '../../static/dei/rewritingthecode.jpeg';
import TechqueriaLogo from '../../static/dei/techqueria.png';
import CodeDayLabsLogo from '../../static/programs/codedaylabs.png';
import SHPELogo from '../../static/conferences/SHPE.png';
import NSBELogo from '../../static/dei/NSBE.png';
import MLHLogo from '../../static/hackathons/MLH.png';
import CSCareersLogo from '../../static/discords/cscareers.jpeg';
import DevPostLogo from '../../static/hackathons/devpost.png';
import DevelopForGoodLogo from '../../static/programs/developforgood.jpeg';
import AfroTechLogo from '../../static/conferences/afrotech.png';
import GHCLogo from '../../static/conferences/ghc.png';
import SWELogo from '../../static/conferences/swe.png';
import VietTechLogo from '../../static/dei/vietnamtech.png';
import CodeSignalLogo from '../../static/interviews/codesignal.png';
import NeetCodeLogo from '../../static/interviews/neetcode.jpeg';
import Grind75Logo from '../../static/interviews/grind75.png';
import USDCLogo from '../../static/programs/digitalcorps.png';
import MLCollectiveLogo from '../../static/ml/mlc.png';
import BreakThroughTechLogo from '../../static/programs/breakthroughtech.png';
import DiscordLogo from '../../static/discords/discordlogo.png';
import InterviewIoLogo from '../../static/interviews/interviewing-io-vector-logo.svg';
import JoannaYLogo from '../../static/jobHunting/joanna_y.jpeg';
import JustinLinLogo from '../../static/jobHunting/justin_lin.jpeg';
import VisualgoLogo from '../../static/learning/visualgo.jpeg';

const categoryResources = {
  DiversityOrgs: [
    {
      name: 'ColorStack',
      logoSrc: ColorStackLogo,
      websiteUrl: 'https://colorstack.org/',
      description:
        "ColorStack's mission is to increase the number of Black and Latinx Computer Science graduates that go on to start rewarding technical careers.",
    },
    {
      name: 'Out in Tech',
      logoSrc: OutInTechLogo,
      websiteUrl: 'https://outintech.com/',
      description:
        'Out in Tech is the world’s largest non-profit community of LGBTQ+ tech leaders. We create opportunities for our 50,000 members to advance their careers, grow their networks, and leverage tech for social change.',
    },

    {
      name: 'Rewriting the Code',
      logoSrc: ReWritingTheCode,
      websiteUrl: 'https://rewritingthecode.org/',
      description:
        'Rewriting the Code is the largest peer-to-peer network of women in tech, providing support, mentorship, and education that helps pave the way for sustainable careers, professional advancement, and equal opportunities.',
    },
    {
      name: 'VietTech',
      logoSrc: VietTechLogo,
      websiteUrl: 'https://techsphere.app/',
      description:
        'Get advices and insights from Vietnamese mentors in world-class technology companies',
    },
    {
      name: 'Techqueria',
      logoSrc: TechqueriaLogo,
      websiteUrl: 'https://techqueria.org/',
      description:
        'Techqueria is a nonprofit that serves the largest global community of Latinx professionals in tech.',
    },
  ],

  LearningOrgs: [
    {
      name: 'CodePath',
      logoSrc: CodePathLogo,
      websiteUrl: 'https://codepath.org/',
      description:
        'College courses only prepare you so much for the real world. Get the technical training, career guidance, mentors, and community you need to successfully navigate the tech industry and jumpstart your SWE career … at no cost.',
    },
    {
      name: 'Frontend Mentors',
      logoSrc: 'https://www.frontendmentor.io/static/images/logo-desktop.svg',
      websiteUrl: 'https://www.frontendmentor.io/',
      description:
        'Improve your coding skills by building realistic projects. Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript. We create the designs so you can focus on the code and see your skills skyrocket!',
    },
  ],
  Conferences: [
    {
      name: 'Society of Hispanic Professional Engineers',
      logoSrc: SHPELogo,
      websiteUrl: 'https://shpe.org/',
      description:
        'SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development.',
    },
    {
      name: 'National Society of Black Engineers',
      logoSrc: NSBELogo,
      websiteUrl: 'https://www.nsbe.org/',
      description:
        'to increase the number of culturally responsible black engineers who excel academically, succeed professionally and positively impact the community.',
    },
    {
      name: 'AfroTech',
      logoSrc: AfroTechLogo,
      websiteUrl: 'https://afrotech.com/',
      description: 'The largest Black tech conference in the U.S.',
    },
    {
      name: 'Grace Hopper Celebration',
      logoSrc: GHCLogo,
      websiteUrl: 'https://ghc.anitab.org/',
      description: 'The largest Women Tech Conference in the U.S.',
    },
    {
      name: 'Society of Women Engineers',
      logoSrc: SWELogo,
      websiteUrl: 'https://swe.org/',
      description: 'Women Conference for Hardware and Software Engineers',
    },
  ],
  Hackathons: [
    {
      name: 'Devpost',
      logoSrc: DevPostLogo,
      websiteUrl: 'https://devpost.com/',
      description:
        'The home for hackathons. Where organizations and developers come together to build, inspire, and innovate.',
    },
  ],
  Discords: [
    {
      name: 'CS Career Discord',
      logoSrc: CSCareersLogo,
      discordUrl: 'https://discord.gg/cscareerhub',
    },
    {
      name: 'CS Majors Discord',
      logoSrc: DiscordLogo,
      discordUrl: 'https://discord.gg/CSMajors',
    },
  ],
  InterviewPrep: [
    {
      name: 'CodeSignal',
      logoSrc: CodeSignalLogo,
      websiteUrl: 'https://codesignal.com/',
      description: 'Practice coding skills and prepare for interviews.',
    },
    {
      name: 'Leetcode',
      logoSrc: 'https://leetcode.com/static/images/LeetCode_logo.png',
      websiteUrl: 'https://leetcode.com/',
      description: 'Practice coding skills and prepare for interviews.',
    },
    {
      name: 'Neetcode',
      logoSrc: NeetCodeLogo,
      websiteUrl: 'https://neetcode.io/',
      description: 'Practice coding skills and prepare for interviews.',
    },
    {
      name: 'Tech Interview Handbook',
      logoSrc: Grind75Logo,
      websiteUrl: 'https://grind75.com/',
      description: 'Practice coding skills and prepare for interviews.',
    },
    {
      name: 'Interviewing.io',
      logoSrc: InterviewIoLogo,
      websiteUrl: 'https://interviewing.io/',
      description:
        'Anonymous mock interviews with engineers from Amazon, Google, Facebook, and other top companies. Get better at algorithmic and systems design problems, and get detailed feedback on exactly what you need to work on.',
    },
  ],
  csJobHuntingGuides: [
    {
      name: 'Joanna Y. New Grad Job Hunt Guide',
      logoSrc: JoannaYLogo,
      websiteUrl: 'https://hachiyuki8.com/tech/job-hunt-advice',
      description:
        'A recap of Joanna Y. six month job hunt as a new grad software engineer, including resources she used to prepare and advice for fellow early-career candidates.',
    },
    {
      name: 'Justin Lins Job Hunt Guide',
      logoSrc: JustinLinLogo,
      websiteUrl:
        'https://justinlinpersonal.notion.site/Written-Guide-ad5593333b0540c2b9a4fab8a07f4365',
      description:
        'A comprehensive and extensive guide with resources about the entire job hunting process.',
    },
    {
      name: 'Prepping 101',
      logoSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/173px-Google_Docs_logo_%282014-2020%29.svg.png',
      websiteUrl:
        'https://docs.google.com/document/d/1c06tH7CDDvM3Y-7D3hIfLxr2gpKwm9uLJblGxdu2GCw/edit#heading=h.5ituwhsuht3x',
      description:
        'Another comprehensive guide with resources about the entire job hunting process.',
    },
  ],
  Learning: [
    {
      name: 'visualgo.io',
      logoSrc: VisualgoLogo,
      websiteUrl: 'https://visualgo.net/en',
      description:
        'Visualising data structures and algorithms through animation',
    },
  ],
  GithubRepos: [],
  Mentorship: [],
  Networking: [],
  ResumeCoverLetter: [],
  MachineLearning: [
    {
      name: 'Machine Learning Collective',
      logoSrc: MLCollectiveLogo,
      websiteUrl: 'https://mlcollective.org/',
      description: 'Learn machine learning with a community.',
    },
  ],
  MiniInternships: [
    {
      name: 'CodeDay Labs',
      logoSrc: CodeDayLabsLogo,
      websiteUrl: 'https://labs.codeday.org/',
      description:
        'CodeDay Labs is the 100% online tech internship for everyone. Monday, June 26 — Friday, August 18',
    },
    {
      name: 'Major League Hacking',
      logoSrc: MLHLogo,
      websiteUrl: 'https://mlh.io/',
      description:
        'Major League Hacking (MLH) is the official student hackathon league. Each year, we power over 200 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 65,000 students around the world.',
    },
    {
      name: 'Develop For Good',
      logoSrc: DevelopForGoodLogo,
      websiteUrl: 'https://developforgood.org/',
      description:
        'We manage teams of talented, diverse college students and industry professionals to build tech products for nonprofits. Students gain hands-on technical experience, corporate mentors donate their skills, and nonprofits get quality, custom digital services.',
    },

    {
      name: 'U.S. Digital Corps',
      logoSrc: USDCLogo,
      websiteUrl: 'https://digitalcorps.gsa.gov/',
      description: 'Serve your country with technology.',
    },
    {
      name: 'Break Through Tech',
      logoSrc: BreakThroughTechLogo,
      websiteUrl: 'https://breakthroughtech.org/',
      description: 'Break Through Tech is a national program.',
    },
  ],
};

const ResourcesView = () => {
  return (
    <Container>
      <Box py={5}>
        <Typography variant='h3' textAlign='center' marginBottom={5}>
          CS Resources
        </Typography>

        {Object.entries(categoryResources).map(
          ([categoryName, resources], index) => (
            <div key={index}>
              <ResourceCategories
                categoryName={categoryName
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())} // Format the category name
                resources={resources}
              />
              {index < Object.keys(categoryResources).length - 1 && (
                <Divider style={{ marginBottom: '20px' }} />
              )}
              {/* Add a Divider between sections */}
            </div>
          )
        )}

        {/* CS Organizations */}
        {/* <Box marginBottom={5}>
          <Typography variant='h4' gutterBottom>
            CS Organizations
          </Typography>
          <List>
            {resources.map((resource, index) => (
              <ResourceItem key={index} {...resource} />
            ))}
          </List>
        </Box>
        <Divider /> */}

        {/* CS Github Repos */}
        <Box py={5}>
          <Typography variant='h4' gutterBottom>
            CS Github Repositories
          </Typography>
          <List>
            <ListItem>
              <Link href='https://github.com/exampleRepo1'>Example Repo 1</Link>
              <Typography>: Short description about this repo.</Typography>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/exampleRepo2'>Example Repo 2</Link>
              <Typography>: Short description about this repo.</Typography>
            </ListItem>
            {/* Add more repos as necessary */}
          </List>
        </Box>
        <Divider />

        {/* Job Resources */}
        <Box py={5}>
          <Typography variant='h4' gutterBottom>
            Resources for Job Hunting
          </Typography>
          <Typography>
            Introduction or tips about how to effectively find a job, the
            significance of networking, and leveraging alumni connections.
          </Typography>
          {/* Additional resources, links, guides can be added here */}
        </Box>
        <Divider />

        {/* Cover Letter & Resume */}
        <Box py={5}>
          <Typography variant='h4' gutterBottom>
            Cover Letter & Resume Information
          </Typography>
          <Typography>
            Here, add tips, templates, and best practices for crafting an
            effective cover letter and resume. Discuss the importance of
            tailoring these documents for specific roles and the impact of a
            well-crafted application.
          </Typography>
          {/* Add links to templates or further readings */}
        </Box>
      </Box>
    </Container>
  );
};

export default ResourcesView;
