const UpdatesList = ({ articles }) => {
  return ( console.log('cekkk',articles),
  <>
  <ul>
    {articles && 
      articles.data.map((article) => {
        return (
          <li key={article.id}>
            <a href="#">{article.attributes.title}</a>
          </li>
        )
      })}
  </ul>
  </>
  )
}

export default UpdatesList;