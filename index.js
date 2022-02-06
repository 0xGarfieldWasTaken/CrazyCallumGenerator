var fs = require('fs');
const baseURI = "QmNTy4n5uHhsMZQJGj4hUkH6NobFapwHZzyDLMqD4ewezu"

for (let i = 0; i < 11; i++){
    const metadata = {
        image: `ipfs://${baseURI}/${i}.jpg`,
        name: `Crazy Callum #${i}`,
        description: "A Very Crazy Callum",
        thiccness: 10000
    }

    var json = JSON.stringify(metadata)
    fs.writeFile(`Metadata/${i}`, json, 'utf8', function(err){
        if (err){
            console.log(err)
        }
    });

}