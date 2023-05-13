
const parseData = new Promise((resolve, reject) => {
    const jsonData = {
        name: 'rus',
        age: 20,
        height: 173,
    }

    const strData = JSON.stringify(jsonData);
    const dataState = true 
    if(dataState){
        resolve(strData)
    }else{
        reject(strData)
    }
})

parseData
.then((data) => {
    const parsedData = JSON.parse(data)
    console.log(parsedData);
})
.catch((data) => {
    console.error(`Ошибка в объекте ${data}`);
})