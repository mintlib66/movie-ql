import {getMovies, getById, addMovie, deleteMovie} from "./db.js";

const resolvers = {
    Query: {
        movies:(_, {limit, rating}) => getMovies(limit, rating)
        //movie: (_, {id}) => getById(id)
        // _는 root query를 보내는 object (https://graphql.org/learn/execution/#root-fields-resolvers 참고 ) 
        //오브젝트 {} 안에 id 있어서 {id}
        
    }/*,
    Mutation: {
        addMovie: (_, {name, score}) =>  addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }*/
};

export default resolvers;