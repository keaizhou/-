import React,{useRef ,useImperativeHandle} from "react";
const  Test = (props,ref) => {
  useImperativeHandle(ref,()=>{
    //如果不写依赖项，则每次运行函数组件都会调用该方法，如果使用依赖项则第一次调用后进行缓存，只有依赖项发生变化时才会重新调用；
    //相当于给ref.current = method()
   return {
    method(){
    alert("method被调用啦")
    }
   }
  },[])

    return <h1>ImperativeHandle 学习</h1>
}
const TestWrapper = React.forwardRef(Test);//forwardRef给它一个组件，会包装后返回一个类组件

export default function ImperativeHandle() {
  const ref = useRef();
  return (
    <div>
      {/* 此刻会把ref加到props的后一个参数 */}
      <TestWrapper ref= {ref}></TestWrapper>
      <button onClick={()=>{
        ref.current.method()
        }}>点击调用method</button>
    </div>
  )
}
