// app/controllers/index.js
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';


export default Controller.extend({
    loginactive: true,
    registeractive:true,
    actions: {

        toggle : function(tab){  
            this.set('loginactive',false) 
            this.set('registeractive',true) 

            if(tab==='login')  {
                this.set('loginactive',true) 
                this.set('registeractive',false) 
            }              
        },
        Login:function(){  
            var mycontroller = this;
            var walletName = this.get('name');
            console.log(walletName);
            var password = this.get('password');
            console.log("password", password);
            var inputs = {
                "walletName": walletName,
                "password": password
            }


            $.ajax({
                type: "POST",
                url: 'http://localhost:3007/login',
                data: JSON.stringify(inputs),
                contentType: "application/json",
                dataType: "json",
                success: function(response) {
                    console.log(JSON.stringify(response));
                    console.log("response=====>>", response);
                    var walletname=response.usertype.walletName
                   
                    var usertype = response.usertype.usertype;
                    console.log("usertype==========>>" + usertype)
                    var userId = response.userid;
                    console.log("userId==========>>" + userId)
                    mycontroller.set('userId',userId)

                    if (usertype === 'user') {
                        console.log("login done")
                        // swal(
                        //     'Good job!',
                        //     'Login Successful',
                        //     'success'
                        // )
                        console.log("walletname===>>" + walletname)
                        mycontroller.set('walletname',walletname)
                        mycontroller.transitionToRoute('DashBoard')
                    } else if (walletName == "Admin@info.com") {
                        console.log("admin loged in")
                        mycontroller.transitionToRoute('dashboard')
                    } else if (walletName == "divisional@rapid.com") {
                        console.log("Institute@info.com loged in")
                        mycontroller.transitionToRoute('divisionalboard')
                    } else if (walletName == "Employer@info.com") {
                        console.log("entering employer dashboard")
                        mycontroller.transitionToRoute('employerdashboard')
                    }else if(walletName == "Institution@info.com"){
                        mycontroller.transitionToRoute('InstituteDashboard')
                    }
                }

            });   
    }
}
});