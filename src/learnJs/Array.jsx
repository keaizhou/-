import React from 'react'

export default function Array() {
 //数组reduce方法学习
 const objArr = [{a:1,b:"1"},{a:2,b:"2"},{a:3,b:"3"},{a:4,b:"4"},{a:3,b:"3"}]
 const a = objArr.reduce((temp,item,index,data)=>{
    temp.push(item);
    console.log(temp,"temp")
   return  temp

 },[])
 //第二个参数，作为temp的初始值,不传第二个参数的话temp对应数组第一项item对应数组第二项,，每次return操作都会被记录在temp中;
 console.log(a,"===>a")//[{a:1,b:"1"},{a:2,b:"2"},{a:3,b:"3"},{a:4,b:"4"},{a:3,b:"3"}]

 const arr = [[1,2,3],[2,3,4]]
 console.log(arr.flat());//该方法可将二维数组转换为一维数组
  return (
    <div>
      数组reduce方法学习
    </div>
  )
}
