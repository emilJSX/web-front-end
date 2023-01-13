import react from 'react'
import { Grid, Container, Input, Image } from "@mantine/core";
import { BlogCard, BlogMainSection, BlogMainSectionError, ButtonSection, NotFoundSection, PaginationSection } from './BlogSR.Styled'
import { CustomInput } from '../../../shared/ui/İnput';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardSR } from './Card';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import glasses from '../../../style/icons/glasses.svg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const BlogSearchResult = () => {
    // Get result search and category in Main Blog for use result blog
    const { state } = useLocation()
    const [show404, setShow404] = useState(false)
    const [getResultBlog, setResultBlog] = useState()
    const [GetUserSearch, setUserSearch] = useState()
    console.log(state)

    var getResultBlogSearch = []

    getResultBlog?.map((res_blog) => (
        res_blog.partials.map((AllResBlog) => (
            getResultBlogSearch.push(AllResBlog)
        ))
    ))

    const getBlogSearch = () => {
        axios.get("https://api.wishx.me/api/v1/blog/articles/get", {
            params: {
                skip:0,
                category_id: state.GetUserCategoryId,
                search : GetUserSearch
            },
        }).then((data) => {
            let getDataSearch = data.data.data.list
            setResultBlog(getDataSearch)
            setShow404(false)
            if (getDataSearch == null) {
                setShow404(true)
            }
        })
    }

    useEffect(() => {
        axios.get("https://api.wishx.me/api/v1/blog/articles/get", {
            params: {
                skip:0,
                category_id: state.GetUserCategoryId,
                search: state.GetUserSearch
            },
        }).then((data) => {
            let getData = data.data.data.list
            setResultBlog(getData)

            if(getData == null) {
                setShow404(true)
            }

        }).catch(() => {
            setShow404(true)
        })
    }, [])
    return (
        <>
            <BlogMainSection fluid>
                <div className='instruction'>
                    <p>Main {">"} Blog {">"} Search results</p>
                    <h2>Search results</h2>
                </div>
                
                <Grid>
                    <Grid.Col span={12}>
                        <CustomInput className='inp-sect' onChange={(e)=>setUserSearch(e.target.value)} placeholder={state.GetUserSearch} />
                        <FontAwesomeIcon icon={faSearch} onClick={getBlogSearch} style={{ transform: 'translate(-50px, 0px)', float: "right", 
                        marginTop: "-28px", fontSize: "20px" }} />
                    </Grid.Col>
                </Grid>
                <div style={{ display: show404 ? "none" : 'block' }}>

                    <BlogCard fluid>
                        <Grid>
                            {getResultBlogSearch.map((res_blog) => (
                                <Grid.Col xs={12} sm={6} md={4} lg={4}>
                                    <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={`https://api.wishx.me${res_blog?.image}`}
                                                height="230px"
                                                style={{ borderRadius: "20px" }}
                                            />
                                            <CardContent  style={{padding: "0", paddingTop:"20px"}}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    <p className='date-category'>date - category</p>
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    <h1 className='title-card'>{res_blog?.title}</h1>
                                                    <p className='text-card'>{res_blog?.content}</p>
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

                    </BlogCard>
                    <PaginationSection>
                        <Stack spacing={2}>
                            <Pagination
                                count={10}
                                renderItem={(item) => (
                                    <PaginationItem
                                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </PaginationSection>
                </div>
            </BlogMainSection>
        
            <BlogMainSectionError fluid style={{ display: !show404 ? "none" : 'block' }}>
                <NotFoundSection>
                    <div class="notfound-section">
                        <h1>There is no result by this request</h1>
                        <p>Try another request or find other articles below</p>
                        <Image className='glasses-img' src={glasses} />
                    </div>
                </NotFoundSection>

                {/* <BlogCard fluid>
                    <div className='txt-section'>Other posts</div>
                    <Grid>
                            <Grid.Col xs={12} sm={6} md={4} lg={4}>
                                <Card sx={{ maxWidth: 600 }} style={{ boxShadow: "none" }} className="cart-item">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            // image={foto}
                                            height="230px"
                                            style={{ borderRadius: "20px" }}
                                        />
                                        <CardContent  style={{padding: "0", paddingTop:"20px"}}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                <p className='date-category'>date - category</p>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <h1 className='title-card'>title</h1>
                                                <p className='text-card'>text</p>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className="p-0">
                                    <a href="#" className="read-article">Read article</a>
                                    </CardActions>
                                </Card>
                            </Grid.Col>
                    </Grid>

                </BlogCard>  */}
            </BlogMainSectionError>
        </>
    )
}

export default BlogSearchResult