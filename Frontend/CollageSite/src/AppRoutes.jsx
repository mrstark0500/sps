import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import GoveringBody from "./components/governing/GoveringBody";
import Gallery from "./components/galary/Gallery";
import Grievance from "./components/gravince/Grievance";
import Admission from "./components/diploma/Admission";
import About from "./components/info/About";
import PrincipalDesk from "./components/PrincipalDesk/PrincipalDesk";
import ContactPage from "./components/ContactPage";
import DiplomaEnquiryPopup from "./DiplomaEnquiryPopup";
import LearnMore from "./components/learnMore";
import Login from "./Login";
import NoticeManager from "./components/Notice";

// Teaching Staff
import General from "./components/staff/teaching/General";
import Mechanical from "./components/staff/teaching/Mechanical";
import Entc from "./components/staff/teaching/Entc";
import Computer from "./components/staff/teaching/Computer";
import Chemical from "./components/staff/teaching/CHemical";
import Automobile from "./components/staff/teaching/Automobile";
import Electrical from "./components/staff/teaching/Electrical";
import Placement from "./components/Placement";





// Animation Wrapper
import AnimatedRoute from "./components/AnimatedRoute";
import IntroRoute from "./components/IntroRoute";


function AppRoutes() {
  return (
    <Routes>
      {/* Home (NO animation) */}
      <Route path="/" element={<IntroRoute><Home /></IntroRoute>} />

      {/* Pages WITH animation */}
      <Route
        path="/governing-body"
        element={
          <AnimatedRoute>
            <GoveringBody />
          </AnimatedRoute>
        }
      />

       <Route
        path="/login"
        element={
          <AnimatedRoute>
            <Login />
          </AnimatedRoute>
        }
      />

      <Route
        path="/gallery"
        element={
          <AnimatedRoute>
            <Gallery />
          </AnimatedRoute>
        }
      />

      <Route
        path="/diplomaEnquiryPopup"
        element={
        
            <DiplomaEnquiryPopup/>
       
        }
      />
          <Route
        path="/learnMore"
        element={
        
            <LearnMore/>
       
        }
      />
       <Route
        path="/notice"
        element={
          <AnimatedRoute>
            <NoticeManager />
          </AnimatedRoute>
        }
      />
      <Route
        path="/grievance"
        element={
          <AnimatedRoute>
            <Grievance />
          </AnimatedRoute>
        }
      />
      <Route
      path="/placement"
      element={
        <IntroRoute>
          <Placement/>
        </IntroRoute>
      }/>

      <Route
        path="/admission"
        element={
          <AnimatedRoute>
            <Admission />
          </AnimatedRoute>
        }
      />

      <Route
        path="/about"
        element={
          <AnimatedRoute>
            <About />
          </AnimatedRoute>
        }
      />

      <Route
        path="/PrincipalDesk"
        element={
          <AnimatedRoute>
            <PrincipalDesk />
          </AnimatedRoute>
        }
      />
        <Route
        path="/contact"
        element={
          <AnimatedRoute>
            <ContactPage />
          </AnimatedRoute>
        }
      />

      {/* Teaching Staff */}
      <Route
        path="/staff/teaching/computer"
        element={
          <AnimatedRoute>
            <Computer />
          </AnimatedRoute>
        }
      />

      <Route
        path="/staff/teaching/chemical"
        element={
          <AnimatedRoute>
            <Chemical />
          </AnimatedRoute>
        }
      />

      <Route
        path="/staff/teaching/automobile"
        element={
          <AnimatedRoute>
            <Automobile />
          </AnimatedRoute>
        }
      />

         <Route
        path="/staff/teaching/entc"
        element={
          <AnimatedRoute>
            <Entc />
          </AnimatedRoute>
        }
      />
        <Route
        path="/staff/teaching/mechanical"
        element={
          <AnimatedRoute>
            <Mechanical />
          </AnimatedRoute>
        }
      />
      <Route
        path="/staff/teaching/electrical"
        element={
          <AnimatedRoute>
            <Electrical />
          </AnimatedRoute>
        }
      />
       <Route
        path="/staff/teaching/general"
        element={
          <AnimatedRoute>
            <General />
          </AnimatedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<h2 className="p-10">Page Not Found</h2>} />
    </Routes>
  );
}

export default AppRoutes;
