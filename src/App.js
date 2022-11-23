/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [logo, setLogo] = useState('ReactBlog')
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '아저씨 코트 추천', '애기 코트 추천']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ { color : 'red', fontSize : '16px' } }>{ logo }</h4>
      </div>

      <button onClick={ () => {
        // 위치를 가르키는 화살표를 의미한다.(js에서 array)
        let copy = [...글제목];
        copy[0] = '여자 코트 추천'; 
        글제목변경(copy);
        }}>글 수정</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 19일 발행</p>
      </div>
    </div>
  );
}

export default App;
