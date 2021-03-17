import React, { useState , useEffect, useCallback } from "react";
import firebase from 'firebase';
import {Helmet} from "react-helmet";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import "firebase/auth";
import fire from '../../setupFirebase';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../../Spinner/LoadingSpinner";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import pic from "../../Datalytix Vectors/PNGs/demoPage.webp";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import person from "../../assets/images/demo/person.PNG";
import suit from "../../assets/images/demo/suitcase.PNG";
import phone from "../../assets/images/demo/phone.PNG";
import message from "../../assets/images/demo/message.PNG";
import org from "../../assets/images/demo/organisation.PNG";
import drop from "../../assets/images/demo/drop.PNG";

import "./demo.css";
import { render } from "@testing-library/react";


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];
var currentOffset,ISTOffset,ISTTime,hoursIST,minutesIST,date,d,dayName;
const timeset = () => {
   d = new Date();
 date = d.getDate();
dayName = days[d.getDay()];
 currentOffset = d.getTimezoneOffset();
 ISTOffset = 330; 
 ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset)*60000);
 hoursIST = ISTTime.getHours();
 minutesIST = ISTTime.getMinutes();
}

var uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if(userInfo.isNewUser && userInfo.providerId === 'password') {
        try {
          await authResult.user.sendEmailVerification();
          console.log("Check your email please");
        }
        catch (e) {
          console.log(e);
        }
      }
      return false;
    }
  }
};

const signOut = () => {
  firebase.auth().signOut().then(function() {
    console.log("Successfully Signed out");
  }).catch(function () {
    console.log('Error Signed out');
  })
};

const platform = () => {
  window.location= "http://platform.datalytix.in/";
};

const Demo = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [name,setname]=useState('');
  const [orgi,setorg]=useState('');
  const [email,setEmail]=useState('');
  const [phoneno,setphone]=useState(Number);
  const [options,setoption]=useState('');
  const [msg,setmsg]=useState('');

  const [user,setUser] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setoption(event.target.value);
   
  };

  const handleLogin = () => {
    fire.auth().signInWithEmailAndPassword(email, password).catch((err)=>{
      switch (err.code) {
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
      }
    });  
  };

  const handleSignup = () => {
    fire.auth().signInWithEmailAndPassword(email, password).catch((err)=>{
      switch (err.code) {
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
      }
    });  
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClickTodo =async (e) => {
    e.preventDefault();
    // const isvalid = validatetitle();
    
  if(true) {
    console.log(name,orgi,email,phoneno,options,msg)
    timeset();
  try {
    setIsLoading(true);


  const response = await fetch("https://datalytix1.herokuapp.com/subscriber",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body : JSON.stringify({
    name:name,
    
    email:email,
   
    option:options,
   
    time:monthNames[d.getMonth()]+" "+date+" "+dayName+" "+hoursIST+":"+minutesIST+" IST"
  })
  });
  
  const responseData = await response.json();
  console.log(responseData,"Sssssssssssssssssssssssss");
  if(!response.ok) {
  
  window.alert(responseData.message);
  throw new Error(responseData.message);
  }
  // UserManageHandle(responseData);
  // setresponse(responseData);
  
  
  
  setIsLoading(false);
  } catch(err) {
  console.log(err,"sssssssssssscccccccccccccccccccccccccccc");
  
  setIsLoading(false);
  } 
  }
  history.push(`/modules_demo`);
  }

  

  useEffect(() => {
    const user = firebase.auth().currentUser;

    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    });
    return authObserver;
  })

  

  if(user) {
    // window.location = 'http://platform.datalytix.in/';
    return (
        <div  style={{ margin: "auto",textAlign:"center",margin: "12rem",paddingBottom: "7rem", fontFamily: "poppins", fontSize:"24px" }}>Welcome, {user.displayName}
        <div style={{ margin: "auto",textAlign:"center",padding: "1rem", fontFamily: "poppins", fontSize:"18px" }}>{user.email}</div> <br/><br/>
        <p style={{ margin: "auto",textAlign:"center", fontFamily: "poppins", paddingBottom: "2rem", fontSize:"18px" }}>proceed to datalytix platform</p>
        <button type="button" id="platform" class="platform" style={{ margin: "auto",textAlign:"center", fontFamily: "poppins", color:"white", background: "#092685", borderRadius: "5px", fontSize:"18px"}} onClick={platform}>datalytix platform</button>
        <br/>
        <br/>
        <button type="button" id="signout" class="signout" style={{ margin: "auto",textAlign:"center", position: "absolute", top: "150px", right: "150px", fontFamily: "poppins", color:"white", background: "#8d225d", borderRadius: "5px", fontSize:"18px"}} onClick= {signOut} >Sign out</button>
        </div>
    )
  }
  else {
    return (
      <div className="Demo_main fixed_header_margintop">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Datalytix | Demo - Try our Platform</title>
          <meta name="description" content="Please sign-in with your details to access a basic trial version of our platform. Contact us for more and if you are interested to get a personalized demo." />
        </Helmet>
        <div className="container">
        <div className="res_title">
          <h3>
          Please sign-in with your details to access a basic trial version of our platform. Contact us if it is interesting and you would like to know more about how we can help your businesses gain a deeper understanding from Alternative Data. We would be happy to jump on the email thread or provide you with a personalized demo.
          </h3>
        </div>
          <div className="row demo_contain">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 part1_demo">
              <div style={{ margin: "auto",textAlign:"center"}}>
                <div>
                <img src={pic} alt="analytix" />
                </div>
                <div className="demo_info_img_bottom">
                  Datalytix uses over 300 unique alternative data signals to find
                  the right answers and provide you with a different perspective
                  to drive increased yields and revenue.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-6 part2_demo">
            {isLoading && <Spinner asOverlay/>}
            <div style={{paddingTop: "2rem"}}>
              <h2 style={{fontFamily: "Poppins", color: "#20435e", padding: "1rem", textAlign:"center" }}>Sign In</h2>
            <StyledFirebaseAuth uiConfig= {uiConfig} firebaseAuth = {firebase.auth()}>
                           
            </StyledFirebaseAuth>
            </div>
            {/* <div className="login">
              <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
              </div>
            </div> */}
              {/* <div className="demo_right">
                <div className={classes.margin}>
                <ul class="tab-group">
                  <li class="tab active"><a href="#signup">Sign Up</a></li>
                  <li class="tab"><a href="#login">Log In</a></li>
                </ul>
                  <Grid container spacing={3} alignItems="flex-end">
                    <Grid item>
                      <div>
                        <img src={person} alt="person" />
                      </div>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Full Name"
                        className="name_input"
                        onChange={(e)=>{setname(e.target.value)}}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} alignItems="flex-end">
                    <Grid item>
                      <div>
                        <img src={suit} alt="person" />
                      </div>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Organiation"
                        className="name_input"
                        onChange={(e)=>{setorg(e.target.value)}}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} alignItems="flex-end">
                    <div className="org">
                      <img src={org} alt="person" />
                    </div>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Email"
                        className="name_input org_text"
                        onChange={(e)=>{setemail(e.target.value)}}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} alignItems="flex-end">
                    <Grid item>
                      <div>
                        <img src={phone} alt="phone" />
                      </div>
                    </Grid>
                    <Grid item>
                      <TextField
                        id="input-with-icon-grid"
                        label="Mobile Number"
                        className="name_input"
                        onChange={(e)=>{setphone(e.target.value)}}
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className="demo_button_container">
                  
                  <button onClick={(e) => handleClickTodo(e)} style={{borderRadius:"4px"}} className="demo-but">SUBMIT<span className="try_us_buttn"></span></button>
  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      // </div>
    );
  }
  return (
    <div className="Demo_main fixed_header_margintop">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Datalytix | Demo - Try our Platform</title>
          <meta name="description" content="Please sign-in with your details to access a basic trial version of our platform. Contact us for more and if you are interested to get a personalized demo." />
        </Helmet>
      <div className="container">
      <div className="res_title">
        <h3>
          We classify the sentiments of the articles where the concerned brand name has appeared. Using our propriety 
          NLP algorithm, we are able to quantify the sentiments that act as a brand indicator.
        </h3>
      </div>
        <div className="row demo_contain">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 part1_demo">
            <div style={{ margin: "auto",textAlign:"center"}}>
              <div>
              <img src={pic} alt="analytix" />
              </div>
              <div className="demo_info_img_bottom">
                Datalytix uses over 300 unique alternative data signals to find
                the right answers and provide you with a different perspective
                to drive increased yields and revenue.
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 part2_demo">
          {isLoading && <Spinner asOverlay/>}
            <StyledFirebaseAuth uiConfig= {uiConfig} firebaseAuth = {firebase.auth()}>
              
            </StyledFirebaseAuth>
            {/* <div className="demo_right">
              <div className={classes.margin}>
              <ul class="tab-group">
                <li class="tab active"><a href="#signup">Sign Up</a></li>
                <li class="tab"><a href="#login">Log In</a></li>
              </ul>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item>
                    <div>
                      <img src={person} alt="person" />
                    </div>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Full Name"
                      className="name_input"
                      onChange={(e)=>{setname(e.target.value)}}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item>
                    <div>
                      <img src={suit} alt="person" />
                    </div>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Organiation"
                      className="name_input"
                      onChange={(e)=>{setorg(e.target.value)}}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="flex-end">
                  <div className="org">
                    <img src={org} alt="person" />
                  </div>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Email"
                      className="name_input org_text"
                      onChange={(e)=>{setemail(e.target.value)}}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="flex-end">
                  <Grid item>
                    <div>
                      <img src={phone} alt="phone" />
                    </div>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="input-with-icon-grid"
                      label="Mobile Number"
                      className="name_input"
                      onChange={(e)=>{setphone(e.target.value)}}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="demo_button_container">
                
                <button onClick={(e) => handleClickTodo(e)} style={{borderRadius:"4px"}} className="demo-but">SUBMIT<span className="try_us_buttn"></span></button>

              </div> */}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Demo;
