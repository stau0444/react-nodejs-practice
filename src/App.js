import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

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
function App() {
  return (
    <div>
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
    </div>   
  )
}

export default App;
