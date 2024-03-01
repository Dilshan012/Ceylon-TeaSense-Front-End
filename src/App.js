import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ImageUploader from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';
import Categories from './components/Categories';
import About from './components/About';


function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [result, setResult] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleResult = (response) => {
    console.log('Result received:', response);
    setResult(response.predicted_class);
    setUploadedImage(response.uploaded_image);
  };

  const handleReset = () => {
    setResult(null);
    setUploadedImage(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div style={{ marginTop: "120px" }}>
            <ImageUploader onResult={handleResult} />
            {result !== null ? (
              <ResultDisplay result={result} uploadedImage={uploadedImage} />
            ) : (
              <p> </p>
            )}
            {/* <button onClick={handleReset} className="btn btn-secondary"></button> */}
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </div>
        );
      case 'categories':
        return <Categories />;
      case 'about':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="justify-content-between">
        <Container>
          <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => setActiveTab('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setActiveTab('categories')}>Categories</Nav.Link>
            <Nav.Link onClick={() => setActiveTab('about')}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <div className="text-center">{renderTabContent()}</div>
      </Container>

      <footer className=" text-center">
        <p>Your Footer Content</p>
      </footer>
    </div>
  );
}
export default App;














