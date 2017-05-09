const dns = require('dns')
const {json, send} = require('micro')

module.exports = async (req, res) => {
    const data = await json(req)

    if (!data || !data.host || !data.rrtype) {
        return send(res, 400, {error: `request must have ${JSON.stringify({host: 'string', rrtype:'DNS_RECORD_TYPE'})}`})
    }

    dns.resolve(data.host, data.rrtype || 'A', (err, recs) => {
        if (err) {
            return send(res, 500, {error: err})
        }

        send(res, 200, {records: recs})
    })
}