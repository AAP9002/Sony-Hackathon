module.exports = function (app, connection) {
    app.get('/api/getData', (req, res) => {
        let myPromise = new Promise(function(myResolve, myReject) {
            let query = `select * from Sensors`;
            connection.query(query, (err, result) => {
                if (err) {
                    console.log("sql broken");
                    res.status(500).send(err);
                } else {
                    console.log(result);
                    res.status(200).send("I think it worked");
                }
            });
        });
    });
}