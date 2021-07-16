const {Router} = require('express')
const router = Router()

router.get('/search', (req, res) => {
    res.render('searchPage', {
        
    }) 
})

module.exports = router