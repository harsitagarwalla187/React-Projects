let date = new Date();
let year = date.getFullYear();

function Footer() {
     return (
          <footer>
               <p>CopyrightÂ©{year}</p>
          </footer>
     );
}

export default Footer;