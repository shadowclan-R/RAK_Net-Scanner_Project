import '../css/Scanner.css'
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Layout from "../component/Layout";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';

const Scanner = () => {
  const [target, setTarget] = useState("");
  const [port, setPort] = useState("10");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setTarget(e.target.value)
  }

  function isValidIP(ip) {

    if (!ip) {
      return false;
    }

    const parts = ip.split('.');

    if (parts.length !== 4) {
      return false;
    }

    const isValidPart = (part) => {
      if (!part || typeof part !== 'string') {
        return false;
      }

      if (part.length > 1 && part[0] === '0') {
        return false;
      }

      const num = parseInt(part, 10);

      // Check if the parsed number is in the range 0-255
      return !isNaN(num) && num >= 0 && num <= 255;
    };

    // Check each part of the IP address
    for (const part of parts) {
      if (!isValidPart(part)) {
        return false;
      }
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const hostnameRegex = /^(?!:\/\/)([a-zA-Z0-9-]{1,63}\.?)+(?=\S*$)[a-zA-Z]{2,6}$/;

    if (isValidIP(target) || hostnameRegex.test(target)) {

    } else {
      setError("Invalid target format. Please enter a valid IP address or hostname.");
      return;
    }

    console.log("Selected port:", port);
    navigate(`/result?target=${target}&port=${port}`);
  }


  return (
    <Layout title="Network Vulnerability Scanner">
      <div className="scanner-container">
        <Navbar/>
        <main className="scanner-section">
          <div className="box">

            <div className="form-box">
              <form onSubmit={handleSubmit}>
                <label htmlFor="target" className="form-title">Target</label>
                <input type="text" className="text-input" placeholder="Target" id="target" name="target" value={target}
                       onChange={handleChange}/>
                <label htmlFor="port-selection" className="form-title">Port Selection</label>
                <select className="port-selection" id="port-selection" name="port-selection" value={port}
                        onChange={(e) => setPort(e.target.value)}>
                  <option value="10">Top 10 ports</option>
                  <option value="100">Top 100 ports</option>
                  <option value="1000">Top 1000 ports</option>
                </select>
                <button type="submit" className="submit-button-form">Start scan</button>
                <p>{error}</p>
              </form>
            </div>

            <div className="second-box">
              <h2 className="title">Networking Assessment</h2>
              <ul className="bullet-points">
                <li className="bullet-item">Assess the overall security posture of the network.</li>
                <li className="bullet-item">Identify and address vulnerabilities in firewalls, routers,
                  switches, and other security devices.
                </li>
                <li className="bullet-item">Evaluate the security and performance of wireless networks (if
                  applicable).
                </li>
              </ul>
            </div>

          </div>

        </main>
        <Footer/>
      </div>
    </Layout>

  );
}
export default Scanner;
