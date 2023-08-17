<template>
<div>
    <!--Profile Page --> 
    <link
      href="https://fonts.googleapis.com/css?family=Lora"
      rel="stylesheet"
    />
  <div class="ProfilePage">      <!-- This div Contains the whole page provides a margin for the page -->  <!--Contains 2 sub divs 'NavBar'  'Info' - this contains the navbar and remaining data respectively --> 
   <div class="NavBar">            <!--navigation components variable 'page' is used as the flag for component changes --> 
    <div class="Options">
                            
        <div class="section" v-on:click="page=1" :style="page==1?{ color: 'white','font-weight':'bold'}:{'font-size':'1.5em'}">
            Profile
        </div>
      
     
        <div class="section" v-on:click="page=2" :style="page==2?{ color: 'white','font-weight':'bold'}:{'font-size':'1.5em'}">
            Posts
        </div>
    
   
        <div class="section" v-on:click="page=3" :style="page==3?{ color: 'white','font-weight':'bold'}:{'font-size':'1.5em'}">
            Gallery
        </div>
     
    
        <div class="section" id="last"  v-on:click="page=4" :style="page==4?{color: 'white','font-weight':'bold'}:{'font-size':'1.5em'}">
            To Do
        </div>
    
   </div>
   </div>
   <div class="Info">       <!-- Page with profile details contains all data excluding the navigation bar --> 
        <div class="header"> <!-- Contains page name and Account info --> 
           
            <div style="font-size:2em;font-weight:bold;color:#2d3142;transition:ease .2s;">   
                  {{Heading}}  <!--  page name --> 
            </div>
           
            <div style="width:40%;">  <!--  Account info --> 
                    <div  v-on:click="show=!show" style="font-size:1.5em;color:#2d3142;display:flex;justify-content:right;align-items: center;">
                        <img :src=profile.profilepicture heigth="40em" width="40em" style="border-radius:50%;">&nbsp;&nbsp;{{profile.name}}
                    </div>
                    <div class="DropDown" :style="show?{display:'block'}:{display:'none'}">                       <!--  Drop-down with username,profile,sign out etc -->
                        <img :src=profile.profilepicture heigth="100em" width="100em" style="border-radius:50%;">
                        <div style="font-size:1.5em;margin-top:2%;">
                            {{profile.name}}
                        </div>
                        <div style="font-size:1.3em;margin-top:2%;color:#aaaaaa;">
                            {{profile.email}}
                        </div>
                        <div class="Others" style="font-size:1.3em;height:10em;overflow:auto;margin:8%;">
                            <div v-for="i in data" :key="i.id" style="border-top:1px solid #dcdcdc;padding:5%;display:flex;justify-content:center;align-items: center;"> 
                                <img :src=i.profilepicture heigth="40em" width="40em" style="border-radius:50%;">&nbsp;&nbsp;{{i.name}}
                           </div>
                        </div>
                        <div style="width:100%;display:flex;justify-content: center;">
                        <div class="logout" v-on:click="SignOut()">Sign out</div>
                        </div>
                    </div>
            </div>
        </div>
     <div class="content" v-if="page==1">  <!--  Profile Details Screen  ,when 'page' is not 1 points to 'coming soon page' which given at bottom-->
     <div style="margin-top:3%;display:flex;">

                                           <!--  1st Coloumn of profile details --> 

        <div style="width:65%;justify-content:center;align-items: center;font-size:1.5em;font-weight:bold;border-right:1px solid #dcdcdc;height:30em;padding-right:3%;"> 
            <img :src=profile.profilepicture heigth="200em" width="200em" style="border-radius:50%;">
            <br>
            {{profile.name}}
            <br>
            <br>
            <table>
                <tr>
                    <td style="text-align:right;width:32%;color:#adb5bd;font-weight:normal">
                        Username :
                    </td>
                    <td style="padding-left:20px;text-align:left;">
                        {{profile.username}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        e-mail :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.email}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        Phone :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.phone}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        Website :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.website}}
                    </td>
                </tr>
            </table>
            <div style="width:100%;display:flex;align-items: center;justify-content:center;flex-direction:column">
            <div style="width:80%;border-top:1px solid #dcdcdc;"></div>
            <p style="color:#adb5bd;font-weight:normal">Company</p>
            <table>
                <tr>
                    <td style="text-align:right;width:32%;color:#adb5bd;font-weight:normal">
                        Name :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.company.name}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        catchphrase :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.company.catchPhrase}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        bs :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.company.bs}}
                    </td>
                </tr>
            </table>
            </div>
        </div>
                            <!--  2nd Coloumn of profile details --> 

        <div style="width:100%;text-align: left;padding:3%;padding-bottom:0;font-size:1.6em;">
            <p style="color:#adb5bd;font-weight:normal;">Address :</p>
            
            <table>
                <tr>
                    <td style="text-align:right;width:22%;color:#adb5bd;font-weight:normal">
                        Street :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.address.street}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        Suite :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.address.suite}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        City :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.address.city}}
                    </td>
                </tr>
                <tr>
                    <td style="text-align:right;color:#adb5bd;font-weight:normal">
                        Zipcode :
                    </td>
                    <td style="padding-left:20px;text-align:left">
                        {{profile.address.zipcode}}
                    </td>
                </tr>
            </table>
            <img src="../assets/map.jpg" >
            <br>

            <!--  lat & long Display --> 

            <div style="width:100%;display:flex;align-items: right;justify-content:right;">  
                <p style="color:#adb5bd;font-weight:normal;font-size:20px">
                    Lat : <a style="color:#2d3142">{{profile.address.geo.lat}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    Long : <a style="color:#2d3142">{{profile.address.geo.lng}}</a></p>
            </div>

            <!-- Chat Box  --> 

            <div class="footer">

                 <!-- Initial Chat icon which not expanded  --> 

                <div class="chatbox" v-if="OpenChatBox==false" v-on:click="OpenChatBox=true">
                 <a style="display:flex;align-items: right;justify-content:right;"><div id="chat-btn"></div>&nbsp;&nbsp;Chats</a>
                    <a style="font-family:Lora;font-size:20px;">^</a>
                </div>
                
                 <!-- Personsal char box for the person selected from chat list --> 

                <div class="personalchatbox" v-if="PersonalChat!=0">
                    <div class="chatbox" style=" width:90%;border-radius: 10px 10px 0px 0px;">
                    <a style="display:flex;align-items: center;justify-content:center;font-size:20px"><img :src=PersonalChat.profilepicture heigth="40em" width="40em" style="border-radius:50%;">&nbsp;&nbsp;{{ PersonalChat.name }}</a>
                        <a style="font-family:Lora;font-size:20px;transform: rotate(180deg);">^</a><a v-on:click="PersonalChat=0" style="font-size:20px;">x</a>
                    </div>

                     <!-- Comment list --> 

                    <div style="width:92%;background:white;padding:4%;font-size:20px;height:15em;overflow:auto;position:relative;">
                     <div class="chat_content" style="width:90%;background:white;padding:4%;font-size:20px;height:12em;overflow:auto;">
                      <div style="width:70%;font-size:15px;background:#e5e5e5;border-radius:10px;padding:5%;margin-bottom:10px;">Lorem Ipsum is simply dummy text </div>
                      <div style="width:70%;font-size:15px;background:#e5e5e5;border-radius:10px;padding:5%;margin-bottom:10px;">printing and typesetting industry. </div>
                      <div style="width:90%;font-size:15px;margin-bottom:10px;display:flex;align-items: center;justify-content:center;">9:16 PM</div>
                      <div v-for="a in comments" :key="a" style="width:70%;font-size:15px;background:#e5e5e5;border-radius:10px;padding:5%;margin-bottom:10px;">{{ a }}</div>
                     </div>
                     
                      <!-- Input Box --> 

                      <div style="position:absolute;bottom:0;width: 90%;display:flex;justify-content:space-between;align-items: center;padding-left:3%;padding-right:3%;">
                      <input style="width: 80%;padding:2%" placeholder="Enter text here" v-model="text"><a v-on:click="comments.push(text)" style="font-weight:900;font-size:40px;color:#0077b6;">></a>
                      </div>
                    </div>
                </div>
                <transition name="fade">

                      <!-- Chat list with list of other members along with thier status--> 

                <div class="chatboxlist" v-if="OpenChatBox==true">
                    <div class="chatbox" v-on:click="OpenChatBox=false" style=" width:90%;border-radius: 10px 10px 0px 0px;">
                    <a style="display:flex;align-items: right;justify-content:right;"><div id="chat-btn"></div>&nbsp;&nbsp;Chats</a>
                        <a style="font-family:Lora;font-size:20px;transform: rotate(180deg);">^</a>
                    </div>
                    <div class="status_list" style="width:96%;background:white;padding:2%;font-size:20px;height:20em;overflow:auto">
                        <div v-for="j in data" :key="j.id">
                            <a v-on:click="PersonalChat=j;comments=[]" style="display:flex;align-items: center;justify-content:space-between;padding-left:5%;padding-right:5%;">
                                <a style="display:flex;align-items: center;justify-content:center;"><img :src=j.profilepicture heigth="40em" width="40em" style="border-radius:50%;">&nbsp;&nbsp;{{j.name}}</a>
                                <a style="width:10px;height:10px;border-radius:50%;background:green"></a>
                            </a><br>
                        </div>
                    </div>
                </div>
                </transition>
            </div>
        </div>
    </div>
    </div>
    <div class="content" v-if="page!=1">
      <div style="height:80vh;width:100%;display:flex;justify-content:center;align-items:center;font-size:8vw;font-weight:bold;color:#e5e5e5;">
         Coming soon
      </div>
    </div>
   </div>
  </div>
</div>
</template>

<script>
export default {
name:'ProfileView',
data(){
    return{
       profile:[],
       page:1,
       show:false,
       data:[],
       OpenChatBox:false,
       PersonalChat:0,
       comments:[],
       text:'',
    }
},
created(){
this.profile=this.$store.state.CurrentUser;           //Extracts the data of the account selected from 'Landing page' which is stored in the global store. 
this.data=this.$store.state.Users;            //Extracts the data of all accounts which is stored in the global store. 
},
computed:{
Heading:function(){        //For changing page heading according to navigation action
    switch(this.page){
        case 1:
            return 'Profile';      
        case 2:
            return 'Posts';
        case 3:
            return 'Gallery';
        case 4:
            return 'To Do';    
        default:
            return 'Profile';     
    }
}
},
methods:{
SignOut(){                          //Used in 'Signout' button for navigating to 'Landing page'
  this.$router.replace("/");
}
}
}
</script>

<style>
.ProfilePage{
display: flex;
margin-left:3%;
margin-bottom:0;

}
.NavBar{
    display: flex;
    align-items:center;
    justify-content:center;
    width:20%;
    background-image: linear-gradient(#4361ee, #7209b7);
    border-radius:2.2em;
}
.Info{
    width:80%;
    padding-right:3%;
    padding-left:3%;
   
}
.Options{
    width:80%;
}
.section{
    Padding:8%;
    Margin-bottom:3%;
    font-size:1.5em;
    text-align: left;
    color: #e5e5e5;
    border-bottom: 0.5px solid white;
    transition: ease .4s;
    cursor: pointer;
}
#last{
    border: none;
}
.header{
    display:flex;
    align-items: center;
    height:5vh;
    justify-content:space-between;
    padding:2%;
    border-bottom: 1px solid #dcdcdc; 
    
}

.DropDown{
    position:absolute;
    margin-left:10%;
    padding-top:3%;
    margin-top:1%;
    z-index:1;
    width:20%;
    background:white;
    border-radius:9%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.logout {
  width: 30%;
  font-size: 16px;
  letter-spacing: 2px;
  position: relative;
  background:#e5383b;
  color: white;
  font-weight:bold;
  padding: 12px;
  text-align: center;
  margin-bottom:5%;
  border-radius: 2px;
  transition: ease .2s;
  cursor: pointer;
 }

   /* Button touch feel  */
   
 .logout:hover{
    transform: scale(.95);
 }

 .logout:active{
    transform: scale(.9);
 }

   /* customizing scroll bar */

 .Others::-webkit-scrollbar{
    display: none;
  }
  td{
    padding-bottom: 10px;
    
   
  }
  table
  {
    padding-bottom: 10px;
     width:100%;
    
  }
  .footer{
    position:relative;
    width:100%;
    display:flex;
    align-items: right;
    justify-content:right;
   
  }
  .chatbox{
    display:flex;
    align-items: center;
    justify-content:space-between;
    color:white;
    width:30%;
    height:2.5em;
    padding-left:5%;
    padding-right:5%;
    background:#0077b6;
    border-radius: 10px;
  } 
  .personalchatbox{
   position:absolute;
   display:flex;
   flex-direction:column;
   justify-content:right;
   align-items: center;
   z-index:1;
   border: 1px solid #0077b6;
   border-bottom:none;
   border-radius: 11px 11px 0px 0px;
   width:50%;
   right:55%;
   bottom: 0;
   
   
  }
  .chatboxlist{
   position:absolute;
   display:flex;
   flex-direction:column;
   justify-content:right;
   align-items: center;
   z-index:1;
   border: 1px solid #0077b6;
   border-bottom:none;
   border-radius: 11px 11px 0px 0px;
   width:50%;
   bottom: 0;
   cursor: pointer;
   
  } 

    /* Chat Icon in used in heading of the chat box*/


  #chat-btn {
  width: 40px;
  height: 25px;
  background: white;
  border-radius: 4px;
  position: relative;
}
#chat-btn:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    right: 10px;
    bottom: -10px;
    border-left: 10px solid transparent;
    border-right: 2px solid transparent;
    border-top: 10px solid white;
}

  /* customizing scroll bar */

.status_list::-webkit-scrollbar {
  width: 8px;
}


.status_list::-webkit-scrollbar-track {
  border-radius: 10px;
}
 

.status_list::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 10px;
}
.chat_content::-webkit-scrollbar {
  width: 8px;
}


.chat_content::-webkit-scrollbar-track {
  border-radius: 10px;
}
 

.chat_content::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 10px;
}

  /* Fade Transition */

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
