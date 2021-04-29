/**
 * ------------------------------------
 * File: c:\Users\LiuQixuan\Desktop\domWork\vue\my-vue-app\src\components\utils\weatherIcon.ts
 * Project: c:\Users\LiuQixuan\Desktop\domWork\vue\my-vue-app
 * Created Date: 2021-04-28  15:07:02
 * Author: LiuQixuan(liuqixuan@hotmail.com)
 * -----
 * Last Modified:  2021-04-29  16:46:22
 * Modified By: LiuQixuan
 * -----
 * Copyright 2020 - 2021 AIUSoft by LiuQixuan
 * ------------------------------------
 */

const iconList:{[key:string]:string} = {
  "晴": "01",
  "多云": "02",
  "阴": "03",
  "小雨": "08",
  "中雨": "09",
  "大雨": "10",
  "暴雨": "11",
  "大暴雨": "12",
  "特大暴雨": "13",
  "阵雨": "04",
  "雷阵雨": "05",
  "雷阵雨伴有冰雹": "06",
  "小雪": "15",
  "中雪": "16",
  "大雪": "17",
  "阵雪": "14",
  "雨夹雪": "07",
  "暴雪": "18",
  "霾": "24",
  "雾": "19",
  "冻雨": "20",
  "沙尘暴": "21",
  "小雨-中雨": "09",
  "中雨-大雨": "10",
  "大雨-暴雨": "11",
  "暴雨-大暴雨": "12",
  "大暴雨-特大暴雨": "13",
  "小雪-中雪": "15",
  "中雪-大雪": "16",
  "大雪-暴雪": "17",
  "浮尘": "23",
  "扬沙": "22",
  "强沙尘暴": "21",
}

function getWeatherId(weatherNm:string):string {
  let result:string ="01"
  // console.log("getWeatherId",weatherNm)
  if(iconList[weatherNm]!==undefined){
    result = iconList[weatherNm]
  }else{
    let keys = Object.keys(iconList)
    for(let i = 0;i<keys.length;++i){
      if (weatherNm.lastIndexOf(keys[i]) !== -1) {
        result = iconList[keys[i]]
        break
      }
    }
  }
  return result
}

export {getWeatherId}