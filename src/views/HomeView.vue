<template>
    <!--Landing Page --> 
  <div class="home">
    <link
      href="https://fonts.googleapis.com/css?family=Karla"
      rel="stylesheet"
    /> 
     <!--background wave design --> 
    <div class="curve">
      <div class="upper">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="white" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,90.7C672,64,768,96,864,133.3C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      </div>
     <!-- Account Selection table --> 
    <div class="Select_Account">
      <div class="Header">
        <a>Select an Account</a>
      </div>
      <div class="Account_List">
        <div class="Account" v-on:click="goto(i)" v-for="i in data" :key="i.id">
         <img :src=i.profilepicture heigth="40em" width="40em" style="border-radius:50%;">&nbsp;&nbsp;{{i.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data(){return{
    data:[],
  }},
  created(){
  axios.get('https://panorbit.in/api/users.json').then(res=>{         /* Accessing Data from the given API endpoint*/
  this.data=res['data']['users'];
  this.$store.commit("Totalusers", this.data);                         /* Storing all data to global store*/
  });
},
methods:{
  goto(user){
    this.$store.commit("user", user);                               /* Storing the selected account to global store*/
    this.$router.replace("/profile");
  }
}
};

</script>
<style scoped>
.home{
  font-family:'Karla';
}
.Select_Account{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius:2em;
  width:40em;
  height:40em;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
                              
.Header{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  border-radius:1em 1em 0em 0em;
  height:20%;
  font-size:1.5em;
}
.Account{
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left:3%;
  height:15%;
  font-size:1.2em;
  border-bottom: 0.5px solid #e5e5e5;
  margin-right:5%;
  margin-left:5%;
  cursor: pointer;  
}
.Account_List{
  overflow:auto;
  height:70%;
  background: white;
}
.upper{
  height: 20vh;
  font-size:0;
  background: none;
}
.curve{
  background-image: linear-gradient(#4361ee, #7209b7);
  font-size: 0em;
}
                                                   /* customizing scroll bar */
.Account_List::-webkit-scrollbar {
  width: 8px;
}

.Account_List::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
.Account_List::-webkit-scrollbar-thumb {
  background: #aaaaaa;
  border-radius: 10px;
}

</style>
