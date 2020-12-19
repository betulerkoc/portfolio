import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    margin: 40,
  },
  inline: {
    display: 'inline',
    lineHeight: 4,
  },
  title: {
    textAlign: 'center',
  }
}));


export default function Resume() {

const classes = useStyles();

const workExperience = [
    {
        company: "Huawei",
        position: "Mobile Application Developer",
        duration: "(08.2020 - Current) ",
        technologies: "React Native, Java",
    },
    {
        company: "Gittigidiyor",
        position: "Frontend Developer Intern",
        duration: "(01.2020 - 07.2020) ",
        technologies: "Html, Css, React.js",
    },
    {
        company: "Gamelab",
        position: "Game Developer Intern",
        duration: "(06.2019 - 09.2019) ",
        technologies: "C++, Java",
    },
    {
        company: "StudioNord",
        position: "Android Developer Intern",
        duration: "(04.2019 - 05.2019) ",
        technologies: "Java",
    }
];

const education = [
    {
        university: "Bahcesehir University",
        departmant: "Software Engineering",
        duration: "09.2018 - 07.2020",
    },
    {
        university: "Bogazici University",
        departmant: "Chemistry Master Degree",
        duration: "09.2016 - Drop Out",
    },
    {
        university: "Ayvansaray University",
        departmant: "Computer Programming",
        duration: "09.2016 - 06.2018",
    },
    {
        university: "Yildiz Technical University",
        departmant: "Chemistry",
        duration: "09.2011 - 07.2016",
    },
    {
        university: "Chiba University",
        departmant: "Chemistry - JASSO Program",
        duration: "01.2016 - 03.2016",
    },
    {
        university: "Wroclow Technology University",
        departmant: "Bioinformatics - Erasmus",
        duration: "09.2014 - 07.2015",
    }]

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
        transition={pageTransition}>
        <div className="container row">
        <div className="col-lg-6 col-sm-12">
                <h3 className={classes.title}>Education</h3>
                <List className={classes.root}>
                    {education.map(m => (
                        <ListItemText
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {m.departmant}, {m.university}
                            </Typography> <br/>
                            {m.duration}
                            <Divider/>
                            </React.Fragment>
                        }
                        />
                    ))}
                </List>
            </div>
            <div className="col-6">
                <h3 className={classes.title}>Work Experience</h3>
                <List className={classes.root}>
                <ListItem alignItems="center">      </ListItem>
                    {workExperience.map(m => (
                        <ListItemText
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {m.position}, {m.company}, {m.duration}
                            </Typography> <br/>
                            {m.technologies}
                            <Divider/>
                            </React.Fragment>
                        }/>
                    ))}
                </List>
            </div>
        </div>
    </motion.div>
  );
}