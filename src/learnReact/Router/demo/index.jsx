import React from 'react'
import {Route,Link} from "react-router-dom"

import "./index.css"

export default function Demo() {
  const Welcome = ()=>{
    return <h1>欢迎进入学生管理系统</h1>
  }
 
  const Students = ()=>{
    return <h1>学生管理</h1>
  }
  const StudentAdd = ()=>{
    return <h1>添加学生</h1>
  }
  const Courses = ()=>{
    return <h1>课程列表</h1>
  }
  const CoursesAdd = ()=>{
    return <h1>添加课程</h1>
  }
  return (
    <div className="wrapper">

      <div className="header">学生管理系统</div>
      <div className="middle">
        <aside className="aside">
          <ul className="menu">
            <li><Link to="/students">学生管理</Link></li>
            <li><Link to="/students/add">添加学生</Link></li>
            <li><Link to="/courses">课程列表</Link></li>
            <li><Link to="/courses/add">添加课程</Link></li>
          </ul>
        </aside>
        <div className="main">
{/* <Switch> */}
        <Route path = "/" exact component={Welcome}/>
        <Route path="/students" exact component={Students}/>
        <Route path="/students/add" exact component={StudentAdd}/>
        <Route path="/courses" exact component={Courses}/>
        <Route path="/courses/add" exact component={CoursesAdd}/>
        {/* </Switch> */}
        </div>
      </div>
    </div>
  )
}
