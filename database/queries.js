const { User, Movie } = await import ('./model.js')

const user = await User.findByPk(1)
console.log(user)

const ratings = await user.getRatings({ 
    include: {
        model: Movie,
        attributes: ['title'],
    },
})
