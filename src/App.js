import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { render } from '@testing-library/react';

const styles= theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit*3, 
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})

const customers=[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'황경욱1',
  'birthday':'920706',
  'gender':'남자',
  'job':'학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'111116',
  'gender':'남자',
  'job':'학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/any',
  'name':'김구라',
  'birthday':'222226',
  'gender':'남자',
  'job':'학생'
}

]
class App extends Component {
  render(){
    const {classes}=this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
            </TableHead>
            <TableBody>
              {
                customers.map(c=>{
                  return(
                    <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                    />
                  )
                })
              }
          </TableBody>
          </Table>
      </Paper > 
    )
  }
}

export default withStyles(styles)(App);
