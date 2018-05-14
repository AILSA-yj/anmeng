//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    itemArray:[
      {
        img:"item1.png",
        heading:"长安美食汇",
        subheading:"长安大学城美食一网打尽"
      },{
        img: "item1.png",
        heading: "社团",
        subheading: "志趣相投人的秘密基地"
      },
      {
        img: "item1.png",
        heading: "实验室",
        subheading: "为社会主义事业添砖加瓦"
      }, 
      {
        img: "item1.png",
        heading: "专业",
        subheading: "好好学习，天天向上"
      },
      {
        img: "item1.png",
        heading: "自家后院",
        subheading: "匪窝"
      }
    ],
    pageurls:[
      "food/food",
      "club/club",
      "lab/lab",
      "major/major",
      "myhome/myhome"
    ],
    thispageurl:"food/food"
  }
})
