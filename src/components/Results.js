import React from 'react'

const Results = ({repos}) => {
    
    const renderRepo = (repo) => {
        //console.log(repo)
        return (

            <div key={repo.id}>
                <p onClick={() => console.log('hi')}>{repo.name}</p>
            </div>
        )
    }
  return (
    <div> {repos.length > 0 ? (
        <h1>{repos[0].owner.login}</h1>
        
    ) : (
        ''
    )}
        
       <div>{repos.map(renderRepo)}</div>
    </div>
  )
}

export default Results;