import React from 'react'
import { Card, Button, CardActions, CardContent, Typography } from '@mui/material'
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco ,vs2015,github, ocean} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dark ,vs} from 'react-syntax-highlighter/dist/esm/styles/prism';


export default class CodeBoard extends React.Component{

    state = {}

    constructor(props){
        super(props);
    }
    languageMap ={
        "java":"JAVA",
        "python":"Python",
        "cpp":"C++",
        "javascript":"Javascript",
        "c":"C",
        "markdown":"Markdown",
        "shell":"SHELL"

    }
    componentDidMount(){
        
        axios.get('/api/paste/' + this.props.token)
        .then((response) => {
            this.setState(response.data);
            // console.log(response.data.language)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    }

    render(){
        return (
            <Card sx={{ width: "100%"}}>
                <CardContent >
                    <Typography variant="h4" component="div">{this.state.token}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{this.state.poster} / {this.languageMap[this.state.language]}/ {this.state.paste_time}</Typography>
                    <SyntaxHighlighter style={docco} language={this.state.language} showLineNumbers lineNumberStyle={{color: '#ddd', fontSize: 20}}>{this.state.content}</SyntaxHighlighter>
                </CardContent>
                <CardActions>
                    <Button size="small"  variant="contained" color='inherit' onClick={() => navigator.clipboard.writeText(this.state.content)}>copy</Button>
                </CardActions>
            </Card>
        )
    }
}