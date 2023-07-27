import React from 'react'

const Results = ({repos}) => {
    
    const renderRepo = (repo) => {
        console.log(repo)
        return (
            <div key={repo.id}>
                <h2>{repo.name}</h2>
            </div>
        )
    }
  return (
    <div>
       <div>{repos.map(renderRepo)}</div>
    </div>
  )
}

export default Results;