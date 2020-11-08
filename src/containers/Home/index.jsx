import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 500,
    marginLeft: 120,
    marginTop: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  media: {
    height: 140,
  },
  text: {
    lineHeight: 3,
  }
});

export default function Home() {

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
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
       <Card className={classes.root}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  Hi, I am Betul
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
              I am a former chemist and a junior software engineer. Years ago  I was doing a master's in chemistry. Since my main interest was computational chemistry, <br/>
              I thought it would be useful to learn some programming. So,  I enrolled in the evening programming school. I loved programming and took the university exam again. <br/>
              I got a full scholarship in software engineering at Bahcesehir University, I quit the master and started a new adventure in software engineering <br/>
              Currently, I am working as a mobile application developer at Huawei.
              </Typography>
           </CardContent>
        </Card>
    </motion.div>
  );
}