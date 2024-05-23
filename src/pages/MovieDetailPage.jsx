import { useLoaderData, useNavigate } from 'react-router-dom'
import CreateRatingForm from '../components/CreateRatingForm.jsx'
import axios from 'axios'

export default function MovieDetailPage() {
  const {movie} = useLoaderData()

  const navigate = useNavigate()

  const handleCreateRating = async (event, { score }) => {
    event.preventDefault()

    const res = await axios.post('/api/ratings', 
      { 
        movieId: movie.movieId,
        score: score
      }
    )

    if (res.data) {
      navigate('/me')
    }
  }

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.posterPath} alt={movie.title} style={{width: '200px'}} />
      <p>{movie.overview}</p>
      <h2>Rate this movie</h2>
      <CreateRatingForm onCreateRating={handleCreateRating} />
    </>
  );
}
