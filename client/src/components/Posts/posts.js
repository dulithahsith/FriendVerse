import React from 'react';
import Post from '../Posts/Post/post'
import useStyles from './styles';

const Posts =() => {
    const classes = useStyles();
    return(
        <>
        <h1 className={classes.mainContainer}>POSTS</h1>
        <Post />
        <Post />
        </>
    );
}
export default Posts;