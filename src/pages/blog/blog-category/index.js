import react, { useEffect, useState } from 'react'
import { Grid } from "@mantine/core";
import { BlogCard, BlogMainSection, ButtonSection, PaginationSection } from './BlogC.Styled'
import Card from '@mui/material/Card';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardsCategory } from './Cards';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const BlogCategory = () => {
    const navigate = useNavigate()

    const getResultSearch = () => {
        navigate('/blog-search-result')
    }

    const[GetUserCategoryId, setUserCategoryId] = useState()
    const[GetUserSearch, setUserSearch] = useState()
    const[getResultApiSearch, setResultApiSearch] = useState()
    const[DataSkip, setDataSkip] = useState()

    axios.get("https://api.wishx.me/api/v1/blog/articles/get", {
        params: {
            skip:0,
        },
    }).then((data) => {
        setResultApiSearch(data.data.data.list)
    } )

    const buttonTitles = [{ id: 0, title: 'All' }, { id: 1, title: 'Travel' },
    { id: 2, title: 'Sport' }, { id: 3, title: 'Gadgets' }, { id: 4, title: 'Foto & Videos' }, { id: 5, title: 'Clothes' }];

    const handleClickGetIDCategory = event => {
        setUserCategoryId(event.currentTarget.id);
    };

    useEffect(() => {
        axios.get("https://api.wishx.me/api/v1/blog/articles/get", {
            params: {
                skip:0,
            },
        }).then((data) => {
            setResultApiSearch(data.data.data.list)
        })
    }, [])

    var setLoadingBlog = []
    getResultApiSearch?.map((AllBlog) => (
        AllBlog.partials.map((e) => (
            setLoadingBlog.push(e)
        ))
    ))

    const GetUserValueForApi = (e) => {
        navigate('/blog-search-result', { state: {GetUserSearch, GetUserCategoryId} })
    }

    return (
        <BlogMainSection fluid>
            <div className='instruction'>
                <p>Main {">"} Blog {">"} Travel</p>
                <h2>Travel articles</h2>
            </div>
            <Tabs defaultValue="personalinfo">
                <ButtonSection>
                    <div className='btn-section'>
                        <div className='btn-container'>
                        {buttonTitles.map((title) => (
                                <Tab value={title.title}>
                                    <button className={title.id == 0 ? 'all-btn selection-button' : 'other-btn selection-button'}
                                    
                                        onClick={(e) => {
                                            handleClickGetIDCategory(e),
                                            document.querySelectorAll('.selection-button').forEach(element => {
                                                element.id === e.currentTarget.id ? element.className = 'all-btn selection-button' :
                                                    element.className = 'other-btn selection-button'
                                            });
                                        }} id={title.id}>
                                        {title.title}
                                    </button>
                                </Tab>))}
                        </div>
                    </div>
                    <div className='input-section' style={{
                        height: "50px", display: 'flex',
                        alignItems: 'center', paddingLeft: '10px', paddingRight: '10px'
                    }}>
                        <input type='search' onChange={(e)=>setUserSearch(e.target.value)} className='inp-sect' placeholder='Search by all blog articles'
                            style={{ borderRadius: '8px', background: '#F7F8FA', paddingLeft: '20px' }} />
                        <FontAwesomeIcon icon={faSearch} onClick={GetUserValueForApi} style={{ transform: 'translate(-50px, 0px)' }} />
                    </div>
                </ButtonSection>

                <BlogCard fluid>
                        <TabPanel>
                            <Grid className='grid-card-root'>
                                {getResultApiSearch?.map((AllBlog) => (
                                    <Grid.Col xs={12} sm={6} md={4} lg={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }} >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    image={`https://api.wishx.me${AllBlog?.thumb}`}
                                                    height="230px"
                                                    style={{ borderRadius: "20px" }}
                                                />
                                                <CardContent style={{ padding: "0", paddingTop: "20px" }}>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        <p className='date-category'>{AllBlog.date} - category</p>
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        <h1 className='title-card'>{AllBlog?.title}</h1>
                                                            <p className='text-card'>{AllBlog?.partials[0]?.content}</p>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions className="p-0">
                                                <a href="#" className="read-article">Read article</a>
                                            </CardActions>
                                        </Card>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </TabPanel>

                </BlogCard>
            </Tabs>
            <PaginationSection>
                <a><h3>Show more</h3></a>
            </PaginationSection>
        </BlogMainSection>
    )
}

export default BlogCategory