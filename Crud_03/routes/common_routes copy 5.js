const router = require( "express" ).Router();


router.get( "/", ( req, res ) =>
{
    res.render('common/home')
} )
router.get("/login", (req, res) => {
  res.render("common/login", {msg:""});
});

module.exports = router