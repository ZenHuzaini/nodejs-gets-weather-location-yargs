const geo = require('./geo')
const weather = require('./weather')

const yargs = require('../node_modules/yargs')

const myfunc = (location) => {
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

yargs.command({
    command: 'checkweather',
    describe: 'to check the weather...',
    builder: {
        area: {
            describe: 'choose your area..',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        myfunc(argv.area)
    }
})

yargs.parse()

// seeIt('wroclaw')
