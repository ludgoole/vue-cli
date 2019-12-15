import Mock from 'mockjs'


export default Mock.mock({
    code: '000',
    data: {
        'list|2-10': [{
            // id
            'sid|+1': 1,
            'guid': '@guid',
            'id': '@id',
    
    
            // card
            'title': '@ctitle',
            'paragraph': '@cparagraph',
            'image': "@image('200x100', '#4A7BF7', 'Hello')",
    
            // form
            'user': '',
            'telephone': '@integer',
            'email': '@email',
            'password|6-12': '',
            'sex|1-2': true,
           
    
            // table
            'id|1-100': '@integer',
            'date': '@date("yyyy-MM-dd")',
            'time': '@time("HH:mm:ss")',
            'ip': '@ip',
            'url': '@url',
            'color|1': [
                'red',
                'green',
                'blue'
            ],
            "city|2-4": {
                "110000": "北京市",
                "120000": "天津市",
                "130000": "河北省",
                "140000": "山西省"
            },
        }]
    }
})