/**
 * Created by xiaohe on 2018/6/27.
 */
var Mock = require('mockjs');
Mock.mock('/a',{
    "AppB|1-15":[
        {
            "name|+1":"AppB的测试数据"
        }
    ],
    "AppD|1-10": [
        {
            "name|1":Mock.mock('@ctitle()')
        }
    ]
});
// console.log(JSON.stringify(data, null, 4))