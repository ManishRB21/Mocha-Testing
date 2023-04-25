const userList = (req,res)=>{
    let data = {
        list : 'hello'
    }
    res.status(200).json({data})
}

const newsData = ()=>{
    return new Promise((resolve, reject)=>{
        resolve({otp:9000})
    })
}

module.exports = {
    userList,
    newsData
}