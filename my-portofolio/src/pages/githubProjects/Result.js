import React from 'react'

export const Result = (props) => {
    const {repos}=props
    console.log('repos is:',repos)


    const listRepos=repos.length ?repos.data.map((item)=>{
        <li>{item.name}</li>}):null
    
  return (
    <div><ul><li>{listRepos}</li></ul></div>
  )
}
