const api = 'https://pokeapi.co/api/v2/evolution-chain';
const axios = require('axios');
const MAXCHAIN = 419

const demo = async (req, res) => {

    // res.render('users/show', {
    // });
    axios
    .get(api + '/?limit=419')
    .then((response) => {
        res.render('demo/demo', {
        });
        // res.json({
        //     evolutions: response.data.results
        // });
    })
    .catch( (err) => {
        res.render('error', {err});
        console.log(err);
        res.json ({
            status: 500,
            message: 'Internal Server Error'
        });
    });

}

const index = (req, res) => {
    axios
    .get(api + '/?limit=419')
    .then((response) => {
        res.json({
            evolutions: response.data.results
        });
    })
    .catch( (err) => {
        res.render('error', {err});
        console.log(err);
        res.json ({
            status: 500,
            message: 'Internal Server Error'
        });
    });
}

const show = async (req, res) => {
    //const id = req.params.id;
    const id = Math.floor(Math.random()*MAXCHAIN);
    console.log(id, ' <-- req.params.id');

    try {
        const foundEvolution = await axios.get(`${api}/${id}`);
        console.log(foundEvolution.data, '<-- english information')

        const baseEvolution = foundEvolution.data.chain; // data is in nested 'evolves_to' groups 

        //const secondEvolution = baseEvolution?.evolves_to;
        if(baseEvolution.evolves_to){
            var secondEvolution = baseEvolution.evolves_to;
        }

        //const evolves_to3 = baseEvolution.evolves_to[0]?.evolves_to;
        if(baseEvolution.evolves_to[0]){
            var thirdEvolution = baseEvolution.evolves_to[0].evolves_to;
        }
        let baby = baseEvolution.species.name;
        console.log('Base: ', baby);

        //let evolutionChain =[];
        let teen = '';
        let adult = '';
        if(secondEvolution){
            let evolutionChain = secondEvolution.map(evolution => {
                teen = evolution.species.name;
                console.log('Second: ', teen);
                if(thirdEvolution){
                    thirdEvolution.map(eve =>{
                        adult = eve.species.name;
                        console.log('3rd: ', adult);
                    });
                }
                //return evolution.species.name;
            });
            // if (thirdEvolution){
            //     evlove3 = evolves_to3.map(evolution => {
            //         console.log(evolution.species.name);
            //         //return evolution.species.name;
            //     });
            // };
        }
    
        // res.json({
        //     evolution: foundEvolution.data,
        //     baby,
        //     teen,
        //     adult
        // });

        res.render('demo/demo', {
            baby,
            teen,
            adult
        });

    } catch (err) {
        res.render('error', {err});
        console.log(err);
        // res.json ({
        //     status: 500,
        //     message: 'Internal Server Error'
        // });
    }
}

module.exports = {
    demo,
    index,
    show
}