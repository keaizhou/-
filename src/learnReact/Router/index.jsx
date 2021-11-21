import React from 'react'
import {BrowserRouter ,Route,Switch,Redirect} from "react-router-dom"
import Demo from "../Router/demo"
import Login from '../Router/demo/login'

export default function Router() {
  //React路由
    //站点：产品线下又会分成多个产品，每个产品可能有多个站点，一个站点就是一个域名，一个站点下面可能有很多的功能块。
    //无论是使用什么框架开发的单页应用程序，可能只是该站点的一部分，一个单页应用可能划分为多个页面（组件）
    //如果要在单页应用中完成组件的切换，需要实现两个功能：1、根据不同的页面地址，展示不同的组件
                                               //2、完成无刷新的地址切换
                                               //实现以上两个功能的插件称为路由。

   //React-router:路由核心库，包含了诸多和路由功能相关的核心代码
    //提供了两个重要组件，需要组合起来用：
      //Router：本身不做任何展示，只提供路由模式配置，会产生上下文，会产生一些使用的对象和方法，供其他组件使用
        //HashRøuter:该组件使用哈希模式匹配
        //BrowserRøuter:该组件使用BrowserHistory模式匹配,通常该组件只有一个，将该组件包裹整个页面
      //Route：根据不同的地址展示不同的组件，可以写在任意地方，只要在Router的后代组件里面
      //Switch：匹配到第一个route会立即停止匹配
   //react-router-dom：利用路由核心库，结合实际的页面，实现跟页面路由密切相关的功能。

   //页面中实现路由需要安装react-router-dom库。

   //路由信息：Router会创建一个山下文，并且注入一些信息，该上下文对开发者时隐藏的，route组件若匹配到地址，则会将这些山下文中的信息作为属性传入对应的组件。
      //用props.history
const S = (props)=>{
  //不能直接使用window.histoty：因为有两种路由模式，如果用哈希模式需要改很多代码，用window.histoty只能应用BrowserRouter；
                            // window.histoty.pushstate用这个方法时，没有办法接收到任何通知，将导致react无法知晓地址的变化，结果会无法重新渲染。
  return <div onClick={()=>{props.history.push(`/e${`?i=${3+3}`}`)}}> 跳转到组件E</div>
}
const E = (props)=>{
  return <div onClick={()=>{props.history.push("/s")}}>组件E,跳转到S</div>
}


   //   /a
   const A = ()=>{
     return <h1>组件A</h1>
   }
   //   /b
   const B = ()=>{
    return <h1>组件B</h1>
  }
  //   /c
  const C = ()=>{
    return <h1>找不到页面</h1>
  }

  return (
    <BrowserRouter>
    <Switch>
      {/* 用 Switch包起来，匹配到第一个地址以后就不会匹配了，该组件里面只能放Route组件，因为它会循环所有子元素渲染*/}
    <Route path="/a" exact component={A}/>
      {/* Route的两个重要属性： path:匹配的路径默认情况下不区分大小写，component：匹配成功后要显示的组件 */}
      {/* sensitive为true区分大小写 */}
      {/* 不是严格匹配，会显示两个组件，想要精确匹配，配置exact属性为true */}
      {/* 可以写子元素，没有Switch包裹的前提：1、传递react，无论是否匹配一定会显示children，并且会忽略component属性。2、传递一个函数，有多个参数，来源于上下文，返回react元素一定会显示 */}
    <Route path="/a/b" exact  component={B}/>
    <Route  path="/a/c" exact  component={C}/>
    <Route path="/e" exact  component={E}/>
    <Route  path="/s" exact  component={S}/>
    {/* 匹配不到时会匹配到最后一个随意匹配的组件 */}
    <Route  path="/login" exact  component={Login}/>

    <Route  path="/"   component={Demo}/>
    

    </Switch>


      
    </BrowserRouter>
  )
}
// 两种模式：路由：根据不同的页面地址，展示不同的组件（在单页应用里面路由时这样的）
    //url地址组成:https(协议名：schema)://www.baidu.com（主机名：host可能包含IP地址、预设值localhost、域名、局域网中的计算机名）
    // :8080（端口号：port）/news/1-2.html（访问路径：path）?ie=utf-8&f=8&rsv_bp=1（地址参数：search，表示附带的数据）#sfasf（哈希：hash，锚点）
//hash router :哈希路由，兼容性最好
    //根据URL地址中的哈希值来确定显示的组件
    //>哈希值的变化，不会导致页面刷新
    //获取哈希值localtion.hash（）
//borrower history router :浏览器历史记录路由：
    //history表示浏览器的历史记录，以栈的方式存储记录（H5新增API）。
    //history.length:获取栈中数据量。
    //history.pushstate:向当前历史记录栈中加入一条新的记录。
    //history.pushstate（附加数据可以说任何类型：不用 ， 页面标题大部分浏览器不支持写null代替 ， 新的地址）。
    //history.replaceState:将当前的指针方向指向历史记录，替换为某个记录（附加数据可以说任何类型：不用 ， 页面标题大部分浏览器不支持写null代替 ， 新的地址）。


//通常用三方库query-string来解析URL的信息
//match（），包含了一些路由信息：
      // isExact:当前路径和路由配置的路径是否精确匹配
//向某个页面传递数据的方式：
  //哈希时可以把数据放到path里面用  :const  来表示，用params获取，history.match（）返回的信息里面有params
    //<Route  path="/a/:year（可以写正则约束）" exact  component={C}/>
  //利用state，push页面时加入state
  //利用search，把数据写在地址栏中的？后

//没有用route包含的组件，props里面不会被注入路由信息，如果这些组件需要获取到路由信息可以使用下面的方法：
  //1、可以从富足见一层一层传递到子组件
  //2、用withrouter包装以下，后面使用新的组件就好。const a = withrouter(原组件)

//其他组件：
  //Link:不刷新页面生成一个a元素: <li><Link to="/courses/add">添加课程</Link></li>
      //to:可以是个字符串或者对象{{pathname:"/courses/add",hashL"/aeew",search:"?a=1"}}
      //innerRef:可以会讲对象传到函数上
  //NavLink:Link组件具有的功能它都有，并且它可以根据当前地址和链接地址来决定元素该链接的样式
  //Redirect:重定向组件，当加载到该组件时，会自动跳转（无刷新）到另外一个地址: //to:可以是个字符串或者对象{{pathname:"/courses/add",hashL"/aeew",search:"?a=1"}}
  //<Redirect to="/s"></Redirect>