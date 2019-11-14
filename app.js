const geo = require('./geo')
const weather = require('./weather')

const yargs = require('../node_modules/yargs')

yargs.command({
    command: 'checkweather',
    describe: 'to check the weather...',
    builder: {
        title: 'area',
        describe: 'choose your area..',
        demandOption: true
    },
    handler: function (argv) {
        seeIt(argv.area)
    }
})

const seeIt = (location) => {
    geo.geo(location, (err, dataLocation) => {
        if (err === undefined) {
            weather.weather(dataLocation.lat, dataLocation.long, (err, data) => {
                if (err === undefined) {
                    console.log('location : ', dataLocation.location)
                    console.log(data)
                } else {
                    console.log(err)
                }
            })
        } else {
            console.log(err)
        }
    })
}

seeIt('wroclaw')
