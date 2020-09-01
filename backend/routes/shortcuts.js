const express = require('express');
const User = require('../dataBase/models');
const randomStr = require('../utils/randomStr');
const tokenMdwr = require('../middlewares/tokenMiddleware');

const router = express.Router();

// greate new shorten url

router.post('/', [tokenMdwr], async (req, res) => {

    try {
        const { fullURL } = req.body;
        const { id } = req.user;

        const user = await User.findById(id);

        const isExistURLDataObj = user.links.find((obj) => obj.fullURL === fullURL);

        if (isExistURLDataObj) {
            return res.status(200).json(isExistURLDataObj);
        }

        const shortStr = randomStr(4);

        const shortenURL = `http://localhost:5000/shortcuts/${shortStr}`;

        const URLDataObj = {
            fullURL,
            shortenURL,
            description: '',
            tags: [],
        };

        await User.findByIdAndUpdate(id, { $push: { links: URLDataObj } });

        res.status(201).json(URLDataObj);
    } catch (err) {
        res.status(400).json({ errors: [{ msg: 'Server error' }] });
    }
});

router.get('/', tokenMdwr, async (req, res) => {
    try{

        const { id } = req.user;

        const user = await User.findById(id);

        if(!user){
            res.status(400).json({ errors: [{ msg: 'User is not found' }] });
        }

        res.status(200).json(user.links);
        

    }catch(error){
        res.status(400).json({ errors: [{ msg: 'Server error' }] });
    }
});

router.get('/:urlId', async (req, res) => {

    const {originalUrl} = req;

    const shortenUrl = `http://localhost:5000${originalUrl}`;

    console.log(originalUrl);

    try{

        const urlSearchResFromDb = await User.findOne({'links.shortenURL': shortenUrl}).select('links');
        
        const urlDataObjArr = urlSearchResFromDb.links;

        const urlDataObj = urlDataObjArr.find(el=>el.shortenURL=== shortenUrl);

        if(!urlDataObj){
            return res.status(404).json({ errors: [{ msg: 'URL not found' }] });
        }

        const {fullURL} = urlDataObj;
        
        return res.redirect(fullURL);

    }catch(error){
        return res.status(400).json({ errors: [{ msg: 'Server error' }] });
    }

});

router.put('/:urlId', tokenMdwr, async(req, res)=>{
    

    if(!req.query.tag){
        const {desc} = req.body;
        const {originalUrl} = req;
    
        const shortenUrl = `http://localhost:5000${originalUrl}`;
    
        try{
    
            const urlSearchResFromDb = await User.findOne({'links.shortenURL': shortenUrl}).select('links');
    
            const urlDataObjFromArr = urlSearchResFromDb.links.find(urlObj=>urlObj.shortenURL === shortenUrl);
    
            urlDataObjFromArr.description = desc;
    
            await User.findOneAndUpdate({'links.shortenURL': shortenUrl},{$set: {'links':urlSearchResFromDb.links}});
    
            return res.status(200).json(urlDataObjFromArr);
            
        }catch(error){
            res.status(400).json({ errors: [{ msg: 'Server error' }] });
        }
    }else{
        try{
            const originalUrl = req.originalUrl;

            const url = originalUrl.split('?')[0];
            
            const shortenUrl = `http://localhost:5000${url}`;
            const {tag} = req.query;
            const urlSearchResFromDb = await User.findOne({'links.shortenURL': shortenUrl}).select('links');
            const urlDataObjFromDb = urlSearchResFromDb.links.find(el=>el.shortenURL === shortenUrl);

            const tagIsExist = urlDataObjFromDb.tags.find(el => el === tag);

            if(tagIsExist){
                return res.status(200).json(urlDataObjFromDb);
            }else{
                urlDataObjFromDb.tags.push(tag);

                await User.findOneAndUpdate({'links.shortenURL': shortenUrl}, {links: urlSearchResFromDb.links});
        
                return res.status(200).json(urlDataObjFromDb);
            }
            
            
            
        }catch(error){
            res.status(400).json({ errors: [{ msg: 'Server error' }] });
        }
    }

    

});

module.exports = router;
