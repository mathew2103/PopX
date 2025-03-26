import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, useLocation
} from "react-router";
import TextField from '@mui/material/TextField';
import { AnimatePresence, motion } from "framer-motion";
import './App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, position: "absolute", width: "100%" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
}

function main() {
  return (
    <Router>
      <App />
    </Router>
  )
}


function App() {
  const location = useLocation();

  return (
    <div className="main" style={{ position: "relative", overflow: "hidden" }}>

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

function LandingScreen() {
  return (
    <PageTransition>
      <div className='home'>
        <div className='content'>
          <div className="head">Welcome to PopX</div>
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>

          <Link to="/signup">
            <div className='button primaryBtn'>
              Create Account
            </div>
          </Link>
          <Link to="/login">
            <div className='button secondaryBtn'>
              Already Registered? Login
            </div>
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}

function LoginScreen() {
  return (
    <PageTransition>
      <div className="signin">
        <div className="head">
          Signin to your PopX account
        </div>

        <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>

        <TextField id="email" label="Email Address" type="email" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13 } } }} placeholder='Enter email address' />
        <TextField id="password" label="Password" type="password" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13, fontFamily: "Rubik" } } }} placeholder='Enter password' sx={{ marginTop: "23px", marginBottom: "14px", fontFamily: "Rubik" }} />

        <Link to="/profile">
          <div className='button tertiary'>
            Login
          </div>
        </Link>
      </div>
    </PageTransition>
  )
}

function SignupScreen() {
  const [value, setValue] = useState("Yes");

  return (
    <PageTransition>
      <div className="signup">
        <div className="">
          <div className="head">
            Create your PopX account
          </div>
          <FormControl sx={{width: "100%"}}>
            <TextField className='textField' id="name" value={"Marry Doe"} required={true} label="Full Name" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13 } } }} sx={{ height: "40px", width: "100%" }} />
            <TextField className='textField' id="phone" value={"Marry Doe"} required={true} label="Phone Number" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13 } } }} sx={{ marginTop: "29px", height: "40px", width: "100%" }} />
            <TextField className='textField' id="email" value={"Marry Doe"} required={true} label="Email Address" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13 } } }} sx={{ marginTop: "29px", height: "40px", width: "100%" }} />
            <TextField className='textField' id="pass" value={"Marry Doe"} required={true} label="Password" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13 } } }} sx={{ marginTop: "29px", height: "40px", width: "100%" }} />
            <TextField className='textField' id="company" value={"Marry Doe"} required={true} label="Company Name" slotProps={{ inputLabel: { shrink: true, sx: { color: "#6C25FF", fontSize: 13 } } }} sx={{ marginTop: "29px", height: "40px", marginBottom: "18px", width: "100%" }} />

            <div className="radioButtons">
              <div style={{ fontSize: 13 }}>Are you an Agency?<span style={{ color: "red" }}>*</span></div>
              <RadioGroup
                name="agency"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                row

              >
                <FormControlLabel value="Yes" control={<Radio sx={{ color: "#919191", '&.Mui-checked': { color: "#642AF5" } }} />} label="Yes" />
                <FormControlLabel value="No" control={<Radio sx={{ color: "#919191", '&.Mui-checked': { color: "#642AF5" } }} />} label="No" />
              </RadioGroup>

            </div>
          </FormControl>

        </div>
        <div className="">
          <Link to="/profile">
            <div className='button primaryBtn'>
              Create Account
            </div>
          </Link>
        </div>
      </div>
    </PageTransition>
  )
}

function Profile() {
  return (<>
    <div className="profile">
      <div className="topBar">
        <div className="">Account Settings</div>
      </div>

      <div className="info">
        <div className="infoHead">
          <div className="profilePic">
            <img src="/profile.png" alt="" />
            <img src="/camera.png" alt="" className='cameraIcon'/>
          </div>
          <div className="profileInfo">
          <div className="profileName">Marry Doe</div>
          <div className="profileEmail">Marry@Gmail.Com</div>
          </div>
          
        </div>
        <div className="infoDesc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>
      </div>
    </div>
  </>)
}
export default main;
