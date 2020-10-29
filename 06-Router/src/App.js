
import React, { useEffect } from 'react';

import {
    Route,
    Switch
} from 'react-router-dom';

import About      from './component/About';
import Article    from './component/Article';
import EditArticle from './component/EditArticle';
import Home       from './component/Home';
import Navigation from './component/Navigation';

const articles = {
    'anx':'is the teacher',
    'daniel':'asked the question',
    'danylo':'loves react !!! :D'
};

const SET = (k,v)=> localStorage.setItem(k,JSON.stringify(v));
const GET = (k  )=> JSON.parse(localStorage.getItem(k));

if ( ! localStorage.getItem('myWiki') ){
    SET('myWiki',articles);
}

export default function App() {
    const [ list, setList ] = React.useState(GET('myWiki'));
    // const state   = React.useState(articles);
    // const list    = state[0];
    // const setList = state[1];
    function changeArticle(title,value){
        // const newList = {...list};
        // newList[title] = value;
        // setList(newList);
        setList( { ...list, [title]: value });
    }
    useEffect( ()=> SET('myWiki',list), [list])
    return ( <>
        <Navigation/>
        <Switch>
            <Route path="/about" component={About}   />
            <Route path="/article/:title">
                <Article list={list}/>
            </Route>
            <Route path="/edit/:title">
                <EditArticle
                    list={list}
                    changeArticle={changeArticle}
                />
            </Route>
            <Route path="/">
                <Home list={list}/>
            </Route>
        </Switch>
    </> )
}
