  $.ajax({
        type: "post",
        dataType: "json",
        url: "https://passport.jd.com/uc/loginService",              //请求地址
        data: '{"uuid":"c6856aea-610b-45c0-b7c3-7d1e8130b214","eid":"671025FC4FF3ADDC3A95F369F056A5B58DBAA057CE071CA9ED387C909F4C2FD844F0DB5CA68DB0EA8734395B85714EDB","fp":"a4a20e71f5f069104781e999e8020d39", "loginname": "972212494@qq.com", "nloginpwd": "2gDNiuVlwMSNrL9NTPZ8zG4E5la/O1IXcfg2C4ut815wizO2MQ07T7jYaMVqJPtPjbvexAwdYZupRm2v0lYuRLewLdTcLV7LoN1OPFOZGrBr0IS8eaub/GwVbqvBe71O9Z8GzGe3lJY7QcWGQ5kfFAOT+CNMSBq9iwukVV42sS4=" }',
        success: function (data) {
 			 console.log(data);
              
        }
    });