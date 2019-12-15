import Mock from 'mockjs'


export default Mock.mock({
    code: '000',
    data: {
        'sid|+1': 1,
        'token|6-12': '',
        'userInfo': {
            'id': '@id',
            'name': '@cname',
            'auth|1': [
                'v3',
                'v2',
                'v1',
            ],
        }
    }
})