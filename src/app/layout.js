export const metadata = {
    title: 'Thrive Dental Malaysia',
    description: "THRIVE DENTAL, located in Damansara Intan, was established to provide healthy and beautiful smiles for all ages and abilities. Located on the ground floor with a dedicated drop-off area and spacious walkways, we are committed to providing accessible care for our rapidly growing ageing population. We provide high-quality, personalized dentistry in our state-of-the-art facility to give you the smile you've always wanted."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};


