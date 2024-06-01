import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="text-lg">&copy; {new Date().getFullYear()} Brain Tumour Detection System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
