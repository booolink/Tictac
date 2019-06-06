var blocks = {type: 0}

var vm = new Vue({
  el:'#app',
  data:{        //設定一個陣列名子叫 blocks
       blocks:[],
       turn:1
  },

  mounted(){        //一個生命週期
      this.restart()
  },

  methods:{
      player_go(block){
          if(block.type==0){
          block.type = this.turn
          this.turn = -this.turn  
          }else{
              alert('已被占領')
          }

      },

      restart(){               //restart() 給這個methods:  的一個函式
          this.blocks=Array.from({length:9},function(d,i){  //this.陣列=array.from({length:9個}) 
              return {  
                  id:i+1,   // i         
                  type:0   //並且給他一個方法 是返回 type:0   ==>d
              }
          })             
      },
    },
    computed: {
      user(){
          var verify_list = "123,456,789,147,258,369,357,159"
          
            //列一個字串 , split變成陣列     .map 一個新陣列 (( 定義一個變數) function {}使用陣列  
          var res = verify_list.split(",").map((retxt) =>{
              var htt = this.blocks                       //  var  一個變數 = 在這個blocks裡面搜尋
                   .filter((d,i)=>( retxt.indexOf(i+1)!=-1))  //  filter (資料.第幾個)(type,id)  使用的是 retxt陣列搜尋 filter的i 不等於-1(有找到) 就取出
                   .map((d,i)=> d.type)                      //map(type,id) 取出type
                   .reduce((a,b)=>a+b)                       //+總
                   return   htt                             //返回做的內容
                 }) 
                            
             res = res.filter( (ans) => Math.abs(ans) == 3) 
             return res
             //   return this.turn == 1 ? "O'Turn" : "X'Turn";
               
            },
      
       
            
        text(){
            var singt_list = "123456789"
            
            var tyu = singt_list.split("").map((sfi) =>{
                var four = this.blocks
                .filter((d,i)=>(sfi.indexOf(i+1)!=-1))
                .map((f,i)=>f.type)
                    return four
                // console.table(four)
            })
                
            tyu =tyu.filter((dfd)=> Math.abs(dfd)==0) 
                    .every (Array => {     
                })
                
                return tyu
                // console.table(tyu)
            },

        win_player(){
            var winner = 0
            
            if(this.user.length > 0){
                    winner = this.user[0]
            }
            if(winner==3){
                return' O  Win'
                }else
            if(winner==-3){
                return' X  Win'
                }

            if(this.text == true){
                    return '平手'
                }
            }              


              
        
           


       
        


      
     
  

},
});



//    Array.from({length: 9},function(){
//                      return{
//                          type: 1-parseInt(Math.random()*3)//  從0產生3個數字  由1去減    parseInt得整數
//                      }
//                  })