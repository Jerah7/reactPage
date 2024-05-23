import React, {} from 'react';
import {Container, 
        Box,
        Card,
        CardMedia,
        CardContent,
        Typography,
        CardActions,
        Grid,
        Stack,
        Pagination,
        } from '@mui/material';
import './style.css';
import LogoImage from '../src/images/Logo.png'
import Image1 from '../src/images/image 2.png'
import Image2 from '../src/images/image 2-2.png'
import Image3 from '../src/images/image 2-3.png'
import Image4 from '../src/images/image 2-4.png'
import Image5 from '../src/images/image 2-5.png'
import Image6 from '../src/images/image 2-6.png'
import Image7 from '../src/images/image 2-7.png'
import Image8 from '../src/images/image 2-8.png'
import Image9 from '../src/images/image 2-9.png'
import TwitterIcon from '../src/images/twitterIcon.png'
import GridIcon from '../src/images/Grid Icon.png'
import ListIcon from '../src/images/List Icon.png'
import EclipseIcon from '../src/images/Ellipse 1.png'



const Page = () => {
    const cardData = [
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image1 },
        { title: 'Python for the Absolute beginners', description: 'Python is the most popular programming language out there and it is used for so many different industries.', image: Image2},
        { title: 'Docker from Zero to Hero', description: 'Learn what is Docker and  how Docker is used in the whole software development process.', image: Image3 },
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image4},
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image5},
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image6},
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image7},
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image8},
        { title: 'Build continuous integration pipelines with GitHub Actions', description: 'GitHub actions provide a really powerful way to integrate continuous integration and delivery into your applications.', image: Image9},
    ]
    return (
        <Container fixed>
            <Box sx={{ bgcolor: '#232830', width: '1150px', paddingLeft: '150px', paddingRight: '150px', paddingTop:'50px', paddingBottom:'80px'}}>
                <div className='headers'>
                    <div className= 'headerOne'>writings.dev</div>
                    <div className='headings'>
                        <div className='header'>categories</div>
                        <div className='header'>articles</div>
                        <div className='header'>about</div>
                    </div>
                </div>
               <img src={LogoImage} alt='logo' className='logo'></img>
               <div className='title'>Writings for Developers</div>
               <div className='subTitle'>Curated collection of articles for busy developers</div>
               <div style={{width: '100%', height: '100%', opacity: 0.20, border: '3px #4D4D4D solid', marginTop:'100px', marginBottom:'15px'}}></div>
               <div className='subHeadings'>
                    <img src={GridIcon} style={{width:'30px'}}/>
                    <img className='subHeaderIcons' src={ListIcon} style={{width:'30px'}}/>
                    <div className='subHeader'>JavaScript</div>
                    <div className='subHeader'>DevOps</div>
                    <div className='subHeader'>Cloud</div>
                    <div className='subHeader'>Terraform</div>
                    <div className='subHeader'>Architecture</div>
                    <div className='subHeader'>Scalability</div>
                    <div className='subHeader'>Explainers</div>
                </div>

                <Grid container spacing={4}>
                    {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ minHeight:'90%', maxHeight:'100%', MaxWidth: '100%', borderRadius: '20px', padding: '20px'}}>
                            <CardMedia
                                component="img"
                                alt={card.title}
                                height='100%'
                                width='100%'
                                image={card.image}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                 {card.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography variant="body2" color='text.secondary'>June 24, 2022</Typography>
                                <img src={EclipseIcon} style={{marginLeft:'15px', marginRight:'15px'}}/>
                                <Typography variant="body2" color='text.secondary'>DevOps</Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>

                <Stack fontSize={25} fontFamily={'Recursive'} spacing={2} marginTop={10} marginLeft={45}>
                    <CardActions className='pageCounter'>
                        <Typography>Previous</Typography>
                        <Pagination count={5} color='primary'/>
                        <Typography>Next</Typography>
                    </CardActions>
                </Stack>
                <div style={{width: '100%', height: '100%', opacity: 0.20, border: '3px #4D4D4D solid', marginTop:'100px', marginBottom:'20px'}}></div>
                <div className='footerItems'>
                    <div className='footerItem1'>writings.dev</div>
                    <div className='footerItem2'>by @kamranahmedse</div>
                    <img className='twitterIcon' src={TwitterIcon}/>
                    <div className='footerItem3'>Follow @writingsdev</div>
                </div>
            </Box> 
        </Container>       
    );
};

export default Page;