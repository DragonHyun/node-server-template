const success = (req, res, next) => {
    res.status(200).json(
        {
            "success" : true,
            "message" : "You make success"
        }
    );
}

const paramName = (req, res, next) => {
    const name = req.params.name;

    if(!name) {
        return res.status(400).json({ err: '이름 없음' });
    }

    res.status(200).json(
        {
            "success" : true,
            "message" : 'param 예제',
            "result" : `Hello ${name}`
        }
    )
}

const querystring = (req, res, next) => {
    const queryString = req.query.name;

    if(!queryString) {
        return res.status(400).json({ err: 'queryString 없음'});
    }
    
    res.status(200).json(
        {
            "success" : true,
            "message" : 'queryString 예제',
            "result" : queryString
        }
    )
}

const message = (req, res, next) => {
    const message = req.body.message || '';

    if(!message.length){
        return res.status(400).json({ err: 'There are no message' });
    }

    res.status(200).json(
        {
            "success" : true,
            "message" : "메시지를 잘 받았습니다",
            "result" : message
        }
    )
}

module.exports = {
    success,
    paramName,
    querystring,
    message,
}