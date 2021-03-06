import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import Madlibz from '../../../public/madlibz.png';
import Movie from '../../../public/movie.png';
import DietManager from '../../../public/diet.png';
import Wolt from '../../../public/wolt.png';
import FortuneFound from '../../../public/fortune.png';
import ChargingStations from '../../../public/charging.png';
import Portfolio from '../../../public/portfolio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles({
    root: {
      margin: 30,
      maxWidth: 400,
    },
    media: {
      width: 400,
      height: 140,
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      marginTop: 10,
      marginBottom: 10,
    }
  });

export default function Projects() {

    const projects = [
        {
          projectName: "SnowLibz",
          source: Madlibz,
          description: "",
          technologies: "Vanilla js, p5.js",
          projectLink: "https://madlibz-68db7a.netlify.app/",
          sourceCode: "https://github.com/betulerkoc/mad-libs-challenge",
        },
        {
          projectName: "Movie",
          source: Movie,
          description: "",
          technologies: "Vanilla js, Bootstrap",
          projectLink: "https://oop-movie-7ac10a.netlify.app/",
          sourceCode: "https://github.com/betulerkoc/oop-movie",
        },
        {
          projectName: "Fortune Found",
          source: FortuneFound,
          description: "",
          technologies: "React.js, Bootstrap, i18next, Jest, Firebase",
          projectLink: "https://garbage2gift.netlify.app/",
          sourceCode: "https://github.com/ReCoded-Org/capstone-istanbul-from_garbage_to_gift",
        },
        {
          projectName: "Wolt",
          source: Wolt,
          description: "",
          technologies: "React.js, Context API, Styled Components, Enzyme",
          projectLink: "https://wolt-challenge-862851.netlify.app/",
          sourceCode: "https://github.com/betulerkoc/wolt-challenge",
        },
        {
          projectName: "Diet Manager",
          source: DietManager,
          description: "",
          technologies: "React.js, Firebase, Bootstrap",
          projectLink: "https://dietmanager-431962.netlify.app/", 
          sourceCode: "https://github.com/betulerkoc/diet-manager",
        },
        {
          projectName: "Charging Stations",
          source: ChargingStations,
          description: "Blockchain-based reservation application for electrical vehicles. This platform provides that users can find a station, see the current service price, make a reservation, and make payment safely via ethereum network. In order to make a payment, users should give permission to their metamask wallet extension in their browser.",
          technologies: "Solidity, web3.js, React.js, Mapbox, Firebase, Bootstrap",
          projectLink: "https://find-station-787f1c.netlify.app/",
          sourceCode: "https://github.com/betulerkoc/station-frontend",
        },
        {
          projectName: "Porfolio",
          source: Portfolio,
          description: "",
          technologies: "React.js, material-ui",
          projectLink: "https://betulerkoc.netlify.app/",
          sourceCode: "https://github.com/betulerkoc/portfolio",
        }
    ]

    const classes = useStyles();

    const pageVariants = {
        initial: {
            opacity: 0,
            x: "-100vw",
            scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            x: "100vw",
            scale: 1.2
        }
        };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
        };
        
        const pageStyle = {
        position: "absolute"
        };

    return (
      <motion.div
        style={pageStyle}
        className="row"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {projects.map(m => (
                    <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={m.source}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {m.projectName}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.text}>
                           {m.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {m.technologies}
                        </Typography>
                        <div className={classes.row}>
                            <a href={m.sourceCode} target="_black"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href={m.projectLink} target="_black"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                        </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
        ) )}
      

      </motion.div>
    );
  }
  